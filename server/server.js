const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const mongoose = require('mongoose');
const Message = require('./models/Message');
const path = require('path');
require('dotenv').config();

const app = express();
const server = http.createServer(app);
const io = socketIO(server, {
  cors: { origin: "*" }
});

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('✅ MongoDB connected'))
  .catch(err => console.error('❌ MongoDB error:', err));

// Serve frontend static files
app.use(express.static(path.join(__dirname, '../client')));

// Route to serve index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/index.html'));
});

// Socket.IO
io.on('connection', socket => {
  console.log('🔌 User connected:', socket.id);

  // Send existing messages
  Message.find().then(messages => {
    socket.emit('loadMessages', messages);
  });

  // Receive new message
  socket.on('chatMessage', async msg => {
    const message = new Message({ user: msg.user, text: msg.text });
    await message.save();
    io.emit('chatMessage', message);
  });

  socket.on('disconnect', () => {
    console.log('❌ User disconnected:', socket.id);
  });
});

// Dynamic port for Render, fallback to 3000
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

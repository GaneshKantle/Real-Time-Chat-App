# 💬 Real-Time Chat App

Welcome to the Real-Time Chat App!  
This is a simple yet powerful full-stack web application that lets users send and receive messages in real-time using **Socket.IO** and stores them persistently in **MongoDB**.

It's built with ❤️ using Node.js, Express, Socket.IO, MongoDB (with Mongoose), and vanilla JavaScript on the frontend.

---

## 🚀 Overview

The idea is pretty straightforward:

- You open the app, type a message, hit send.
- Everyone else on the app sees your message instantly.
- Behind the scenes, your message is saved in MongoDB so it’s not lost even if you refresh.

No logins, no passwords — just an open, real-time group chat.

---

## 🧠 How It Works (Behind the Scenes)

Here’s the flow (simplified):

1. When someone opens the app, the browser connects to the backend via **WebSocket** using Socket.IO.
2. The backend instantly sends back all the old messages from MongoDB so the chat isn't empty.
3. When someone types and sends a message:
   - It gets emitted to the server (`chatMessage` event).
   - The server saves it to MongoDB.
   - Then, it emits the new message to **everyone** in the chat room — instantly.
4. If a new user joins, they see the full chat history thanks to the database.

---
## Directory structure:
```
└── ganeshkantle-real-time-chat-app/
    ├── README.md
    ├── client/
    │   ├── index.html
    │   ├── script.js
    │   └── style.css
    └── server/
        ├── package-lock.json
        ├── package.json
        ├── server.js
        └── models/
            └── Message.js
```
---

## 🛠️ Technologies Used

**Frontend**  
- HTML, CSS, JavaScript  
- Socket.IO client

**Backend**  
- Node.js, Express  
- Socket.IO server  
- MongoDB with Mongoose

**Deployment**  
- Backend on [Render](https://render.com)  
- Frontend on [Vercel](https://vercel.com) *(or local for now)*

---

## ⚙️ Setup Instructions

> This is how you run it locally on your machine:

### 1. **Clone the repo**

```bash
git clone https://github.com/GaneshKantle/Real-Time-Chat-App.git
cd Real-Time-Chat-App
```

### 2. **Install backend dependencies**

```bash
cd server
npm install
```

### 3. **Add your MongoDB URI**
#### Create a .env file inside the server/ folder:
```bash
MONGO_URI=your_mongodb_atlas_connection_string
PORT=3000
```

## 4. Start the server
```bash
node server.js
```

### 5. **Open the client**
#### In your browser, go to:
```bash
http://localhost:3000
```
#### You're all set! ✅

### 🌐 Deployment Notes
- The backend is deployed to Render, which handles the Socket.IO and MongoDB interaction.
- The frontend can be deployed to Vercel or served statically from the backend using Express.
- Make sure to update the Socket.IO client URL in script.js when deploying.
```bash
const socket = io('https://your-backend.onrender.com'); // not localhost in production
```

### 🐞 Known Limitations
- No user authentication (everyone is "anonymous")
- No private chats or rooms (yet!)
- No message timestamps or delete option (just basics for now)
- Want to build on this? Fork it, clone it, remix it!

## 🛡️ Security
- **Note**: .env is added to .gitignore to prevent token exposure.
- Never commit .env or personal tokens publicly.

## Contributing
If you'd like to contribute, please fork the repository and submit a pull request. All contributions are welcome!

## Contact
For any queries, feel free to reach out:
- **Email:** ganeshkantle@gmail.com
- **My Portfolio:** (https://ganesh-portfolio-dusky.vercel.app/)
  

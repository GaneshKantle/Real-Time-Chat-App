const socket = io('http://localhost:27017');

const messageBox = document.getElementById('messages');
const usernameInput = document.getElementById('username');
const messageInput = document.getElementById('message');

socket.on('loadMessages', messages => {
  messages.forEach(msg => appendMessage(msg));
});

socket.on('chatMessage', msg => {
  appendMessage(msg);
});

function sendMessage() {
  const text = messageInput.value.trim();
  const user = usernameInput.value.trim() || "Anonymous";
  if (text) {
    socket.emit('chatMessage', { user, text });
    messageInput.value = '';
  }
}

function appendMessage({ user, text, timestamp }) {
  const div = document.createElement('div');
  div.textContent = `[${new Date(timestamp).toLocaleTimeString()}] ${user}: ${text}`;
  messageBox.appendChild(div);
}

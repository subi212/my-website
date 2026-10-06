// Find the button and the message area on the page
const button = document.getElementById("greet-btn");
const greeting = document.getElementById("greeting");

// When the button is clicked, show a message based on the time of day
button.addEventListener("click", () => {
  const hour = new Date().getHours();
  let message = "Good evening!";
  if (hour < 12) message = "Good morning!";
  else if (hour < 18) message = "Good afternoon!";
  greeting.textContent = message + " Thanks for visiting.";
});
// Chat widget
const chatToggle = document.getElementById("chat-toggle");
const chatBox = document.getElementById("chat-box");
const chatClose = document.getElementById("chat-close");
const chatMessages = document.getElementById("chat-messages");
const chatText = document.getElementById("chat-text");
const chatSend = document.getElementById("chat-send");

// Open and close the chat window
chatToggle.addEventListener("click", () => {
  chatBox.hidden = !chatBox.hidden;
  if (!chatBox.hidden) chatText.focus();
});
chatClose.addEventListener("click", () => { chatBox.hidden = true; });

// Add one message bubble to the chat
function addMessage(text, who) {
  const div = document.createElement("div");
  div.className = "msg " + who;
  div.textContent = text;
  chatMessages.appendChild(div);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Decide what the bot says back
function getReply(text) {
  const t = text.toLowerCase();
  if (t.includes("help")) return "Try asking about: projects, contact, or hello.";
  if (t.includes("project")) return "Check the Projects section on this page.";
  if (t.includes("contact") || t.includes("call")) return "Use the Call us button at the top, or the Contact section.";
  if (t.includes("hi") || t.includes("hello")) return "Hello! How can I help?";
  return "Sorry, I don't understand yet. Type \"help\" to see what I can answer.";
}

// Send a message
function sendMessage() {
  const text = chatText.value.trim();
  if (!text) return;
  addMessage(text, "user");
  chatText.value = "";
  setTimeout(() => addMessage(getReply(text), "bot"), 500);
}

chatSend.addEventListener("click", sendMessage);
chatText.addEventListener("keydown", (e) => {
  if (e.key === "Enter") sendMessage();
});
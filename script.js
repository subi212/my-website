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

/** @format */

document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("toggle-btn");
  const card = document.getElementById("card");
  const content = document.getElementById("content");
  const message = document.getElementById("message");
  const dismissBtn = document.getElementById("dismiss");

  button.addEventListener("click", () => {
    card.classList.remove("hidden");
    content.classList.add("hidden");
    message.classList.remove("hidden");
  });

  dismissBtn.addEventListener("click", () => {
    card.classList.add("hidden");
    content.classList.remove("hidden");
  });
});

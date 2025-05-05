/** @format */

document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("toggle-btn");
  const card = document.getElementById("card");
  const content = document.getElementById("content");
  const message = document.getElementById("message");
  const dismissBtn = document.getElementById("dismiss");

  const form = document.getElementById("email-form");
  const emailInput = document.getElementById("email");
  const messageError = document.getElementById("email-error");

  button.addEventListener("click", (e) => {
    e.preventDefault();

    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const emailValue = emailInput.value.trim();

    if (!regex.test(emailValue)) {
      messageError.style.display = "block";
      emailInput.classList.add("border-red-400");
      emailInput.classList.remove("border-gray-200");
    } else {
      messageError.style.display = "none";
      emailInput.classList.remove("border-red-400");
      emailInput.classList.add("border-gray-200");

      emailInput.value = "";

      card.classList.remove("hidden");
      content.classList.add("hidden");
      message.classList.remove("hidden");
    }
  });

  dismissBtn.addEventListener("click", () => {
    card.classList.add("hidden");
    content.classList.remove("hidden");
  });
});

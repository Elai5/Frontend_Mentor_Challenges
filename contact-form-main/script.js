/** @format */

document.addEventListener("DOMContentLoaded", () => {
  const fnameError = document.getElementById("fname");
  const lname = document.getElementById("lname");
  const emailInput = document.getElementById("email");
  const textMessage = document.getElementById("message");

  const form = document.getElementById("contact-form");
  const messageError = document.getElementById("email-error");
  const button = document.getElementById("submit");

  button.addEventListener("click", (e) => {
    e.preventDefault();

    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const emailValue = emailInput.value.trim();

    if (!regex.test(emailValue)) {
      messageError.style.display = "block";
      emailInput.classList.add("border-red-400");
      emailInput.classList.remove("border-[hsl(186,15%,59%)]");
    } else {
      messageError.style.display = "none";
      emailInput.classList.remove("border-red-400");
      emailInput.classList.add("border-[hsl(186,15%,59%)]");

      emailInput.value = "";
    }
  });
});

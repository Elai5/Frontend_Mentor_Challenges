/** @format */

document.addEventListener("DOMContentLoaded", () => {
  const emailInput = document.getElementById("email");
  const fnameInput = document.getElementById("fname");
  const lnameInput = document.getElementById("lname");
  const checkInput = document.getElementById("check");
  const radioInput = document.getElementsByName("query");
  const messageInput = document.getElementById("message");

  const emailError = document.getElementById("email-error");
  const fnameError = document.getElementById("fname-error");
  const lnameError = document.getElementById("lname-error");
  const checkError = document.getElementById("check-error");
  const radioError = document.getElementById("query-error");
  const messageFieldError = document.getElementById("message-error");

  const button = document.getElementById("submit");
  let toastMessage = document.getElementById("container");
  const form = document.getElementById("contact-form");

  button.addEventListener("click", (e) => {
    e.preventDefault();
    let isValid = true;

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const emailValue = emailInput.value.trim();
    if (!regex.test(emailValue)) {
      emailError.style.display = "block";
      emailInput.classList.add("border-red-400");
      isValid = false;
    } else {
      emailError.style.display = "none";
      emailInput.classList.remove("border-red-400");
    }

    if (fnameInput.value.trim() === "") {
      fnameError.style.display = "block";
      fnameInput.classList.add("border-red-400");
      isValid = false;
    } else {
      fnameError.style.display = "none";
      fnameInput.classList.remove("border-red-400");
    }

    if (lnameInput.value.trim() === "") {
      lnameError.style.display = "block";
      lnameInput.classList.add("border-red-400");
      isValid = false;
    } else {
      lnameError.style.display = "none";
      lnameInput.classList.remove("border-red-400");
    }

    if (messageInput.value.trim() === "") {
      messageFieldError.style.display = "block";
      messageInput.classList.add("border-red-400");
      isValid = false;
    } else {
      messageFieldError.style.display = "none";
      messageInput.classList.remove("border-red-400");
    }
    if (!checkInput.checked) {
      checkError.style.display = "block";
      isValid = false;
    } else {
      checkError.style.display = "none";
    }
    toastMessage.classList.remove("hidden");

    let selected = false;
    radioInput.forEach((radio) => {
      if (radio.checked) selected = true;
    });

    if (!selected) {
      radioError.style.display = "block";
      isValid = false;
    } else {
      radioError.style.display = "none";
    }

    form.reset();
  });

  // $(document).ready(function () {
  //   $("#submit").click(function (e) {
  //     e.preventDefault();
  //     $("contacts-form")[0].reset();
  //   });
  // });
});
toastMessage.addEventListener("click", (e) => {
  e.preventDefault();
  toastMessage.classList.add("hidden");
});

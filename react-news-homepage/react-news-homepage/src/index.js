/** @format */

document.addEventListener("DOMContentLoaded", () => {
  const openBtn = document.getElementById("openIcon");
  const closeBtn = document.getElementById("closeIcon");
  const mobileNav = document.getElementById("mobileNav");

  if (openBtn && closeBtn && mobileNav) {
    openBtn.addEventListener("click", () => {
      mobileNav.classList.remove("hidden");
    });

    closeBtn.addEventListener("click", () => {
      mobileNav.classList.add("hidden");
    });
  }
});

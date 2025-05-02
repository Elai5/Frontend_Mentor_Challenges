/** @format */

const swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 20,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

function updateMiddleSlide() {
  const slides = document.querySelectorAll(".swiper-slide");
  slides.forEach((slide) => slide.classList.remove("show-text"));

  const middleIndex = Math.floor(swiper.slidesPerViewDynamic() / 2);
  const activeSlides = swiper.slides.filter((slide) =>
    slide.classList.contains("swiper-slide-visible")
  );

  if (activeSlides[middleIndex]) {
    activeSlides[middleIndex].classList.add("show-text");
  }
}

swiper.on("slideChangeTransitionEnd", updateMiddleSlide);
swiper.on("init", updateMiddleSlide);
swiper.init(); 

document.addEventListener("DOMContentLoaded", () => {
  const openBtn = document.getElementById("open");
  const closeBtn = document.getElementById("close");
  const menu = document.getElementById("menu");

  openBtn.addEventListener("click", () => {
    menu.classList.remove("hidden");
    openBtn.style.display = "none";
    closeBtn.style.display = "inline";
  });

  closeBtn.addEventListener("click", () => {
    menu.classList.add("hidden");
    closeBtn.style.display = "none";
    openBtn.style.display = "inline";
  });

  closeBtn.style.display = "none";
});

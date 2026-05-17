const slider = document.getElementById("slider");

let currentSlide = 0;

const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

function moveSlide(direction) {

  const sliderWrapper =
    document.querySelector(".slider-wrapper");

  const boxes =
    document.querySelectorAll(".box");

  const boxWidth =
    boxes[0].offsetWidth +
    parseInt(getComputedStyle(slider).gap);

  currentSlide += direction;

  const maxSlide =
    Math.ceil(
      (slider.scrollWidth - sliderWrapper.offsetWidth)
      / boxWidth
    );

  if (currentSlide < 0) {
    currentSlide = 0;
  }

  if (currentSlide > maxSlide) {
    currentSlide = maxSlide;
  }

  slider.style.transform =
    `translateX(-${currentSlide * boxWidth}px)`;
}

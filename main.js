let slides = document.querySelectorAll(".slide");
let index = 0;

function showSlide(i) {
  slides.forEach(s => s.style.display = "none");
  slides[i].style.display = "block";
}

showSlide(index);

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") {
    index = Math.min(index + 1, slides.length - 1);
    showSlide(index);
  }
  if (e.key === "ArrowLeft") {
    index = Math.max(index - 1, 0);
    showSlide(index);
  }
});
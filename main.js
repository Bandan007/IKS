function scaleSlides() {
    const baseWidth = 1280;
    const baseHeight = 720;

    const scaleX = window.innerWidth / baseWidth;
    const scaleY = window.innerHeight / baseHeight;

    const scale = Math.min(scaleX, scaleY); // keep aspect ratio

    document.querySelectorAll(".size0, .size, .size2, .size3").forEach(slide => {
        slide.style.transform = `scale(${scale})`;
        slide.style.transformOrigin = "top left";
    });
}

window.addEventListener("resize", scaleSlides);
window.addEventListener("load", scaleSlides);

//[let slides = document.querySelectorAll(".slide");
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
});]
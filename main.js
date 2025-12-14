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


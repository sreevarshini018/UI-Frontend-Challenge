
// LIGHTBOX
function openLightbox(src) {
  document.getElementById("lightbox").style.display = "flex";  //script.js
  document.getElementById("lightbox-img").src = src;
}

function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}

// DARK MODE
const toggleBtn = document.getElementById("theme-toggle");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  toggleBtn.textContent =
    document.body.classList.contains("dark") ? "☀" : "🌙";
});

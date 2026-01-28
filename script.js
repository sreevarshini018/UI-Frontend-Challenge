// ==========================
// LIGHTBOX (CERTIFICATES)
// ==========================

function openLightbox(src) {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");

  lightbox.style.display = "flex";
  lightboxImg.src = src;
}

function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}


// ==========================
// DARK MODE TOGGLE
// ==========================

const toggleBtn = document.getElementById("theme-toggle");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  // Change icon
  if (document.body.classList.contains("dark")) {
    toggleBtn.textContent = "☀";
  } else {
    toggleBtn.textContent = "🌙";
  }
});


// ==========================
// SCROLL REVEAL ANIMATION
// ==========================

const revealElements = document.querySelectorAll(".reveal");

function revealOnScroll() {

  revealElements.forEach(element => {

    const windowHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;
    const revealPoint = 100;

    if (elementTop < windowHeight - revealPoint) {
      element.classList.add("active");
    }

  });

}

// Run on scroll
window.addEventListener("scroll", revealOnScroll);

// Run once on load
revealOnScroll();

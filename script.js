// DOM element references
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");
const authButtons = document.getElementById("authButtons");

// Toggle function
function toggleMenu() {
  navLinks.classList.toggle("active");
  authButtons.classList.toggle("active");

  // Update ARIA attribute
  const isExpanded = hamburger.getAttribute("aria-expanded") === "true";
  hamburger.setAttribute("aria-expanded", !isExpanded);
}

// Close menu function
function closeMenu() {
  navLinks.classList.remove("active");
  authButtons.classList.remove("active");
  hamburger.setAttribute("aria-expanded", "false");
}

// Event: Toggle menu on hamburger click
hamburger.addEventListener("click", toggleMenu);

// Event: Close menu on outside click
document.addEventListener("click", (event) => {
  const isClickInside = hamburger.contains(event.target) ||
                        navLinks.contains(event.target) ||
                        authButtons.contains(event.target);

  if (!isClickInside) {
    closeMenu();
  }
});

// Event: Close menu on Escape key
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeMenu();
  }
});

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");
const prayerForm = document.getElementById("prayerForm");
const formMessage = document.getElementById("formMessage");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

prayerForm.addEventListener("submit", (e) => {
  e.preventDefault();
  formMessage.textContent = "Your prayer request has been received.";
  prayerForm.reset();
});
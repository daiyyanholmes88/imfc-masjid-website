Javascript
// Smooth scroll when clicking navbar links
const navLinks = document.querySelectorAll('.nav-links a');

navLinks.forEach(link => {
  link.addEventListener('click', event => {
    const href = link.getAttribute('href'); // e.g. "#about"
    if (href.startsWith('#')) {
      event.preventDefault();
      const section = document.querySelector(href);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });
});

// Set the footer year automatically
const yearSpan = document.getElementById('year');
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}



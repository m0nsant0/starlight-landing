document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
  });
});
const prompt = document.querySelector('.scroll-prompt');
window.addEventListener('scroll', () => {
  if (window.scrollY > 100) prompt.style.opacity = '0';
});

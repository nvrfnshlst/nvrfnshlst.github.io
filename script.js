
document.addEventListener('DOMContentLoaded', function () {
  const toggleButton = document.getElementById('toggle-theme');
  toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
  });

  const sections = document.querySelectorAll('section');
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        entry.target.classList.toggle('visible', entry.isIntersecting);
      });
    },
    { threshold: 0.1 }
  );

  sections.forEach(section => {
    observer.observe(section);
    section.classList.add('scroll-fade');
  });
});

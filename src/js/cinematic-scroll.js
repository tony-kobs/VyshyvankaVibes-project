const sections = document.querySelectorAll('section');

sections.forEach(section => {
  section.classList.add('reveal');
});

const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.15,
  }
);

document.querySelectorAll('.reveal').forEach(el => {
  observer.observe(el);
});

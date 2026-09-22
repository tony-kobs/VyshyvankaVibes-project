const sections = document.querySelectorAll('section:not(.hero-section)');
const prefersReducedMotion = window.matchMedia(
  '(prefers-reduced-motion: reduce)'
).matches;

const showSections = () => {
  sections.forEach(section => {
    section.classList.add('reveal', 'visible');
  });
};

if (prefersReducedMotion || !('IntersectionObserver' in window)) {
  showSections();
} else {
  sections.forEach(section => {
    section.classList.add('reveal');
  });

  const observer = new IntersectionObserver(
    (entries, sectionObserver) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          sectionObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15,
    }
  );

  sections.forEach(section => observer.observe(section));
}

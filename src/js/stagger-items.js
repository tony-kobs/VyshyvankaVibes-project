const collectionSection = document.querySelector('#collection');
const galleryItems = document.querySelectorAll('.gallery-items');
const prefersReducedMotion = window.matchMedia(
  '(prefers-reduced-motion: reduce)'
).matches;

if (collectionSection && galleryItems.length) {
  const showItems = () => {
    galleryItems.forEach((item, index) => {
      item.style.transitionDelay = prefersReducedMotion
        ? '0ms'
        : `${index * 160}ms`;
      item.classList.add('visible');
    });
  };

  if (prefersReducedMotion || !('IntersectionObserver' in window)) {
    showItems();
  } else {
    const observer = new IntersectionObserver(
      (entries, galleryObserver) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            showItems();
            galleryObserver.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
      }
    );

    observer.observe(collectionSection);
  }
}

const collectionSection = document.querySelector('#collection');
const galleryItems = document.querySelectorAll('.gallery-items');

const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        galleryItems.forEach((item, index) => {
          item.style.transitionDelay = `${index * 160}ms`;
          item.classList.add('visible');
        });

        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.2,
  }
);

observer.observe(collectionSection);

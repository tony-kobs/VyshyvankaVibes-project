function startUniversalRotators() {
  const rotators = document.querySelectorAll('.image-rotator, .bg-rotator');

  rotators.forEach(rotator => {
    const items = rotator.querySelectorAll(
      '.rotator-img, .rotator-picture, .bg-layer'
    );
    let index = 0;

    items.forEach(i => i.classList.remove('active'));
    items[0].classList.add('active');

    if (window.innerWidth >= 1280) {
      const intervalId = setInterval(() => {
        items[index].classList.remove('active');
        index = (index + 1) % items.length;
        items[index].classList.add('active');
      }, 4000);

      window.addEventListener('resize', () => {
        if (window.innerWidth < 1280) {
          clearInterval(intervalId);
          items.forEach(i => i.classList.remove('active'));
          items[0].classList.add('active');
        }
      });
    }
  });
}

window.addEventListener('DOMContentLoaded', startUniversalRotators);

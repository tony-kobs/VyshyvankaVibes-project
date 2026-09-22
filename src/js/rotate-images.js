function startUniversalRotators() {
  const rotators = document.querySelectorAll('.image-rotator, .bg-rotator');
  const desktopQuery = window.matchMedia('(min-width: 1280px)');

  rotators.forEach(rotator => {
    const items = rotator.querySelectorAll(
      '.rotator-img, .rotator-picture, .bg-layer'
    );

    if (items.length < 2) {
      return;
    }

    let index = 0;
    let intervalId = null;

    const show = nextIndex => {
      items.forEach(item => item.classList.remove('active'));
      items[nextIndex].classList.add('active');
    };

    show(0);

    const start = () => {
      if (intervalId !== null) {
        return;
      }

      intervalId = window.setInterval(() => {
        index = (index + 1) % items.length;
        show(index);
      }, 4000);
    };

    const stop = () => {
      if (intervalId === null) {
        return;
      }

      window.clearInterval(intervalId);
      intervalId = null;
      index = 0;
      show(0);
    };

    const sync = () => {
      if (desktopQuery.matches) {
        start();
      } else {
        stop();
      }
    };

    sync();

    if (typeof desktopQuery.addEventListener === 'function') {
      desktopQuery.addEventListener('change', sync);
    } else {
      desktopQuery.addListener(sync);
    }
  });
}

startUniversalRotators();

function startUniversalRotators() {
  // Всі контейнери
  const rotators = document.querySelectorAll('.image-rotator, .bg-rotator');

  rotators.forEach(rotator => {
    // Вибираємо всі картинки, picture та background layers
    const items = rotator.querySelectorAll(
      '.rotator-img, .rotator-picture, .bg-layer'
    );
    let index = 0;

    // Початково активна перша картинка
    items.forEach(i => i.classList.remove('active'));
    items[0].classList.add('active');

    // Запускаємо тільки на великих екранах
    if (window.innerWidth >= 1280) {
      const intervalId = setInterval(() => {
        items[index].classList.remove('active');
        index = (index + 1) % items.length;
        items[index].classList.add('active');
      }, 4000); // 4 секунди між змінами

      // Зупинка при ресайзі на менші екрани
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

function startImageRotators() {
  const rotators = document.querySelectorAll('.image-rotator');

  rotators.forEach(rotator => {
    const images = rotator.querySelectorAll('.rotator-img');
    let index = 0;

    // Спочатку показуємо першу картинку
    images.forEach(img => img.classList.remove('active'));
    images[0].classList.add('active');

    // Функція для зміни картинки
    function runRotation() {
      // ховаємо поточну
      images[index].classList.remove('active');

      // новий індекс
      index = (index + 1) % images.length;

      // показуємо наступну
      images[index].classList.add('active');
    }

    // Запуск тільки на великих екранах
    if (window.innerWidth >= 1280) {
      const intervalId = setInterval(runRotation, 4000);

      // Зупинка таймера при зменшенні екрана
      window.addEventListener('resize', () => {
        if (window.innerWidth < 1280) {
          clearInterval(intervalId);
          images.forEach(img => img.classList.remove('active'));
          images[0].classList.add('active');
        }
      });
    }
  });
}

window.addEventListener('DOMContentLoaded', startImageRotators);

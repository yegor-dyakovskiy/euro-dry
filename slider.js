document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".slider-container__foto"); // Получаем все картинки
  const leftButton = document.querySelector(".slider-container__button-left");
  const rightButton = document.querySelector(".slider-container__button-right");
  let currentIndex = 0; // Индекс текущего изображения
  let displayCount = 3; // Количество отображаемых изображений
  const mobileSize = 475;
  const tabletSize = 700;
  //const slideInterval = 3000; // Интервал переключения в миллисекундах

  // Функция для обновления отображаемых изображений
  function updateSlider() {
    // Скрываем все изображения
    images.forEach((img) => {
      img.style.display = "none";
    });

    // Отображаем нужное количество изображений
    for (let i = 0; i < displayCount; i++) {
      const index = currentIndex + i; // Циклический индекс
      images[index].style.display = "block"; // Показываем изображение
    }
  }

  // Функция для обновления количества отображаемых изображений в зависимости от ширины экрана
  function updateDisplayCount() {
    const screenWidth = window.innerWidth;
    if (screenWidth <= mobileSize) {
      displayCount = 1; // 1 изображение для экранов до 475px
      console.log("1");
    } else if (screenWidth <= tabletSize) {
      displayCount = 2; // 2 изображения для экранов до 700px
      console.log("2");
    } else {
      displayCount = 3; // 3 изображения для экранов больше 700px
      console.log("3");
    }
    updateSlider(); // Обновляем слайдер после изменения количества отображаемых изображений
  }

  leftButton.addEventListener("click", () => {
    currentIndex = (currentIndex + images.length - 3) % (images.length - 2); // Уменьшаем индекс, циклически
    updateSlider();
  });

  rightButton.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % (images.length - 2); // Увеличиваем индекс, циклически
    updateSlider();
  });

  updateDisplayCount(); // Инициализируем количество отображаемых изображений
  window.addEventListener("resize", updateDisplayCount); // Обновляем при изменении размера окна
});

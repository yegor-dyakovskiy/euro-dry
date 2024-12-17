/* document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.gallery__photos-photo'); // Получаем все картинки
    const leftButton = document.querySelector('.gallery__buttons_left');
    const rightButton = document.querySelector('.gallery__buttons_right');
    let currentIndex = 0; // Индекс текущего изображения
    let displayCount = 3; // Количество отображаемых изображений
    const mobileSize = 475;
    const tabletSize = 700;
    //const slideInterval = 3000; // Интервал переключения в миллисекундах
    //console.log(images);
    // Функция для обновления отображаемых изображений
    function updateSlider() {
        // Скрываем все изображения
        images.forEach((img) => {
            img.style.display = 'none';
            console.log(img.style.display);
            // console.log(img);
        });

        // Отображаем нужное количество изображений
        for (let i = 0; i < displayCount; i++) {
            const index = currentIndex + i; // Циклический индекс
            images[index].style.display = 'block'; // Показываем изображение
        }
    }

    // Функция для обновления количества отображаемых изображений в зависимости от ширины экрана
    function updateDisplayCount() {
        const screenWidth = window.innerWidth;
        if (screenWidth <= mobileSize) {
            displayCount = 1; // 1 изображение для экранов до 475px
            console.log('1');
        } else if (screenWidth <= tabletSize) {
            displayCount = 2; // 2 изображения для экранов до 700px
            console.log('2');
        } else {
            displayCount = 3; // 3 изображения для экранов больше 700px
            console.log('3');
        }
        updateSlider(); // Обновляем слайдер после изменения количества отображаемых изображений
    }

    leftButton.addEventListener('click', () => {
        currentIndex = (currentIndex + images.length - 3) % (images.length - 2); // Уменьшаем индекс, циклически
        updateSlider();
    });

    rightButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % (images.length - 2); // Увеличиваем индекс, циклически
        updateSlider();
    });

    updateDisplayCount(); // Инициализируем количество отображаемых изображений
    window.addEventListener('resize', updateDisplayCount); // Обновляем при изменении размера окна
});
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.slider-1-row'); // Получаем все картинки
    const leftButton = document.querySelector('.service__buttons_1row-left');
    const rightButton = document.querySelector('.service__buttons_1row-right');
    let currentIndex = 0; // Индекс текущего изображения
    let displayCount = 3; // Количество отображаемых изображений
    const mobileSize = 619;
    const tabletSize = 700;
    //const slideInterval = 3000; // Интервал переключения в миллисекундах
    console.log(images);
    // Функция для обновления отображаемых изображений
    function updateSlider() {
        // Скрываем все изображения
        images.forEach((img) => {
            img.style.display = 'none';
            //console.log(img.style.display);
            //  console.log(img);
        });

        // Отображаем нужное количество изображений
        for (let i = 0; i < displayCount; i++) {
            const index = currentIndex + (i % images.length); // Циклический индекс
            images[index].style.display = 'flex'; // Показываем изображение
        }
    }

    // Функция для обновления количества отображаемых изображений в зависимости от ширины экрана
    function updateDisplayCount() {
        const screenWidth = window.innerWidth;
        if (screenWidth <= mobileSize) {
            displayCount = 1; // 1 изображение для экранов до 475px
            console.log('1');
        } else if (screenWidth <= tabletSize) {
            displayCount = 2; // 2 изображения для экранов до 700px
            console.log('2');
        } else {
            displayCount = 3; // 3 изображения для экранов больше 700px
            console.log('3');
        }
        updateSlider(); // Обновляем слайдер после изменения количества отображаемых изображений
    }
    // Клик по кнопке "влево"
    leftButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length; // Уменьшаем индекс циклически
        updateSlider();
    });

    // Клик по кнопке "вправо"
    rightButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % images.length; // Увеличиваем индекс циклически
        updateSlider();
    });

    updateDisplayCount(); // Инициализируем количество отображаемых изображений
    window.addEventListener('resize', updateDisplayCount); // Обновляем при изменении размера окна
});

document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.slider-2-row'); // Получаем все картинки
    const leftButton = document.querySelector('.service__buttons_2row-left');
    const rightButton = document.querySelector('.service__buttons_2row-right');
    let currentIndex = 0; // Индекс текущего изображения
    let displayCount = 3; // Количество отображаемых изображений
    const mobileSize = 619;
    const tabletSize = 700;
    //const slideInterval = 3000; // Интервал переключения в миллисекундах
    console.log(images);
    // Функция для обновления отображаемых изображений
    function updateSlider() {
        // Скрываем все изображения
        images.forEach((img) => {
            img.style.display = 'none';
            //console.log(img.style.display);
            //  console.log(img);
        });

        // Отображаем нужное количество изображений
        for (let i = 0; i < displayCount; i++) {
            const index = currentIndex + (i % images.length); // Циклический индекс
            images[index].style.display = 'flex'; // Показываем изображение
        }
    }

    // Функция для обновления количества отображаемых изображений в зависимости от ширины экрана
    function updateDisplayCount() {
        const screenWidth = window.innerWidth;
        if (screenWidth <= mobileSize) {
            displayCount = 1; // 1 изображение для экранов до 475px
            console.log('1');
        } else if (screenWidth <= tabletSize) {
            displayCount = 2; // 2 изображения для экранов до 700px
            console.log('2');
        } else {
            displayCount = 3; // 3 изображения для экранов больше 700px
            console.log('3');
        }
        updateSlider(); // Обновляем слайдер после изменения количества отображаемых изображений
    }
    // Клик по кнопке "влево"
    leftButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length; // Уменьшаем индекс циклически
        updateSlider();
    });

    // Клик по кнопке "вправо"
    rightButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % images.length; // Увеличиваем индекс циклически
        updateSlider();
    });

    updateDisplayCount(); // Инициализируем количество отображаемых изображений
    window.addEventListener('resize', updateDisplayCount); // Обновляем при изменении размера окна
});

document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.slider-3-row'); // Получаем все картинки
    const leftButton = document.querySelector('.service__buttons_3row-left');
    const rightButton = document.querySelector('.service__buttons_3row-right');
    let currentIndex = 0; // Индекс текущего изображения
    let displayCount = 3; // Количество отображаемых изображений
    const mobileSize = 619;
    const tabletSize = 700;
    //const slideInterval = 3000; // Интервал переключения в миллисекундах
    console.log(images);
    // Функция для обновления отображаемых изображений
    function updateSlider() {
        // Скрываем все изображения
        images.forEach((img) => {
            img.style.display = 'none';
            //console.log(img.style.display);
            //  console.log(img);
        });

        // Отображаем нужное количество изображений
        for (let i = 0; i < displayCount; i++) {
            const index = currentIndex + (i % images.length); // Циклический индекс
            images[index].style.display = 'flex'; // Показываем изображение
        }
    }

    // Функция для обновления количества отображаемых изображений в зависимости от ширины экрана
    function updateDisplayCount() {
        const screenWidth = window.innerWidth;
        if (screenWidth <= mobileSize) {
            displayCount = 1; // 1 изображение для экранов до 475px
            console.log('1');
        } else if (screenWidth <= tabletSize) {
            displayCount = 2; // 2 изображения для экранов до 700px
            console.log('2');
        } else {
            displayCount = 3; // 3 изображения для экранов больше 700px
            console.log('3');
        }
        updateSlider(); // Обновляем слайдер после изменения количества отображаемых изображений
    }
    // Клик по кнопке "влево"
    leftButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length; // Уменьшаем индекс циклически
        updateSlider();
    });

    // Клик по кнопке "вправо"
    rightButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % images.length; // Увеличиваем индекс циклически
        updateSlider();
    });

    updateDisplayCount(); // Инициализируем количество отображаемых изображений
    window.addEventListener('resize', updateDisplayCount); // Обновляем при изменении размера окна
});
 */

document.addEventListener('DOMContentLoaded', () => {
    // Универсальная функция для инициализации слайдера
    function initSlider(sliderSelector, leftBtnSelector, rightBtnSelector) {
        const images = document.querySelectorAll(sliderSelector); // Получаем все картинки
        const leftButton = document.querySelector(leftBtnSelector);
        const rightButton = document.querySelector(rightBtnSelector);
        let currentIndex = 0; // Индекс текущего изображения
        let displayCount = 3; // Количество отображаемых изображений
        const mobileSize = sliderSelector === 'gallery__photos-photo' ? 475 : 619;
        const tabletSize = 700;

        // Функция для обновления отображаемых изображений
        function updateSlider() {
            // Скрываем все изображения
            images.forEach((img) => (img.style.display = 'none'));

            // Отображаем нужное количество изображений
            for (let i = 0; i < displayCount; i++) {
                const index = (currentIndex + i) % images.length; // Циклический индекс
                images[index].style.display = 'flex'; // Показываем изображение
            }
        }

        // Функция для обновления количества отображаемых изображений в зависимости от ширины экрана
        function updateDisplayCount() {
            const screenWidth = window.innerWidth;
            displayCount = screenWidth <= mobileSize ? 1 : screenWidth <= tabletSize ? 2 : 3;
            updateSlider();
        }

        // Обработчики кликов
        leftButton.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + images.length) % images.length; // Уменьшаем индекс циклически
            updateSlider();
        });

        rightButton.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % images.length; // Увеличиваем индекс циклически
            updateSlider();
        });

        // Инициализация слайдера
        updateDisplayCount();
        window.addEventListener('resize', updateDisplayCount);
    }

    // Инициализация всех слайдеров
    //  initSlider('.gallery__photos-photo', '.gallery__buttons_left', '.gallery__buttons_right');
    initSlider('.slider-1-row', '.service__buttons_1row-left', '.service__buttons_1row-right');
    initSlider('.slider-2-row', '.service__buttons_2row-left', '.service__buttons_2row-right');
    initSlider('.slider-3-row', '.service__buttons_3row-left', '.service__buttons_3row-right');
});

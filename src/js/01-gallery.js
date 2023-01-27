//! Завдання 1 - бібліотека SimpleLightbox
//todo Виконуй це завдання у файлах 01-gallery.html і 01-gallery.js.
//todo Розбий його на декілька підзавдань:

//todo 1) Додай бібліотеку SimpleLightbox як залежність проекту, використовуючи npm
//todo (посилання на CDN з твоєї минулої роботи більше не потрібне).

//todo 2) Використовуй свій JavaScript код з попередньої домашньої роботи,
//todo але виконай рефакторинг з урахуванням того, що бібліотека була встановлена через npm (синтаксис import/export).

// Для того щоб підключити CSS код бібліотеки в проект,
// необхідно додати ще один імпорт,
// крім того, що описаний в документації.

// Описаний в документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

//==========================
const gallery = document.querySelector('.gallery');
const cardMarkup = createCardoxImg(galleryItems);

//* привязуємо до Галлері розмітку
gallery.insertAdjacentHTML('beforeend', cardMarkup);

//* функція для перебору масива і додавання розмітки для кожного елемента
function createCardoxImg(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
    })
    .join('');
}

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

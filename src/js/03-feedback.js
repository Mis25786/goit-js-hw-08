//! Завдання 3 - форма зворотного зв'язку
// HTML містить розмітку форми. Напиши скрипт, який буде зберігати значення полів у локальне сховище, коли користувач щось друкує.

// <form class="feedback-form" autocomplete="off">
//   <label>
//     Email
//     <input type="email" name="email" autofocus />
//   </label>
//   <label>
//     Message
//     <textarea name="message" rows="8"></textarea>
//   </label>
//   <button type="submit">Submit</button>
// </form>

// Виконуй це завдання у файлах 03-feedback.html і 03-feedback.js.
// Розбий його на декілька підзавдань:

//todo 1) Відстежуй на формі подію input, і щоразу записуй у локальне сховище об'єкт з полями email і message,
//todo у яких зберігай поточні значення полів форми. Нехай ключем для сховища буде рядок "feedback-form-state".

//todo 2) Під час завантаження сторінки перевіряй стан сховища, і якщо там є збережені дані,
//todo заповнюй ними поля форми. В іншому випадку поля повинні бути порожніми.

//todo 3) Під час сабміту форми очищуй сховище і поля форми, а також виводь у консоль об'єкт з полями email,
//todo message та їхніми поточними значеннями.

//todo 4) Зроби так, щоб сховище оновлювалось не частіше, ніж раз на 500 мілісекунд.
//todo Для цього додай до проекту і використовуй бібліотеку lodash.throttle.

//*===============================================================
//* додаємо з бібліотеки lodash метод throttle
import throttle from 'lodash.throttle';
//*===============================================================
//* створюємо ключ для локального сховища
const LOCAL_KEY = 'feedback-form-state';
// //*==============================================================
//! =============== погратися ще ==================
// //* доступ до форми/інпута/месенджа
// const form = document.querySelector('.feedback-form');
// const input = document.querySelector('input');
// const textarea = document.querySelector('textarea');

// //* слухачі кнопки та інпутів
// form.addEventListener('submit', onFormSubmit);
// form.addEventListener('input', throttle(onFormInput, 500)); // ставимо час для обновлення рядків

// //* створюємо об'єкт
// // const formData = {};

// auditLocalStorage();

// //* виводимо значення з інпутів та записуємо в локальне сховище
// function onFormInput(e) {
//   // formData[e.target.name] = e.target.value;
//   const formEl = e.currentTarget.elements;
//   // console.dir(formEl);
//   const email = formEl.email.value;
//   // console.log(email);
//   const message = formEl.message.value;
//   // console.log(message);

//   const formData = {
//     email,
//     message,
//   };
//   // console.log(formData);

//   localStorage.setItem(LOCAL_KEY, JSON.stringify(formData));
// }

// //* блокуємо обновлення сторінки та ресетуємо інпути + локальне сховище
// function onFormSubmit(e) {
//   e.preventDefault();

//   localStorage.removeItem(LOCAL_KEY);
//   e.currentTarget.reset();

//   console.log(formData);
// }

// //* провіряємо після перезагрузки вікна чи є щось в локальному сховищі
// function auditLocalStorage() {
//   const dataLocalStorage = JSON.parse(localStorage.getItem(LOCAL_KEY));
//   console.dir(dataLocalStorage.email);

//   if (dataLocalStorage) {
//     email.value = dataLocalStorage.email || '';
//     message.value = dataLocalStorage.message || '';
//   }
// }

//!=================== варіант 2 робочий ==============================
// * доступ до форми
const form = document.querySelector('.feedback-form');
// console.log(form);

// * слухачі кнопки та інпутів
form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onFormInput, 500)); // ставимо час для обновлення рядків

// * провіряємо після перезагрузки вікна чи є щось в локальному сховищі
const dataFromLocalStorage = JSON.parse(localStorage.getItem(LOCAL_KEY));
form.elements.email.value = dataFromLocalStorage?.email || '';
form.elements.message.value = dataFromLocalStorage?.message || '';

// * створюємо об'єкт
const formData = {};
// console.log(formData);

// * блокуємо обновлення сторінки та ресетуємо інпути + локальне сховище
function onFormSubmit(e) {
  e.preventDefault();

  const dataLocal = localStorage.getItem(LOCAL_KEY);
  // console.log(dataLocal);

  const autDataLocalStorage = JSON.parse(dataLocal);

  localStorage.removeItem(LOCAL_KEY);
  e.currentTarget.reset();
  console.log(autDataLocalStorage);
}

// * виводимо значення з інпутів та записуємо в локальне сховище
function onFormInput(e) {
  formData[e.target.name] = e.target.value;

  const dataFromLocalStorage = JSON.parse(localStorage.getItem(LOCAL_KEY));
  localStorage.setItem(
    LOCAL_KEY,
    JSON.stringify({ ...dataFromLocalStorage, [e.target.name]: e.target.value })
  );
}

//!======== варіант 3 робочий ====== По Репеті ====================
// // * створюємо об'єкт
// const formData = {};
// // console.log(formData);

// // * доступ до форми та інпутів
// const refs = {
//   form: document.querySelector('.feedback-form'),
//   textarea: document.querySelector('.feedback-form textarea'),
// };

// // * слухачі кнопки та інпутів
// refs.form.addEventListener('submit', onFormSubmit);
// refs.textarea.addEventListener('input', throttle(onTextareaInput, 500)); // ставимо час для обновлення рядків
// refs.form.addEventListener('input', onTextInput);
// // console.log(refs.form);
// // console.log(refs.textarea);

// populateTexterea();

// function onTextareaInput(e) {
//   const message = e.target.value;

//   localStorage.setItem(STORAGE_KEY, message);
//   // console.log(message);
// }

// // * блокуємо обновлення сторінки та ресетуємо інпути + локальне сховище
// function onFormSubmit(e) {
//   e.preventDefault();

//   const saveFormData = localStorage.getItem(STORAGE_KEY);

//   const parsedFormData = JSON.parse(saveFormData);

//   e.currentTarget.reset();
//   localStorage.removeItem(STORAGE_KEY);
//   // console.log(e.currentTarget);

//   console.log(parsedFormData);
// }

// // * провіряємо після перезагрузки вікна чи є щось в локальному сховищі
// function populateTexterea() {
//   const savedMessage = localStorage.getItem(STORAGE_KEY);
//   if (savedMessage) {
//     refs.textarea.value = savedMessage;
//     console.log(savedMessage);
//   }
// }

// // * виводимо значення з інпутів та записуємо в локальне сховище
// function onTextInput(e) {
//   formData[e.target.name] = e.target.value;
//   // console.log(formData);
//   localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
// }

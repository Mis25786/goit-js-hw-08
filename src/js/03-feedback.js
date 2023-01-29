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

// const refs = {
//   form: document.querySelector('.feedback-form'),
//   textarea: document.querySelector('.feedback-form textarea'),
// };

// refs.form.addEventListener('submit', onFormSubmit);
// refs.textarea.addEventListener('input', onTextareaInput);
// console.log(refs.form);
// console.log(refs.textarea);

const form = document.querySelector('.feedback-form');
const textarea = document.querySelector('.feedback-form textarea');

form.addEventListener('submit', onFormSubmit);
console.log(form);
textarea.addEventListener('input', onTextareaInput);
console.log(textarea);

function onFormSubmit(e) {
  const value = e.currentTarget.textContent;

  console.log(value);
}

function onTextareaInput(e) {
  const value = e.currentTarget.textContent;

  console.log(value);
}

// const a = 5;
// console.log(a);

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
import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';

const formData = {};
// console.log(formData);

const refs = {
  form: document.querySelector('.feedback-form'),
  textarea: document.querySelector('.feedback-form textarea'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.textarea.addEventListener('input', throttle(onTextareaInput, 500));
refs.form.addEventListener('input', onTextInput);
console.log(refs.form);
console.log(refs.textarea);

populateTexterea();

function onTextInput(e) {
  // console.log(e.target.name);
  // console.log(e.target.value);

  formData[e.target.name] = e.target.value;
  // console.log(formData);

  // const {
  //   elements: { email, message },
  // } = e.currentTarget;
  // console.log(email);
  // console.log(message);

  // const object = JSON.stringify(formData);
  // console.log(object);

  // const objectString = JSON.parse(object);
  // console.log(objectString);

  // localStorage.setItem(object);
  // console.log(object);

  // localStorage.getItem();

  // localStorage.removeItem();
}

function onTextareaInput(e) {
  const message = e.target.value;

  localStorage.setItem(STORAGE_KEY, message);
  // console.log(message);
}

function onFormSubmit(e) {
  e.preventDefault();

  e.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
  // console.log(e.currentTarget);
}

function populateTexterea() {
  const savedMessage = localStorage.getItem(STORAGE_KEY);

  if (savedMessage) {
    refs.textarea.value = savedMessage;
    // console.log(savedMessage);
  }
}

//*=========================================
// const form = document.querySelector('.login-form');
// // console.log(form);

// form.addEventListener('submit', onSubmitForm);
// // console.dir(form);

// function onSubmitForm(event) {
//   event.preventDefault();
//   //   console.dir(event.currentTarget);

//   const formEl = event.currentTarget.elements;
//   //   console.log(formEl);

//   //* задається => typ
//   const email = formEl.email.value;
//   //   console.log(email);
//   const password = formEl.password.value;
//   //   console.log(password);

//   const formData = {
//     email,
//     password,
//   };

//   if (formEl.email.value === '' || formEl.password.value === '') {
//     alert('Заповніть будь-ласка всі поля');
//   } else if (
//     formEl.email.value === email ||
//     formEl.password.value === password
//   ) {
//     console.log(formData);
//   }
//   form.reset();
// }

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

const LOCAL_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');
// console.log(form);

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', onFormInput, 500);

const formData = {};
// console.log(formData);

auditLocalStorage();

function onFormSubmit(e) {
  e.preventDefault();

  // const email = e.currentTarget.elements.email.value;
  //// console.log(email);
  // const message = e.currentTarget.elements.message.value;
  // // console.log(message);

  // // const formData = {
  // //   email,
  // //   message,
  // // };
  // // // console.log(formData);

  // if (email === '' || message === '') {
  //   alert('Заповніть будь-ласка всі поля');
  // } else {
  //   return formData.email === email || formData.message === message;
  //   // console.log(formData);
  // }
}

function onFormInput(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem(LOCAL_KEY, JSON.stringify(formData));
  // console.log(formData);
}

function auditLocalStorage() {
  const dataLocal = localStorage.getItem(LOCAL_KEY);
  // console.log(dataLocal);

  const email = currentTarget.elements.email.value;
  console.log(email);
  const message = e.currentTarget.elements.message.value;
  // console.log(message);

  // if (dataLocal) {
  // e.currentTarget.elements.email.value = dataLocal.email;
  // console.log(e.currentTarget.elements.email.value);
  // e.currentTarget.elements.message.value = dataLocal.message;
  // }
  // console.log();

  // const dataDisplay = JSON.parse(dataLocal);
  // console.log(dataDisplay);
}

//*============== По Репеті ====================

// const STORAGE_KEY = 'feedback-form-state';

// const formData = {};
// // console.log(formData);

// const refs = {
//   form: document.querySelector('.feedback-form'),
//   textarea: document.querySelector('.feedback-form textarea'),
// };

// refs.form.addEventListener('submit', onFormSubmit);
// refs.textarea.addEventListener('input', throttle(onTextareaInput, 500));
// refs.form.addEventListener('input', onTextInput);
// // console.log(refs.form);
// // console.log(refs.textarea);

// populateTexterea();

// function onTextareaInput(e) {
//   const message = e.target.value;

//   localStorage.setItem(STORAGE_KEY, message);
//   // console.log(message);
// }

// function onFormSubmit(e) {
//   e.preventDefault();

//   e.currentTarget.reset();
//   localStorage.removeItem(STORAGE_KEY);
//   // console.log(e.currentTarget);
// }

// function populateTexterea() {
//   const savedMessage = localStorage.getItem(STORAGE_KEY);

//   if (savedMessage) {
//     refs.textarea.value = savedMessage;
//     // console.log(savedMessage);
//   }
// }

// function onTextInput(e) {
//   formData[e.target.name] = e.target.value;
//   // console.log(formData);

//   localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));

//   // const saveFormData = localStorage.getItem(STORAGE_KEY);

//   // const parsedFormData = JSON.parse(saveFormData);

//   // localStorage.removeItem(STORAGE_KEY);

//   // console.log(parsedFormData);
// }

//*=========================================
// const form = document.querySelector('.login-form');

// form.addEventListener('submit', onSubmitForm);

// function onSubmitForm(event) {
//   event.preventDefault();
//   //   console.dir(event.currentTarget);

//   const formEl = event.currentTarget.elements;
//   //   console.log(formEl);

//   //* задається => typ
//   const email = formEl.email.value;
//   const password = formEl.password.value;

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

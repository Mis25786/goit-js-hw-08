//! Завдання 2 - відеоплеєр
// HTML містить <iframe> з відео для Vimeo плеєра.
// Напиши скрипт, який буде зберігати поточний час відтворення відео у локальне сховище і,
// після перезавантаження сторінки, продовжувати відтворювати відео з цього часу.

// <iframe
//   id="vimeo-player"
//   src="https://player.vimeo.com/video/236203659"
//   width="640"
//   height="360"
//   frameborder="0"
//   allowfullscreen
//   allow="autoplay; encrypted-media"
// ></iframe>

// Виконуй це завдання у файлах 02-video.html і 02-video.js.
// Розбий його на декілька підзавдань:

//todo 1) Ознайомся з документацією бібліотеки Vimeo плеєра.
//todo 2) Додай бібліотеку як залежність проекту через npm.
//todo 3) Ініціалізуй плеєр у файлі скрипта як це описано в секції pre-existing player, але враховуй, що у тебе плеєр доданий як npm пакет, а не через CDN.
//todo 4) Вивчи документацію методу on() і почни відстежувати подію timeupdate - оновлення часу відтворення.
//todo 5) Зберігай час відтворення у локальне сховище. Нехай ключем для сховища буде рядок "videoplayer-current-time".
//todo 6) Під час перезавантаження сторінки скористайся методом setCurrentTime() з метою відновлення відтворення зі збереженої позиції.
//todo 7) Додай до проекту бібліотеку lodash.throttle і зроби так, щоб час відтворення оновлювався у сховищі не частіше, ніж раз на секунду.

//*==============================================================
//* ініціалізуємо плеєр та додаємо метод throttle
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

// //* створюємо ключ для локального сховища
const LOCAL_KEY = 'videoplayer-current-time';

// //* отримуємо доступ до плеєра та створюємо нового гравеця
const iframe = document.querySelector('iframe');
// console.log(iframe);
const player = new Player(iframe);
// console.log(player);

//* провіряємо сховище на наявність попереднього перегляду
pageReload();

//* відслідковуємо час та записуємо в сховище
player.on(
  'timeupdate',
  throttle(function (time) {
    localStorage.setItem(LOCAL_KEY, time.seconds), 1000;
  })
);

//* ========= так чомусь не працює чому? ============
// player.on('timeupdate', onPlay);

// let onPlay = function (time) {
//   console.log(time);
//   throttle(localStorage.setItem(LOCAL_KEY, time.seconds), 1000);
// };
//* =============================================

function pageReload() {
  const timeLocalStorage = localStorage.getItem(LOCAL_KEY);

  if (timeLocalStorage) {
    player.setCurrentTime(timeLocalStorage);
  }
}

//?============================ данні ==========================================
//* Попередній гравець
//* Уже є гравець на сторінці? Передайте елемент у конструктор Vimeo.Player, і ви готові до роботи.

// const iframe = document.querySelector('iframe');
// const player = new Vimeo.Player(iframe);

// player.on('play', function () {
//   console.log('played the video!');
// });

// player.getVideoTitle().then(function (title) {
//   console.log('title:', title);
// });
// //*===============================
//* on(подія: рядок, зворотний виклик: функція): void

//* Додайте обробник події для вказаної події.
//* Викличе зворотний виклик з одним параметром, даними, який містить дані для цієї події.
//* Подробиці дивіться нижче.

// const onPlay = function (data) {
//   // data is an object containing properties specific to that event
// };

// player.on('play', onPlay);
// //*===============================
//* setCurrentTime(seconds: number): Promise<number, (RangeError|Error)>

//* Встановіть поточну позицію відтворення в секундах.
//* Після початку відтворення, якщо програвач було призупинено, він залишатиметься призупиненим.
//* Подібним чином, якщо програвач відтворювався, він відновить відтворення після буферизації відео.
//* Якщо встановити поточний час перед початком відтворення, відтворення почнеться.
//* Ви можете вказати точний час, і гравець намагатиметься знайти якомога ближче до цього часу.
//* Точний час буде значенням виконаної обіцянки.

// player
//   .setCurrentTime(30.456)
//   .then(function (seconds) {
//     // секунд = фактичний час, який гравець прагнув
//   })
//   .catch(function (error) {
//     switch (error.name) {
//       case 'RangeError':
//         // час був меншим за 0 або більшим за тривалість відео
//         break;

//       default:
//         // сталася інша помилка
//         break;
//     }
//   });
//*================================
//* Запускається як поточний час оновлення відео.
//* Зазвичай він запускається кожні 250 мс, але може відрізнятися залежно від браузера.

// timeupdate;
// {
//   duration: 61.857;
//   percent: 0.049;
//   seconds: 3.034;
// }
//?================================================================================

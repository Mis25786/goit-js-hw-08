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

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

player.on('play', function () {
  console.log('played the video!');
});

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});

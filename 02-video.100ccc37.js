//! Завдання 2 - відеоплеєр
const e=document.querySelector("iframe"),o=new Vimeo.Player(e);o.on("play",(function(){console.log("played the video!")})),o.getVideoTitle().then((function(e){console.log("title:",e)}));
//# sourceMappingURL=02-video.100ccc37.js.map

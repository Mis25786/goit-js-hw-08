!function(){
//! Завдання 2 - відеоплеєр
var e=document.querySelector("iframe"),o=new Vimeo.Player(e);o.on("play",(function(){console.log("played the video!")})),o.getVideoTitle().then((function(e){console.log("title:",e)}))}();
//# sourceMappingURL=02-video.c2d4fcba.js.map

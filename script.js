let hours = document.querySelector(".hours");
let mins = document.querySelector(".mins");
let second = document.querySelector(".second");

setInterval(() => {
  let time = new Date();
  hours.innerHTML = (time.getHours() < 10 ? "0" : "") + time.getHours();
  mins.innerHTML = (time.getMinutes() < 10 ? "0" : "") + time.getMinutes();
  second.innerHTML = (time.getSeconds() < 10 ? "0" : "") + time.getSeconds();
}, 1000);

let digitalElement = document.querySelector(".digital");
let sElement = document.querySelector(".p_s");
let mElement = document.querySelector(".p_m");
let hElement = document.querySelector(".p_h");

function updateClock() {
  let now = new Date();
  let hour = now.getHours();
  let minute = now.getMinutes();
  let second = now.getSeconds();

  digitalElement.innerHTML = `${fixZero(hour)} : ${fixZero(minute)} : ${fixZero(
    second
  )}`;

  sElement.style.transform = `rotate(${(360 / 60) * second}deg)`;
  mElement.style.transform = `rotate(${(360 / 60) * minute}deg)`;
  hElement.style.transform = `rotate(${(360 / 12) * hour}deg)`;
}

function fixZero(time) {
  if (time < 10) {
    return "0" + time;
  } else {
    return time;
  }
}

setInterval(updateClock, 1000);

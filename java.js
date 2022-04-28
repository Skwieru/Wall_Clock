const sec = document.querySelector(".seconds");
const min = document.querySelector(".minutes");
const hour = document.querySelector(".hours");
const clock = document.querySelector(".clock .hours");

// sec.style.transform = 'rotate(90deg)';

let secRotation = 0;
let minRotation = 0;
let hourRotation = 0;

function clockStart() {
  setInterval(startSec, 1000);
  setInterval(startMin, 60000);
  setInterval(startHour, 3600000);
}
clockStart();

function startSec() {
  secRotation += 6;
  sec.style.transform = `rotate(${secRotation}deg)`;
}

function startMin() {
  minRotation += 6;
  min.style.transform = `rotate(${minRotation}deg)`;
}

function startHour() {
  minRotation += 30;
  hour.style.transform = `rotate(${minRotation}deg)`;
}

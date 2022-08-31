addEventListener("DOMContentLoaded", resetClock);

let hourInput = document.getElementById("hour");
let minInput = document.getElementById("minute");
let secondInput = document.getElementById("seconds");
let hour = document.getElementById("hour").value;
let minute = document.getElementById("minute").value;
let second = document.getElementById("seconds").value;
let startBtn = document.getElementById("start-button");
let secondStart = 59;
let hourDisplay = document.getElementById("hour-display");
let minuteDisplay = document.getElementById("minute-display");
let secondDisplay = document.getElementById("second-display");
let pauseBtn = document.getElementById("pause-button");
let resetBtn = document.getElementById("reset-button");
let resumeBtn = document.getElementById("resume-button");
let resumedHour;
let resumedMin;
let resumedSec;
let myInterval;
let alarm = document.getElementById("alarm");
var audio = document.createElement("audio");

startBtn.addEventListener("click", startTime);

function startTime() {
  myStop();
  let hour = document.getElementById("hour").value;
  let minute = document.getElementById("minute").value;
  let second = document.getElementById("seconds").value;
  if (hour == 0 && minute == 0 && second == 0) {
    alert("please enter a time");
    return;
  }
  if (minute == 0) {
    minuteDisplay.innerHTML = 59;
    hourDisplay.innerHTML = hour - 1;
  } else {
    minuteDisplay.innerHTML = minute - 1;
    hourDisplay.innerHTML = hour;
  }

  if (second > 0) {
    minuteDisplay.innerHTML = minute;
    hourDisplay.innerHTML = hour;
    secondDisplay.innerHTML = second;
  } else {
    secondDisplay.innerHTML = secondStart;
  }

  myInterval = setInterval(runClock, 1000);
  pauseBtn.addEventListener("click", myStop);
  resumeBtn.addEventListener("click", myResume);
  resetBtn.addEventListener("click", resetClock);
}

function runClock() {
  secondDisplay.innerHTML--;
  if (secondDisplay.innerHTML < 0) {
    secondDisplay.innerHTML = secondStart;
    minuteDisplay.innerHTML--;
  }
  if (minuteDisplay.innerHTML < 0) {
    minuteDisplay.innerHTML = secondStart;
    hourDisplay.innerHTML--;
  }
  if (hourDisplay.innerHTML < 0) {
    hourDisplay.innerHTML = 0;
  }
  if (
    hourDisplay.innerHTML == 0 &&
    minuteDisplay.innerHTML == 0 &&
    secondDisplay.innerHTML == 0
  ) {
    audio.src = "alarm.mp3";
    audio.loop = true;
    audio.play();
    resetClock();
    timesUpModal();
  }
}

function myResume() {
  myStop();
  secondDisplay.innerHTML = resumedSec;
  minuteDisplay.innerHTML = resumedMin;
  hourDisplay.innerHTML = resumedHour;
  myInterval = setInterval(runClock, 1000);
}

function myStop() {
  clearInterval(myInterval);
  resumedHour = hourDisplay.innerHTML;
  resumedMin = minuteDisplay.innerHTML;
  resumedSec = secondDisplay.innerHTML;
}

function resetClock() {
  hourInput.value = 0;
  minInput.value = 0;
  secondInput.value = 0;
  hourDisplay.innerHTML = "00";
  minuteDisplay.innerHTML = "00";
  secondDisplay.innerHTML = "00";
  myStop();
}

// function timerDone() {
//   if (
//     (hourDisplay.innerHTML = 0) &&
//     (minuteDisplay.innerHTML = 0) &&
//     (secondDisplay.innerHTML = 0)
//   ) {
//     alert("Time's up!");
//     const audio = new Audio("alarm.mp3");
//     audio.play();
//   }
// }

let modal = document.getElementsByClassName("modal");
let modalButton = document.getElementById("modal-btn");
let container = document.getElementById("container");

function timesUpModal() {
  modal[0].classList.add("modal-active");
  container.classList.add("body-shadow");
}

modalButton.addEventListener("click", function () {
  audio.pause();
  audio.loop = false;
  container.classList.remove("body-shadow");
  modal[0].classList.remove("modal-active");
});

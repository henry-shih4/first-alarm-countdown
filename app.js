let hourInput = document.getElementById('hour');
let minInput = document.getElementById('minute');
let hour = document.getElementById('hour').value;
let minute = document.getElementById('minute').value;
let startBtn = document.getElementById('start-button');
let secondStart = 59;
let hourDisplay = document.getElementById('hour-display');
let minuteDisplay = document.getElementById('minute-display');
let secondDisplay = document.getElementById('second-display');
let pauseBtn = document.getElementById('pause-button');
let resetBtn = document.getElementById('reset-button');
let resumeBtn = document.getElementById('resume-button');
let resumedHour;
let resumedMin;
let resumedSec;
let myInterval;

startBtn.addEventListener('click', startTime);


function startTime(){
    myStop();
    let hour = document.getElementById('hour').value;
    let minute = document.getElementById('minute').value;
    if (hour == 0 && minute ==0){
        alert('please enter a time')
        return;
    }
    hourDisplay.innerHTML = hour;
    minuteDisplay.innerHTML = minute-1;
    secondDisplay.innerHTML = secondStart;

myInterval = setInterval(runClock, 1000);
  pauseBtn.addEventListener('click', myStop);
  resumeBtn.addEventListener('click', myResume);
  resetBtn.addEventListener('click', resetClock);
}



function runClock(){
    secondDisplay.innerHTML--;
    if (secondDisplay.innerHTML<0){
      secondDisplay.innerHTML = secondStart
      minuteDisplay.innerHTML--;
    }
    if (minuteDisplay.innerHTML<0){
        minuteDisplay.innerHTML = secondStart;
        hourDisplay.innerHTML--;
      }
      if (hourDisplay.innerHTML<0){
        hourDisplay.innerHTML = 0;
      }
      if((hourDisplay.innerHTML==0) && (minuteDisplay.innerHTML==0) &&(secondDisplay.innerHTML==0)){
        alert('Timer done');
        resetClock();
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
resumedMin = minuteDisplay.innerHTML
resumedSec = secondDisplay.innerHTML;
  }


function resetClock(){
    hourInput.value = 0;
    minInput.value = 0;
    hourDisplay.innerHTML = '00';
    minuteDisplay.innerHTML ='00';
    secondDisplay.innerHTML ='00';
    myStop();
  }


  function timerDone(){
    if((hourDisplay.innerHTML=0) && (minuteDisplay.innerHTML=0) &&(secondDisplay.innerHTML=0)){
        alert('Timer done!');
    }
  }




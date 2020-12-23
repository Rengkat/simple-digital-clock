"use strict";
const displayTime = document.querySelector(".display-time");
const displayDate = document.querySelector(".date");

function clock() {
  const currentDate = new Date();
  let hours = currentDate.getHours();
  let minutes = currentDate.getMinutes();
  let seconds = currentDate.getSeconds();
  let miliSeconds = currentDate.getMilliseconds();
  // let miliSeconds = currentDate.getMilliseconds();
  let day = currentDate.getDate();
  let month = currentDate.getMonth();
  const year = currentDate.getFullYear();

  hours = changeTime(hours);
  minutes = changeTime(minutes);
  seconds = changeTime(seconds);
  miliSeconds = changeTime(miliSeconds);

  let time = `<h1>${hours}:${minutes}:${seconds}:${miliSeconds}</h1>`;
  displayTime.innerHTML = time;

  displayDate.innerHTML = `<h4>${day}-${month}-${year}</h4>`;
  setTimeout(clock, 1000);
}
function changeTime(k) {
  /* appending 0 before time elements if less than 10 */
  if (k < 10) {
    return "0" + k;
  } else {
    return k;
  }
}
clock();

let [hours, minutes, seconds, mseconds] = [0, 0, 0, 0];
let timer = null;
function startTime() {
  mseconds++;
  if (mseconds == 100) {
    seconds++;
    mseconds = 0;
    if (seconds == 60) {
      mseconds = 0;
      seconds = 0;
      minutes++;
      if (minutes == 60) {
        mseconds = 0;
        seconds = 0;
        minutes = 0;
        hours++;
      }
    }
  }
  document.getElementById("msec").innerHTML = padzero(mseconds);
  document.getElementById("sec").innerHTML = padzero(seconds);
  document.getElementById("min").innerHTML = padzero(minutes);
  document.getElementById("hour").innerHTML = padzero(hours);
}
function padzero(num) {
  if (num < 10) {
    num = "0" + num;
  }
  return num;
}
function start() {
  clearInterval(timer);
  timer = setInterval(startTime, 10);
}
function stop() {
  clearInterval(timer);
}
function reset() {
  mseconds = 0;
  seconds = 0;
  minutes = 0;
  hours = 0;
  document.getElementById("msec").innerHTML = padzero(mseconds);
  document.getElementById("sec").innerHTML = padzero(seconds);
  document.getElementById("min").innerHTML = padzero(minutes);
  document.getElementById("hour").innerHTML = padzero(hours);
}

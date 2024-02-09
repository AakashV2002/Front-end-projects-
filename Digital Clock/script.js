let ampm = document.getElementById("ampm");
function displayTime() {
  let dateTime = new Date();
  let hr = dateTime.getHours();
  let min = dateTime.getMinutes();
  let sec = dateTime.getSeconds();

  if (hr > 12) {
    hr = hr - 12;
    ampm.innerHTML = "PM";
  }

  document.getElementById("hours").innerHTML = padZero(hr);
  document.getElementById("min").innerHTML = padZero(min);
  document.getElementById("sec").innerHTML = padZero(sec);
}

function padZero(num) {
  if (num < 10) {
    num = "0" + num;
  }
  return num;
}
setInterval(displayTime, 500);

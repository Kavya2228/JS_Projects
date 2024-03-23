function updateTime() {
  var now = new Date();
  var hours = now.getHours();
  var minutes = now.getMinutes();
  var seconds = now.getSeconds();
  var amPm = hours >= 12 ? 'PM' : 'AM'; // Determine if it's AM or PM

  // Convert 24-hour format to 12-hour format
  hours = (hours % 12) || 12;

  // Add leading zeros if necessary
  hours = (hours < 10) ? "0" + hours : hours;
  minutes = (minutes < 10) ? "0" + minutes : minutes;
  seconds = (seconds < 10) ? "0" + seconds : seconds;

  var timeString = hours + ":" + minutes + ":" + seconds + " " + amPm;
  document.getElementById('time').innerText = timeString;
}

// Update the time every second
setInterval(updateTime, 1000);

// Initial call to display time
updateTime();

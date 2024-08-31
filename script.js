const getCurrentTime = () => {
  const date = new Date();
  let hours = date.getHours();
  hours = hours > 12 ? hours - 12 : hours;
  hours = hours >= 10 ? hours : "0" + hours;
  let minutes = date.getMinutes();
  minutes = minutes >= 10 ? minutes : "0" + minutes;
  let seconds = date.getSeconds();
  seconds = seconds >= 10 ? seconds : "0" + seconds;
  const timeString = `${hours}:${minutes}:${seconds}`;
  document.getElementById("clock").textContent = timeString;
};
setInterval(getCurrentTime, 1000);
getCurrentTime();

// JavaScript:

// getCurrentTime function creates a new Date object and extracts the current hours, minutes, and seconds. Each value is formatted to ensure it is always two digits long.
// setInterval calls getCurrentTime every second to update the time on the page.
// The initial call to getCurrentTime ensures the clock shows the correct time immediately when the page loads.

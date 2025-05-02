let speed = 0;
let rpm = 0;
let temp = "green";
let wear = "green";
let seconds = 0;

function updateNeedle(id, value, maxValue) {
  const needle = document.getElementById(id);
  const angle = (value / maxValue) * 180;
  needle.style.transform = `rotate(${angle}deg)`;
}

function updateIndicator(id, status) {
  const indicator = document.getElementById(id);
  indicator.style.backgroundColor = status;
}

function updateStopwatch() {
  seconds++;
  const mins = String(Math.floor(seconds / 60)).padStart(2, "0");
  const secs = String(seconds % 60).padStart(2, "0");
  const display = document.getElementById("stopwatch");
  display.textContent = `00:${mins}:${secs}`;
}

// Simulate updates every second
setInterval(() => {
  speed = (speed + 10) % 240;
  rpm = (rpm + 500) % 9000;
  temp = speed > 180 ? "red" : speed > 100 ? "orange" : "green";
  wear = rpm > 7000 ? "red" : rpm > 4000 ? "orange" : "green";

  updateNeedle("speed-needle", speed, 240);
  updateNeedle("rpm-needle", rpm, 9000);
  updateIndicator("temp-indicator", temp);
  updateIndicator("wear-indicator", wear);
  updateStopwatch();
}, 1000);

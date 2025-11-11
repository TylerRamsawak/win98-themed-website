// Handles the clock and window display 

document.querySelectorAll(".taskbar-button").forEach(tb => {
    tb.addEventListener("click", function () {
      windowAppear(this.id);
    });
  });

function windowAppear(id) {
    let windowID = id.split("-")[0] + "-window";
    let windowOfInterest = document.getElementById(windowID);
    windowOfInterest.style.display = "block";
}

function updateTime() {
  const now = new Date();
  let hours = now.getHours();
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const ampm = hours >= 12 ? 'PM' : 'AM';

  // Convert to 12-hour format
  hours = hours % 12;
  hours = hours ? hours : 12; // 0 => 12

  const hourStr = hours.toString().padStart(2, '0');
  document.getElementById('clock').textContent = `${hourStr}:${minutes} ${ampm}`;
}

function startClock() {
  updateTime(); // Show time immediately

  // Calculate ms until next minute
  const now = new Date();
  const msToNextMinute = (60 - now.getSeconds()) * 1000;

  // Wait until the next minute to align updates
  setTimeout(() => {
    updateTime();
    setInterval(updateTime, 60000); // Then update every 1 minute
  }, msToNextMinute);
}

startClock();
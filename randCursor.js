// Simulates random HDD access

function seekCursor() {
  // random duration for the hourglass to be the active cursor
  const cursorActive = Math.floor(Math.random() * 2000);
  document.body.style.cursor = "url('cursors/hourglass.png'), auto";

  setTimeout(() => {
    document.body.style.cursor = "url('cursors/arrow.png'), auto";
    // delay between 30s and 5s
    const delay = Math.floor(Math.random() * (30000 - 5000 + 1)) + 5000;

    // Schedule next run
    setTimeout(seekCursor, delay);
  }, cursorActive);
}

seekCursor();

// Handles audio levels and mp3 player

// audio levels
var win95Startup = document.getElementById("win95-startup");
win95Startup.volume = 0.5;

var hddStartup = document.getElementById("win95-startup");
hddStartup.volume = 0.5;

var floppySFX = document.getElementById("floppy");
floppySFX.volume = 1;

// mp3 player

const mp3Button = document.getElementById("mp3-button");
const mp3Title = document.getElementById("mp3-title");
const mp3ProgressBar = document.getElementById("mp3-progress-bar");

let mp3State = 1; // 1=play, 0=pause

mp3Button.addEventListener("click", function () {
    if(mp3State) { //if actively playing
        mp3State = 0; //pause
        console.log("Pause")
    }
    else { //if paused
        mp3State = 1; //resume
        console.log("Play")
    }
})
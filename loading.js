// Handles the loading animation, mask, and each content-body

// get the ID from the sidebar
document.querySelectorAll("nav ul li").forEach(li => {
    li.addEventListener("click", function () {
      loadingPopup(this.id);
    });
  });
  
let oldArrowID = "home-arrow"; // arrow starts at home
let oldURL = "home"; // URL bar content starts at home
let oldPageID = "content-body-home"; // page starts at home
let bgImage = "stars3-bg.gif";

function loadingPopup(id) {
    // display loading window popup
    const loadingWindow = document.getElementById("loading-popup");
    loadingWindow.style.display = "block";

    // set loading text content
    const loadingMessage = document.getElementById("loading-id");
    loadingMessage.textContent = id;

    // set URL text content
    const url = document.getElementById("url");
    if (id != "home"){
      url.textContent = "https://www.ramsawak.neocities.org/" + id;
    }
    else {
      url.textContent = "https://www.ramsawak.neocities.org/";
    }

    // -----ARROW STUFF-----
    // hide old arrow
    let youWereHere = document.getElementById(oldArrowID);
    console.log("Hiding Arrow at: " + oldArrowID);
    youWereHere.style.display = "none";

    // get new arrow ID and update the old arrow ID
    newArrowID = id + "-arrow"
    oldArrowID = newArrowID;

    // appear new arrow
    let youAreHere = document.getElementById(newArrowID);
    console.log("Displaying arrow at: " + newArrowID)
    youAreHere.style.display = "block";

    // -----PAGE STUFF-----
    // hide old content-body page
    let oldPage = document.getElementById(oldPageID);
    console.log("Hidin after delay: " + oldPageID);

    // get new pageID and update oldPageID
    newPageID = "content-body-" + id;
    oldPageID = newPageID
    
    // display new content-body page
    let newPage = document.getElementById(newPageID);
    console.log("Displaying after delay: " + newPageID);

    console.log(id);
    if (id == "electronics") {
      bgImage = "pcb-bg.jpeg";
    }
    else if (id == "home") {
      bgImage = "stars3-bg.gif";
    }
    else if (id == "bands") {
      bgImage = "bats-bg.gif";
    }

    console.log(bgImage)

    bgURL = "url('images/backgrounds/" + bgImage + "')";
    netscapeBackground = document.getElementById("netscape-background");

    // loading sfx
    const SFX = document.getElementById("floppy");
    SFX.play();

    document.body.style.cursor = "url('cursors/hourglass.png'), auto";

    const bar = document.getElementById('loading-bar');
    bar.classList.remove('animate');
    
    // Force reflow to restart animation if clicked again
    void bar.offsetWidth;
  
    // Add the class to trigger animation
    bar.classList.add('animate');
    setTimeout(() => {
      // swap pages
      oldPage.style.display = "none";
      newPage.style.display = "block";
      netscapeBackground.style.backgroundImage = bgURL;

      // hide loading popup
      loadingWindow.style.display = "none";

      // reset cursor
      document.body.style.cursor = "url('cursors/arrow.png'), auto";
    }, 1200);
  }

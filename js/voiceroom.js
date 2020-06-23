function closeDiv() {
   document.getElementById("headAnimate").style.display = "none";
   document.getElementById("voiceAnimate").style.display = "block";
   document.getElementById("voiceAnimate").classList.add("w3-animate-opacity");

}

// close the div in 5 secs
window.setTimeout(closeDiv, 5000);

function InitRoomAmbience(themevideourl) {
   var videoelement = document.getElementById("voiceroomvideo");
   videoelement.src = themevideourl;
   videoelement.play();
   document.getElementById("pauseButton").hidden = true;
   document.getElementById("playButton").hidden = true;
   document.getElementById("stopButton").hidden = true;
   document.getElementById("studioView").hidden = true;
   document.getElementById("studioHideButton").hidden = true;
   document.getElementById("recordingsoundwave").hidden = true;

}

function toggleMusic() {
   var videoelement = document.getElementById("voiceroomvideo");
   var thisButton = document.getElementById("unmuteButton");
   //thisButton.className = videoelement.muted ? "unmutebtnvoiceroom" : "mutebtnvoiceroom";
   videoelement.muted = videoelement.muted ? false : true;
   videoelement.volume = videoelement.muted ? 0 : 01;
}

function toggleStudioView() {
   var thisView = document.getElementById("studioView");
   thisView.hidden = thisView.hidden ? false : true;
}

function switchViewToCharacterSelection() {
   window.location.href = 'characterselection.html';
}
window.addEventListener('DOMContentLoaded', (event) => {
   InitRoomAmbience(localStorage.getItem("SelectedThemeVideo"));
});

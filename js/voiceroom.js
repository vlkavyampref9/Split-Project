
function InitRoomAmbience(themevideourl){
   var videoelement = document.getElementById("voiceroomvideo"); 
   videoelement.src = themevideourl;
   videoelement.play();
   document.getElementById("pauseButton").hidden = true;
   document.getElementById("stopButton").hidden = true;
   document.getElementById("studioView").hidden = true;
   document.getElementById("studioHideButton").hidden = true;
   document.getElementById("recordingsoundwave").hidden = true;

}

function toggleMusic(){
   var videoelement = document.getElementById("voiceroomvideo");
   var thisButton = document.getElementById("unmuteButton");
   thisButton.childNodes[1].data = videoelement.muted ? "Mute" : "Play Music";
   thisButton.className = videoelement.muted ? "btnvoiceroom" : "mutebtnvoiceroom";
   videoelement.muted = videoelement.muted ? false: true; 
  
}

function toggleStudioView(){
   var thisView = document.getElementById("studioView");
   document.getElementById("studioHideButton").childNodes[1].data = thisView.hidden ? "Hide Studio": "Show Studio";
   thisView.hidden = thisView.hidden? false: true;
}

function switchViewToCharacterSelection(){
   window.location.href = 'characterselection.html';  
}
window.addEventListener('DOMContentLoaded', (event) => {
    InitRoomAmbience(localStorage.getItem("SelectedThemeVideo"));
    });

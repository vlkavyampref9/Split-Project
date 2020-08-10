function closeDiv() {
    document.getElementById("headAnimate").style.display = "none";
    document.getElementById("voiceAnimate").classList.add("voicefadein");
 }
 
 // close the div in 5 secs
 window.setTimeout(closeDiv, 5000);
 
 function InitRoomAnimated(themeimgurl) {
    var letout = document.getElementById('letout');
    letout.innerHTML = localStorage.getItem("OutHead");
    letout.style = "transform:translateY(-50vh);transition-duration: 3s;transition-delay: 1s;color:rgb(218,218,218);font-size:40px;left:17vw;";
    var imgelement = document.getElementById("animatedroomimg");
    imgelement.src = themeimgurl;
    document.getElementById("pauseButton").hidden = true;
    document.getElementById("playButton").hidden = true;
    document.getElementById("stopButton").hidden = true;
    document.getElementById("studioView").hidden = true;
    //document.getElementById("studioHideButton").hidden = true;
    document.getElementById("recordingsoundwave").hidden = true;
 
 }
 
 /*function toggleMusic() {
    var videoelement = document.getElementById("voiceroomvideo");
    var thisButton = document.getElementById("unmuteButton");
    var thatButton = document.getElementById("muteButton");
    //thisButton.className = videoelement.muted ? "unmutebtnvoiceroom" : "mutebtnvoiceroom";
    videoelement.muted = videoelement.muted ? false : true;
    videoelement.volume = videoelement.muted ? 0 : 01;
    if (videoelement.muted == true){
       thatButton.style.display = "none";
       thisButton.style.display = "block";
    }
    else {
       thisButton.style.display = "none";
       thatButton.style.display = "block";
    }
 }*/
 
 /*function toggleStudioView() {
    var thisView = document.getElementById("studioView");
    thisView.hidden = thisView.hidden ? false : true;
 }*/
 
 function switchViewToCharacterSelection() {
    window.location.href = 'characterselection.html';
 }
 window.addEventListener('DOMContentLoaded', (event) => {
    InitRoomAnimated(localStorage.getItem("SelectedThemeImg"));
 });
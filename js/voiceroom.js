function closeDiv() {
   document.getElementById("headAnimate").style.display = "none";
   document.getElementById("voiceAnimate").classList.add("voicefadein");
}

// close the div in 5 secs
window.setTimeout(closeDiv, 5000);

function InitRoomAmbience(themevideourl) {
   var letout = document.getElementById('letout');
   letout.innerHTML = localStorage.getItem("OutHead");
   letout.style = "transform:translateY(-50vh);transition-duration: 3s;transition-delay: 1s;color:rgb(218,218,218);font-size:40px;left:17vw;";
   var videoelement = document.getElementById("voiceroomvideo");
   videoelement.src = themevideourl;
   videoelement.play();
   document.getElementById("pauseButton").hidden = true;
   document.getElementById("playButton").hidden = true;
   document.getElementById("stopButton").hidden = true;
   document.getElementById("studioView").hidden = true;
   document.getElementById("recordingsoundwave").hidden = true;

}
var count = 0;
var room = localStorage.getItem("SelectedTheme");
function displayMsg() {
   
   var box = document.getElementById("msgBox");
   box.style.display = "block";
   count++;
   if (room == 'ventout'){
      switch(count){
         case 1: box.innerHTML = "What is the worst part about the way you feel right now?";
                  break;
         case 2: box.innerHTML = "How often do you feel this way?";
                  break;
         case 3: box.innerHTML = "Imagine your problem in front of you. Tell it that you will not stand for this any longer!";
                  break;
         case 4: box.innerHTML = "If your circumstances allow, grab a pillow, take a deep breath and let out a big yell!";
                  break;
         case 5: box.innerHTML = "Tell your problem to go-you-know-what itself. You can overcome this challenge and nothing will stop you! ";
                  break;
         default: box.style.display = "none";
                  count = 0;
                  break;
      }
   }
   else if (room == 'assertpositivity'){
      switch(count){
         case 1: box.innerHTML = "What’s exciting in your life right now?";
                  break;
         case 2: box.innerHTML = "How could you put this energy towards something that’s bothering you?";
                  break;
         case 3: box.innerHTML = "What makes you happiest in life?";
                  break;
         case 4: box.innerHTML = "How could you transform the unhappy parts of your life into parts that you would be happy about?";
                  break;
         case 5: box.innerHTML = "Describe an idea, plan or goal that you would like to bring to fruition. What would that process look like?";
                  break;
         default: box.style.display = "none";
                  count = 0;
                  break;
      }
   }
   else if (room == 'disconnectnegativity'){
      switch(count){
         case 1: box.innerHTML = "How was your day?";
                  break;
         case 2: box.innerHTML = "What have you been thinking lately?";
                  break;
         case 3: box.innerHTML = "Is there a certain problem that is bothering you?";
                  break;
         case 4: box.innerHTML = "How does the problem make you feel?";
                  break;
         case 5: box.innerHTML = "What small step could you take to solve the problem?";
                  break;
         default: box.style.display = "none";
                  count = 0;
                  break;
      }
   }
   else if (room == 'confrontfear'){
      switch(count){
         case 1: box.innerHTML = "What is the worst part about the way you feel right now?";
                  break;
         case 2: box.innerHTML = "How often do you feel this way?";
                  break;
         case 3: box.innerHTML = "Imagine your fear in front of you. Tell it that you will not stand for this any longer!";
                  break;
         case 4: box.innerHTML = "If your circumstances allow, grab a pillow, take a deep breath and let out a big yell!";
                  break;
         case 5: box.innerHTML = "Tell your fear to go-you-know-what itself. You can overcome this challenge and nothing will stop you!";
                  break;
         default: box.style.display = "none";
                  count = 0;
                  break;
      }
   }
}

function toggleMusic() {
   var videoelement = document.getElementById("voiceroomvideo");
   var thisButton = document.getElementById("unmuteButton");
   var thatButton = document.getElementById("muteButton");
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
}

window.addEventListener('DOMContentLoaded', (event) => {
   InitRoomAmbience(localStorage.getItem("SelectedThemeVideo"));
});

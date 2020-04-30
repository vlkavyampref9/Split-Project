
function InitRoomAmbience(themevideourl){
   var videoelement = document.getElementById("voiceroomvideo");
   videoelement.crossOrigin = 'anonymous';
   videoelement.src = themevideourl;
   videoelement.play();
}

window.addEventListener('DOMContentLoaded', (event) => {
    InitRoomAmbience(localStorage.getItem("SelectedThemeVideo"));
    });

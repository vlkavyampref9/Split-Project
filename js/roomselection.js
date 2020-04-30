
var ThemesList = [{theme: "joker", video: "../assets/videos/jokerthemevideo.mp4"},
{theme: "clouds", video: "../assets/videos/cloudsthemevideo.mp4"},
{theme: "greenspace", video: "../assets/videos/greenthemevideo.mp4"} ];

function focusToVoiceRoom() {           
    var voiceroomscene = document.getElementById("VoiceRoom");
    voiceroomscene.scrollIntoView();     
   }

function SwitchViewToAmbienceRoom(theme){
    localStorage.setItem("SelectedTheme", theme);
    let videourl =  ThemesList.find(obj => obj.theme === theme).video;
    localStorage.setItem("SelectedThemeVideo", videourl);
    window.location.href = 'voiceroomview.html';   
}




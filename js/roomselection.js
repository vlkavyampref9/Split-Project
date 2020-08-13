var mainApp = {};
(function(){
    var firebase = app_fireBase;
    var uid = null;
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            // User is signed in.
            uid = user.id;
        }
        else{
            uid = null;
            window.location.replace("../index.html");
        }
    });
    function logOut(){
        firebase.auth().signOut();
    }

    mainApp.logOut = logOut;
    
})()

var ThemesList = [{ theme: "joker", video: "../assets/mobile/videos/jokertheme.mp4" , outHead: "blah"},
{ theme: "clouds", video: "../assets/mobile/videos/cloudsthemevideo.mp4" , outHead: "Let out <br>your critical <br>inner voices"},
{ theme: "greenspace", video: "../assets/mobile/videos/greenthemevideo.mp4", outHead: "Be a friend <br>to yourself"},
{ theme: "lighttunnel", video: "../../assets/videos/lighttunnelthemevideo.mp4" , outHead: "blah"}, //different flow
{ theme: "cave", image:  "../assets/mobile/cave-1.jpg" , outHead: "Confront the <br>enemy within"}, 
{ theme: "watchingwaves", video: "../assets/mobile/videos/wavesvideo.mp4" , outHead: "Let out the <br>frustrations <br>inside you"}];

function focusToVoiceRoom() {
    var voiceroomscene = document.getElementById("VoiceRoom");
    voiceroomscene.scrollIntoView();
}

function SwitchViewToAmbienceRoom(theme) {
    localStorage.setItem("SelectedTheme", theme);
    let outhead = ThemesList.find(obj => obj.theme === theme).outHead;
    localStorage.setItem("OutHead", outhead);
    let videourl = ThemesList.find(obj => obj.theme === theme).video;
    localStorage.setItem("SelectedThemeVideo", videourl);
    window.location.href = 'voiceroomview.html';
}

function SwitchViewToAnimatedRoom(theme) {
    localStorage.setItem("SelectedTheme", theme);
    let outhead = ThemesList.find(obj => obj.theme === theme).outHead;
    localStorage.setItem("OutHead", outhead);
    let imgurl = ThemesList.find(obj => obj.theme === theme).image;
    localStorage.setItem("SelectedThemeImg", imgurl);
    window.location.href = 'animatedrooms.html';
}




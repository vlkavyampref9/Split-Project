var mainApp = {};
(function(){
    var firebase = app_fireBase;
    var uid = null;
    var name;
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            // User is signed in.
            uid = user.id;
            name = user.displayName;
            writeName(name);
        }
        else{
            uid = null;
            //window.location.replace("../index.html");
        }
    });
    function logOut(){
        firebase.auth().signOut();
    }
    function writeName(){
        document.getElementById("name").innerHTML = name;
    }
    
    mainApp.logOut = logOut;
    mainApp.name = writeName;
})()

var ThemesList = [
{ theme: "assertpositivity", video: "../assets/mobile/videos/AssertPositivityVid.mp4", outHead: "Be a friend <br>to yourself"},
{ theme: "ventout", video: "../assets/mobile/videos/VentoutVidRe.mp4", outHead: "Let out the <br>frustrations <br>inside you"},
{ theme: "disconnectnegativity", video: "../assets/mobile/videos/NegativityVidRe.mp4", outHead: "Let out <br>your critical <br>inner voices"},
{ theme: "confrontfear", video: "../assets/mobile/videos/FearVidRe.mp4", outHead: "Confront the <br>enemy within"},
{ theme: "pitchyouridea", video: "../assets/mobile/videos/PitchPractice.mp4", outHead: "Practice <br> your <br>Killer Pitch"},
{ theme: "visualisegoals", video: "../assets/mobile/videos/VisualizeGoals.mp4", outHead: "Imagine <br>your future"}
];

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





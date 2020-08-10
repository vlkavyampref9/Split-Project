var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

var ThemesList = [{ theme: "joker", video: "../assets/mobile/videos/jokertheme.mp4" , outHead: "blah"},
{ theme: "clouds", video: "../assets/mobile/videos/cloudsthemevideo.mp4" , outHead: "Let out \nyour critical\n inner voices"},
{ theme: "greenspace", video: "../assets/mobile/videos/greenthemevideo.mp4", outHead: "Be a friend\n to yourself"},
{ theme: "lighttunnel", video: "../../assets/videos/lighttunnelthemevideo.mp4" , outHead: "blah"}, //different flow
{ theme: "cave", image:  "../assets/mobile/cave-1.jpg" , outHead: "Confront the\n enemy within"}, 
{ theme: "watchingwaves", video: "../assets/mobile/videos/wavesvideo.mp4" , outHead: "Let out the\n frustrations \ninside you"}];

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




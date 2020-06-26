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

/*var ThemesList = [{ theme: "joker", video: "../assets/videos/jokerthemevideo.mp4" },
{ theme: "clouds", video: "../assets/videos/cloudsthemevideo.mp4" },
{ theme: "greenspace", video: "../assets/videos/greenthemevideo.mp4" },
{ theme: "lighttunnel", video: "../../assets/videos/lighttunnelthemevideo.mp4" }, //different flow
{ theme: "watchingwaves", video: "../assets/videos/watchingwavesthemevideo.mp4" }];
*/
var ThemesList = [{ theme: "joker", video: "../assets/mobile/videos/jokertheme.mp4" },
{ theme: "clouds", video: "../assets/mobile/videos/cloudsthemevideo.mp4" },
{ theme: "greenspace", video: "../assets/mobile/videos/greenthemevideo.mp4" },
{ theme: "lighttunnel", video: "../../assets/videos/lighttunnelthemevideo.mp4" }, //different flow
{ theme: "watchingwaves", video: "../assets/mobile/videos/wavesvideo.mp4" }];


function focusToVoiceRoom() {
    var voiceroomscene = document.getElementById("VoiceRoom");
    voiceroomscene.scrollIntoView();
}

function SwitchViewToAmbienceRoom(theme) {
    localStorage.setItem("SelectedTheme", theme);
    let videourl = ThemesList.find(obj => obj.theme === theme).video;
    localStorage.setItem("SelectedThemeVideo", videourl);
    window.location.href = 'voiceroomview.html';
}

/*function SwitchViewToLightTunnelRoom(theme) {
    localStorage.setItem("SelectedTheme", theme);
    let videourl = ThemesList.find(obj => obj.theme === theme).video;
    localStorage.setItem("SelectedThemeVideo", videourl);
    window.location.href = 'specificrooms/lighttunnel.html';
}*/




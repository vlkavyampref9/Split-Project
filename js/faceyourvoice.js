
//var audioFileUrl = localStorage.getItem("record1");
var au;
var currentrecording = 1;
 
function InitRoomAmbience2(selectedCharacter){
  document.getElementById("MyVoiceCharacter").style.backgroundImage = "url('"+selectedCharacter+"')";    
  au.controls = true;
	au.src = null;
	au.title = "yourvoices";
  au.className = "audioRecordedTrack";
}

function playVoicesInLoop(){
    document.getElementById("VoiceCharacterAudio").src = JSON.parse(localStorage.getItem("record1")).src;
    au.play();
    document.getElementById("PlayButton").disabled = true;   
}

function PlayNextOrLoop(){
  if(currentrecording < 5){
    currentrecording++;      
  }
  else{
    currentrecording = 1;
  }
  var localname = "record"+ currentrecording.toString();
  au.src = JSON.parse(localStorage.getItem(localname)).src;
  au.play();

}
    
window.addEventListener('DOMContentLoaded', (event) => {
   au = document.getElementById("VoiceCharacterAudio");
   InitRoomAmbience2(localStorage.getItem("SelectedCharacterGif"));
   });
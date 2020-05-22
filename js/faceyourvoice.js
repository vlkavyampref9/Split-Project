
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
  GetRecordingFromDataBaseAndPlay("record1");
  document.getElementById("PlayButton").disabled = true;      
}

function PlayNextOrLoop(){
  var checknext = currentrecording + 1;
  if(currentrecording < 5 && localStorage.getItem("record"+ checknext.toString()) ){
    currentrecording++;      
  }
  else{
    currentrecording = 1;
  }
  var localname = "record"+ currentrecording.toString();
  GetRecordingFromDataBaseAndPlay(localname);
}

function PlayTransform(){
  au.pause();
  var localname = "record"+ currentrecording.toString()+"transform";
  au.src = JSON.parse(localStorage.getItem(localname)).src;
  au.play();
}
  
window.addEventListener('DOMContentLoaded', (event) => {
   au = document.getElementById("VoiceCharacterAudio");
   InitRoomAmbience2(localStorage.getItem("SelectedCharacterGif"));
   }); 



//var audioFileUrl = localStorage.getItem("record1");
var au;
var currentrecording = 1;

 
function InitRoomAmbience2(selectedCharacter){
  document.getElementById("MyVoiceCharacter").style.backgroundImage = "url('"+selectedCharacter+"')"; 
  document.getElementById("CharacterTitle").innerHTML = "Meet the " + localStorage.getItem("SelectedCharacter");   
  au.controls = true;
	au.src = null;
	au.title = "yourvoices";
  au.className = "audioRecordedTrack";
}

function playVoicesInLoop(){  
  GetRecordingFromDataBaseAndPlay("RecordingsStore", "recordingName", "record1", "VoiceCharacterAudio");
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
  GetRecordingFromDataBaseAndPlay("RecordingsStore", "recordingName", localname, "VoiceCharacterAudio");
}

function PlayTransform(){
  au.pause();
  var localname = "record"+ currentrecording.toString()+"transform";
  au.src = JSON.parse(localStorage.getItem(localname)).src;
  au.play();
}

// function to transform the voice to a different character based on parameter passed from HTML
async function transformVoice(blob, transformArgs, localStorageName) {
	
  if(!globalAudioBuffer) {
   let arrayBuffer = await blob.arrayBuffer();
   let ctx = new AudioContext();
   globalAudioBuffer = await ctx.decodeAudioData(arrayBuffer);
 }
   
   let outputAudioBuffer = await pitchTransform(globalAudioBuffer, transformArgs);
   let outputWavBlob = await audioBufferToWaveBlob(outputAudioBuffer);	
   return outputWavBlob; 
 }  
  
window.addEventListener('DOMContentLoaded', (event) => {
   au = document.getElementById("VoiceCharacterAudio");
   InitRoomAmbience2(localStorage.getItem("SelectedCharacterGif"));
   }); 


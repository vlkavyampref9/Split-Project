
//var audioFileUrl = localStorage.getItem("record1");
var au;
var currentrecording = 0;
var globalOriginalVoiceBlob = undefined;
var globalTransformedVoiceBlob = undefined;

 
function InitRoomAmbience2(selectedCharacter){
  document.getElementById("MyVoiceCharacter").style.backgroundImage = "url('"+selectedCharacter+"')"; 
  document.getElementById("CharacterTitle").innerHTML = "Meet the " + localStorage.getItem("SelectedCharacter");   
  au.controls = true;
	au.src = null;
	au.title = "yourvoices";
  au.className = "audioRecordedTrack";
}

function playVoicesInLoop(){ 
  if(!localStorage.getItem("record1")){
    alert("You have been silent. Please record atleast one voice.");
  }
  var checknext = currentrecording + 1;
  if(currentrecording < 5 && localStorage.getItem("record"+ checknext.toString()) ){
    currentrecording++;      
  }
  else{
    currentrecording = 1;
  }
  var localname = "record"+ currentrecording.toString();
  transformRecordingFromDataBase("RecordingsStore", "recordingName", localname);  
  document.getElementById("PlayButton").disabled = true;      
}

function PlayNextOrLoop(){
  document.getElementById("PlayButton").disabled = false;   
}


// function to transform the voice to a different character based on voice parameters in lookup 
async function transformVoice(blob, transformEffects) { 
   let arrayBuffer = await blob.arrayBuffer();
   let ctx = new AudioContext();
   var outputAudioBuffer = await ctx.decodeAudioData(arrayBuffer); 
   var iter;
   for(iter = 0; iter < transformEffects.length; iter++){
    outputAudioBuffer = await window[transformEffects[iter].name+"Transformer"](outputAudioBuffer, transformEffects[iter].params);    
   }   
   let outputWavBlob = await audioBufferToWaveBlob(outputAudioBuffer); 
   globalTransformedVoiceBlob = outputWavBlob; 
   au.src = URL.createObjectURL(outputWavBlob);   
   au.play();  
 } 

 
function transformRecordingFromDataBase(StoreName, IndexName, RecordingName) { 
  window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
  if(!window.indexedDB){
      alert("storage is unavailable");
  }

  let request = window.indexedDB.open("RecordingsDataBase", 1),
  db,
  tx,
  store,
  index;
  
  request.onerror = function(e){
      console.log("There was an error: " + e.target.errorCode);
      };

  //used to get data or assign data to the database
  request.onsuccess = function(e){
      db = request.result;
      tx = db.transaction(StoreName, "readwrite");
      store = tx.objectStore(StoreName);
      index = store.index(IndexName);

      db.onerror = function(e){
          console.log("ERROR" + e.target.errorCode);               
      }

      let value = index.get(RecordingName);        
      value.onsuccess = function(){ 
          console.log("DB fetch success");   
          globalOriginalVoiceBlob = value.result.recordingBlob;         
          transformVoice(value.result.recordingBlob, JSON.parse(localStorage.getItem("SelectedCharacterEffects")));                                      
      };

      tx.oncomplete = function(){            
          db.close();
      };
      //set or retrieve data here.
      //onsuccess handlers for data set or retrieve.        
  };

};
  
window.addEventListener('DOMContentLoaded', (event) => {
   au = document.getElementById("VoiceCharacterAudio");  
   InitRoomAmbience2(localStorage.getItem("SelectedCharacterGif"));
   }); 


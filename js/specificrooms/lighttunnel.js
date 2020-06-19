URL = window.URL || window.webkitURL;

var globalAudioBuffer = null;
var gumStream; 						//stream from getUserMedia()
var rec; 							//Recorder.js object
var input; 							//MediaStreamAudioSourceNode we'll be recording

var AudioContext = window.AudioContext || window.webkitAudioContext;
var audioContext; //audio context to help us record

var recordButton = document.getElementById("recordButton");
recordButton.addEventListener("click", startOrStopDecide);


function InitRoomAmbience(themevideourl){
    document.getElementById("voiceroomvideo").src = themevideourl;
    //videoelement.play();
    //videoelement.hidden = true;
    document.getElementById("controls").hidden = true; 
    document.getElementById("studioView").hidden = true;
    document.getElementById("cuetext").addEventListener("animationend", showVideoAndControls) 
 }

 function showVideoAndControls(){
    document.getElementById("controls").hidden = false; 
    document.getElementById("cuecanvas").hidden = true;
    //document.getElementById("voiceroomvideo").play();
 }
 
 function toggleMusic(){
    var videoelement = document.getElementById("voiceroomvideo");
    var thisButton = document.getElementById("unmuteButton");
    thisButton.childNodes[1].data = videoelement.muted ? "Mute" : "Play Music";
    thisButton.className = videoelement.muted ? "btnvoiceroom" : "mutebtnvoiceroom";
    videoelement.muted = videoelement.muted ? false: true;  
    videoelement.volume =  videoelement.muted ? 0: 01;
 }
 
 window.addEventListener('DOMContentLoaded', (event) => {
     InitRoomAmbience(localStorage.getItem("SelectedThemeVideo"));
     });
 
function startOrStopDecide(){
    document.getElementById("voiceroomvideo").src = "../../assets/videos/lighttunnelthemevideo.mp4";   
   if(recordButton.childNodes[1].data == "Stop"){
       stopRecording();
   }
   else{
       startRecording();
   }

}

function startRecording() {		
    // Change record icon to stop icon and start video
    document.getElementById("recordicon").classList.remove("fa-microphone");
    document.getElementById("recordicon").classList.add("fa-stop");
    document.getElementById("studioView").hidden = true;
    recordButton.childNodes[1].data="Stop";
    document.getElementById("voiceroomvideo").play();

    var constraints = { audio: true, video:false }; 	
    //Disable the record button until we get a success or fail from getUserMedia() 	
	recordButton.disabled = true;
	navigator.mediaDevices.getUserMedia(constraints).then(function(stream) {
        recordButton.disabled = false;
		console.log("getUserMedia() success, stream created, initializing Recorder.js ...");		
		audioContext = new AudioContext();
		/*  assign to gumStream for later use  */
		gumStream = stream;		
		/* use the stream */
		input = audioContext.createMediaStreamSource(stream);
		/* Create the Recorder object and configure to record mono sound (1 channel)
		   Recording 2 channels  will double the file size	*/
		rec = new Recorder(input,{numChannels:2});
		//start the recording process
		rec.record();
		console.log("Recording started");

	}).catch(function(err) {
	  	//enable the record button if getUserMedia() fails
        recordButton.disabled = false;
        recordButton.childNodes[1].data="Record";
        document.getElementById("recordicon").classList.remove("fa-stop");  
        document.getElementById("recordicon").classList.add("fa-microphone");
              
    
	});
}

function stopRecording(){
    rec.stop();
	//stop microphone access
	gumStream.getAudioTracks()[0].stop();
	//create the wav blob and pass it on to createDownloadLink    
    recordButton.childNodes[1].data="Record";
    document.getElementById("recordicon").classList.remove("fa-stop");  
    document.getElementById("recordicon").classList.add("fa-microphone");
    document.getElementById("voiceroomvideo").pause();
    rec.exportWAV(showRecording);
}

function showRecording(blob){
    document.getElementById("studioView").hidden = false;
    var url = URL.createObjectURL(blob);
	var au = document.createElement('audio');	
	//add controls to the <audio> element
    au.controls = true;
    au.id = "voiceroomaudio";
	au.src = url;
	au.title = "original";
	au.className = "style34";
	
    document.getElementById("recordingsList").innerHTML = "";
    document.getElementById("recordingsList").appendChild(au);
    StoreToDataBase("RecordingsStore", "recordingName", "original", blob, 1);
    au.play();  
}

function changeVoiceToSurprise(){
    var themeVideo = document.getElementById("voiceroomvideo");
    var voiceroomaudio = document.getElementById("voiceroomaudio");
    themeVideo.src = "../../assets/videos/inspireme_GOTthemevideo.mp4";    
    transformRecordingFromDataBase("RecordingsStore", "recordingName", "original");  
    themeVideo.play();
    document.getElementById("unmuteButton").click();
    voiceroomaudio.addEventListener("ended", function(){
        document.getElementById("voiceroomvideo").pause();
        document.getElementById("unmuteButton").click();
    });
}

async function transformVoice(blob, audioElementID) { 
    var transformEffects = [ {name: "pitchShift", params: {shift: 0.1}}, {name: "speed", params: {multiplier: 1.2}}];
    let arrayBuffer = await blob.arrayBuffer();
    let ctx = new AudioContext();
    var outputAudioBuffer = await ctx.decodeAudioData(arrayBuffer); 
    var iter;
    for(iter = 0; iter < transformEffects.length; iter++){
     outputAudioBuffer = await window[transformEffects[iter].name+"Transformer"](outputAudioBuffer, transformEffects[iter].params);    
    }   
    let outputWavBlob = await audioBufferToWaveBlob(outputAudioBuffer); 
    globalTransformedVoiceBlob = outputWavBlob; 
    var audio = document.getElementById(audioElementID);
    audio.src = URL.createObjectURL(outputWavBlob);   
    audio.play();  
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
            transformVoice(value.result.recordingBlob, "voiceroomaudio");                                      
        };
  
        tx.oncomplete = function(){            
            db.close();
        };
        //set or retrieve data here.
        //onsuccess handlers for data set or retrieve.        
    };
  
};



//webkitURL is deprecated but nevertheless
URL = window.URL || window.webkitURL;

var globalAudioBuffer = null;
var gumStream; 						//stream from getUserMedia()
var rec; 							//Recorder.js object
var input; 							//MediaStreamAudioSourceNode we'll be recording
var listOfRecordings = [];


// shim for AudioContext when it's not avb. 
var AudioContext = window.AudioContext || window.webkitAudioContext;
var audioContext; //audio context to help us record

var recordButton = document.getElementById("recordButton");
var stopButton = document.getElementById("stopButton");
var pauseButton = document.getElementById("pauseButton");
var playButton = document.getElementById("playButton");

//add events to those 3 buttons
recordButton.addEventListener("click", startRecording);
stopButton.addEventListener("click", stopRecording);
pauseButton.addEventListener("click", pauseRecording);
playButton.addEventListener("click", pauseRecording);

function startRecording() {
	pauseButton.hidden = false;
	stopButton.hidden = false;
	console.log("recordButton clicked");

	/*
		Simple constraints object, for more advanced audio features see
		https://addpipe.com/blog/audio-constraints-getusermedia/
	*/

	var constraints = { audio: true, video: false };

	/*
	  Disable the record button until we get a success or fail from getUserMedia() 
  */

	recordButton.disabled = true;
	document.getElementById("recordingsoundwave").hidden = false;

	/*
    	We're using the standard promise based getUserMedia() 
    	https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia
	*/

	navigator.mediaDevices.getUserMedia(constraints).then(function (stream) {
		console.log("getUserMedia() success, stream created, initializing Recorder.js ...");

		/*
			create an audio context after getUserMedia is called
			sampleRate might change after getUserMedia is called, like it does on macOS when recording through AirPods
			the sampleRate defaults to the one set in your OS for your playback device

		*/
		audioContext = new AudioContext();

		//update the format 
		//document.getElementById("formats").innerHTML="Format: 1 channel pcm @ "+audioContext.sampleRate/1000+"kHz";

		/*  assign to gumStream for later use  */
		gumStream = stream;

		/* use the stream */
		input = audioContext.createMediaStreamSource(stream);

		/* 
			Create the Recorder object and configure to record mono sound (1 channel)
			Recording 2 channels  will double the file size
		*/
		rec = new Recorder(input, { numChannels: 2 });

		//start the recording process
		rec.record();

		console.log("Recording started");

	}).catch(function (err) {
		//enable the record button if getUserMedia() fails
		recordButton.disabled = false;
		stopButton.disabled = true;
		pauseButton.disabled = true;
	});
}

function pauseRecording() {
	if (rec.recording) {
		//pause
		rec.stop();
		playButton.hidden = false;
		pauseButton.hidden = true;
		document.getElementById("recordingsoundwave").hidden = true;
		console.log("pauseButton clicked rec.recording=", rec.recording);

	} else {
		//resume
		rec.record();
		pauseButton.hidden = false;
		playButton.hidden = true;
		document.getElementById("recordingsoundwave").hidden = false;
		console.log("playButton clicked rec.recording=", rec.recording);
	}
}

function stopRecording() {

	console.log("stopButton clicked");
	pauseButton.hidden = true;
	stopButton.hidden = true;
	document.getElementById("studioView").hidden = false;
	//document.getElementById("studioHideButton").hidden = false;
	document.getElementById("recordingsoundwave").hidden = true;


	//disable the stop button, enable the record too allow for new recordings
	recordButton.disabled = false;

	//tell the recorder to stop the recording
	rec.stop();

	//stop microphone access
	gumStream.getAudioTracks()[0].stop();

	//create the wav blob and pass it on to createDownloadLink
	rec.exportWAV(createDownloadLink);
}

function createDownloadLink(blob) {

	var url = URL.createObjectURL(blob);
	var au = document.createElement('audio');

	var li = document.createElement('li');
	var link = document.createElement('a');

	//name of .wav file to use during upload and download (without extension)
	var filename = prompt("Please name your recording", "Recording1");
	//new Date().toISOString();

	//add controls to the <audio> element
	au.controls = true;
	au.src = url;
	au.title = filename;
	au.className = "audioRecordedTrack";

	var numberofrecordings = listOfRecordings.push(url);
	var localStorageName = "record" + numberofrecordings.toString();
	localStorage.removeItem(localStorageName);
	localStorage.setItem(localStorageName, true);

	//save to disk link
	link.href = url;
	link.download = filename + ".mp3"; //download forces the browser to download the file using the  filename
	link.className = "audioDownloadButton";

	//add the new audio element to li
	li.className = "audioRecordedSection";
	li.appendChild(au);
	li.appendChild(link);
	StoreToDataBase("RecordingsStore", "recordingName", localStorageName, blob, numberofrecordings);

	//storeBlobToLocalStorage(blob, url, localStorageName);
	//transformVoice(blob, 1.9, localStorageName+"transform");
	//add the li element to the ol
	document.getElementById("recordingsList").appendChild(li);
	document.getElementById("load").style.display = "none";
	document.getElementById("who").style.display = "block";
	
	console.log(recordingsList);
}


// Function to convert recordings into base64 strings and store to local storage.
function storeBlobToLocalStorage(blob, audiosourceURL, filename) {
	var size = blob.size;
	var type = blob.type;

	var reader = new FileReader();
	reader.addEventListener("loadend", function () {
		// 1: play the base64 encoded data directly works
		// audioControl.src = reader.result;

		// 2: Serialize the data to localStorage and read it back then play...
		var base64FileData = reader.result.toString();
		var mediaFile = {
			fileUrl: audiosourceURL,
			size: blob.size,
			type: blob.type,
			src: base64FileData
		};

		// save the file info to localStorage
		localStorage.removeItem(filename);
		localStorage.setItem(filename, JSON.stringify(mediaFile));
		console.log(filename + ": stored to browser");
		// read out the file info from localStorage again
		//var reReadItem = JSON.parse(localStorage.getItem('myTest'));	
		//audioControl.src = reReadItem.src; 

	});

	reader.readAsDataURL(blob);
}


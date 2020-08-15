var CharacterList =
[{
    character: "Drama Queen",
    gifurl: "../assets/mobile/characters/DramaQueen.gif",
    effects: [{ name: "pitchShift", params: { shift: 0.35 } }]
},
{
    character: "Cry Baby",
    gifurl: "../assets/Gifs/characters/AngryBaby.gif",
    effects: [{ name: "pitchShift", params: { shift: 0.76 } }, { name: "speed", params: { multiplier: 1.2 } }]
},
{
    character: "Chill Pill",
    gifurl: "../assets/Gifs/characters/CoolGirl.gif",
    effects: [{ name: "pitchShift", params: { shift: 0.1 } }, { name: "speed", params: { multiplier: 1.2 } }]
},
{
    character: "Nosy Aunt",
    gifurl: "../assets/mobile/characters/nosyAunty.gif",
    effects: [{ name: "pitchShift", params: { shift: 0.35 } }]
},
{
    character: "Nagging Gran",
    gifurl: "../assets/Gifs/characters/OldLady.gif",
    effects: [{ name: "pitchShift", params: { shift: 0.6 } }, { name: "speed", params: { multiplier: 0.65 } }],
},
{
    character: "Jumpy Dad",
    gifurl: "../assets/Gifs/characters/JumpyDad.gif",
    effects: [{ name: "pitchShift", params: { shift: -0.29 } }]
},
{
    character: "The Saint",
    gifurl: "../assets/mobile/characters/saint.gif",
    effects: [{ name: "pitchShift", params: { shift: 0.4 } },
    { name: "speed", params: { multiplier: 0.75 } },
    { name: "delay", params: { feedback: 0.2, delayTime: 150, wetLevel: 0.2, dryLevel: 1, cutoff: 3000 } }]
},
{
    character: "Control Devil",
    gifurl: "../assets/mobile/characters/controlling.gif",
    effects: [{ name: "pitchShift", params: { shift: -0.6 } }, { name: "speed", params: { multiplier: 1.15 } }]
},
{
    character: "Little Boy",
    gifurl: "../assets/Gifs/characters/AngryBoy.gif",
    effects: [{ name: "pitchShift", params: { shift: 0.1 } }, { name: "speed", params: { multiplier: 1.2 } }]
},
{
    character: "Control Freak",
    gifurl: "../assets/mobile/characters/BossyBoss.gif",
    effects: [{ name: "pitchShift", params: { shift: -0.5 } }]
},
{
    character: "Angry Mom",
    gifurl: "../assets/Gifs/characters/angrymom.gif",
    effects: [{ name: "pitchShift", params: { shift: -0.2 } }, { name: "speed", params: { multiplier: 1.25 } }]
},
{
    character: "Vile Uncle",
    gifurl: "../assets/mobile/characters/scheming.gif",
    effects: [{ name: "pitchShift", params: { shift: -0.3 } }]
}];

//var audioFileUrl = localStorage.getItem("record1");
var au;
var currentrecording = 0;
var globalOriginalVoiceBlob = undefined;
var globalTransformedVoiceBlob = undefined;

au = document.getElementById("VoiceCharacterAudio");

function switchViewToFaceVoice(character) {
//do something
localStorage.setItem("SelectedCharacter", character);
let gifURL = CharacterList.find(obj => obj.character === character).gifurl;
localStorage.setItem("SelectedCharacterGif", gifURL);
let effects = CharacterList.find(obj => obj.character === character).effects;
localStorage.setItem("SelectedCharacterEffects", JSON.stringify(effects));
InitRoomAmbience2(localStorage.getItem("SelectedCharacterGif"));
}

function InitRoomAmbience2(selectedCharacter) {
  document.getElementById('charName').innerHTML = localStorage.getItem("SelectedCharacter")+ " says";
  document.getElementById('gifBig').style.backgroundImage = selectedCharacter;
  au.controls = true;
  //au.stop();
  au.src = "";
  au.title = "yourvoices";
  au.className = "audioRecordedTrack";
  document.getElementById("PlayButton").style.display = "block";
  document.getElementById("PlayButton").disabled = false;
  document.getElementById("audio").style.display = "none";
}

function playVoicesInLoop() {
  var checknext = currentrecording + 1;
  if (currentrecording < 5 && localStorage.getItem("record" + checknext.toString())) {
    currentrecording++;
  }
  else {
    currentrecording = 1;
  }
  var localname = "record" + currentrecording.toString();
  transformRecordingFromDataBase("RecordingsStore", "recordingName", localname);
  document.getElementById("PlayButton").disabled = true;
  document.getElementById("PlayButton").style.display = "none";
  document.getElementById("audio").style.display = "block";
}

function PlayNextOrLoop() {
  document.getElementById("PlayButton").disabled = false;
}

// function to transform the voice to a different character based on parameter passed from HTML
async function transformVoice(blob, transformEffects) {
  let arrayBuffer = await blob.arrayBuffer();
  let ctx = new AudioContext();
  var outputAudioBuffer = await ctx.decodeAudioData(arrayBuffer);
  var iter;
  for (iter = 0; iter < transformEffects.length; iter++) {
    outputAudioBuffer = await window[transformEffects[iter].name + "Transformer"](outputAudioBuffer, transformEffects[iter].params);
  }
  let outputWavBlob = await audioBufferToWaveBlob(outputAudioBuffer);
  globalTransformedVoiceBlob = outputWavBlob;
  au.src = URL.createObjectURL(outputWavBlob);
  au.play();
}


function transformRecordingFromDataBase(StoreName, IndexName, RecordingName) {
  window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
  if (!window.indexedDB) {
    alert("storage is unavailable");
  }

  let request = window.indexedDB.open("RecordingsDataBase", 1),
    db,
    tx,
    store,
    index;

  request.onerror = function (e) {
    console.log("There was an error: " + e.target.errorCode);
  };

  //used to get data or assign data to the database
  request.onsuccess = function (e) {
    db = request.result;
    tx = db.transaction(StoreName, "readwrite");
    store = tx.objectStore(StoreName);
    index = store.index(IndexName);

    db.onerror = function (e) {
      console.log("ERROR" + e.target.errorCode);
    }

    let value = index.get(RecordingName);
    value.onsuccess = function () {
      console.log("DB fetch success");
      globalOriginalVoiceBlob = value.result.recordingBlob;
      transformVoice(value.result.recordingBlob, JSON.parse(localStorage.getItem("SelectedCharacterEffects")));
    };

    tx.oncomplete = function () {
      db.close();
    };
    //set or retrieve data here.
    //onsuccess handlers for data set or retrieve.        
  };

};

function backVoiceRoom(){
  window.location.href = 'roomselection.html';
}

window.addEventListener('DOMContentLoaded', (event) => {
  switchViewToFaceVoice("Cry Baby");
});





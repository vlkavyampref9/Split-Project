
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
    document.getElementById("VoiceCharacterAudio").src = localStorage.getItem("record1");
    au.play();
    document.getElementById("PlayButton").disabled = true;   
}
    
window.addEventListener('DOMContentLoaded', (event) => {
   au = document.getElementById("VoiceCharacterAudio");
   InitRoomAmbience2(localStorage.getItem("SelectedCharacterGif"));
   au.addEventListener('onended', function(currentrecording){
    if(currentrecording < 5){
      currentrecording++;      
    }
    else{
      currentrecording = 1;
    }
    var localname = "record"+ currentrecording.toString();
    au.src = localStorage.getItem(localname);
    
  });
  });


/*
window.onload = function() {  
    var downloadButton = document.getElementById('testButton');
    var audioControl = document.getElementById('testAudio');   

    audioControl.onerror = function(){
        console.log(audioControl.error);
      };

      downloadButton.addEventListener('click', function() {

        audioControl.src = null;

        fetch(audioFileUrl)
          .then(function(res) {
            res.blob().then(function(blob) {
              var size = blob.size;
              var type = blob.type;

              var reader = new FileReader();
              reader.addEventListener("loadend", function() {

                // console.log('reader.result:', reader.result);

                // 1: play the base64 encoded data directly works
                // audioControl.src = reader.result;

                // 2: Serialize the data to localStorage and read it back then play...
                var base64FileData = reader.result.toString();

                var mediaFile = {
                  fileUrl: audioFileUrl,
                  size: blob.size,
                  type: blob.type,
                  src: base64FileData
                };

                // save the file info to localStorage
                localStorage.setItem('myTest', JSON.stringify(mediaFile));

                // read out the file info from localStorage again
                var reReadItem = JSON.parse(localStorage.getItem('myTest'));

                audioControl.src = reReadItem.src;

              });

              reader.readAsDataURL(blob);

            });
          });

      });

    };
    */
    

var globalAudioBlob = undefined;

function SwitchViewToVoiceRoom() { 
    localStorage.clear();
    window.location.href = 'views/roomselection.html';   
   }


//Storing data to indexedDB with structure
// recID, recordingName, blob; 

function StoreToDataBase(StoreName, IndexName, RecordingName, blob, id) {
    window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
    if(!window.indexedDB){
        alert("storage is unavailable");
    }

    let request = window.indexedDB.open("RecordingsDataBase", 1),
    db,
    tx,
    store,
    index;
    //first time creation of database triggers this to create the store.
    request.onupgradeneeded = function(e){        
        let db = request.result;
        //db.deleteObjectStore("RecordingsStore");
        let store = db.createObjectStore("RecordingsStore", {keyPath: "recID"}), //instead use {autoIncrement: true} - keys input.
        index = store.createIndex("recordingName", "recordingName", {unique: true});
       };

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

        store.put({recID: id, recordingName: RecordingName, recordingBlob: blob}).onsuccess = function(){
            console.log("data stored to DB"); 
        };
        //set or retrieve data here.
        //onsuccess handlers for data set or retrieve.

        tx.oncomplete = function(){            
            db.close();
        }
    };
};


async function GetRecordingFromDataBaseAndPlay(StoreName, IndexName, RecordingName, AudioElementID) {      

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
                globalAudioBlob = value.result.recordingBlob;             
                var au = document.getElementById(AudioElementID);
                au.src = URL.createObjectURL(value.result.recordingBlob);
                au.play();                      
            };
    
            tx.oncomplete = function(){            
                db.close();
            };
            //set or retrieve data here.
            //onsuccess handlers for data set or retrieve.        
        };
     
};

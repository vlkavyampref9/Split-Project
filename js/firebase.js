var app_fireBase = {};
(function(){
  var firebaseConfig = {
    apiKey: "AIzaSyAvRJzn26zU_2wzkC_8Q_mYCb1RoEzPHaE",
    authDomain: "konvos-21c61.firebaseapp.com",
    databaseURL: "https://konvos-21c61.firebaseio.com",
    projectId: "konvos-21c61",
    storageBucket: "konvos-21c61.appspot.com",
    messagingSenderId: "261174691399",
    appId: "1:261174691399:web:79ba2bf3c2fa711fd0d362",
    measurementId: "G-VBYKWM6MLL"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  app_fireBase = firebase;
  var uid = null;
  var name;
  firebase.auth().onAuthStateChanged(function(user) {
        firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);
        if (user) {
            // User is signed in.
            if(window.location.pathname=="/" || window.location.pathname=="/index.html" || window.location.pathname=="/views/options.html"){
              window.location.replace("/views/roomselection.html");
            }
            console.log(window.location.pathname);
            uid = user.id;
        }
        else{
            uid = null;
            //window.location.replace("../index.html");
        }
    });
  
  
})()

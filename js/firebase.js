var app_fireBase = {};
var mess = {};
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

  const messaging = firebase.messaging();

  messaging.usePublicVapidKey("BPQTBgJy7Oy07AjsrzTY9wfQso1rd0abkyyHd3iZXyMsg2MdZT7rH0xmKNlc6poRQ8UkCXWiSYo4Dl7cJCo_-y8");

  function InitializeFirebaseMessaging() {
    messaging
      .requestPermission()
      .then(function ()  {
        console.log("Notification Permission")
        return messaging.getToken();
      })
      .then(function (token) {
        console.log("Token : "+token);
        //document.getElementById("token").innerHTML=token;
      })
      .catch(function (reason) {
        console.log(reason);
      });
  }

  messaging.onMessage(function (payload) {
    console.log(payload);
    const notificationOption={
      body:payload.notification.body,
      icon:payload.notification.icon
    };

    if(Notification.permission==="granted"){
      var notification=new Notification(payload.notification.title,notificationOption);

      notification.onclick=function (ev) {
          ev.preventDefault();
          window.open(payload.notification.click_action,'_blank');
          notification.close();
      }
    }
  });
  messaging.onTokenRefresh(function () {
    messaging.getToken()
      .then(function (newtoken) {
        console.log("New Token : "+newtoken);
      })
      .catch(function (reason) {
        console.log(reason);
      })
  })
  mess.InitializeFirebaseMessaging = InitializeFirebaseMessaging;
  //InitializeFirebaseMessaging();
  
})()

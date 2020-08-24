importScripts('https://www.gstatic.com/firebasejs/7.17.2/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/7.19.0/firebase-messaging.js')

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

const messaging = firebase.messaging();
messaging.usePublicVapidKey("BPQTBgJy7Oy07AjsrzTY9wfQso1rd0abkyyHd3iZXyMsg2MdZT7rH0xmKNlc6poRQ8UkCXWiSYo4Dl7cJCo_-y8");


messaging.setBackgroundMessageHandler(function (payload){
    console.log(payload);
    const notification=JSON.parse(payload);
    const notificationOption={
        body:notification.body,
        icon:notification.icon
    };
    return self.registration.showNotification(payload.notification.title,notificationOption);
});
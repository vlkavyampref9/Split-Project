<?php
function sendNotification() {
    $url = "https://fcm.googleapis.com/fcm/send";

    $fields = array(
        "to"=>$_REQUEST['token'],
        "notification"=>array(
            "body"=>"Tap into your soul",
            "title"=>"Come to Konvos",
            "icon"=>"",
            "click_action"=>"https://google.com"
        )
    );

    $headers=array(
        'Authorization: key=AAAAPM85hkc:APA91bFmtTuuACx-uH3bAqFf9iWAGl9Y4sJ2cs4_Qk-UCCCRsuCQm1IQ-NWvuXH5_ZR86TghIj5Uuce-0bQ_AK3de5qKP0Cj7wC1VBXNddeQQSPQp71_ij1Ju6gVziPpKcW0uim3RvdR',
        'Content-Type:application/json'
    );

    $ch=curl_init();
    curl_setopt($ch,CURLOPT_URL,$url);
    curl_setopt($ch,CURLOPT_POST,true);
    curl_setopt($ch,CURLOPT_HTTPHEADER,$headers);
    curl_setopt($ch,CURLOPT_RETURNTRANSFER,true);
    curl_setopt($ch,CURLOPT_POSTFIELDS,json_encode($fields));
    $result=curl_exec($ch);
    print_r($result);
    curl_close($ch);
}
sendNotification();
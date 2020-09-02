function closeDiv() {
   document.getElementById("headAnimate").style.display = "none";
   document.getElementById("voiceAnimate").classList.add("voicefadein");
}

// close the div in 5 secs
window.setTimeout(closeDiv, 5000);

function InitRoomAmbience(themevideourl) {
   var letout = document.getElementById('letout');
   letout.innerHTML = localStorage.getItem("OutHead");
   letout.style = "transform:translateY(-50vh);transition-duration: 3s;transition-delay: 1s;color:rgb(218,218,218);font-size:40px;left:17vw;";
   var videoelement = document.getElementById("voiceroomvideo");
   videoelement.src = themevideourl;
   videoelement.play();
   document.getElementById("pauseButton").hidden = true;
   document.getElementById("playButton").hidden = true;
   document.getElementById("stopButton").hidden = true;
   document.getElementById("studioView").hidden = true;
   document.getElementById("recordingsoundwave").hidden = true;

}

var messageCues = [
   {Theme: "ventout", 
   CueList:[
      "What is the worst part about the way you feel right now?",
      "How often do you feel this way?",
      "Imagine your problem in front of you. Tell it that you will not stand for this any longer!",
      "If your circumstances allow, grab a pillow, take a deep breath and let out a big yell!",
      "Tell your problem to go-you-know-what itself. You can overcome this challenge and nothing will stop you! "
   ]},
   {Theme: "assertpositivity",
   CueList:[
      "What’s exciting in your life right now?",      
      "How could you put this energy towards something that’s bothering you?",      
      "What makes you happiest in life?",    
      "How could you transform the unhappy parts of your life into parts that you would be happy about?",     
      "Describe an idea, plan or goal that you would like to bring to fruition. What would that process look like?"
   ]},
   {Theme: "disconnectnegativity",
   CueList: [
      "What’s exciting in your life right now?",      
      "How could you put this energy towards something that’s bothering you?",     
      "What makes you happiest in life?",      
      "How could you transform the unhappy parts of your life into parts that you would be happy about?",     
      "Describe an idea, plan or goal that you would like to bring to fruition. What would that process look like?"
   ]},
   {Theme: "confrontfear",
   CueList: [
      "What is the worst part about the way you feel right now?",
      "How often do you feel this way?",
      "Imagine your fear in front of you. Tell it that you will not stand for this any longer!",
      "If your circumstances allow, grab a pillow, take a deep breath and let out a big yell!",
      "Tell your fear to go-you-know-what itself. You can overcome this challenge and nothing will stop you!"
   ]},

   {Theme: "pitchyouridea",
   CueList: [
   "Describe your product in one sentence?",
   "How Does Your Product or Service Work?",
   "Who are Your Customers?",
   "Why Do You Think People Want This Product?",
   "What Do You Want to Achieve Within the Next Six Months?",
   "What is Your Background?",
   "Why Did You Get Into This Business?",
   "How is Your Product or Service Better than Currently Existing Products or Services?",
   "How Easy is it to Improve Your Product?",
   "Who are Your Competitors?",
   "Are You Looking for a Partner or Money?",
   "How Do You Plan on Creating Awareness About Your Product or Service?",
   "How Scalable is Your Product or Service?",
   "Is It Possible to Mass Produce Your Product Without a Decrease in Quality?",
   "What are Your Sales?",
   "Who is Your Biggest Customer?",
   "How Much Does It Cost You to Produce Your Product or Provide Your Service?",
   "How Much are You Selling Your Product or Service for?",
   "How Many Purchases Do Your Customer Typically Make?",
   "What is Your Attrition Rate?",
   "How Did You Value Your Company the Way You Do?",
   "How Much Money Does the Company Have, and What is Your Cash Burn Rate?"
   ]},

   {Theme: "visualisegoals",
   CueList: [     
   "In 5 years, When somebody asks what you do for work, how do you respond?",
   "Describe your physical surroundings in as much detail as possible. Where are you working? Where do you live? Where do you spend your free time?",
   "Describe the people surrounding you–in your business and personal life.",
   "What is the atmosphere in your business and personal life? How do you contribute to that atmosphere?",
   "In your ideal future, What are you most proud of?",
   "What is your favorite way to spend your downtime?",
   "When somebody asks you for mentoring advice, what do you tell them?",
   "Describe the steps you had to take to get to where you are.",
   "Do you have any regrets? Explain.",
   "What would you have done differently to get here?",
   ]}
];
var count = -1;
var room = localStorage.getItem("SelectedTheme");
function displayMsg() {   
   var box = document.getElementById("msgBox");
   box.style.display = "block";    
   if (count >= (messageCues.find(obj => obj.Theme === room).CueList.length)-1){
      count = 0;          
   }
   else{
      count++;
   }
   box.innerHTML = messageCues.find(obj => obj.Theme === room).CueList[count];  
}

function toggleMusic() {
   var videoelement = document.getElementById("voiceroomvideo");
   var thisButton = document.getElementById("unmuteButton");
   var thatButton = document.getElementById("muteButton");
   videoelement.muted = videoelement.muted ? false : true;
   videoelement.volume = videoelement.muted ? 0 : 01;
   if (videoelement.muted == true){
      thatButton.style.display = "none";
      thisButton.style.display = "block";
   }
   else {
      thisButton.style.display = "none";
      thatButton.style.display = "block";
   }
}

window.addEventListener('DOMContentLoaded', (event) => {
   InitRoomAmbience(localStorage.getItem("SelectedThemeVideo"));
});

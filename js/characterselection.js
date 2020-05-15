
var CharacterList = [{character: "DramaQueen", gifurl: "../assets/Gifs/characters/DramaQueen.gif"},
{character: "FussyBaby", gifurl: "../assets/Gifs/characters/AngryBaby.gif"},
{character: "CoolGirl", gifurl: "../assets/Gifs/characters/CoolGirl.gif"},
{character: "NosyAunt", gifurl: "../assets/Gifs/characters/HawwAunty.gif"},
{character: "NaggingGran", gifurl: "../assets/Gifs/characters/OldLady.gif"}, 
{character: "JumpyDad", gifurl: "../assets/Gifs/characters/JumpyDad.gif"}, 
{character: "TheSaint", gifurl: "../assets/Gifs/characters/sage.gif"}, 
{character: "ControlDevil", gifurl: "../assets/Gifs/characters/controlling.gif"},
{character: "LittleBoy", gifurl: "../assets/Gifs/characters/AngryBoy.gif"}, 
{character: "ShakeUp", gifurl: "../assets/Gifs/characters/Shakeup.gif"}, 
{character: "AngryMom", gifurl: "../assets/Gifs/characters/angrymom.gif"}, 
{character: "VileUncle", gifurl: "../assets/Gifs/characters/scheming.gif"}
];




function switchViewToFaceVoice(character){
    //save all recordings to local storage.
    localStorage.setItem("SelectedCharacter", character);
    let gifURL =  CharacterList.find(obj => obj.character === character).gifurl;
    localStorage.setItem("SelectedCharacterGif", gifURL);
    window.location.href = 'faceyourvoice.html';   
}


var CharacterList = [{character: "Drama Queen", gifurl: "../assets/Gifs/characters/DramaQueen.gif"},
{character: "Fussy Baby", gifurl: "../assets/Gifs/characters/AngryBaby.gif"},
{character: "Cool Girl", gifurl: "../assets/Gifs/characters/CoolGirl.gif"},
{character: "Nosy Aunt", gifurl: "../assets/Gifs/characters/HawwAunty.gif"},
{character: "Nagging Gran", gifurl: "../assets/Gifs/characters/OldLady.gif"}, 
{character: "Jumpy Dad", gifurl: "../assets/Gifs/characters/JumpyDad.gif"}, 
{character: "The Saint", gifurl: "../assets/Gifs/characters/sage.gif"}, 
{character: "Control Devil", gifurl: "../assets/Gifs/characters/controlling.gif"},
{character: "Little Boy", gifurl: "../assets/Gifs/characters/AngryBoy.gif"}, 
{character: "Shake Up", gifurl: "../assets/Gifs/characters/Shakeup.gif"}, 
{character: "Angry Mom", gifurl: "../assets/Gifs/characters/angrymom.gif"}, 
{character: "Vile Uncle", gifurl: "../assets/Gifs/characters/scheming.gif"}
];




function switchViewToFaceVoice(character){
    //do something
    localStorage.setItem("SelectedCharacter", character);
    let gifURL =  CharacterList.find(obj => obj.character === character).gifurl;
    localStorage.setItem("SelectedCharacterGif", gifURL);
    window.location.href = 'faceyourvoice.html';   
}

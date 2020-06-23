
var CharacterList =
    [{
        character: "Drama Queen",
        gifurl: "../assets/Gifs/characters/DramaQueen.gif",
        effects: [{ name: "pitchShift", params: { shift: 0.35 } }]
    },
    {
        character: "Fussy Baby",
        gifurl: "../assets/Gifs/characters/AngryBaby.gif",
        effects: [{ name: "pitchShift", params: { shift: 0.76 } }, { name: "speed", params: { multiplier: 1.2 } }]
    },
    {
        character: "Cool Girl",
        gifurl: "../assets/Gifs/characters/CoolGirl.gif",
        effects: [{ name: "pitchShift", params: { shift: 0.1 } }, { name: "speed", params: { multiplier: 1.2 } }]
    },
    {
        character: "Nosy Aunt",
        gifurl: "../assets/Gifs/characters/HawwAunty.gif",
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
        character: "Saint",
        gifurl: "../assets/Gifs/characters/sage.gif",
        effects: [{ name: "pitchShift", params: { shift: 0.4 } },
        { name: "speed", params: { multiplier: 0.75 } },
        { name: "delay", params: { feedback: 0.2, delayTime: 150, wetLevel: 0.2, dryLevel: 1, cutoff: 3000 } }]
    },
    {
        character: "Control Devil",
        gifurl: "../assets/Gifs/characters/controlling.gif",
        effects: [{ name: "pitchShift", params: { shift: -0.6 } }, { name: "speed", params: { multiplier: 1.15 } }]
    },
    {
        character: "Little Boy",
        gifurl: "../assets/Gifs/characters/AngryBoy.gif",
        effects: [{ name: "pitchShift", params: { shift: 0.1 } }, { name: "speed", params: { multiplier: 1.2 } }]
    },
    {
        character: "Bossy Boss",
        gifurl: "../assets/Gifs/characters/bossyboss.gif",
        effects: [{ name: "pitchShift", params: { shift: -0.5 } }]
    },
    {
        character: "Angry Mom",
        gifurl: "../assets/Gifs/characters/angrymom.gif",
        effects: [{ name: "pitchShift", params: { shift: -0.2 } }, { name: "speed", params: { multiplier: 1.25 } }]
    },
    {
        character: "Vile Uncle",
        gifurl: "../assets/Gifs/characters/scheming.gif",
        effects: [{ name: "pitchShift", params: { shift: -0.3 } }]
    }];


function switchViewToFaceVoice(character) {
    //do something
    localStorage.setItem("SelectedCharacter", character);
    let gifURL = CharacterList.find(obj => obj.character === character).gifurl;
    localStorage.setItem("SelectedCharacterGif", gifURL);
    let effects = CharacterList.find(obj => obj.character === character).effects;
    localStorage.setItem("SelectedCharacterEffects", JSON.stringify(effects));
    window.location.href = 'faceyourvoice.html';
}

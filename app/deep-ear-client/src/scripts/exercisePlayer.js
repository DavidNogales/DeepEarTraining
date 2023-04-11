import abcjs from "abcjs";

var abcString = "X:1\nT:Speed the Plough\nM:4/4\nC:Trad.\nK:G\ng2gf g2Bd|g2f2 e2d2|c2ec B2dB|A2F2 G4:|\n";
var visualOptions = { responsive: 'resize' };
var synthControl = new abcjs.synth.SynthController();

export function renderAbc(divID,abc_song){
    console.log(divID)
    let visualObj = abcjs.renderAbc(divID, abc_song, visualOptions);
    console.log("rendered song")
    console.log(visualObj)
    activate_sound(visualObj)
}

function activate_sound(tunes) {    
    console.log("Activate audio clicked!")
    if (abcjs.synth.supportsAudio()) {
        var audioParams = { chordsOff: true };
        console.log("Supports audio!")
        var createSynth = new abcjs.synth.CreateSynth();
        createSynth.init({ visualObj: tunes[0]}).then(function () {
            synthControl.setTune(tunes[0], false, audioParams).then(function () {
                console.log("Audio successfully loaded.")
                
            }).catch(function (error) {
                console.warn("Audio problem:", error);
            });
        }).catch(function (error) {
            console.warn("Audio problem:", error);
        });
    } else {
        console.log("audio is not supported on this browser");
    };
}    

export function playTune(){
    console.log("play tune!")
    synthControl.play()
}

export function stopTune(){
    console.log("stop tune!")
    synthControl.stop()
}

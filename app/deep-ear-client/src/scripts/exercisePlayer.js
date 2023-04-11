import abcjs from "abcjs";
var abcString = "X:1\nT:Speed the Plough\nM:4/4\nC:Trad.\nK:G\n|:GABc dedB|dedB dedB|c2ec B2dB|c2A2 A2BA|\n  GABc dedB|dedB dedB|c2ec B2dB|A2F2 G4:|\n|:g2gf gdBd|g2f2 e2d2|c2ec B2dB|c2A2 A2df|\n  g2gf g2Bd|g2f2 e2d2|c2ec B2dB|A2F2 G4:|\n";
var visualOptions = { responsive: 'resize' };
var visualObj = abcjs.renderAbc("paper", abcString, visualOptions);
var synthControl = new abcjs.synth.SynthController();

document.querySelector(".activate-audio").addEventListener("click", activate);
function activate_sound(new_visualObj) {    
    console.log("Activate audio clicked!")
    if (abcjs.synth.supportsAudio()) {
        var audioParams = { chordsOff: true };
        console.log("Supports audio!")
        var createSynth = new abcjs.synth.CreateSynth();
        createSynth.init({ visualObj: visualObj[0] }).then(function () {
            synthControl.setTune(visualObj[0], false, audioParams).then(function () {
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
document.querySelector(".start").addEventListener("click", playTune);
function playTune(){
    console.log("play tune!")
    synthControl.play()
}
document.querySelector(".show-editor").addEventListener("click", showEditor);
function showEditor(){
    console.log("Show Editor!")
    var abc_editor = new abcjs.Editor("abc", { 
        canvas_id: "paper", 
        warnings_id:"warnings" 
    });
    const textarea = document.querySelector('#abc');
    textarea.addEventListener('input', () => {
        abc_editor.fireChanged();
    });
    textarea.innerHTML = abcString
    abc_editor.fireChanged();
}
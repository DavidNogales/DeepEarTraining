import abcjs from "abcjs";

//var abcString = "X:1\nT:Speed the Plough\nM:4/4\nC:Trad.\nK:G\ng2gf g2Bd|g2f2 e2d2|c2ec B2dB|A2F2 G4:|\n";
//var visualOptions = { responsive: 'resize' };
var synthControl = new abcjs.synth.SynthController();

export class Player{
    constructor(){
        this.visualOptions = { responsive: 'resize' };
    }
    setNewEditor(editAreaID,canvasID,warningsID){
        var editor = new abcjs.Editor(editAreaID, {
            canvas_id: canvasID,
            warnings_id: warningsID,
            onchange: ()=> {
                // your code here
                console.log("changed editAre inside the options of the editor created")
                const notationInput = document.querySelector('#notation-input');
                synthControl.pause();
                synthControl = new abcjs.synth.SynthController();
                this.renderAbcSong(canvasID,notationInput.value)
            },
            abcjsParams: {}
        });
    }

    renderAbcSong(divID,abc_song){
        //console.log(divID)
        let visualObj = abcjs.renderAbc(divID, abc_song, this.visualOptions);
        //console.log("rendered song")
        //console.log(visualObj)
        this.activate_sound(visualObj)
    }

    activate_sound(tunes) {    
        //console.log("Activate audio clicked!")
        synthControl = new abcjs.synth.SynthController();
        if (abcjs.synth.supportsAudio()) {
            var audioParams = { chordsOff: true };
            //console.log("Supports audio!")
            var createSynth = new abcjs.synth.CreateSynth();
            createSynth.init({visualObj: tunes[0]}).then(function () {
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
    restartTune(){
        synthControl.restart()
    }

    playTune(){
        synthControl.play();
    }

    pauseTune(){
        synthControl.pause();
    }
}

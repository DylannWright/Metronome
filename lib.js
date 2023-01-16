// metronome
console.log("Setting up metronome");
const btnDecrease = document.getElementById("btnDecreaseBPM")
const btnIncrease = document.getElementById("btnIncreaseBPM")
const bpmInput = document.getElementById("txtBPM");

//beats mer minute
var bpm = 60;

bpmInput.onchange = function (e) {
    bpm = parseInt(bpmInput.value);
    if (isNaN(bpm)) {
        bpm = 50;
    }
    console.log(bpm);
}

btnDecreaseBPM.onclick = function (e) {
    bpm -= 1
    console.log("bpm")
    updateBPM();

}

btnIncreaseBPM.onclick = function (e) {
    bpm += 1
    console.log("bpm")
    updateBPM();

}
function updateBPM() {
    bpmInput.value = bpm

}


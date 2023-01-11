// metronome
console.log("Setting up metronome");
const btnDecrease = document.getElementById("btnDecreaseBPM")
const btnInecrease = document.getElementById("btnIncreaseBPM")

//beats mer minute
var bpm = 60;


btnDecreaseBPM.onclick = function (e) {
    bpm -= 1

}


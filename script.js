var play, oscillator, changeFreq, changeType

var oscProp = {
    type: "square",
    frequency: 20,
    playing: false
}

var audioContext = new AudioContext()

window.onload = function(){
    play = function(){
        if(oscProp.playing){
            oscillator.stop()
            oscProp.playing = false
        } else {
            oscillator = audioContext.createOscillator()
            oscillator.type = oscProp.type
            oscillator.frequency.setValueAtTime(oscProp.frequency, audioContext.currentTime)
            oscillator.connect(audioContext.destination)
            oscillator.start()
            oscProp.playing = true
        }
    }

    changeFreq = function(){
        oscProp.frequency = document.getElementById("freqslider").value * 3
        play()
        play()
    }

    changeType = function(){
        oscProp.type = document.querySelector("input[name = 'waveform']:checked").value
        play()
        play()
    }

}




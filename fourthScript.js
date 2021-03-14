var play, play2, oscillator, oscillator2, changeFreq, changeType

var oscProp = {
    type: "square",
    frequency: 20,
    playing: false
}

var oscProp2 = {
    type: "square",
    frequency: 20,
    playing: false
}

var audioContext = new AudioContext()

window.onload = function(){
    play = function(){
        if(oscProp.playing && oscProp2.playing){
            oscillator.stop()
            oscillator2.stop()
            oscProp.playing = false
            oscProp2.playing = false
        } else {
            oscillator = audioContext.createOscillator()
            oscillator2 = audioContext.createOscillator()
            oscillator.type = oscProp.type
            oscillator2.type = oscProp2.type
            oscillator.frequency.setValueAtTime(oscProp.frequency, audioContext.currentTime)
            oscillator2.frequency.setValueAtTime(oscProp2.frequency, audioContext.currentTime)
            oscillator.connect(audioContext.destination)
            oscillator2.connect(audioContext.destination)
            oscillator.start()
            oscillator2.start()
            oscProp.playing = true
            oscProp2.playing = true
        }
    }

    changeType = function(){
        oscProp.type = document.querySelector("input[name = 'waveform']:checked").value
        oscProp2.type = document.querySelector("input[name = 'waveform']:checked").value
        play()
        play()
    }

    let mouseState = false

    document.getElementById("grid").addEventListener('mousedown', () => {
        mouseState = true
        console.log(mouseState)
    })

    document.getElementById("grid").addEventListener('mouseup', () => {
        mouseState = false
        console.log(mouseState)
    })


    document.getElementById("grid").addEventListener('mousemove', (e) => {
        let x = e.clientX
        let y = e.clientY
        if(mouseState === true){
            console.log(x, y)
        }
    })

    changeFreq = function(){
        oscProp.frequency = document.getElementById("freqslider").value * 3
        play()
        play()
    }

    changeFreq2 = function(){
        oscProp2.frequency = document.getElementById("freqslider2").value * 2
        play()
        play()
    }
}
var play, play2, oscillator, oscillator2, changeType

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

    play2 = function(){
        if(oscProp2.playing){
            oscillator2.stop(
            oscProp2.playing = false
            )
        } else {
            oscillator2 = audioContext.createOscillator()
            oscillator2.type = oscProp2.type
            oscillator2.frequency.setValueAtTime(oscProp2.frequency, audioContext.currentTime)
            oscillator2.connect(audioContext.destination)
            oscillator2.start()
            oscProp2.playing = true
        }
    }

    changeType = function(){
        oscProp.type = document.querySelector("input[name = 'waveform']:checked").value
        play()
        play()
        oscProp2.type = document.querySelector("input[name = 'waveform']:checked").value
        play2()
        play2()
    }

    let mouseState = false
    let x = null
    let y = null

    document.getElementById("grid").addEventListener('mousedown', () => {
        mouseState = true
    })

    document.getElementById("grid").addEventListener('mouseup', () => {
        mouseState = false
    })

    document.getElementById("grid").addEventListener('mousemove', (e) => {
        x = e.clientX
        y = e.clientY
    })

    function changeFreq(){
        oscProp.frequency = x
    }

    function changeFreq2(){
        oscProp2.frequency = y
    }

    document.getElementById("grid").addEventListener('mousemove', () => {
        if(mouseState = true){
            changeFreq()
            play()
            play()
            changeFreq2()
            play2()
            play2()
        }
    })
}
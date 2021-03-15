var play, play2, play3, play4, play5, oscillator, oscillator2, oscillator3, oscillator4, oscillator5, changeType, changeType2

var oscProp = { // principal osc for all possible combos
    type: "square",
    frequency: 20,
    playing: false
}

var oscProp2 = { // y-axis osc if 2D is selected
    type: "square",
    frequency: 20,
    playing: false
}

var oscProp3 = { // P5 osc in 1D
    type: "square",
    frequency: 20,
    playing: false
}

var oscProp4 = { // P4 osc in 1D
    type: "square",
    frequency: 20,
    playing: false
}

var oscProp5 = { // M3 osc in 1D
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
            oscillator2.stop()
            oscProp2.playing = false
        } else {
            if(document.getElementById("poly-radio").checked){
                oscillator2 = audioContext.createOscillator()
                oscillator2.type = oscProp2.type
                oscillator2.frequency.setValueAtTime(oscProp2.frequency, audioContext.currentTime)
                oscillator2.connect(audioContext.destination)
                oscillator2.start()
                oscProp2.playing = true
            }
        }
    }

    play3 = function(){
        if(oscProp3.playing){
            oscillator3.stop()
            oscProp3.playing = false
        } else {
            if(document.getElementById("P5").checked && !document.getElementById("poly-radio").checked){
                oscillator3 = audioContext.createOscillator()
                oscillator3.type = oscProp3.type
                oscillator3.frequency.setValueAtTime(oscProp3.frequency, audioContext.currentTime)
                oscillator3.connect(audioContext.destination)
                oscillator3.start()
                oscProp3.playing = true
            }
        }
    }

    play4 = function(){
        if(oscProp4.playing){
            oscillator4.stop()
            oscProp4.playing = false
        } else {
            if(document.getElementById("P4").checked && !document.getElementById("poly-radio").checked){
                oscillator4 = audioContext.createOscillator()
                oscillator4.type = oscProp4.type
                oscillator4.frequency.setValueAtTime(oscProp4.frequency, audioContext.currentTime)
                oscillator4.connect(audioContext.destination)
                oscillator4.start()
                oscProp4.playing = true
            }
        }
    }

    play5 = function(){
        if(oscProp5.playing){
            oscillator5.stop()
            oscProp5.playing = false
        } else {
            if(document.getElementById("M3").checked && !document.getElementById("poly-radio").checked){
                oscillator5 = audioContext.createOscillator()
                oscillator5.type = oscProp5.type
                oscillator5.frequency.setValueAtTime(oscProp5.frequency, audioContext.currentTime)
                oscillator5.connect(audioContext.destination)
                oscillator5.start()
                oscProp5.playing = true
            }
        }
    }

    changeType = function(){
        oscProp.type = document.querySelector("input[name = 'waveform']:checked").value
        oscProp3.type = document.querySelector("input[name = 'waveform']:checked").value
        oscProp4.type = document.querySelector("input[name = 'waveform']:checked").value
        oscProp5.type = document.querySelector("input[name = 'waveform']:checked").value
        play()
        play()
        play3()
        play3()
        play4()
        play4()
        play5()
        play5()
    }

    changeType2 = function(){
        oscProp2.type = document.querySelector("input[name = 'waveform2']:checked").value
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
        oscProp3.frequency = x * 1.5
        oscProp4.frequency = x * 1.33333333333
        oscProp5.frequency = x * 1.25
    }

    function changeFreq2(){
        oscProp2.frequency = y
    }

    document.getElementById("grid").addEventListener('mousemove', () => {
        if(mouseState = true){
            changeFreq()
            play()
            play()
            play3()
            play3()
            play4()
            play4()
            play5()
            play5()
            changeFreq2()
            play2()
            play2()
        }
    })
}
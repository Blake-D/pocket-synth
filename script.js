var play, play2, play3, play4, play5, play6, play7, play8, play9, play10, oscillator, oscillator2, oscillator3, oscillator4, oscillator5, oscillator6, oscillator7, oscillator8, oscillator9, oscillator10, changeType, changeType2

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

var oscProp6 = { // m3 osc in 1D
    type: "square",
    frequency: 20,
    playing: false
}

var oscProp7 = { // M2 osc in 1D
    type: "square",
    frequency: 20,
    playing: false
}

var oscProp8 = { // m2 osc in 1D
    type: "square",
    frequency: 20,
    playing: false
}

var oscProp9 = { // tremolo osc in 1D
    type: "square",
    frequency: 20,
    playing: false
}

var oscProp10 = { // m6 osc in 1D
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
            if(document.getElementById("P5").checked && !document.getElementById("poly-radio").checked && !document.getElementById("trem-on").checked){
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
            if(document.getElementById("P4").checked && !document.getElementById("poly-radio").checked && !document.getElementById("trem-on").checked){
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
            if(document.getElementById("M3").checked && !document.getElementById("poly-radio").checked && !document.getElementById("trem-on").checked){
                oscillator5 = audioContext.createOscillator()
                oscillator5.type = oscProp5.type
                oscillator5.frequency.setValueAtTime(oscProp5.frequency, audioContext.currentTime)
                oscillator5.connect(audioContext.destination)
                oscillator5.start()
                oscProp5.playing = true
            }
        }
    }

    play6 = function(){
        if(oscProp6.playing){
            oscillator6.stop()
            oscProp6.playing = false
        } else {
            if(document.getElementById("m3").checked && !document.getElementById("poly-radio").checked && !document.getElementById("trem-on").checked){
                oscillator6 = audioContext.createOscillator()
                oscillator6.type = oscProp6.type
                oscillator6.frequency.setValueAtTime(oscProp6.frequency, audioContext.currentTime)
                oscillator6.connect(audioContext.destination)
                oscillator6.start()
                oscProp6.playing = true
            }
        }
    }

    play7 = function(){
        if(oscProp7.playing){
            oscillator7.stop()
            oscProp7.playing = false
        } else {
            if(document.getElementById("M2").checked && !document.getElementById("poly-radio").checked && !document.getElementById("trem-on").checked){
                oscillator7 = audioContext.createOscillator()
                oscillator7.type = oscProp7.type
                oscillator7.frequency.setValueAtTime(oscProp7.frequency, audioContext.currentTime)
                oscillator7.connect(audioContext.destination)
                oscillator7.start()
                oscProp7.playing = true
            }
        }
    }

    play8 = function(){
        if(oscProp8.playing){
            oscillator8.stop()
            oscProp8.playing = false
        } else {
            if(document.getElementById("m2").checked && !document.getElementById("poly-radio").checked && !document.getElementById("trem-on").checked){
                oscillator8 = audioContext.createOscillator()
                oscillator8.type = oscProp8.type
                oscillator8.frequency.setValueAtTime(oscProp8.frequency, audioContext.currentTime)
                oscillator8.connect(audioContext.destination)
                oscillator8.start()
                oscProp8.playing = true
            }
        }
    }

    play9 = function(){
        if(oscProp9.playing){
            oscillator9.stop()
            oscProp9.playing = false
        } else {
            if(document.getElementById("trem-on").checked && !document.getElementById("poly-radio").checked){
                oscillator9 = audioContext.createOscillator()
                oscillator9.type = oscProp9.type
                oscillator9.frequency.setValueAtTime(oscProp9.frequency, audioContext.currentTime)
                oscillator9.connect(audioContext.destination)
                oscillator9.start()
                oscProp9.playing = true
            }
        }
    }

    play10 = function(){
        if(oscProp10.playing){
            oscillator10.stop()
            oscProp10.playing = false
        } else {
            if(document.getElementById("m6").checked && !document.getElementById("poly-radio").checked && !document.getElementById("trem-on").checked){
                oscillator10 = audioContext.createOscillator()
                oscillator10.type = oscProp10.type
                oscillator10.frequency.setValueAtTime(oscProp10.frequency, audioContext.currentTime)
                oscillator10.connect(audioContext.destination)
                oscillator10.start()
                oscProp10.playing = true
            }
        }
    }

    changeType = function(){
        oscProp.type = document.querySelector("input[name = 'waveform']:checked").value
        oscProp3.type = document.querySelector("input[name = 'waveform']:checked").value
        oscProp4.type = document.querySelector("input[name = 'waveform']:checked").value
        oscProp5.type = document.querySelector("input[name = 'waveform']:checked").value
        oscProp6.type = document.querySelector("input[name = 'waveform']:checked").value
        oscProp7.type = document.querySelector("input[name = 'waveform']:checked").value
        oscProp8.type = document.querySelector("input[name = 'waveform']:checked").value
        oscProp9.type = document.querySelector("input[name = 'waveform']:checked").value
        oscProp10.type = document.querySelector("input[name = 'waveform']:checked").value
        play()
        play()
        play3()
        play3()
        play4()
        play4()
        play5()
        play5()
        play6()
        play6()
        play7()
        play7()
        play8()
        play8()
        play9()
        play9()
        play10()
        play10()
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
        oscProp6.frequency = x * 1.2
        oscProp7.frequency = x * 1.125
        oscProp8.frequency = x * 1.06666666667
        oscProp9.frequency = x * 1.01
        oscProp10.frequency = x * 1.6
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
            play6()
            play6()
            play7()
            play7()
            play8()
            play8()
            play9()
            play9()
            play10()
            play10()
            changeFreq2()
            play2()
            play2()
        }
    })
}
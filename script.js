var playX, 
    playY, 
    playX2, 
    oscillatorX, 
    oscillatorY, 
    oscillatorX2,  
    changeTypeX, 
    changeTypeY

var oscX = { // principal osc for all possible combos
    type: "square",
    frequency: 20,
    playing: false
}

var oscY = { // y-axis osc if 2D is selected
    type: "square",
    frequency: 20,
    playing: false
}

var oscX2 = { // harmonizing frequency in 1D
    type: "square",
    frequency: 20,
    playing: false
}

var audioContext = new AudioContext()

window.onload = function(){
    playX = function(){ 
        if(oscX.playing){
            oscillatorX.stop()
            oscX.playing = false
        } else {
            oscillatorX = audioContext.createOscillator()
            oscillatorX.type = oscX.type
            oscillatorX.frequency.setValueAtTime(oscX.frequency, audioContext.currentTime)
            oscillatorX.connect(audioContext.destination)
            oscillatorX.start()
            oscX.playing = true
        }
    }

    playY = function(){
        if(oscY.playing){
            oscillatorY.stop()
            oscY.playing = false
        } else {
            if(document.getElementById("poly-radio").checked){
                oscillatorY = audioContext.createOscillator()
                oscillatorY.type = oscY.type
                oscillatorY.frequency.setValueAtTime(oscY.frequency, audioContext.currentTime)
                oscillatorY.connect(audioContext.destination)
                oscillatorY.start()
                oscY.playing = true
            }
        }
    }

    playX2 = function(){
        if(oscX2.playing){
            oscillatorX2.stop()
            oscX2.playing = false
        } else {
            if(!document.getElementById("poly-radio").checked && !document.getElementById("P1").checked){
                oscillatorX2 = audioContext.createOscillator()
                oscillatorX2.type = oscX2.type
                oscillatorX2.frequency.setValueAtTime(oscX2.frequency, audioContext.currentTime)
                oscillatorX2.connect(audioContext.destination)
                oscillatorX2.start()
                oscX2.playing = true
            }
        }
    }

    changeTypeX = function(){
        oscX.type = document.querySelector("input[name = 'waveform']:checked").value
        oscX2.type = document.querySelector("input[name = 'waveform']:checked").value
        playX()
        playX()
        playX2()
        playX2()
    }

    changeTypeY = function(){
        oscY.type = document.querySelector("input[name = 'waveform2']:checked").value
        playY()
        playY()
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

    function changeFreqX(){
        oscX.frequency = x
        if(document.getElementById("P5").checked && !document.getElementById("trem-on").checked){
            oscX2.frequency = x * 1.5  
        } else if(document.getElementById("P4").checked && !document.getElementById("trem-on").checked){
            oscX2.frequency = x * 1.33333333333
        } else if(document.getElementById("M3").checked && !document.getElementById("trem-on").checked){
            oscX2.frequency = x * 1.25
        } else if(document.getElementById("m3").checked && !document.getElementById("trem-on").checked){
            oscX2.frequency = x * 1.2
        } else if(document.getElementById("M2").checked && !document.getElementById("trem-on").checked){
            oscX2.frequency = x * 1.125
        } else if(document.getElementById("m2").checked && !document.getElementById("trem-on").checked){
            oscX2.frequency = x * 1.06666666667
        } else if(document.getElementById("trem-on").checked){
            oscX2.frequency = x * 1.01
        }
    }

    function changeFreqY(){
        oscY.frequency = y
    }

    document.getElementById("grid").addEventListener('mousemove', () => {
        if(mouseState = true){
            changeFreqX()
            playX()
            playX()
            playX2()
            playX2()
            changeFreqY()
            playY()
            playY()
        }
    })
}
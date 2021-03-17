var playX, 
    playY, 
    playX2, 
    oscillatorX, 
    oscillatorY, 
    oscillatorX2,  
    changeTypeX, 
    changeTypeY

var oscX = { // primary oscillator for all possible combos, frequency is tied to X-axis
    type: "sine",
    frequency: 20,
    playing: false
}

var oscY = { // Y-axis osc if 2D is selected
    type: "sine",
    frequency: 20,
    playing: false
}

var oscX2 = { // harmonizing osc in 1D, linked to X-axis
    type: "sine",
    frequency: 20,
    playing: false
}

var audioContext = new AudioContext()

window.onload = function(){
    playX = function(){ 
        if(oscX.playing){ // stops the primary osc if it's already playing
            oscillatorX.stop()
            oscX.playing = false
        } else { //otherwise generates and starts it
            oscillatorX = audioContext.createOscillator()
            oscillatorX.type = oscX.type
            oscillatorX.frequency.setValueAtTime(oscX.frequency, audioContext.currentTime)
            oscillatorX.connect(audioContext.destination)
            oscillatorX.start()
            oscX.playing = true
        }
    }

    playY = function(){
        if(oscY.playing){ // stops the Y-axis osc if it's already playing
            oscillatorY.stop()
            oscY.playing = false
        } else { // otherwise creates and starts it (if the 2D radio button is selected)
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
        if(oscX2.playing){ // stops the harmonizing osc if it's already playing
            oscillatorX2.stop()
            oscX2.playing = false
        } else { // otherwise creates and starts it (if the 2D radio button is not selected)
            if(!document.getElementById("poly-radio").checked){
                oscillatorX2 = audioContext.createOscillator()
                oscillatorX2.type = oscX2.type
                oscillatorX2.frequency.setValueAtTime(oscX2.frequency, audioContext.currentTime)
                oscillatorX2.connect(audioContext.destination)
                oscillatorX2.start()
                oscX2.playing = true
            }
        }
    }

    changeTypeX = function(){ // changes the waveform type of the X and X2 oscillator, based on the 'waveform' options in index.html. X and X2 can only be set to the same type.
        oscX.type = document.querySelector("input[name = 'waveform']:checked").value
        oscX2.type = document.querySelector("input[name = 'waveform']:checked").value
        playX()
        playX()
        playX2()
        playX2()
    }

    changeTypeY = function(){ // changes the waveform type of the Y-axis oscillator, based on the 'waveform' option in index.html. X and Y don't need to be set to the same type.
        oscY.type = document.querySelector("input[name = 'waveform2']:checked").value
        playY()
        playY()
    }

    // determines the state of the mouse (down or up). the mousemove event listener below can only call the changeFreq functions if mouseState is true
    let mouseState = false
    let x = null
    let y = null

    document.getElementById("grid").addEventListener('mousedown', () => {
        mouseState = true
    })

    document.getElementById("grid").addEventListener('mouseup', () => {
        mouseState = false
    })

    // grabs the mouse's x and y coordinates and uses them to inform the changeFreq functions
    document.getElementById("grid").addEventListener('mousemove', (e) => {
        x = e.clientX
        y = e.clientY
    })

    function changeFreqX(){
        oscX.frequency = x // changes the primary osc frequency
        if(document.getElementById("trem-on").checked){ // formes the tremolo frequency, relative to primary
            oscX2.frequency = x * 1.01
        } else if(!document.getElementById("trem-on").checked && document.getElementById("m2").checked){ // forms minor 2nd, relative to primary
            oscX2.frequency = x * 1.06666666667
        } else if(!document.getElementById("trem-on").checked && document.getElementById("M2").checked){ // forms major 2nd
            oscX2.frequency = x * 1.125
        } else if(!document.getElementById("trem-on").checked && document.getElementById("m3").checked){ // minor 3rd
            oscX2.frequency = x * 1.2
        } else if(!document.getElementById("trem-on").checked && document.getElementById("M3").checked){ // major 3rd
            oscX2.frequency = x * 1.25
        } else if(!document.getElementById("trem-on").checked && document.getElementById("P4").checked){ // perfect 4th
            oscX2.frequency = x * 1.33333333333
        } else if(!document.getElementById("trem-on").checked && document.getElementById("P5").checked){ // perfect 5th
            oscX2.frequency = x * 1.5
        } else{ // if just P1 selected, no trem, in 1D
            oscX2.frequency = null
        }
    }

    function changeFreqY(){ // changes Y-axis osc frequency
        oscY.frequency = y
    }

    document.getElementById("grid").addEventListener('mousemove', () => { // calls the changeFreq functions if mouse is down
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

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var i = 4,
    j = 4,
    speed = 1,
    isBottom = false;

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#07C';
    ctx.lineCap = 'round';
    ctx.shadowBlur = 18;
    ctx.shadowColor = "#07C";
    ctx.fillRect(i, j, 210, 10);
	
    if (!isBottom && j < canvas.height - 14){
        j += speed;
    } else if (j === canvas.height - 14){
        isBottom = true;
    }
	
    if (isBottom && j > 4){
        j -= speed;
    } else if (j === 4){
        isBottom = false;
    }
    requestAnimationFrame(draw);
}

function stopDraw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    requestAnimationFrame(stopDraw);
}

document.getElementById("grid").addEventListener('mousedown', () => {
    draw()
})

document.getElementById("grid").addEventListener('mouseup', () => {
    stopDraw()
})
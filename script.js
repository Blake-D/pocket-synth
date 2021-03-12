var audioContext = new AudioContext() 
var oscillator = audioContext.createOscillator()
var filter = audioContext.createBiquadFilter()
oscillator.connect(audioContext.destination) 

// vv if you want to run the oscillator through a highpass filter
// oscillator.connect(filter)
// filter.connect(audioContext.destination)
// filter.type = "highpass"
// filter.frequency.setTargetAtTime(1000, audioContext.currentTime, 0)

// let activated = false

// function oscillate(){
//     if(activated == false){
//         var audioContext = new AudioContext() 
//         var oscillator = audioContext.createOscillator()
//         var filter = audioContext.createBiquadFilter()
//         oscillator.connect(audioContext.destination)
//         oscillator.start()
//         activated = true
//     } else if(activated == true){
//         oscillator.stop()
//         activated = false
//     }
// }



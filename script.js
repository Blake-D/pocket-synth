var audioContext = new AudioContext() 
var oscillator = audioContext.createOscillator()
// var filter = audioContext.createBiquadFilter()
oscillator.connect(audioContext.destination) 
oscillator.type = "square"
// vv if you want to run the oscillator through a highpass filter
// oscillator.connect(filter)
// filter.connect(audioContext.destination)
// filter.type = "highpass"
// filter.frequency.setTargetAtTime(2000, audioContext.currentTime, 0)

oscillator.frequency.setValueAtTime(130.4, audioContext.currentTime)
oscillator.detune.setValueAtTime(200, audioContext.currentTime + 1)

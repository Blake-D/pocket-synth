# **Why?**

I'm an active composer and bandleader. I formed somewhat of an experimental orchestra back in the mid-2010's purely as a vehicle for premiering my own compositions. As a lover of horror movie soundtracks (and the mid-20th century sound-mass compositions many of them are based on), I'm an avid fan of **portamento**; In my opinion, the coolest way to get from note to note is to **slide** from one to the other. I just love the imagery it invokes in my mind, like snakes slithering across the floor.

So I tend to write a lot of music that incorporates portamento. I've written entire compositions in which the *only* kind of motion from note to note is by portamento. Those compositions are some of my favorite. Unfortunately, I haven't been able to premier many of those pieces. There aren't many everyday instruments that are capable of portamento. Trombones can do it, but there is only one trombonist in my orchestra. Orchestral instruments like the violin and cello are capable of it, but there are very few of those in my orchestra as well. My group is mostly made up of woodwinds and guitarists, with some brass and a couple of violists.

At one point I started to get creative: I bought a small collection of violins and tried teaching some of the more multi-talented members of the orchestra how to perform specific compositions that didn't require classical knowledge of the instrument. Performances of those pieces were met with moderate levels of success at best. And even still, we were limited to the small amount of violins I could afford.

So I started considering electronic means of producing portamento. Theramins can do it, but no one owns a theramin (and anyone who does barely even knows how to play it). Some keyboards have modulation wheels on them that allow the player to bend notes up or down, but usually only within a fairly limited range. Plus, those keyboards tend to be expensive, and not many people I know own them. 

So once I dug into javascript and web development enough, it finally dawned on me to make my own. 

Hence:

# **WEB OSCILLATOR**

[Try it out!](https://blake-d.github.io/web-oscillator/)

![Screenshot](screen_shot.png)

Web Oscillator is an online synthesizer that presents the user with a two dimensional grid. The user can produce a pitch by clicking on the grid and holding the mouse down; the pitch will continue to drone for as long as the mouse is pressed. Dragging the mouse cursor across the grid's X access will change the pitch. The pitch's frequency it determined by the cursor's X coordinates on the page; every time the X coordinate changes, the pitch changes. Therefore, virtual portamento is achieved in the process. Depending on the size of the screen (thus the width of the screen's x axis), the user can achieve seemless portamento across a wider range of octaves than most orchestral and electronic instruments are capable of reaching without a break in sound production.

The user can select between four different waveforms: sine, square, sawtooth, and triangle. They can also toggle a tremolo effect, or set the drone to produce a chord instead of a solo pitch. Or if the user is feeling particularly adventurous, there is also a 2-dimensional setting in which a second drone is produced that is informed by the mouse cursor's Y axis coordinates.

## **MVP**

- Create a single-page app with a grid that produces a sine wave if clicked.

    - Motion across the X-axis will control one aspect of sound production. 

    - Motion across the Y-axis will control another aspect of sound production.

## **Stretch Goals**

### Functionality

- Generate multiple sine waves simultaneously to produce chords or synthesize live instrument sounds.

- Generate different types of waveforms and let the user cycle through them at will.

- Add a looping function that allows the player to capture several seconds of audio and play it back at will.

- Use the device's gyroscope to control the pitch.

### Aesthetic

- Display the waveform in real time.

- Create a bar than moves up and down the page during audio production that gives a "scanning" vibe.


## **Tech Stack**

- Javascript
    - Web Audio API
- HTML
- CSS

## **Unresolved Issues**

In its current form, it basically only works in computer browsers, not on mobile devices (at least any ones I've tested it out on). I can't figure out how to get 'ontouchmove' to update x and y coordinates as the finger moves across the screen. So the best it can do on an Android phone, for example, is produce a static pitch while the finger remains in place. (So it technically kind of works, but more like a traditional keyboard. The pitch can't 'slide'.)

The "scan bar" also gets faster and faster with each click event. I can't figure out how to simply reset its state in between clicks. Though I must admit, I don't mind the result.

I also for the life of me can't get my laptop's gyroscope to talk to the appropriate event listener. Firefox is gracious enough to inform me that the event listener I'm using has deprecated, but I can't seem to find a more current command, if there is one.
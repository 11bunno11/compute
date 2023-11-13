bluetooth.onBluetoothConnected(function () {
    keyboard.sendString(keyboard.modifiers(keyboard._Modifier.rightApple))
    keyboard.sendString(keyboard.keys(keyboard._Key.tab))
})
input.onGesture(Gesture.Shake, function () {
    Start = 0
    Write = 0
    Shook = 1
    basic.clearScreen()
    while (Shook == 1) {
        for (let index = 0; index < 20; index++) {
            led.toggle(0, 0)
            basic.pause(100)
        }
        break;
    }
    while (Shook == 1) {
        for (let index = 0; index < 2; index++) {
            images.createBigImage(`
                # . . # . . # . . .
                # . . # . . # . . .
                . # . . # . . # . .
                . # . . # . . # . .
                . . # . . # . . # .
                `).scrollImage(1, 200)
        }
        basic.showString("HALT")
        for (let index = 0; index < 2; index++) {
            images.createBigImage(`
                # . . # . . # . . .
                # . . # . . # . . .
                . # . . # . . # . .
                . # . . # . . # . .
                . . # . . # . . # .
                `).scrollImage(1, 200)
        }
    }
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    Shook = 0
    Start = 0
    Write = 0
    Shook = 0
    basic.showString("@WunderMrow")
    Shook = 0
    music.play(music.createSoundExpression(WaveShape.Square, 1, 444, 0, 255, 9999, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
    Shook = 0
    Start = 1
    Shook = 0
})
let TogY = 0
let Tog = 0
let Shook = 0
let Start = 0
let Write = 0
Write = 0
Start = 0
Shook = 0
music.play(music.createSoundExpression(WaveShape.Square, 1, 444, 0, 255, 9999, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
Start = 1
basic.forever(function () {
    if (Start == 1) {
        music.play(music.createSoundExpression(
        WaveShape.Square,
        444,
        444,
        255,
        255,
        9999,
        SoundExpressionEffect.None,
        InterpolationCurve.Linear
        ), music.PlaybackMode.InBackground)
    } else {
    	
    }
})
basic.forever(function () {
    if (Start == 1) {
        Tog = randint(0, 4)
        TogY = randint(0, 4)
        led.toggle(Tog, TogY)
        Tog = randint(0, 4)
        TogY = randint(0, 4)
        led.toggle(Tog, TogY)
    } else {
    	
    }
})
basic.forever(function () {
    if (Start == 1 && Write == 1) {
        datalogger.log(datalogger.createCV("", "X" + Tog + "Y" + TogY))
    }
})
loops.everyInterval(randint(2, 1000), function () {
    for (let index = 0; index < randint(2, 1000); index++) {
        if (Start == 1 && Write == 1) {
            music.play(music.createSoundExpression(
            WaveShape.Noise,
            5000,
            1,
            255,
            255,
            1,
            SoundExpressionEffect.None,
            InterpolationCurve.Linear
            ), music.PlaybackMode.LoopingInBackground)
        } else {
        	
        }
    }
    Write = 1
})

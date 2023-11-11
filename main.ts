let Write = 0
let Start = 0
music.play(music.createSoundExpression(
WaveShape.Square,
1,
444,
0,
255,
9999,
SoundExpressionEffect.None,
InterpolationCurve.Linear
), music.PlaybackMode.UntilDone)
Start = 1
loops.everyInterval(500, function () {
    for (let index = 0; index < randint(2, 1000); index++) {
        Write = 1
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
    }
    Start = 1
})
basic.forever(function () {
    while (Write == 1) {
        Start = 0
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        basic.clearScreen()
    }
})
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
        led.toggle(randint(0, 4), randint(0, 4))
    } else {
    	
    }
})
basic.forever(function () {
	
})
control.inBackground(function () {
	
})

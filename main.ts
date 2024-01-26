input.onButtonPressed(Button.A, function () {
    music.play(music.stringPlayable("C5 G C C5 G C5 E F ", 120), music.PlaybackMode.UntilDone)
})
input.onButtonPressed(Button.B, function () {
    music.play(music.stringPlayable("C5 B A G F E D C ", 120), music.PlaybackMode.UntilDone)
    basic.showLeds(`
        . # . . #
        . # . # .
        . # # . .
        . # . # .
        . # . . #
        `)
    basic.showLeds(`
        . . # . .
        . # . # .
        . # . # .
        . # # # .
        . # . # .
        `)
    basic.showLeds(`
        . . # . .
        . . . . .
        . . . . .
        . . # . .
        . . # . .
        `)
    basic.showLeds(`
        . # . # .
        . # . # .
        # . . . #
        # . . . #
        . # # # .
        `)
})
input.onGesture(Gesture.Shake, function () {
    music.play(music.stringPlayable("C5 B A B F G A G ", 120), music.PlaybackMode.UntilDone)
    basic.showLeds(`
        . # . # .
        . # . # .
        # . . . #
        # . . . #
        . # # # .
        `)
    basic.showLeds(`
        . # . # .
        # # # # #
        . # # # .
        . . # . .
        . . . . .
        `)
    basic.showLeds(`
        . # . # .
        . # . # .
        # . . . #
        # . . . #
        . # # # .
        `)
})
basic.forever(function () {
	
})

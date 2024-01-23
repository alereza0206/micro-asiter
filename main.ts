input.onButtonPressed(Button.A, function () {
    basic.showString("" + (input.compassHeading()))
    basic.showLeds(`
        . # # # .
        # . . . #
        # # . # #
        # . . . #
        . # # # .
        `)
    basic.pause(100)
    input.calibrateCompass()
    basic.showLeds(`
        . # # # .
        # . . . #
        # # . # #
        # . . . #
        . # # # .
        `)
})
input.onGesture(Gesture.Shake, function () {
    basic.showString("" + (input.temperature()))
    basic.showLeds(`
        . # # # .
        # . . . #
        # # . # #
        # . . . #
        . # # # .
        `)
    basic.pause(100)
    basic.showString("" + (input.acceleration(Dimension.X)))
    basic.showLeds(`
        . # # # .
        # . . . #
        # # . # #
        # . . . #
        . # # # .
        `)
})
input.onButtonPressed(Button.B, function () {
    basic.showString("" + (input.lightLevel()))
    basic.showLeds(`
        . # # # .
        # . . . #
        # # . # #
        # . . . #
        . # # # .
        `)
    basic.pause(100)
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Entertainer), music.PlaybackMode.UntilDone)
})
basic.showLeds(`
    . # # # .
    # . . . #
    # # . # #
    # . . . #
    . # # # .
    `)

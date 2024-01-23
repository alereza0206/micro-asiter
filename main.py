input.onButtonPressed(Button.A, function () {
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
})
basic.showLeds(`
    . # # # .
    # . . . #
    # # . # #
    # . . . #
    . # # # .
    `)

radio.onReceivedNumber(function (receivedNumber) {
    received_number = receivedNumber
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(1)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(3)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(2)
})
let received_number = 0
radio.setGroup(6)
basic.forever(function () {
    basic.showNumber(received_number)
    basic.pause(100)
    if (received_number == 1) {
        basic.showLeds(`
            . . # . .
            . # . # .
            # # # # #
            # . . . #
            # . . . #
            `)
        music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once)
    } else if (received_number == 2) {
        basic.showLeds(`
            # # # # .
            # . . . #
            # # # # .
            # . . . #
            # # # # .
            `)
        music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once)
    } else if (received_number == 3) {
        basic.showLeds(`
            # # # # .
            . . . # #
            # # # . .
            . . . # #
            # # # # .
            `)
    } else {
    	
    }
})

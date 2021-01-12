radio.onReceivedNumber(function (receivedNumber) {
    received_number = receivedNumber
})
let received_number = 0
radio.setGroup(25)
basic.forever(function () {
    basic.showNumber(received_number)
    basic.pause(100)
    if (received_number == 1) {
        basic.showLeds(`
            . . # . .
            . # # . .
            . . # . .
            . . # . .
            . # # # .
            `)
    } else if (false) {
        basic.showLeds(`
            # # # . .
            . . . # .
            . . # . .
            . # . . .
            # # # # .
            `)
    } else {
        basic.showLeds(`
            # # # . .
            . . . # .
            . # # . .
            . . . # .
            # # # . .
            `)
    }
})

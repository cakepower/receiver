radio.onReceivedNumber(function (receivedNumber) {
    received_number = receivedNumber
    basic.showNumber(receivedNumber)
    basic.pause(100)
    if (received_number == 1) {
        basic.showLeds(`
            . . # . .
            . # . # .
            # # # # #
            # . . . #
            # . . . #
            `)
        strip.setPixelColor(counter, neopixel.colors(NeoPixelColors.Red))
        strip.show()
        basic.pause(500)
        counter = counter + received_number
    } else if (received_number == -1) {
        basic.showLeds(`
            # # # # .
            # . . . #
            # # # # .
            # . . . #
            # # # # .
            `)
        counter = counter + received_number
        strip.setPixelColor(counter, neopixel.colors(NeoPixelColors.Yellow))
        strip.show()
        basic.pause(500)
    } else if (received_number == 99) {
        basic.showLeds(`
            # # . # #
            # # . # #
            # # # # #
            . # # # .
            . . # . .
            `)
        strip.showColor(neopixel.colors(NeoPixelColors.Black))
        strip.show()
        basic.pause(500)
        counter = 0
    } else {
    	
    }
})
let counter = 0
let received_number = 0
let strip: neopixel.Strip = null
radio.setGroup(33)
strip = neopixel.create(DigitalPin.P11, 24, NeoPixelMode.RGB)
strip.setBrightness(50)
strip.showColor(neopixel.colors(NeoPixelColors.Black))
strip.show()
basic.forever(function () {
	
})

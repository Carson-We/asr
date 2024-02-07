KittenASR.asr_init(SerialPin.P2, SerialPin.P12)
basic.forever(function () {
    KittenASR.asr_cmd()
    if (KittenASR.asr_light(KittenASR.lightCMD.lampon)) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    }
    if (KittenASR.asr_light(KittenASR.lightCMD.lampoff)) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
})

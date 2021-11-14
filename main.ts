music.setVolume(127)
basic.forever(function () {
    if (input.logoIsPressed()) {
        music.startMelody(music.builtInMelody(Melodies.Prelude), MelodyOptions.Once)
    } else {
        music.stopMelody(MelodyStopOptions.All)
    }
})

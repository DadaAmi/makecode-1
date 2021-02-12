let mySprite = sprites.create(img`
    1 2 1 2 1 2 1 2 1 2 1 2 1 2 1 2 1 2 1 
    2 1 2 1 2 1 2 1 2 1 2 1 2 1 2 1 2 1 2 
    `, SpriteKind.Player)
mySprite.say("cilova páska")
scene.setBackgroundColor(1)
game.splash("game start")
effects.confetti.startScreenEffect()
scene.cameraFollowSprite(mySprite)
controller.moveSprite(mySprite)
tiles.setTilemap(tilemap`level1`)
forever(function () {
    music.changeTempoBy(20)
    music.playMelody("C5 A F D A C E G ", music.tempo())
    scene.cameraShake(4, 500)
    music.playMelody("C D E F G A B C5 ", music.tempo())
    scene.cameraShake(4, 5000)
    music.playMelody("C5 B A G F E D C ", music.tempo())
    scene.cameraShake(4, 500)
    music.playMelody("C - D - C E F A ", music.tempo())
    music.playMelody("C5 B A E D C5 F G ", music.tempo())
    music.playMelody("E F - - D - E - ", 40)
})

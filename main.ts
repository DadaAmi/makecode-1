let mySprite = sprites.create(img`
    1 2 1 2 1 2 1 2 1 2 1 2 1 2 1 2 1 2 1 
    2 1 2 1 2 1 2 1 2 1 2 1 2 1 2 1 2 1 2 
    `, SpriteKind.Player)
mySprite.say("cilova páska")
mySprite.setBounceOnWall(true)
game.splash("game start")
forever(function () {
    controller.moveSprite(mySprite)
    music.changeTempoBy(20)
    music.playMelody("C5 A F D A C E G ", music.tempo())
})

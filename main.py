mySprite = sprites.create(img("""
        1 2 1 2 1 2 1 2 1 2 1 2 1 2 1 2 1 2 1 
            2 1 2 1 2 1 2 1 2 1 2 1 2 1 2 1 2 1 2
    """),
    SpriteKind.player)
mySprite.say("cilova páska")
mySprite.set_bounce_on_wall(True)
game.splash("game start")

def on_forever():
    controller.move_sprite(mySprite)
    music.play_melody("C - D E G E F C ", 120)
forever(on_forever)

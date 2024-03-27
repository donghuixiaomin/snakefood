input.onGesture(Gesture.TiltLeft, function () {
    蛇.change(LedSpriteProperty.X, -1)
})
input.onGesture(Gesture.LogoDown, function () {
    蛇.change(LedSpriteProperty.Y, -1)
})
input.onGesture(Gesture.LogoUp, function () {
    蛇.change(LedSpriteProperty.Y, 1)
})
input.onGesture(Gesture.TiltRight, function () {
    蛇.change(LedSpriteProperty.X, 1)
})
let 蛇: game.LedSprite = null
蛇 = game.createSprite(2, 2)
let 点心 = game.createSprite(randint(0, 4), randint(0, 4))
basic.forever(function () {
    if (蛇.isTouching(点心)) {
        game.addScore(1)
        点心.delete()
        basic.pause(1000)
        点心 = game.createSprite(randint(0, 4), randint(0, 4))
        if (game.score() == 5) {
            basic.showIcon(IconNames.Happy)
            basic.pause(2000)
            game.gameOver()
        }
    }
})

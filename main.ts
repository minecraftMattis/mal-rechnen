let a = 0
let aplusb = 0
let b = 0
input.onButtonPressed(Button.A, function () {
    a = a + 1
    basic.showNumber(a)
})
input.onGesture(Gesture.Shake, function () {
    a = 0
    aplusb = 0
    b = 0
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    aplusb = a * b
    basic.showNumber(aplusb)
})
input.onButtonPressed(Button.B, function () {
    b = b + 1
    basic.showNumber(b)
})

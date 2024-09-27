let option = 0
input.onGesture(Gesture.Shake, function () {
    option = randint(1, 3)
    if (option == 1) {
        basic.showString("TRUTH")
    } else if (option == 2) {
        basic.showString("DARE")
    } else {
        basic.showString("SKIP")
    }
})

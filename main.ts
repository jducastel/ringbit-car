radio.onReceivedString(function (receivedString) {
    commande = receivedString
})
let commande = ""
radio.setGroup(1)
basic.forever(function () {
    if (commande == "go") {
        RingbitCar.forward()
    } else if (commande == "gauche") {
        RingbitCar.turnleft()
    } else if (commande == "droite") {
        RingbitCar.turnright()
    } else {
        RingbitCar.brake()
    }
})

function mover_pata () {
    hackbitmotors.Servo(hackbitmotors.Servos.S8, 140)
    basic.pause(500)
    hackbitmotors.Servo(hackbitmotors.Servos.S8, 100)
    basic.pause(500)
    hackbitmotors.Servo(hackbitmotors.Servos.S8, 60)
    basic.pause(500)
    hackbitmotors.Servo(hackbitmotors.Servos.S8, 100)
    basic.pause(500)
}
hackbitmotors.Servo(hackbitmotors.Servos.S8, 100)
basic.forever(function () {
    if (hackbitsensor.PIRState(AnalogPin.P4)) {
        mover_pata()
    }
    basic.pause(100)
})

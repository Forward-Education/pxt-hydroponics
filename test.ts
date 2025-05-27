// It's too hectic to run all the tests simultaneously.
// Add temperature simulator. Remove temperature and add pH simulator. Remove pH and add lightbulb and button simulators.

// temperature tests
// temperature(): number
// isPastThreshold(threshold: number, direction: ThresholdDirection): boolean
console.log("temperature: " + sensors.temperature1.temperature())
basic.forever(function () {
    if (typeof sensors.temperature1.temperature() === "number") {
        if (
            sensors.temperature1.isPastThreshold(
                25,
                sensors.ThresholdDirection.Over
            )
        ) {
            console.log(sensors.temperature1.temperature() + " is over 25°C")
        }
        if (
            sensors.temperature1.isPastThreshold(
                25,
                sensors.ThresholdDirection.Under
            )
        ) {
            console.log(sensors.temperature1.temperature() + " is under 25°C")
        }
        basic.pause(1000)
    }
})

// pH tests
// ph(): number
// isPastThreshold(threshold: number, direction: ThresholdDirection): boolean
// calibrate(standard1: number, reading1: number, standard2: number, reading2: number): void
console.log("ph: " + sensors.ph1.ph())
basic.forever(function () {
    if (typeof sensors.ph1.ph() === "number") {
        if (sensors.ph1.isPastThreshold(7, sensors.ThresholdDirection.Over)) {
            console.log(sensors.ph1.ph() + " is over 7")
        }
        if (sensors.ph1.isPastThreshold(7, sensors.ThresholdDirection.Under)) {
            console.log(sensors.ph1.ph() + " is under 7")
        }
        basic.pause(1000)
    }
})
input.onButtonPressed(Button.A, function () {
    sensors.ph1.calibrate(4, 5, 7, 8)
})

// lights tests
// setBrightness(value: number)
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    console.log("Test Start")
    console.log(
        "The brightness is changing every second for 6 seconds, but the Jacdac simulator only shows on / off."
    )
    basic.pause(1000)
    lights.lights1.setBrightness(100)
    basic.pause(1000)
    lights.lights1.setBrightness(75)
    basic.pause(1000)
    lights.lights1.setBrightness(50)
    basic.pause(1000)
    lights.lights1.setBrightness(25)
    basic.pause(1000)
    lights.lights1.setBrightness(10)
    basic.pause(1000)
    lights.lights1.setBrightness(0)
    console.log("Test End")
})

// float tests
// onFloatChange(state: FloatState, handler: () => void)
// floatStateConditional(state: FloatState): boolean
// floatState(): string
sensors.float1.onFloatChange(sensors.FloatState.raised, () => {
    console.log("Event: raised")
    if (sensors.float1.floatStateConditional(sensors.FloatState.raised)) {
        console.log("State: " + sensors.float1.floatState())
    }
})
sensors.float1.onFloatChange(sensors.FloatState.lowered, () => {
    console.log("Event: lowered")
    if (sensors.float1.floatStateConditional(sensors.FloatState.lowered)) {
        console.log("State: " + sensors.float1.floatState())
    }
})

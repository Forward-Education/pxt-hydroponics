# pxt-hydroponics

Hydroponics Kit, by Forward Education

Find us at [forwardedu.com](https://forwardedu.com/) and [learn.forwardedu.com](https://learn.forwardedu.com/).

## Example Usage

Our learning systems are designed to simplify teaching coding and computer science for educators at all experience levels.
Our Hydroponics Kit can be used on its own or joined with other kits to access our wider library of sensors, motors, lights, and buttons.
Check out our lesson catalogue for curriculum-aligned lessons, including educator notes.
A sample of coding with the Hydroponics Kit can be seen below.

The light controller, pH sensor, float sensor, and water pump help create and maintain ideal growing conditions.

```blocks
lights.lights1.setBrightness(100)
basic.forever(function () {
    if (sensors.float1.floatStateConditional(sensors.FloatState.raised)) {
        motors.pump.setOn(false)
    } else {
        motors.pump.setOn(true)
    }
    if (sensors.ph1.isPastThreshold(8, sensors.ThresholdDirection.Over) || sensors.temperature1.isPastThreshold(32, sensors.ThresholdDirection.Over)) {
        basic.showIcon(IconNames.Confused)
    }
})
```

## Supported Targets

-   for PXT/microbit

## License

MIT

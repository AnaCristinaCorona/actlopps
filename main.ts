let height = 0
let counter_short = 0
let height_sum = 0
let counter_medium = 0
let counter_tall = 0
let Numbers = 0
let counter_even = 0
let counter_odd = 0
input.onPinPressed(TouchPin.P0, function () {
    for (let index = 0; index < 30; index++) {
        height = randint(100, 200)
        if (height <= 150) {
            basic.showString("Short")
            counter_short += 1
            height_sum = height_sum + height
        } else if (height == 151 && height <= 170) {
            basic.showString("Medium")
            counter_medium += 1
            height_sum = height_sum + height
        } else if (height >= 171) {
            basic.showString("Tall")
            counter_tall += 1
            height_sum += height
        }
    }
    basic.showString("Total Short Persons")
    basic.showNumber(counter_short)
    basic.showString("Total Medium Persons")
    basic.showNumber(counter_medium)
    basic.showString("Total Tall Persons")
    basic.showNumber(counter_tall)
    basic.showNumber(height_sum / 30)
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 10; index++) {
        Numbers += randint(1, 100)
        basic.showNumber(Numbers)
        if (0 == Numbers % 2) {
            basic.showString("even")
            counter_even += 1
        } else {
            basic.showString("odd")
            counter_odd += 1
        }
    }
    basic.showString("Total even")
    basic.showNumber(counter_even)
    basic.showString("Total odd")
    basic.showNumber(counter_odd)
})

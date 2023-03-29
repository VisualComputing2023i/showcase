let img
let widthRects = 4.4
let speed = 0
let show = true
let run = true

function doubleClicked() {
    // run = !run
    // setTimeout(function () {
    //     run = !run
    // }, 12000)
}

function mouseClicked() {
    // show = !show
}

function setup() {
    createCanvas(280, 250)
}

function draw() {
    background(255)
    stroke(color(0, 0, 0))
    noFill()

    for (let i = 0; i < 60; i++) {
        circle(((width + 280) / 4) + speed, (height + 220) / 4, widthRects * 0.8 * i)
        circle(((width + 280) / 4) - speed, (height + 220) / 4, widthRects * 0.8 * i)
    }

    run ? speed = (speed + .1) % 80 : ""
} 
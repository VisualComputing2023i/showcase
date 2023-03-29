let img
let widthRects = 4.4
let speed = 0
let show = true
let run = true

function doubleClicked() {
    run = !run
    setTimeout(function () {
        !run ? run = false : ""
    }, 12000)
}

function mouseClicked() {
    show = !show
}

function setup() {
    createCanvas(280, 250)
}

function draw() {
    background(255)
    noStroke()

    fill(color(0, 0, 0))
    if (show) {
        rotate(PI / 60)
        for (let i = 0; i < 80; i++) {
            rect((widthRects * 2 * i), 0, widthRects, height)
        }
        rotate(PI / -60)
    }

    for (let i = 0; i < 80; i++) {
        rect((widthRects * 2 * i) + speed - 150, 0, widthRects, height)
    }

    run ? speed = (speed + .1) % 80 : ""
} 
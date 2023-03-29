let widthRects = 4.4
let speed = 0
let show = true

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
    for (let i = 0; i < 80; i++) {
        rotate(PI / 60)
        show ? rect((widthRects * 2 * i), 0, widthRects, height) : ""
        rotate(PI / -60)
        rect((widthRects * 2 * i) + speed - 150, 0, widthRects, height)
    }

    speed = (speed + .1) % 80
} 
let img
let widthRects = 4.4
let speed = 0
let run = true

function preload() {
    var hostURL = "http://localhost:1313/showcase/";
    img = loadImage(hostURL + 'sketches/VisualIllusions/masking/warping.jpg')
}

function mouseClicked() {
    // run = !run
}

function doubleClicked() {
    // speed = 0
}

function setup() {
    createCanvas(680, 600)
}

function draw() {
    background(255)
    noStroke()
    image(img, (width - 600) / 2, 0, 600, 600)

    fill(color(0, 0, 0))
    for (let i = 0; i < 80; i++) {
        rect((widthRects * 2 * i) + speed - 150, 0, widthRects, height)
    }
    run ? speed = ((speed + 0.2) % (width / 3)) : ''
} 
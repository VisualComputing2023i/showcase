let imgBkg
let widthRects = 4.4
let speed = -150
let run = true

function preload() {
    var hostURL = "http://localhost:1313/showcase/";
    imgBkg = loadImage(hostURL + 'sketches/VisualIllusions/masking/warping.jpg')
}

function setup() {
    createCanvas(680, 600)
}

function draw() {
    background(255)
    noStroke()
    image(imgBkg, (width - 600) / 2, 0, 600, 600)

    fill(color(0, 0, 0))
    for (let i = 0; i < 80; i++) {
        mouseIsPressed
            ? rect((widthRects * 2 * i) + (mouseX - 350), 0, widthRects, height)
            : rect((widthRects * 2 * i) + speed, 0, widthRects, height)
    }
    speed = ((speed + 0.2) % (width / 3))
} 
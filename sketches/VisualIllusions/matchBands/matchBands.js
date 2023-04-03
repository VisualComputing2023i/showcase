let cols, rows, sliderSpeed, hSpkiking, vSpiking, checkboxMB, checkboxColor
let scl = 20
let w = 900
let h = 1000
let terrain = []
let flying = 0

function setup() {
    createCanvas(680, 676, WEBGL)

    sliderSpeed = createSlider(0, 0.2, 0.02, 0.02)
    sliderSpeed.position(10, 15)
    sliderSpeed.style('width', '80px')

    hSpkiking = createSlider(0.08, 0.4, 0.2, 0.02)
    hSpkiking.position(10, 39)
    hSpkiking.style('width', '80px')

    vSpiking = createSlider(0.08, 0.4, 0.2, 0.02)
    vSpiking.position(10, 65)
    vSpiking.style('width', '80px')


    createSpan('Speed').position(100, 14)
    createSpan('HSpiking').position(100, 38)
    createSpan('VSpiking').position(100, 64)

    checkboxMB = createCheckbox('MB', true)
    checkboxMB.position(10, 90)

    checkboxColor = createCheckbox('Strokes', true)
    checkboxColor.position(80, 90)

    cols = w / scl
    rows = h / scl
}

function draw() {
    flying -= sliderSpeed.value()

    let yOffSet = flying
    for (let y = 0; y < rows; y++) {
        let xOffSet = 0
        let a = []
        for (let x = 0; x < cols; x++) {
            a.push(map(noise(xOffSet, yOffSet), 0, 1, -100, 100))
            xOffSet += hSpkiking.value()
        }
        terrain.push(a)
        yOffSet += vSpiking.value()
    }

    translate(-w / 2, -h / 7, 0)
    background(0)
    stroke(255)
    noFill()

    rotateX(PI / 3)

    for (let y = 0; y < rows - 1; y++) {
        beginShape(TRIANGLE_STRIP)
        for (let x = 0; x < cols; x++) {
            !checkboxMB.checked() ? fill(terrain[y][x] + 100) : undefined
            !checkboxColor.checked() ? noStroke() : undefined
            vertex(x * scl, y * scl, terrain[y][x])
            vertex(x * scl, (y + 1) * scl, terrain[y + 1][x])
        }
        endShape();
    }

    terrain = []

    rotateX(-PI / 3)

    noStroke()
    fill('#99ff66')
    rect(0, -200, 280, 120)
}
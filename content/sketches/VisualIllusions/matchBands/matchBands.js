let cols, rows
let scl = 20
let w = 900
let h = 1000
let terrain = []
let flying = 0

function setup() {
    createCanvas(680, 677, WEBGL)
    cols = w / scl
    rows = h / scl
}

function draw() {
    flying -= 0.02

    let yOffSet = flying
    for (let y = 0; y < rows; y++) {
        let xOffSet = 0
        let a = []
        for (let x = 0; x < cols; x++) {
            a.push(map(noise(xOffSet, yOffSet), 0, 1, -100, 100))
            xOffSet += 0.17
        }
        terrain.push(a)
        yOffSet += 0.15
    }

    translate(-w / 2, -h / 7, 0)
    background(0)
    stroke(255)
    noFill()

    rotateX(PI / 3)

    for (let y = 0; y < rows - 1; y++) {
        beginShape(TRIANGLE_STRIP)
        for (let x = 0; x < cols; x++) {
            vertex(x * scl, y * scl, terrain[y][x])
            vertex(x * scl, (y + 1) * scl, terrain[y + 1][x])
        }
        endShape();
    }

    terrain = []

    rotateX(-PI / 3)

    noStroke()
    fill('#99ff66')
    rect(0, -200, 300, 200)
}
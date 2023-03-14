let sliderSpeed, checkboxConstrast, colorSelector, colorA, colorB
let widthRects = 30
let widthSteps = 60
let speed = 0

function setup() {
    createCanvas(675, 400)

    sliderSpeed = createSlider(1 / 4, 16 / 4, 6 / 4, 1 / 4)
    sliderSpeed.position(10, 10)
    sliderSpeed.style('width', '80px')

    checkboxConstrast = createCheckbox('Hi-cont', false)
    checkboxConstrast.position(10, 35)

    colorSelector = createSelect()
    colorSelector.position(90, 37.5)
    colorSelector.option("Amarillo-Azul")
    colorSelector.option("Rojo-Verde")
    colorSelector.option("Negro-Blanco")
    colorSelector.selected("Negro-Blanco")

    let span = createSpan('Speed')
    span.position(105, 12)
}

function draw() {
    background(255, 255, 255)
    noStroke()
    checkboxConstrast.checked() ? fill(color(207, 207, 207)) : fill(color(0, 0, 0))

    for (let i = 0; i < (width / widthRects); i++) {
        rect(widthRects * 2 * i, 0, widthRects, height)
    }

    switch (colorSelector.value()) {
        case "Amarillo-Azul":
            colorA = color(0, 0, 255)
            colorB = color(255, 255, 0)
            break
        case "Rojo-Verde":
            colorA = color(0, 128, 0)
            colorB = color(128, 0, 0)
            break
        case "Negro-Blanco":
            colorA = color(0, 0, 0)
            checkboxConstrast.checked() ? colorB = color(175, 175, 175) : colorB = color(255, 255, 255)
            break
    }

    fill(colorA)
    rect((speed % (width + widthSteps)) - widthSteps, 120, widthSteps, widthSteps / 2)
    fill(colorB)
    rect((speed % (width + widthSteps)) - widthSteps, 255, widthSteps, widthSteps / 2)

    speed += sliderSpeed.value()

    fill('#99ff66')
    rect(0, 0, 195, 60)
}
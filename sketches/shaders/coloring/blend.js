let blendShader, brightness, color1, color2, radius

function preload() {
    blendShader = readShader('/showcase/sketches/shaders/coloring/blend.frag')
}

function setup() {
    createCanvas(300, 300, WEBGL)
    colorMode(RGB, 1) //255 -> 1
    rectMode(RADIUS)  //centering the (0,0) (x,y) origin point 
    radius = width / 5
    noStroke()
    color1 = createColorPicker(color(0.8, 0.5, 0.3))
    color1.position(10, 10)
    color2 = createColorPicker(color(0.9, 0.1, 0.4))
    color2.position(width / 2 + 10, 10)

    brightness = createSlider(0, 1, 0.5, 0.05) //brillo entre 0 y 1
    brightness.position(width / 2 - 35, height / 2)
    brightness.style('width', '80px')

    shader(blendShader) //Llamamos al shader del .frag
}

function draw() {
    // rectMode, e.g., rectMode(RADIUS) requires Tree.pmvMatrix
    // so no square but beginShape / endShape
    
    //El color que tenemos aquí va a ser el resultante de `gl_FragColor` en blend.frag entonces simplemente debemos modificar ese parámetro desde esta función por medio de la función setUniform().
    
    let l = 0.8
    let offset = (1 - l) / 2
    let color1Color = color1.color()
    let color2Color = color2.color()

    background(0)

    //Primer Selector
    blendShader.setUniform('brightness', 1.0)
    blendShader.setUniform('uMaterial2', [1.0, 1.0, 1.0, 1.0])
    blendShader.setUniform('uMaterial1', [red(color1Color), green(color1Color), blue(color1Color), 1.0])
    beginShape()
    vertex(-offset - l, +offset, 0) //coord (x,y,[z])
    vertex(-offset, +offset, 0)
    vertex(-offset, +offset + l, 0)
    vertex(-offset - l, +offset + l, 0)
    endShape()

    //Segundo Selector
    blendShader.setUniform('brightness', 1.0)
    blendShader.setUniform('uMaterial1', [1.0, 1.0, 1.0, 1.0])
    blendShader.setUniform('uMaterial2', [red(color2Color), green(color2Color), blue(color2Color), 1.0])
    beginShape()
    vertex(+offset, +offset, 0)
    vertex(+offset + l, +offset, 0)
    vertex(+offset + l, +offset + l, 0)
    vertex(+offset, +offset + l, 0)
    endShape()

    //Mezcla Resultante
    blendShader.setUniform('brightness', brightness.value())
    blendShader.setUniform('uMaterial1', [red(color1Color), green(color1Color), blue(color1Color), 1.0])
    blendShader.setUniform('uMaterial2', [red(color2Color), green(color2Color), blue(color2Color), 1.0])
    beginShape()
    vertex(-l / 2, -offset - l, 0)
    vertex(+l / 2, -offset - l, 0)
    vertex(+l / 2, -offset, 0)
    vertex(-l / 2, -offset, 0)
    endShape()
}
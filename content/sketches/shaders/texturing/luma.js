let lumaShader, src, img_src, video_src, video_on

function preload() {
    lumaShader = readShader('/showcase/sketches/shaders/texturing/luma.frag', { varyings: Tree.texcoords2 })
    video_src = createVideo(['/showcase/sketches/shaders/texturing/wagon.webm'])
    video_src.hide() // display: none
    img_src = loadImage('/showcase/sketches/shaders/texturing/fire_breathing.jpg')
    src = img_src
}

function setup() {
    createCanvas(680, 500, WEBGL)
    noStroke()
    textureMode(NORMAL)     //normalizamos las coordenadas de vertex
    shader(lumaShader)

    video_on = createCheckbox('video', false)
    video_on.style('color', 'white')
    video_on.changed(() => {
        src = (video_on.checked() ? video_src : img_src)
        video_on.checked() ? video_src.loop() : video_src.pause()
    })
    video_on.position(10, 10)

    radio = createRadio()
    radio.option('rgb')
    radio.option('luma')
    radio.option('hsv')
    radio.option('hsl')
    radio.option('uv')
    radio.style('width', '60px')
    radio.style('color', 'white')
    radio.selected('rgb')
    radio.position(10, 30)
}

function draw() {
    /*
    NDC quad shape, i.e., x, y and z vertex coordinates ∈ [-1..1]
    since textureMode is NORMAL u, v texture coordinates ∈ [-1..1]
    see: https://p5js.org/reference/#/p5/beginShape
         https://p5js.org/reference/#/p5/vertex
            y                  v
            |                  |
    (-1,1,0)|   (1,1,0)        (0,1)     (1,1)
      *_____|_____*            *__________*
      |     |     |            |          |        
      |____NDC____|__x         | texture  |        
      |     |     |            |  space   |
      *_____|_____*            *__________*___ u
    (-1,-1,0)   (1,-1,0)       (0,0)    (1,0) 


    Nota: debemos interpretar el espacio uv de la linea de u hacia abajo (aplicando una rotación respecto a u)
    */

    lumaShader.setUniform('lightness', radio.value() === 'luma')
    lumaShader.setUniform('brightness', radio.value() === 'hsv')
    lumaShader.setUniform('intensity', radio.value() === 'hsl')
    lumaShader.setUniform('uv', radio.value() === 'uv')

    lumaShader.setUniform('texture', src)
    beginShape()
    // format is: vertex(x, y, z, u, v)
    vertex(-1, -1, 0, 0, 1)
    vertex(1, -1, 0, 1, 1)
    vertex(1, 1, 0, 1, 0)
    vertex(-1, 1, 0, 0, 0)
    endShape()
}
let lumaShader, src, img_src, video_src, video_on, lightness, uv

function preload() {
    lumaShader = readShader('/showcase/sketches/shaders/texturing/luma.frag', { varyings: Tree.texcoords2 })
    // video source: https://t.ly/LWUs2
    video_src = createVideo(['/showcase/sketches/shaders/texturing/wagon.webm'])
    video_src.hide() // by default video shows up in separate dom
    // image source: https://t.ly/Dz8W
    img_src = loadImage('/showcase/sketches/shaders/texturing/fire_breathing.jpg')
    src = img_src
}

function setup() {
    createCanvas(680, 500, WEBGL)
    noStroke()
    textureMode(NORMAL)
    shader(lumaShader)
    video_on = createCheckbox('video', false)
    video_on.style('color', 'white')
    video_on.changed(() => {
        src = video_on.checked() ? video_src : img_src
        video_on.checked() ? video_src.loop() : video_src.pause()
    })
    video_on.position(10, 10)
    lightness = createCheckbox('luma', false)
    lightness.position(10, 30)
    lightness.style('color', 'white')
    lightness.input(() => lumaShader.setUniform('lightness', lightness.checked()))
    uv = createCheckbox('uv visualization', false)
    uv.style('color', 'white')
    uv.changed(() => lumaShader.setUniform('uv', uv.checked()))
    uv.position(10, 50)
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
    */
    lumaShader.setUniform('texture', src)
    beginShape()
    // format is: vertex(x, y, z, u, v)
    vertex(-1, -1, 0, 0, 1)
    vertex(1, -1, 0, 1, 1)
    vertex(1, 1, 0, 1, 0)
    vertex(-1, 1, 0, 0, 0)
    endShape()
}
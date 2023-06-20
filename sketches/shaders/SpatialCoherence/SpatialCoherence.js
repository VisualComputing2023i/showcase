

let img; // the source image
let pizelatorShader; // the pixelator shader
let pixelSize = 10; // size of the pixels for pixelation

function preload() {
  img = loadImage("https://picsum.photos/id/1018/200/300");
  pizelatorShader = readShader("/showcase/sketches/shaders/SpatialCoherence/pixelator.frag", { varyings: Tree.v_texCoord });
  
}

function setup() {
  createCanvas(img.width, img.height, WEBGL);
  shader(pizelatorShader);
  noStroke();
}

function draw() {
  background(220);
  
  // set the shader and uniform values
  pizelatorShader.setUniform("u_texture", img);
  pizelatorShader.setUniform("u_pixelSize", pixelSize);
  
  // draw a rectangle to apply the shader
  rect(-width/2, -height/2, width, height);
}

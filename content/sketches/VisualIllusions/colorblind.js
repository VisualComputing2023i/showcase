let img;
let canvasWidth = 800;
let canvasHeight = 600;

function preload() {
  img = loadImage('/showcase/sketches/VisualIllusions/i2.jpg');
}

function setup() {
  createCanvas(canvasWidth, canvasHeight);
  background(255); 
  // Original image
  textSize(16);
  textAlign(CENTER);
  text("Original Image", canvasWidth/8, 20);
  image(img, 0, 25, canvasWidth/4, canvasHeight-25);

  // Deuteranopia simulation
  imgDeuteranopia = createImage(img.width, img.height);
  imgDeuteranopia.copy(img, 0, 0, img.width, img.height, 0, 0, img.width, img.height);
  enhanceForDeuteranopia(imgDeuteranopia);
  textSize(16);
  textAlign(CENTER);
  text("Deuteranopia", canvasWidth*3/8, 20);
  image(imgDeuteranopia, canvasWidth/4, 25, canvasWidth/4, canvasHeight-25);

  // Protanopia simulation
  imgProtanopia = createImage(img.width, img.height);
  imgProtanopia.copy(img, 0, 0, img.width, img.height, 0, 0, img.width, img.height);
  enhanceForProtanope(imgProtanopia);
  textSize(16);
  textAlign(CENTER);
  text("Protanopia", canvasWidth*5/8, 20);
  image(imgProtanopia, canvasWidth/2, 25, canvasWidth/4, canvasHeight-25);

  // Tritanopia simulation
  imgTritanopia = createImage(img.width, img.height);
  imgTritanopia.copy(img, 0, 0, img.width, img.height, 0, 0, img.width, img.height);
  enhanceForTritanope(imgTritanopia);
  textSize(16);
  textAlign(CENTER);
  text("Tritanopia", canvasWidth*7/8, 20);
  image(imgTritanopia, canvasWidth*3/4, 25, canvasWidth/4, canvasHeight-25);
}


function enhanceForDeuteranopia(img) {
  img.loadPixels();
  for (let i = 0; i < img.pixels.length; i += 4) {
    let r = img.pixels[i];
    let g = img.pixels[i + 1];
    let b = img.pixels[i + 2];

    // calculate new values for red, green and blue
    let newR = 0.625 * r + 0.375 * g + 0.019 * b;
    let newG = 0.7 * g + 0.3 * r + 0.1 * b;
    let newB = 0.5 * b + 0.5 * g;

    // constrain RGB values to be within 0-255
    newR = constrain(newR, 0, 255);
    newG = constrain(newG, 0, 255);
    newB = constrain(newB, 0, 255);

    img.pixels[i] = newR;
    img.pixels[i + 1] = newG;
    img.pixels[i + 2] = newB;
  }
  img.updatePixels();
}


// Function to enhance image for protanope
function enhanceForProtanope(img) {
  img.loadPixels();
  for (let i = 0; i < img.pixels.length; i += 4) {
    let r = img.pixels[i];
    let g = img.pixels[i + 1];
    let b = img.pixels[i + 2];

    // calculate new values for red, green and blue
    let newR = 0.56667 * r + 0.43333 * g + 0.0 * b;
    let newG = 0.55833 * r + 0.44167 * g + 0.0 * b;
    let newB = 0.0 * r + 0.24167 * g + 0.75833 * b;

    // constrain RGB values to be within 0-255
    newR = constrain(newR, 0, 255);
    newG = constrain(newG, 0, 255);
    newB = constrain(newB, 0, 255);

    img.pixels[i] = newR;
    img.pixels[i + 1] = newG;
    img.pixels[i + 2] = newB;
  }
  img.updatePixels();
}

// Function to enhance image for tritanope
function enhanceForTritanope(img) {
  img.loadPixels();
  for (let i = 0; i < img.pixels.length; i += 4) {
    let r = img.pixels[i];
    let g = img.pixels[i + 1];
    let b = img.pixels[i + 2];

    // calculate new values for red, green and blue
    let newR = 0.95 * r + 0.05 * g + 0.0 * b;
    let newG = 0.0 * r + 0.43333 * g + 0.56667 * b;
    let newB = 0.0 * r + 0.475 * g + 0.525 * b;

    // constrain RGB values to be within 0-255
    newR = constrain(newR, 0, 255);
    newG = constrain(newG, 0, 255);
    newB = constrain(newB, 0, 255);

    img.pixels[i] = newR;
    img.pixels[i + 1] = newG;
    img.pixels[i + 2] = newB;
  }
  img.updatePixels();
}

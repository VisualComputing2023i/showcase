let r, g, b;
let x, y, z;
let xSlider, ySlider, zSlider;

function setup() {
  createCanvas(400, 400);
  colorMode(RGB, 255);

  // XYZ sliders
  xSlider = createSlider(0, 95.047, 0, 0.01);
  xSlider.position(20, 20);
  ySlider = createSlider(0, 100, 0);
  ySlider.position(20, 50);
  zSlider = createSlider(0, 108.883, 0, 0.01);
  zSlider.position(20, 80);
}


function draw() {
  background(255);
  
  x = xSlider.value();
  y = ySlider.value();
  z = zSlider.value();

  let xyzColor = xyzToRgb(x, y, z);

  colorMode(RGB, 255);
  fill(xyzColor[0], xyzColor[1], xyzColor[2]);
  rect(150, 120, 120, 120);

  // Display values
  textSize(16);
  textAlign(LEFT, CENTER);
  fill(0);
  text("X: " + x.toFixed(2), xSlider.x * 2 + xSlider.width, xSlider.y + xSlider.height / 2);
  text("Y: " + y.toFixed(2), ySlider.x * 2 + ySlider.width, ySlider.y + ySlider.height / 2);
  text("Z: " + z.toFixed(2), zSlider.x * 2 + zSlider.width, zSlider.y + zSlider.height / 2);
}
function xyzToRgb(x, y, z) {
  let r, g, b;
  // Observer. = 2°, Illuminant = D65
  let xLinear = x / 100;
  let yLinear = y / 100;
  let zLinear = z / 100;

  r = xLinear * 3.2406 + yLinear * -1.5372 + zLinear * -0.4986;
  g = xLinear * -0.9689 + yLinear * 1.8758 + zLinear * 0.0415;
  b = xLinear * 0.0557 + yLinear * -0.2040 + zLinear * 1.0570;

  // assuming sRGB (D65)
  r = r > 0.0031308 ? 1.055 * (r ** (1 / 2.4)) - 0.055 : 12.92 * r;
  g = g > 0.0031308 ? 1.055 * (g ** (1 / 2.4)) - 0.055 : 12.92 * g;
  b = b > 0.0031308 ? 1.055 * (b ** (1 / 2.4)) - 0.055 : 12.92 * b;

  return [r * 255, g * 255, b * 255];
}






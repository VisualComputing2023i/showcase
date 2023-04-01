let h, s, b;

function setup() {
  createCanvas(400, 400);
  colorMode(HSB, 360, 100, 100);
  
  // HSB sliders
  createP('Hue:');
  hueSlider = createSlider(0, 360, 0);
  createP('Saturation:');
  saturationSlider = createSlider(0, 100, 0);
  createP('Brightness:');
  brightnessSlider = createSlider(0, 100, 0);
}

function draw() {
  // Get current HSB values from sliders
  h = hueSlider.value();
  s = saturationSlider.value();
  b = brightnessSlider.value();
  
  // Set background and fill color based on current HSB values
  background(h, s, b);
  fill(360 - h, 100 - s, 100 - b);
  rect(100, 100, 200, 200);
  
  // Display current HSB values
  textSize(20);
  fill(0);
  text(`Hue: ${h}`, 20, 30);
  text(`Saturation: ${s}`, 20, 60);
  text(`Brightness: ${b}`, 20, 90);
}

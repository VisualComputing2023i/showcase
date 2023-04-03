let hue, saturation, lightness;

function setup() {
  createCanvas(400, 400);
  
  // Crear los deslizadores
  hueSlider = createSlider(0, 360, 180);
  hueSlider.position(20, 20);
  saturationSlider = createSlider(0, 100, 50);
  saturationSlider.position(20, 50);
  lightnessSlider = createSlider(0, 100, 50);
  lightnessSlider.position(20, 80);
  
  colorMode(HSL, 360, 100, 100);
}

function draw() {
  // Actualizar los valores de color a partir de los deslizadores
  hue = hueSlider.value();
  saturation = saturationSlider.value();
  lightness = lightnessSlider.value();
  
  // Cambiar el color de fondo en función de los valores de color
  background(hue, saturation, lightness);
  
  // Mostrar los valores de color actuales
  textSize(16);
  textAlign(LEFT, TOP);
  fill(0);
  noStroke();
  text(`Hue: ${hue}`, 150, 20);
  text(`Saturation: ${saturation}%`, 150, 50);
  text(`Lightness: ${lightness}%`, 150, 80);
}

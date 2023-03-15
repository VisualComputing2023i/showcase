let video;

function setup() {
  createCanvas(710, 400);
  video = createVideo('/showcase/sketches/fingers.mov');
  video.loop();
  video.hide();
}

function draw() {
  background(0);
  image(video, 0, 0);
  loadPixels();
  let blockSize = 10;
  for (let y = 0; y < height; y += blockSize) {
    for (let x = 0; x < width; x += blockSize) {
      let blockColor = getBlockColor(x, y, blockSize);
      for (let i = 0; i < blockSize; i++) {
        for (let j = 0; j < blockSize; j++) {
          let index = 4 * ((y + j) * width + (x + i));
          set(index, blockColor[0]);
          set(index + 1, blockColor[1]);
          set(index + 2, blockColor[2]);
        }
      }
    }
  }
  updatePixels();
}

function getBlockColor(x, y, blockSize) {
  let r = 0, g = 0, b = 0;
  let count = 0;
  for (let i = 0; i < blockSize; i++) {
    for (let j = 0; j < blockSize; j++) {
      let index = 4 * ((y + j) * width + (x + i));
      r += pixels[index];
      g += pixels[index + 1];
      b += pixels[index + 2];
      count++;
    }
  }
  return [r / count, g / count, b / count];
}

let video;
let pixelSize = 10;
let isPixelatorOn = true;

function setup() {
	createCanvas(640, 480);
	pixelDensity(1);
	video = createCapture(VIDEO);
	video.size(width, height);
	video.hide();
}

function draw() {
	if (isPixelatorOn) {
		// Pixelator mode
		background(0);
		video.loadPixels();
		for (let x = 0; x < width; x += pixelSize) {
			for (let y = 0; y < height; y += pixelSize) {
				let sumR = 0;
				let sumG = 0;
				let sumB = 0;
				let count = 0;
				for (let i = 0; i < pixelSize; i++) {
					for (let j = 0; j < pixelSize; j++) {
						let px = x + i + (y + j) * width;
						if (px < video.pixels.length) {
							sumR += video.pixels[px * 4];
							sumG += video.pixels[px * 4 + 1];
							sumB += video.pixels[px * 4 + 2];
							count++;
						}
					}
				}
				let avgR = sumR / count;
				let avgG = sumG / count;
				let avgB = sumB / count;
				fill(avgR, avgG, avgB);
				noStroke();
				rect(x, y, pixelSize, pixelSize);
			}
		}
		textSize(20);
		fill(255);
		textAlign(CENTER, BOTTOM);
		text("Color AVG Pixelator", width / 2, height - 10);
	} else {
		// Spatial coherence mode
		background(0);
		video.loadPixels();
		for (let x = 0; x < width; x += pixelSize) {
			for (let y = 0; y < height; y += pixelSize) {
				let index = (x + y * width) * 4;
				let r = video.pixels[index];
				let g = video.pixels[index + 1];
				let b = video.pixels[index + 2];
				let a = video.pixels[index + 3];
				fill(r, g, b, a);
				rect(x, y, pixelSize, pixelSize);
			}
		}
		textSize(20);
		fill(255);
		textAlign(CENTER, BOTTOM);
		text("Spatial Coherence Pixelator", width / 2, height - 10);
	}
}

function keyPressed() {
	if (key === " ") {
		isPixelatorOn = !isPixelatorOn;
	}
}

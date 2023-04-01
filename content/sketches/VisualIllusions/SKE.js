let radius1, radius2, centerX, centerY, centerX2, centerY2;
let angle = 0;
let rotationSpeed = 0.01;
let colors = ["#00CCFF", "#00F"];
let step = 15;
let slider;

function setup() {
	createCanvas(680, 400);
	centerX = width / 2;
	centerY = height / 2;
	radius1 = height / 2 - height / 20;
	slider = createSlider(0, 0.1, 0.01, 0.0001);
	slider.position(-120, height / 2);
	slider.style("transform", "rotate(270deg)");
	slider.style("width", "300px");
}

function draw() {
	rotationSpeed = slider.value();
	background(200);

	strokeWeight(0);
	stroke(0);
	noFill();
	ellipse(centerX, centerY, radius1 * 2, radius1 * 2);

	let i = 0;
	for (let r = radius1; r >= radius1 / 3; r -= step) {
		let tempX = centerX + (radius1 - r) * cos(angle);
		let tempY = centerY + (radius1 - r) * sin(angle);
		centerX2 = tempX;
		centerY2 = tempY;
		fill(colors[i % 2]);
		ellipse(tempX, tempY, r * 2, r * 2);
		i++;
		radius2 = r;
	}
	let j = 1;
	for (let r = radius2; r >= step; r -= step) {
		let tempX = centerX2 + (radius2 - r) * cos(angle + 160);
		let tempY = centerY2 + (radius2 - r) * sin(angle + 160);
		fill(colors[j % 2]);
		ellipse(tempX, tempY, r * 2, r * 2);
		j++;
	}

	angle += rotationSpeed;
}

let widthRects = 30;
let widthSteps = 60;
let sliderSpeed;
let checkboxConstrast;
let speed = 0;

function setup() {
    createCanvas(675, 400);

    sliderSpeed = createSlider(1 / 4, 16 / 4, 6 / 4, 1 / 4);
    sliderSpeed.position(10, 10);
    sliderSpeed.style('width', '80px');

    checkboxConstrast = createCheckbox('Hi-cont', false);
    checkboxConstrast.position(10, 35);

    let span = createSpan('Speed');
    span.position(105, 12);
}

function draw() {
    background(255, 255, 255);
    noStroke();

    checkboxConstrast.checked() ? fill(color(207, 207, 207)) : fill(color(0, 0, 0));

    for (let i = 0; i < (width / widthRects); i++) {
        rect(widthRects * 2 * i, 0, widthRects, height);
    }

    fill(color(0, 0, 0));
    rect((speed % (width + widthSteps)) - widthSteps, 150, widthSteps, widthSteps / 2);
    checkboxConstrast.checked() ? fill(color(175, 175, 175)) : fill(color(255, 255, 255))
    rect((speed % (width + widthSteps)) - widthSteps, 225, widthSteps, widthSteps / 2);

    speed += sliderSpeed.value();

    fill('#99ff66');
    rect(0, 0, 150, 60);
}
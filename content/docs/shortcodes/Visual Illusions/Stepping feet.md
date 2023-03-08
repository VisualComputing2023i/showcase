---
weight: 2
---

# “Stepping feet” Motion Illusion

{{< p5-global-iframe id="breath" width="695" height="425" >}}
  let angle = 0;
  let widthRects = 30;
  let widthSteps= 60;
  let slider;

  function setup() {
    createCanvas(675, 400);
    frameRate(60);

    slider = createSlider(0, 1, 1,0.1);
    slider.position(10, 10);
    slider.style('width', '80px');
  }

  function draw() {
    let speed = slider.value()*frameCount;

    background(255, 255, 255);
        noStroke();
    for(let i =0; i<(width/widthRects); i++){
        fill(color(0, 0, 0));
        rect(widthRects*2*i, 0, widthRects, height);
    }
    rect((speed% (width+widthSteps))-widthSteps, 150, widthSteps, widthSteps/2);
    fill(color(255, 255, 255));
    rect((speed% (width+widthSteps))-widthSteps, 225, widthSteps, widthSteps/2);
  }

{{< /p5-global-iframe >}}

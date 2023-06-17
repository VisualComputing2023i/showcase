let parsed;
let sun;
let bg;
let cnv;

const planets = [];

const PLANET_RADIUS_SCALE = 10e-4;
const ORBIT_DISTANCE_SCALE = 10e-7;
const PLANET_MASS_SCALE = 10e24;

const guiControls = new (function () {
  this.animationSpeed = 1;
  this.drawOrbit = true;
  this.orbitStroke = 125;
  this.gridStroke = 25;
  this.drawTrajectory = false;
  this.enableLighting = true;
})();

function guiSetup() {
  let gui = new dat.GUI();
  gui.add(guiControls, "animationSpeed", 0, 10);
  gui.add(guiControls, "drawOrbit");
  gui.add(guiControls, "orbitStroke", 0, 255);
  gui.add(guiControls, "gridStroke", 0, 255);
  gui.add(guiControls, "drawTrajectory");
  gui.add(guiControls, "enableLighting");
}

function setup() {
  cnv = createCanvas(windowWidth, windowHeight, WEBGL);
  cnv.mouseWheel(zoom);
  guiSetup();
  createPlanets(parsed);
  sun = new Sun(69634 * 0.0002, 0, 0, 0);
}

function preload() {
  parsed = loadJSON(
    "/showcase/sketches/SpaceTransformation/SolarSystem/data.json"
  );
  bg = loadImage(
    "/showcase/sketches/SpaceTransformation/SolarSystem/8k_stars.jpg"
  );
}

function draw() {
  background(0);
  push();
  fill(255);
  texture(bg);
  sphere(2000);
  pop();
  orbitControl(1, 1, 0);
  if (guiControls.drawOrbit) {
    drawOrbit();
  }
  sun.display();
  if (guiControls.enableLighting) {
    pointLight(255, 255, 255, 0, 0, 0);
  }
  createGrid();
  for (let i = 0; i < planets.length; i++) {
    planets[i].orbit(sun);
    planets[i].display();
    if (guiControls.drawTrajectory) {
      planets[i].drawTrajectory();
    }
  }
}

function zoom(event) {
  // zoom according to direction of mouseWheelDeltaY rather than value
  let sensitivityZoom = 0.08;
  let scaleFactor = cnv.height;
  if (event.deltaY > 0) {
    cnv._curCamera._orbit(0, 0, sensitivityZoom * scaleFactor);
  } else {
    cnv._curCamera._orbit(0, 0, -sensitivityZoom * scaleFactor);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

class Planet {
  constructor(name, planet) {
    this.name = name;
    this.radius = planet.radius * PLANET_RADIUS_SCALE;
    this.farthestPoint = planet.farthestPoint * ORBIT_DISTANCE_SCALE;
    this.nearestPoint = planet.nearestPoint * ORBIT_DISTANCE_SCALE;
    this.semiMajorAxis = planet.semiMajorAxis * ORBIT_DISTANCE_SCALE;
    this.eccentricity = planet.eccentricity;
    this.image = loadImage(
      `/showcase/sketches/SpaceTransformation/SolarSystem/PlanetTextures/${planet.image}`
    );
    this.semiMinorAxis =
      this.semiMajorAxis * Math.sqrt(1 - this.eccentricity * this.eccentricity);
    this.orbitAngle = 0;
    this.x = this.semiMajorAxis;
    this.y = 0;
    this.z = 0;

    this.trajectory = [];
  }

  computeVelocity(mu, primary) {
    let diffX = primary.x - this.x;
    let diffZ = primary.z - this.z;
    let r = Math.sqrt(Math.pow(diffX, 2) + Math.pow(diffZ, 2));
    return Math.sqrt(mu * (2 / r - 1 / this.farthestPoint));
  }

  orbit(primary) {
    let velocity =
      guiControls.animationSpeed * this.computeVelocity(9.8, primary);
    let diff = this.farthestPoint - this.semiMajorAxis;
    this.x =
      diff +
      (this.semiMajorAxis *
        (1 - Math.pow(tan(radians(this.orbitAngle) / 2), 2))) /
        (1 + Math.pow(tan(radians(this.orbitAngle) / 2), 2));
    this.z =
      (this.semiMinorAxis * 2 * tan(radians(this.orbitAngle) / 2)) /
      (1 + Math.pow(tan(radians(this.orbitAngle) / 2), 2));
    this.orbitAngle = (this.orbitAngle + velocity) % 360;

    this.trajectory.push(createVector(this.x, this.y, this.z));
    if (this.trajectory.length > 100) {
      this.trajectory.splice(0, 1);
    }
  }

  drawTrajectory() {
    let ratio = (0.1 * this.radius) / this.trajectory.length;

    for (let i = 0; i < this.trajectory.length - 1; i++) {
      push();
      let pos = this.trajectory[i];
      translate(pos.x, 0, pos.z);
      stroke((i * 205) / this.trajectory.length + 50);
      sphere(i * ratio);
      pop();
    }
  }

  display() {
    push();
    noStroke();
    translate(this.x, 0, this.z);
    texture(this.image);
    sphere(this.radius);
    pop();
  }
}

class Sun {
  constructor(radius, x, y, z) {
    this.radius = radius;
    this.image = loadImage(
      "/showcase/sketches/SpaceTransformation/SolarSystem/PlanetTextures/sun.jpeg"
    );
    this.x = x;
    this.y = y;
    this.z = z;
  }

  display() {
    push();
    noStroke();
    translate(this.x, this.y, this.z);
    texture(this.image);
    sphere(this.radius);
    pop();
  }
}

function createPlanets(data) {
  for (entry in data) {
    planets.push(new Planet(entry, data[entry]));
  }
}

function createGrid() {
  push();
  stroke(guiControls.gridStroke, guiControls.gridStroke);
  let r = 1000;
  let angle = 20;

  for (let i = 0; i < 360; i += angle) {
    let x = r * cos(radians(i));
    let z = r * sin(radians(i));
    line(0, 50, 0, x, 50, z);
  }
  noFill();
  translate(0, 50, 0);
  rotateX(PI / 2);
  for (let i = 0; i < 1000; i += 200) {
    circle(0, 0, i * 2);
  }
  pop();
}

function drawOrbit() {
  for (let i = 0; i < planets.length; i++) {
    let diff = planets[i].farthestPoint - planets[i].semiMajorAxis;
    push();
    stroke(guiControls.orbitStroke, guiControls.orbitStroke);
    noFill();
    rotateX(PI / 2);
    ellipse(
      diff,
      0,
      2 * planets[i].semiMajorAxis,
      2 * planets[i].semiMinorAxis,
      30
    );
    pop();
  }
}

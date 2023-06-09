let particles = [];

function setup() {
  createCanvas(700, 700, WEBGL);

  for (let i = 0; i < 100; i++) {
    particles.push(new Particle());
  }
}

function draw() {
  background(220);
  orbitControl();
//   drawHouse();
  for (let i = 0; i < particles.length; i++) {
    particles[i].update();
    particles[i].draw();
  }

  fill(255, 0, 0);
  translate(0, 0);
  cylinder(280, 2, 24, 24, true, true);

  translate(0, -100);
  ambientMaterial(255, 255, 255, 5);

  stroke(255, 255, 255, 10);
  sphere(300, 24, 24);
}

function drawHouse() {
  // Techo
  push();
  translate(0, -80, 0); // Posición relativa al centro de la esfera
  fill(255, 0, 0); // Color rojo para el techo
  cone(60, 40); // Dibujar un cono para el techo
  pop();

  // Paredes
  push();
  translate(0, 0, 50); // Posición relativa al centro de la esfera
  fill(0, 255, 0); // Color verde para las paredes
  box(80, 80, 80); // Dibujar un cubo para las paredes
  pop();

  // Ventanas
  push();
  translate(-30, -20, 90); // Posición relativa al centro de la esfera
  fill(0, 0, 255); // Color azul para las ventanas
  plane(30, 30); // Dibujar una superficie plana para las ventanas
  pop();

  push();
  translate(30, -20, 90); // Posición relativa al centro de la esfera
  fill(0, 0, 255); // Color azul para las ventanas
  plane(30, 30); // Dibujar una superficie plana para las ventanas
  pop();
}

class Particle {
  constructor() {
    this.position = createVector(
      random(-300, 300), // Coordenada X aleatoria dentro de la esfera
      random(-400, 0), // Coordenada Y aleatoria dentro de la esfera
      random(-300, 300) // Coordenada Z aleatoria dentro de la esfera
    );
    this.velocity = createVector(0, 1, 0); // Velocidad hacia abajo
  }

  update() {
    this.position.add(this.velocity);

    // Si la partícula sale de la esfera, reiniciar su posición
    if (this.position.y > 100) {
      this.position.y = -100;
    }
  }

  draw() {
    push();
    translate(this.position.x, this.position.y, this.position.z);
    stroke(0, 0, 255);
    point(0, 0);
    pop();
  }
}

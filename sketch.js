const SPIN = true;

function setup() {
  createCanvas(windowWidth, windowHeight);
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function polygon(x, y, r, n) {
  const ANGLE = TWO_PI / n;
  beginShape();
  for (var a = 0; a < TWO_PI; a += ANGLE) {
    var sx = x + r * cos(a);
    var sy = y + r * sin(a);
    vertex(sx, sy);
  }
  endShape(CLOSE);
}

const shapes = {
  hexagon: (x, y, r) => polygon(x, y, r, 6),
  triangle: (x, y, r) => polygon(x, y, r, 3),
};

var angle = 0;

function draw() {
  background(0);
  stroke(255);
  noFill();

  // Centre the canvas on the origin
  translate(width / 2, height / 2);
  // Scale up by a factor of 3
  scale(3);

  if (SPIN) {
    // Rotate the entire shape
    rotate(angle);
    angle = (angle - PI / 240) % TWO_PI;
  }

  // Inner hexagon
  shapes.hexagon(0, 0, 100);
  // Outer hexagon
  shapes.hexagon(0, 0, 110);
  // Outer circle
  circle(0, 0, 222);

  // 2 triangles
  // using 99 so as to not overlap the hexagons
  push();
  shapes.triangle(0, 0, 99);
  rotate(PI / 3);
  shapes.triangle(0, 0, 99);
  pop();

  
  // 6 inner lines
  const a = 33 * sqrt(3);

  push();
  rotate(PI / 6);
  line(-a, 0, a, 0);
  rotate(PI / 3);
  line(-a, 0, a, 0);
  rotate(PI / 3);
  line(-a, 0, a, 0);
  pop();
}

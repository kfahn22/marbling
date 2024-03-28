// https://www.gorillasun.de/blog/a-guide-to-hexagonal-grids-in-p5js/

let hexagonSize;
let centerPoints = [];
function setup() {
  w = min(windowWidth, windowHeight);
  createCanvas(w, w);

  gridWidth = w;
  gridHeight = w;
  hexagonSize = w / 5;
}

function drawHexagon(cX, cY, r) {
  beginShape();
  for (let a = 0; a < TAU; a += TAU / 6) {
    vertex(cX + r * cos(a), cY + r * sin(a));
  }
  endShape(CLOSE);
}

function makeGrid() {
  count = 0;
  for (y = 0; y < gridHeight; y += hexagonSize / 2.3) {
    for (x = 0; x < gridWidth; x += hexagonSize * 1.5) {
     centerPoints.push(createVector(x-hexagonSize, y));
     fill(255, 0, 255)
     circle(x-hexagonSize,y, 20);
      drawHexagon(
        x + hexagonSize * (count % 2 == 0) * 0.75,
        y,
        hexagonSize / 2
      );
    }
    count++;
  }
}

function draw() {
  background(0);
  stroke(255);
  noFill();

  makeGrid();

  noLoop();
}

// https://editor.p5js.org/codingtrain/sketches/fsw-rJrpr

let drops = [];
let n = 4; 
let centerPoints = [];

function setup() {
  createCanvas(800, 800);
  let sp = width / n;
  let blobRadius = (width / 3) * n;

  for (let i = sp; i < width; i += sp) {
    for (let j = sp; j < height; j += sp) {
      centerPoints.push(createVector(i, j));
    }
  }
  centerPoints = shuffle(centerPoints);

  // Blobs added k times at equal intervals
  for (let j = 0; j < 20; j++) {
    for (i = 0; i < centerPoints.length; i++) {
      addInk(centerPoints[i].x, centerPoints[i].y, blobRadius);
    }
  }
}

function mousePressed() {
  save("marble.jpg");
}

function addInk(x, y, r) {
  let drop = new Drop(x, y, r);
  for (let other of drops) {
    other.marble(drop);
  }
  drops.push(drop);
}

function draw() {
  background(color7[0]);
  for (let drop of drops) {
    drop.show();
  }
  noLoop();
}

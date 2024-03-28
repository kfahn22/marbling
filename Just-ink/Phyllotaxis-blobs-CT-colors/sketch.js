// https://editor.p5js.org/codingtrain/sketches/fsw-rJrpr

// Warning--render is slow

let m = 0;
let drops = [];
let n = 20;
let blobRadius;
let centerPoints = [];

function setup() {
  createCanvas(800, 800);
  let sp = width / (1.8 * n);
  phyllotaxis(100, sp);

  translate(width / 2, height / 2);

  for (let i = 0; i < centerPoints.length; i++) {
    addInk(i, 10, 20, centerPoints);
  }
}

function draw() {
  background("#70327E");
  for (let drop of drops) {
    drop.show();
  }
  noLoop();
}

function mousePressed() {
  save("marble.jpg");
}

function addDrops(x, y, r) {
  let drop = new Drop(x, y, r);
  for (let other of drops) {
    other.marble(drop);
  }
  drops.push(drop);
}

function addInk(i, n, r, points) {
  for (let j = 0; j < n; j++) {
    addDrops(points[i].x, points[i].y, r);
  }
}

function phyllotaxis(n, c) {
  let r;
  for (let i = 0; i < n; i++) {
    let a = i * 137.5;
    r = c * sqrt(i);
    let x = width / 2 + r * cos(a);
    let y = height / 2 + r * sin(a);
    centerPoints.push(createVector(x, y));
  }
}

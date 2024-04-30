// https://editor.p5js.org/codingtrain/sketches/fsw-rJrpr

// spiral equation from https://mathworld.wolfram.com/ArchimedeanSpiral.html

let m = 0;

const a = 1;
const b = 0.2;
let angle = 0;
let frames = 60;
const e = 2.718;
// Theta can be incremented by 1 every frameCount or by an additional amount
// Adding in an additional ammount will change the render
// You can experiment with different values ranging from 0, 64;
let inc = 16;

let drops = [];
let n = 20;

let blobRadius;
let centerPoints = [];

let r = 1;
let theta = 0;

let palette;
function setup() {
  createCanvas(600, 600);

  palette = [
    color(243, 77, 85),
    color(253, 240, 213),
    color(180, 159, 204),
    color(84, 72, 200),
  ];
}

let start;
let val = 10;

function draw() {
  background(66, 62, 59);

  let v = spiral(-5, 250, theta);
  //let v = goldenSpiral(10, b, theta);

  if (frameCount < 300) {
    let total = val / 2;
    for (let n = 0; n < total; n += 30) {
      let r = map(n, 0, total, 10, 4);
      addInk(v.x + width / 2, v.y + height / 2, r, random(palette));
    }

    val += 0.2;
    theta += 1 + (inc * PI) / 64;
  } else {
    noLoop();
  }

  for (let drop of drops) {
    drop.show();
  }
}

function mousePressed() {
  save("marble.jpg");
}

function addInk(x, y, r, col) {
  let drop = new Drop(x, y, r, col);
  for (let other of drops) {
    other.marble(drop);
  }
  drops.push(drop);
}

// variant of lituus spiral (n = -2)
// n = -5, sc = 150
function spiral(n, sc, theta) {
  let r = pow(theta, 1 / n);
  let x = sc * r * cos(theta);
  let y = sc * r * sin(theta);
  return createVector(x, y);
}

// This doesn't work, the issue is e
function goldenSpiral(sc, a, theta) {
  let x = sc * pow(e, a * theta) * cos(theta);
  let y = sc * pow(e, a * theta) * sin(theta);
  return createVector(x, y);
}

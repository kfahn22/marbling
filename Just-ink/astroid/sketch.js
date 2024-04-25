// https://editor.p5js.org/codingtrain/sketches/fsw-rJrpr

// Formula for Astroid Involte from Wolfram MathWord
// https://mathworld.wolfram.com/AstroidInvolute.html

let m = 0;
// let cc = 6;
const a = 1;
const b = 0.2;
let angle = 0;
let frames = 60;
const e = 2.718;

let drops = [];
let n = 20;

// let z = 40;
// let c = 60;
//let blobRadius;
let centerPoints = [];

let r = 1;
let theta = 0;

let palette, bk;
function setup() {
  createCanvas(640, 640);

  palette = [
    color(27, 163, 139),
    color(255, 253, 130),
    color(255, 155, 113),
    color(232, 72, 85),
  ];
}

let start;
let val = 4;

function draw() {
  background(45, 48, 71);
  let sc = 120;

  let v = astroid(240, theta);

  // 160, n += 40

  if (frameCount < 360) {
    let total = val / 2;
    for (let n = 0; n < total; n += 40) {
      let r = map(n, 0, total, 8, 3); // 14, 4
      addInk(v.x + width / 2, v.y + height / 2, r, random(palette));
    }

    val += 0.2;
    theta += 1;
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

// function involute(sc, theta) {
//   let x = sc * (1 / 8) * (3 * cos(theta) - cos(3 * theta));
//   let y = sc * (1 / 8) * (3 * sin(theta) - sin(3 * theta));
//   return createVector(x, y);
// }

function astroid(sc, theta) {
  let x = sc * pow(cos(theta + angle), 3);
  let y = sc * pow(sin(theta + angle), 3);
  return createVector(x, y);
}

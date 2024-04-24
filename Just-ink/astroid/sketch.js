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
let blobRadius;
let centerPoints = [];

let r = 1;
let theta = 0;

let palette, bk;
function setup() {
  createCanvas(640, 360);

  palette = [
    color(147, 181, 198),
    color(221, 237, 170),
    color(240, 207, 101),
    color(215, 129, 106)
  
  ];
}

let start;
let val = 4;

function draw() {
  background(189,79,108);
  let sc = 120;

  //let v = astroid(120, theta);
  let v = involute(100, theta);
  v = astroid(120, theta)
  let c1 = color(255, 250, 229);
  let c2 = color(255, 212, 0);

  // 160, n += 40
  if (frameCount < 180) {
    let total = val / 2;
    // n += 20
    for (let n = 0; n < total; n += 60) {
      let r = map(n, 0, total, 7, 2); // 14, 4
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

function involute(sc, theta) {
  let x = sc * (1 / 8) * (3 * cos(theta) - cos(3 * theta));
  let y = sc * (1 / 8) * (3 * sin(theta) - sin(3 * theta));
  return createVector(x, y);
}

function astroid(sc, theta) {
  let x = sc * pow(cos(theta), 3);
  let y = sc * pow(sin(theta), 3);
  return createVector(x, y);
}

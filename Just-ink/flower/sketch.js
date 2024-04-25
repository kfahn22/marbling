// https://editor.p5js.org/codingtrain/sketches/fsw-rJrpr

// Formula for Astroid Involte from Wolfram MathWord
// https://mathworld.wolfram.com/AstroidInvolute.html

let drops = [];
let theta = 0;
let a = 12;

let palette;
function setup() {
  createCanvas(640, 640);

  palette = [color(239, 189, 213), color(190, 151, 198), color(134, 97, 193)];
}
let val = 4;

function draw() {
  background(29, 30, 44);
  phyllotaxis();
  let v = involute(100, theta, a);

  if (frameCount < 120) {
    let total = val / 2;
    for (let n = 0; n < total; n += 40) {
      // 40
      let r = map(n, 0, total, 20, 6); // 14, 4
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

function involute(sc, theta, a) {
  let x = sc * (1 / (a + 1)) * (a * cos(theta) - cos(a * theta));
  let y = sc * (1 / (a + 1)) * (a * sin(theta) - sin(a * theta));
  return createVector(x, y);
}

// https://editor.p5js.org/codingtrain/sketches/CehY0jsLV
function phyllotaxis() {
  let c = 5;
  for (let i = 0; i < 180; i++) {
    let a = i * 137.5;
    let r = c * sqrt(i);
    let x = width / 2 + r * cos(a);
    let y = height / 2 + r * sin(a);
    fill(255, 173, 5);
    noStroke();
    ellipse(x, y, c + 1, c + 1);
  }
}

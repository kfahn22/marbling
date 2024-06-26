// https://editor.p5js.org/codingtrain/sketches/fsw-rJrpr

// Formula for Astroid Involte from Wolfram MathWord
// https://mathworld.wolfram.com/AstroidInvolute.html

let drops = [];
let theta = 0;
let a = 12;
let n = 0;

let palette;
function setup() {
  createCanvas(640, 640);

  palette = [
    color(49, 59, 114),
    color(98, 168, 124),
    color(126, 224, 129),
    color(195, 243, 192),
  ];
}

//let start;
let val = 4;

function draw() {
  background(70, 34, 85);
  // 75
  let v = involute(100, theta, a);

  // 160, n += 40
  if (frameCount < 240) {
    let total = val / 2;
    for (let n = 0; n < total; n += 40) {
      // 40
      let r = map(n, 0, total, 15, 4); // 14, 4
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

// https://editor.p5js.org/codingtrain/sketches/fsw-rJrpr

// Formula for Epitrochoid Evolute from Wolfram MathWord
// https://mathworld.wolfram.com/EpitrochoidEvolute.html

let drops = [];
let theta = 0;
let a = 5;
let b = 10;
let h = 20;

let palette;
function setup() {
  createCanvas(640, 640);

  palette = [
    color(255, 113, 91),
    color(249, 203, 64),
    color(188, 237, 9),
    color(47, 82, 224),
  ];
  palette2 = [
    color(85, 73, 113),
    color(99, 118, 141),
    color(138, 198, 208),
    color(184, 243, 255),
  ];
  palette3 = [
    color(30, 150, 252),
    color(162, 214, 249),
    color(252, 243, 0),
    color(255, 198, 0),
  ];
}

//let start;
let val = 4;

function draw() {
  //1
  //background(76, 91, 92);
  //2
  //background(54, 33, 62);
  //3
  background(7, 42, 200);
  let v = evolute(24, theta, a, b, h);

  // 160, n += 40
  if (frameCount < 360) {
    let total = val / 2;
    for (let n = 0; n < total; n += 10) {
      let r = map(n, 0, total, 10, 2); // 14, 4
      addInk(v.x + width * 0.45, v.y + height / 2, r, random(palette3));
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

// Epitrochoid Evolute

function evolute(sc, theta, a, b, h) {
  let c1 = h - b * cos((a / b) * theta);
  let c2 = b - h * cos((a / b) * theta);
  let denominator =
    pow(b, 3) +
    (a + b) * pow(h, 2) -
    b * (a + 2 * b) * h * cos((a / b) * theta);
  let x =
    (sc *
      (a * h * (a + b) * c1 * cos(theta) +
        b * c2 * cos(((a + b) / b) * theta))) /
    denominator;

  let y =
    (sc *
      (a * h * (a + b) * c1 * sin(theta) +
        b * c2 * sin(((a + b) / b) * theta))) /
    denominator;
  return createVector(x, y);
}

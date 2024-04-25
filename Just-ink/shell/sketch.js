// https://editor.p5js.org/codingtrain/sketches/fsw-rJrpr

let drops = [];
let theta = 0;
// a = 5, b = 10, h = 20
let a = 4;
let b = 8;
let h = 16;

let palette;
function setup() {
  createCanvas(640, 640);

  // palette = [
  //   color(255, 113, 91),
  //   color(249, 203, 64),
  //   color(188, 237, 9),
  //   color(47, 82, 224),
  // ];
  // palette2 = [
  //   color(85, 73, 113),
  //   color(99, 118, 141),
  //   color(138, 198, 208),
  //   color(184, 243, 255),
  // ];
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
  background(7, 42, 200);

  let v = shell(24, theta, a, b, h);

  if (frameCount < 270) {
    let total = val / 2;
    for (let n = 0; n < total; n += 14) {
      let r = map(n, 0, total, 12, 4); // 14, 4
      addInk(v.x + width * 0.47, v.y + height / 2, r, random(palette3));
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

// Shell
// I got this convluted equation for the Epitrochoid Evolute from Walfram Mathworld
// https://mathworld.wolfram.com/EpitrochoidEvolute.html
// I doubt it is implmented correctly but still looks cool

function shell(sc, theta, a, b, h) {
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

// https://mathworld.wolfram.com/Swirl.html
function swirl(r, n, theta) {
  return sin(6 * cos * r - n * theta);
}

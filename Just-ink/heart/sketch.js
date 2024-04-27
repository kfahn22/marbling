// https://editor.p5js.org/codingtrain/sketches/fsw-rJrpr

let drops = [];
let palette;
let theta = 0;
let sign = 1;

function setup() {
  createCanvas(640, 640);
  palette = [
    color(94, 43, 255),
    color(192, 76, 253),
    color(252, 109, 171),
    color(247, 246, 197),
    color(243, 250, 225),
  ];
}
let val = 4;

function draw() {
  //background(243,250,225);
  background(14, 0, 4);

  let sc = 360;
  let v = heart(sc, theta);

  if (frameCount < 1080) {
    let total = val / 2;
    for (let n = 0; n < total; n += 50) {
      let r = map(n, 0, total, 8, 4);
      // Eliminate the unwanted portion of the curve
      // Note that if the scale is change this value will need to be adjusted
      // abs(v.x) = 0.5 * sc seems to work
      if (abs(v.x) < 0.5 * sc && v.y < 0) {
        addInk(v.x + width / 2, v.y + height * 0.8, r, random(palette));
      }
    }

    val += 0.2;
    theta += PI / 128;
    //a += 1;
    //sign *= -1;
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

// https://mathworld.wolfram.com/HeartCurve.html
function heart(sc, theta) {
  let r =
    (sin(theta) * sqrt(abs(cos(theta)))) / (sin(theta) + 7 / 5) +
    2 * sin(theta) +
    2;
  x = sc * r * cos(theta);
  y = -sc * r * sin(theta);
  return createVector(x, y);
}

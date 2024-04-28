// https://editor.p5js.org/codingtrain/sketches/fsw-rJrpr

// https://mathworld.wolfram.com/RoseCurve.html

let drops = [];
let theta = 0;
let p = 2;
let q = 5;
let palette;
function setup() {
  createCanvas(640, 640);

  palette = [
    color(255, 250, 229),
    color(255, 246, 204),
    color(255, 242, 178),
    color(255, 238, 153),
    color(255, 233, 127),
    color(255, 229, 102),
    color(255, 225, 76),
    color(255, 221, 50),
    color(255, 216, 25),
    color(255, 212, 0),
  ];
}

let val = 4;

function draw() {
  background(0, 8, 20);

  let v = rose(p, q, 210, theta);

  if (frameCount < 270) {
    let total = val / 2;
    for (let n = 0; n < total; n += 20) {
      if (v.x === 0 && v.y === 0) {
        continue;
      } else {
        let r = map(n, 0, total, 12, 4); // 14, 4
        addInk(v.x + width / 2, v.y + height / 2, r, random(palette));
      }
    }

    val += 0.3;
    // You can very different renders depending on how you modify theta
    // You can use one of the following or both
    theta += 1;
    theta += PI / 12;
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

// rose curve (n=5)
function rose(p, q, sc, theta) {
  let n = p / q;
  let r = cos(n * theta);
  let x = sc * r * cos(theta);
  let y = sc * r * sin(theta);
  return createVector(x, y);
}

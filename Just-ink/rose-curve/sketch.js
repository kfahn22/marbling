// https://editor.p5js.org/codingtrain/sketches/fsw-rJrpr

let drops = [];
let theta = 0;

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

  // rose curve
  let r = cos(5 * theta);
  let sc = 160;
  let x = sc * r * cos(theta);
  let y = sc * r * sin(theta);

  let v = createVector(x, y);

  if (frameCount < 480) {
    let total = val / 2;
    for (let n = 0; n < total; n += 40) {
      let r = map(n, 0, total, 9, 2); // 14, 4
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

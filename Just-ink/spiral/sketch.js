// https://editor.p5js.org/codingtrain/sketches/fsw-rJrpr

// spiral equation from https://mathworld.wolfram.com/ArchimedeanSpiral.html

let m = 0;

const a = 1;
const b = 0.2;
let angle = 0;
let frames = 60;
const e = 2.718;

let drops = [];
let n = 20;

let blobRadius;
let centerPoints = [];

let r = 1;
let theta = 0;

let palette;
function setup() {
  createCanvas(640, 360);

  palette = [
    color(168, 70, 160),
    color(246, 248, 255),
    color(39, 45, 45),
    color(35, 206, 107),
  ];
}

let start;
let val = 10;

function draw() {
  background(80, 81, 79);
  // variant of lituus spiral (n = -2)

  let n = -5;
  let r = 150 * pow(theta, 1 / n);
  let x = r * cos(theta);
  let y = r * sin(theta);

  let v = createVector(x, y);
  // let c1 = color(248, 158, 79);
  // let c2 = color(252, 238, 33);
  // v.col = lerpColor(c1, c2, (frameCount % 60) / 60);

  if (frameCount < 360) {
    let total = val / 2;
    for (let n = 0; n < total; n += 60) {
      let r = map(n, 0, total, 7, 4);
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

// function addDrops(x, y, r) {
//   let drop = new Drop(x, y, r);
//   for (let other of drops) {
//     other.marble(drop);
//   }
//   drops.push(drop);
// }

function addInk(x, y, r, col) {
  let drop = new Drop(x, y, r, col);
  for (let other of drops) {
    other.marble(drop);
  }
  drops.push(drop);
}
// function addInk(i, n, r, points) {
//   for (let j = 0; j < n; j++) {
//     addDrops(points[i].x, points[i].y, r);
//   }
// }

// function goldenSpiral(n, sp) {
//   //translate(width / 2, height / 2);
//   for (let theta = 0; theta < n; ) {
//     const x = width/2 + a * pow(e, b * theta) * cos(theta);
//     const y = height/2 + a * pow(e, b * theta) * sin(theta);
//     theta += sp;
//     centerPoints.push(createVector(x, y));
//   }
// }

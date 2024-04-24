// https://editor.p5js.org/codingtrain/sketches/fsw-rJrpr

// Warning--render is slow

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
    color(11, 106, 136),
    color(45, 197, 244),
    color(112, 50, 126),
    color(146, 83, 161),
    color(164, 41, 99),
    color(236, 1, 90),
    color(240, 99, 164),
    color(241, 97, 100),
    color(248, 158, 79),
    color(252, 238, 33),
  ];
  bk = palette.splice(5, 1)[0];

  // let v = createVector(1, 1);
  // v.normalize();
  // tineLine(v, 300, 300, 80, 16);
}

let start;
let val = 10;

function draw() {
  // rose curve
  let r = cos(2 * theta);
  //console.log(r)
  //let sc = map(r, -1, 1, 5, 125);
  let sc = 140;
  let x = sc * r * cos(theta);
  let y = sc * r * sin(theta);

  let v = createVector(x, y);
  let c1 = color(248, 158, 79);
  let c2 = color(252, 238, 33);
  v.col = lerpColor(c1, c2, (frameCount % 60) / 60);

  if (frameCount < 120) {
    let total = val / 2;
    for (let n = 0; n < total; n += 20) {
      let r = map(n, 0, total, 14, 4);
      addInk(v.x + width / 2, v.y + height / 2, r, random(palette));
    }

    val += 0.2;
    theta += 1;
  } else {
    noLoop();
  }

  background(bk);
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

// https://editor.p5js.org/codingtrain/sketches/fsw-rJrpr

let drops = [];
let n = 6;
let sp;
let z = 40;
let c = 60;
let blobRadius;
let centerPoints = [];
let offsetPoints = [];

function setup() {
  createCanvas(400, 400);
  sp = width / n;
  blobRadius = width / (2 * n);

  for (let i = sp; i < width; i += sp) {
    for (let j = sp; j < height; j += sp) {
      centerPoints.push(createVector(i, j));
    }
  }
  // Shuffle because deformation of blobs depends on order in which they are added
  centerPoints = shuffle(centerPoints);

  // Add evenly spaced blobs of ink
  for (let i = 0; i < centerPoints.length; i++) {
    addInk(i, 6, centerPoints);
  }

  hvTines(width / 6, sp, 6, true, -1);
}

// For horizontal or vertical tines, end = null
// For vertical tines, dir = 0
// For horizontal tines, dir = 1
// b is position of first tine
// sp is spacing between tines
// n is number of tines
// hvdir - boolean (true for horizontal)
// dir which direction the tines go (1 or -1)
function hvTines(b, sp, n, hvdir, dir) {
  for (let i = 0; i < n; i++) {
    for (let drop of drops) {
      if (hvdir === true) {
        drop.tine(null, createVector(b + sp * i, 0), 0, dir);
      } else {
        drop.tine(null, createVector(0, b + sp * i), 0, dir);
      }
    }
  }
}

function tineLines(end, begin, angle) {
  for (let drop of drops) {
    for (let i = 0; i < 1; i++) {
      let end = createVector(e.x + sp * i, e.y);
      end.normalize();
      let begin = createVector(b.x + sp * i, b.y);
      drop.tine(end, begin, angle);
    }
  }
}

// function mousePressed() {
//   save("marble.jpg");
// }

function addDrops(x, y, r) {
  let drop = new Drop(x, y, r);
  for (let other of drops) {
    other.marble(drop);
  }
  drops.push(drop);
}

function addInk(i, n, points) {
  for (let j = 0; j < n; j++) {
    addDrops(points[i].x, points[i].y, blobRadius);
  }
}

function draw() {
  background(242, 158, 75);
  for (let drop of drops) {
    drop.show();
  }
  noLoop();
}

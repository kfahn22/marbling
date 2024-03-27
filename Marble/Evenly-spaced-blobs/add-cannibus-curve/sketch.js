// https://editor.p5js.org/codingtrain/sketches/fsw-rJrpr

let drops = [];
let n = 8;

let z = 40;
let c = 60;
let blobRadius;
let centerPoints = [];
let offsetPoints = [];

function setup() {
  createCanvas(800, 800);
  let sp = width / n;
  blobRadius = width / (3 * n);

  for (let i = sp; i < width; i += sp) {
    for (let j = sp; j < height; j += sp) {
      centerPoints.push(createVector(i, j));
      // centerPoints.push(createVector(i + sp / 2, j + sp / 2));
    }
  }

  // for (let i = sp / 2; i < width; i += sp) {
  //   for (let j = sp / 2; j < height; j += sp) {
  //     offsetPoints.push(createVector(i, j));
  //   }
  // }

  centerPoints = shuffle(centerPoints);
  //offsetPoints = shuffle(offsetPoints);
  let l = centerPoints.length;
  console.log(l);
  // Deformation of blobs depends on order in which they are added
  for (let i = 0; i < l; i++) {
    addInk(i, 6, centerPoints);
    // addInk(i, 10, offsetPoints);
  }

  // Adding tines here!!!!
  for (let drop of drops) {
    // drop.vTine(width * 0.25, 70, 20, 1);
    // drop.vTine(width * 0.333, 70, 20, 0);
    // drop.vTine(width * 0.666, 70, 20, 1);
    // drop.hTine(height * 0.2, 240, 8, 0);
    // drop.hTine(height * 0.4, 240, 8, 1);
    // drop.hTine(height * 0.6, 240, 8, 0);
    // drop.hTine(height * 0.8, 240, 8, 1);
  }

  // Add more ink smaller ink blobs after tining;
  // for (let i = 0; i < 4; i++) {
  //   addDrops(random(width), random(height), 30);
  // }
}

function draw() {
  // color5
  background(242, 158, 75);
  for (let drop of drops) {
    drop.show();
  }
  noLoop();
}

function mousePressed() {
  save("marble.jpg");
}

// north() & south() cancel each other out
// east() & west() cancel each other out
function tineLines() {
  for (let drop of drops) {
    //drop.north();
    //drop.south();
    //drop.east();
    //drop.west();
    //drop.combine(1, 1);
    drop.combine();
  }
}

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

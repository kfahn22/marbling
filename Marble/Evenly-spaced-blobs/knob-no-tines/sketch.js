// https://editor.p5js.org/codingtrain/sketches/fsw-rJrpr

let drops = [];
let n = 4; //5
let rn = 0;
let z = 40;
let c = 60;
//let blobRadius = 37;
let startPoints = [];
let endPoints = [];

let centerPoints = [];

function setup() {
  createCanvas(800, 800);
  let sp = width / n;
  let blobRadius = width / 3*n;

  for (let i = sp; i < width; i += sp) {
    for (let j = sp; j < height; j += sp) {
      centerPoints.push(createVector(i, j));
    }
  }
  centerPoints = shuffle(centerPoints);

  console.log(centerPoints);

  // Blobs added k times at equal intervals
  for (let j = 0; j < 20; j++) {
    for (i = 0; i < centerPoints.length; i++) {
      addInk(centerPoints[i].x, centerPoints[i].y, blobRadius);
    }
  }
  for (let drop of drops) {
    // drop.vTine(width * 0.25, 30, 30, 1);
    // drop.vTine(width * 0.5, 30, 30, 0);
    // drop.vTine(width * 0.75, 30, 30, 1);
    // drop.hTine(height * 0.25, 30, 30, 0);
    // drop.hTine(height * 0.5, 30, 30, 1);
    // drop.hTine(height * 0.75, 30, 30, 0);
  }
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
    //drop.combine();
  }
}

function mousePressed() {
  save("marble.jpg");
}

function addInk(x, y, r) {
  let drop = new Drop(x, y, r);
  for (let other of drops) {
    other.marble(drop);
  }
  drops.push(drop);
}

function draw() {
  background(color7[0]);
  for (let drop of drops) {
    drop.show();
  }
  noLoop();
}

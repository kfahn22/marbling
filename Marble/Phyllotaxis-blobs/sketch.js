// https://editor.p5js.org/codingtrain/sketches/fsw-rJrpr
let m = 0;
// let cc = 6;

let drops = [];
let n = 20;

let z = 40;
let c = 60;
let blobRadius;
let centerPoints = [];
let radii = [];

function setup() {
  createCanvas(400, 400);
  let sp = width / (0.9 * n);
  phyllotaxis(50, sp);

  translate(width / 2, height / 2);

  for (let i = 0; i < centerPoints.length; i++) {
    let r = radii[i];
    //console.log(r)
    addInk(i, 10, r, centerPoints);
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
  // color7
  background(color7[4]);
  for (let drop of drops) {
    drop.show();
  }
  //noLoop();
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

function addInk(i, n, r, points) {
  for (let j = 0; j < n; j++) {
    addDrops(points[i].x, points[i].y, r);
  }
}

function phyllotaxis(n, c) {
  let r;
  for (let i = 0; i < n; i++) {
    let a = i * 137.5;
    r = c * sqrt(i);
    // TODO: try log scale
    let rr = map(Math.log2(r + 1), c, Math.log2(c * sqrt(n)), 1, 30);
    //let rr = map(r + 1, 0, c * sqrt(n), 5, 50);
    radii.push(rr);
    let x = width / 2 + r * cos(a);
    let y = height / 2 + r * sin(a);
    centerPoints.push(createVector(x, y));
  }
}

// From Coding Train base
// let start;

// function mousePressed() {
//   start = createVector(mouseX, mouseY);
// }

// function mouseDragged() {
//   let end = createVector(mouseX, mouseY);
//   end.sub(start);
//   end.normalize();
//   tineLine(end, mouseX, mouseY, 2, 16);
// }

// function tineLine(v, x, y, z, c) {
//   for (let drop of drops) {
//     drop.tine(v, x, y, z, c);
//   }
// }

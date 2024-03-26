// https://editor.p5js.org/codingtrain/sketches/fsw-rJrpr

let drops = [];
let n = 1;
let rn = 0;
let z = 40;
let c = 60;
let startPoints = [];
let endPoints = [];

function setup() {
  createCanvas(600, 600);
  sp = width / n;
  // Evenly spaced ink blobs
  // for (let i = 0; i < n; i++) {
  //   for (let j = 0; j < n; j++) {
  //     addInk(sp / 2 + sp * i, -sp / 2 + sp * j, 35);
  //   }
  // }
  // A ton of central ink blobs
  for (let i = 0; i < 200; i++) {
    //addInk(random(width), random(height), 100);
    addInk(width / 2, height / 2, 30);
  }

  for (let i = 0; i < n; i++) {
    tineLines();
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

    drop.combine();
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
  background(35, 27, 27);
  for (let drop of drops) {
    drop.show();
  }
}

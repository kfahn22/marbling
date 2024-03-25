// https://editor.p5js.org/codingtrain/sketches/fsw-rJrpr

let drops = [];
let n = 4;
let z = 40;
let c = 30;
let startPoints = [];
let endPoints = [];

function setup() {
  createCanvas(600, 600);
  sp = width / n;
  for (let i = 0; i < 40; i++) {
    //addInk(random(width), random(height), 100);
    addInk(300, 300, 70);
  }

  for (let i = 0; i < n; i++) {
    tineLines();
  }
}

// north() & south() cancel each other out
// east() & west() cancel each other out
function tineLines() {
  for (let drop of drops) {
    // drop.north();
    // drop.south();
    //drop.east();
    //drop.west();
    //drop.combine(1, 1);
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
  background(2255, 90, 95);
  for (let drop of drops) {
    drop.show();
  }
}

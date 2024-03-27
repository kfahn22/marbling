// https://editor.p5js.org/codingtrain/sketches/fsw-rJrpr

let drops = [];
let n = 7;
let z = 40;
let c = 30;
let startPoints = [];
let endPoints = [];

function setup() {
  createCanvas(600, 600);
  sp = width / n;
  for (let i = 0; i < 20; i++) {
    //addInk(random(width), random(height), 100);
    addInk(300, 300, 50);
  }

  for (let i = 0; i < 4; i++) {
    tineLines();
  }
}

// north() & south() cancel each other out
// east() & west() cancel each other out
function tineLines() {
  for (let drop of drops) {
    //drop.north();
    // drop.south();
    //drop.east();
    //drop.west();
    //drop.combine(1, 1);
    drop.combine();
  }
}

// function mousePressed() {
//   save("marble.jpg");
// }

function addInk(x, y, r) {
  let drop = new Drop(x, y, r);
  for (let other of drops) {
    other.marble(drop);
  }
  drops.push(drop);
  //console.log(drops[0].vertices[0].x);
}

function draw() {
  background(2255, 90, 95);
  for (let drop of drops) {
    drop.show();
  }
}

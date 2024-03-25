// https://editor.p5js.org/codingtrain/sketches/fsw-rJrpr

let drops = [];
let n = 2;
let z = 30;
let c = 60;
let startPoints = [];
let endPoints = [];

function setup() {
  createCanvas(600, 600);
  sp = width / n;
  for (let i = 0; i < 10; i++) {
    addInk(random(width), random(height), 100);
    addInk(300, 300, 100);
  }

  for (let i = 0; i < n; i++) {
    tineLines();
  }
}

// function addPoints(n, sp) {
//   let s = 0;
//   for (let i = 0; i < n; i++) {
//     startPoints.push(s + sp * i);
//     //startPoints.push(createVector(s + i * sp, 0));
//   }
// }
// function stopPoints(n, sp) {
//   let s = 0;
//   for (let i = 0; i < n; i++) {
//     endPoints.push(s + sp * i);
//     //startPoints.push(createVector(s + i * sp, 0));
//   }
// }

// function movePoints() {
//   for (let i = 0; i < n; i++) {
//     let start = startPoints[i];
//     let e = endPoints[i];
//     e.sub(start);
//     e.normalize();
//     //endPoints.push(stop);
//     let end = createVector(end, y);
//     tineLine(end, start, y, 2, 16);
//   }
// }

// horizontal x of vertical line
function tineLines() {
  for (let drop of drops) {
    drop.vTines();
    //drop.hTine(y, z, c);
  }
}
// function horizontalTines(startPoints, sp, z, c) {
//   for (let drop of drops) {
//     drop.hTine(x, 60, 16);
//   }
// }

// function verticalTines(startPoints, sp, z, c) {
//   for (let drop of drops) {
//     drop.vTine(x, z, c);
//   }
// }

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

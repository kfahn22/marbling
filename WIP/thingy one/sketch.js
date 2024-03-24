// https://editor.p5js.org/codingtrain/sketches/fsw-rJrpr

let drops = [];
let n = 60;
let z = 120;
let c = 60;
let startPoints = [];
let endPoints = [];

function setup() {
  createCanvas(600, 600);
  for (let i = 0; i < n; i++) {
    addInk(0, 60, abs(n + 10 - i));
    addInk(400, 60, abs(n + 2 - i));
    addInk(200, 400, abs(n + 2 - i));
    addInk(-100, 400, abs(n + 2 - i));
  }

  sp = width / n;
  addPoints(n, sp);
  // console.log(startPoints[0]);
  for (let i = 0; i < n; i++) {
    // need to shuffle or they will be correlated
    let startX = shuffle(startPoints);
    let startY = shuffle(startPoints);
    tineLine(startX[i], startY[i], 30, 20);
  }
}

function addPoints(n, sp) {
  let s = 0;
  for (let i = 0; i < n; i++) {
    startPoints.push(s + sp * i);
    //startPoints.push(createVector(s + i * sp, 0));
  }
}
function mousePressed() {
  let start = createVector(mouseX, mouseY);
  //let start = createVector(0, 0);
  let space = width / n;
  for (let i = 0; i < n; i++) {
    let v = createVector(space * i, 0);
    start.add(v);
    startPoints.push(v);
  }
}

// function mouseDragged() {
//   let end = createVector(mouseX, mouseY);
//   end.sub(start);
//   end.normalize();
//   tineLine(end, mouseX, mouseY, 2, 16);
// }

// function mouseDragged() {
//   for (let i = 0; i < n; i++) {
//     let stop = createVector(mouseX, mouseY);
//     // stop.add(createVector(width*i/n, 0));
//     stop.sub(startPoints[i]);
//     stop.normalize();
//     endPoints.push(stop);
//     tineLine(endPoints[i], mouseX, mouseY, 2, 16);
//   }
// }
// horizontal x of vertical line
function tineLine(x, y, z, c) {
  for (let drop of drops) {
    drop.vTine(x, 20, 60);
    drop.hTine(y, 30, 60);
  }
}
function horizontalTines(startPoints, sp, z, c) {
  for (let drop of drops) {
    drop.hTine(x, random(20, 60), random(8, 20));
  }
}

function verticalTines(startPoints, sp, z, c) {
  for (let drop of drops) {
    drop.vTine(x, z, c);
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
  //console.log(drops[0].vertices[0].x);
}

function draw() {
  background(2255, 90, 95);
  for (let drop of drops) {
    drop.show();
  }
}

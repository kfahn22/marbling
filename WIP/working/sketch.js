// https://editor.p5js.org/codingtrain/sketches/fsw-rJrpr

let drops = [];
let n = 7;
let z = 30;
let c = 60;
let startPoints = [];
let endPoints = [];

function setup() {
  createCanvas(600, 600);
  // for (let i = 0; i < 100; i++) {
  //   if (random(1) > 0) {
  //     addInk(random(width), random(height), 50);
  //   } else {
  //     addInk(300, 300, 100);
  //   }
  // }
  sp = width / n;
  for (let i = 0; i < 10; i++) {
    addInk(random(width), random(height), 100);
  }

  //sp = width / n;
  //addPoints(n, sp);
  // console.log(startPoints[0]);
  for (let i = 0; i < n; i++) {
    // need to shuffle or they will be correlated
    let startX = shuffle(startPoints);
    let startY = shuffle(startPoints);
    tineLine(startX[i], startY[i], 40, 20);
  }
}

function addPoints(n, sp) {
  let s = 0;
  for (let i = 0; i < n; i++) {
    startPoints.push(s + sp * i);
    //startPoints.push(createVector(s + i * sp, 0));
  }
}
// function mousePressed() {
//   let start = createVector(mouseX, mouseY);
//   //let start = createVector(0, 0);
//   let space = width / n;
//   for (let i = 0; i < n; i++) {
//     let v = createVector(space * i, 0);
//     start.add(v);
//     startPoints.push(v);
//   }
// }
function mousePressed() {
  let s = 0;
  let space = width / n;
  for (let i = 0; i < n; i++) {
    let v = createVector(s + space * i, mouseY);
    //start.add(v);
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
    drop.vTine(x, z, c);
    // drop.hTine(y, z, c);
    // drop.vTine(x, z, c);
  }
}
function horizontalTines(startPoints, sp, z, c) {
  for (let drop of drops) {
    drop.hTine(x, 60, 16);
  }
}

function verticalTines(startPoints, sp, z, c) {
  for (let drop of drops) {
    drop.vTine(x, z, c);
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

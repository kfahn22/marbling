// https://editor.p5js.org/codingtrain/sketches/fsw-rJrpr

let drops = [];
let n = 6;
let z = 60;
let c = 16;
let sp = 300;
//let ysp = 0;
let startPoints = [];
let endPoints = [];

function setup() {
  createCanvas(600, 600);
  for (let i = 0; i < 100; i++) {
    if (random(1) > 0) {
      addInk(random(width), random(height), 50);
    } else {
      addInk(300, 300, 100);
    }
  }

  sp = width / n;
  addPoints(n, sp);
  console.log(startPoints[0]);
  for (let i = 0; i < n; i++) {
    // need to shuffle or they will be correlated
    let startX = shuffle(startPoints);
    let startY = shuffle(startPoints);
    tineLine(startX[i], startY[i], 30, 20);
    //tineLine(startX[i], startY[i], 30, 4);
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
    drop.vTine(x, z, c);
    drop.hTine(y, z, c);
  }
}
function horizontalTines(startPoints, sp, z, c) {
  for (let drop of drops) {
    drop.hTine(x, z, c);
  }
}

function verticalTines(startPoints, sp, z, c) {
  for (let drop of drops) {
    drop.vTine(x, z, c);
  }
}

// function tineLine(v, x, y, z, c) {
//   for (let drop of drops) {
//     // for (let i=0; i < drop.vertices.length; i++)
//     // let vert = createVector(drop.vertices[i].x, drop.vertices[0].y);
//     // console.log(drop.vertices[0].x);
//    // drop.tine(v, x, y, z, c, angle, n);
//     drop.horizontalStart(v, x, y, z, c);
//     let tines = drop.tines;
//     console.log(tines[0]);
//     //comb.addTines();
//   }
// }

// function tineLines(n, sp, v, x, y, z, c, angle) {
//   for (let drop of drops) {
//     drop.tines(n, sp, v, x, y, z, c, angle);
//   }
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
  background(1,22,30);
  for (let drop of drops) {
    drop.show();
  }
}

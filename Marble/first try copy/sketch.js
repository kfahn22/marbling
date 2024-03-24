// https://editor.p5js.org/codingtrain/sketches/fsw-rJrpr

let drops = [];
let n = 14;
let z = 30;
let c = 60;
let startPoints = [];
let endPoints = [];

function setup() {
  createCanvas(600, 600);
  sp = width / n;
  // Add ink
  // Try adding evenly spaced ink blobs
  for (let i = 0; i < width; i+=sp) {
    for (let j = 0; j < height; j+=sp) {
    addInk(i, j, 10);
    //addInk(300, 300, 100);
  }
}
  // Add evenly spaced tines
  
  // addPoints(n, sp);
  // for (let i = 0; i < n; i++) {
  //   // need to shuffle or they will be correlated
  //   let startX = shuffle(startPoints);
  //   let startY = shuffle(startPoints);
  //   tineLine(startX[i], startY[i], 40, 20);
  // }
}

// Write a function to initialize multiple tines
function addPoints(n, sp) {
  let s = 0;
  for (let i = 0; i < n; i++) {
    startPoints.push(s + sp * i);
  }
}


// horizontal x of vertical line
function tineLine(x, y, z, c) {
  for (let drop of drops) {
    drop.vTine(x, z, c);
    drop.hTine(y, z, c);
    // m, x, y, z, c
    //drop.tine();
    // drop.vTine(x, z, c);
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
}

function draw() {
  background(2255, 90, 95);
  for (let drop of drops) {
    drop.show();
  }
}

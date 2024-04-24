// https://editor.p5js.org/codingtrain/sketches/fsw-rJrpr

const a = 1;
const b = 0.2;
const sc = 70;
let angle = 0;

let drops = [];
let n = 6;

let blobRadius;
let centerPoints = [];

//let r = 1;
let theta = 0;

let colors = [
  [204, 245, 172],
  [186, 210, 159],
  [128, 138, 159],
  [44, 73, 127],
  [61, 43, 86],
];

function setup() {
  createCanvas(800, 800);
  // Add points from the eightCurve with different values of a (radius), spacing, and rotation
  eightCurve(75, PI / 8, 0);
  eightCurve(150, PI / 16, 0);
  eightCurve(150, PI / 24, 45);
  eightCurve(300, PI / 32, 90);
  eightCurve(350, PI / 32, -90);
  //centerPoints = shuffle(centerPoints);

  // We have duplicates of (400,400) so we remove them
  removeDuplicates(centerPoints);
  for (let i = 0; i < centerPoints.length; i++) {
    addInk(i, n, 8, centerPoints);
  }
}

function draw() {
  background(colors[4]);
  for (let drop of drops) {
    drop.show();
  }
  noLoop();
}

function secant(theta) {
  return 1 / cos(theta);
}

function mousePressed() {
  save("marble.jpg");
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

function eightCurve(a, sp, angle) {
  for (let theta = 0; theta < TWO_PI; theta += sp) {
    // Equation for eight-curve
    let r = pow(pow(a, 2) * pow(secant(theta), 2) * cos(2 * theta), 0.5);
    let x = floor(width / 2 + r * sin(angle + theta));
    let y = floor(height / 2 + r * cos(angle + theta));
    // We have to add this b/c we get (0,0) and NaN
    if (x != isNaN && y != isNaN && x > 0 && y > 0) {
      centerPoints.push(createVector(x, y));
    }
  }
}

function removeDuplicates(arr) {
  for (let i = arr.length - 1; i >= 0; i--) {
    for (let j = i - 1; j >= 0; j--) {
      if (arr[i].equals(arr[j])) {
        arr.splice(i, 1);
        break; // Once a duplicate is found and removed, no need to continue checking
      }
    }
  }
}

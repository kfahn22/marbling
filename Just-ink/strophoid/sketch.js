// https://editor.p5js.org/codingtrain/sketches/fsw-rJrpr

// Formula for Astroid Involte from Wolfram MathWord
// https://mathworld.wolfram.com/AstroidInvolute.html

let drops = [];
let theta = 0;
let omega;
let a = 30;
let n = 9;
const e = 2.718281828459045;
let sc = 1;
let palette;
let dir = true;

let centerPoints = [];

function setup() {
  createCanvas(640, 640);
  palette = [color(239, 189, 213), color(190, 151, 198), color(134, 97, 193)];
}
let val = 4;

function draw() {
  background(29, 30, 44);
  let sc = 50;
  let a = PI/12;
  let b = 1;
  // 90, 35
  let omega = 35;
  // if (frameCount % 2 === 0) {
  //   omega = 35;
  // } else {
  //   omega = 90;
  // }
  let v = strophoid(sc, a, b, theta, omega);

  if (frameCount < 240) {
    let total = val / 2;
    for (let n = 0; n < total; n += 40) {
      // 40
      let r = map(n, 0, total, 7, 4); // 14, 4
      addInk(v.x + width / 2, v.y + height / 2, r, random(palette));
    }

    val += 0.2;
    theta += 1;
    //theta += PI/32;
    a += 1;
  } else {
    noLoop();
  }

  for (let drop of drops) {
    drop.show();
  }
}

function mousePressed() {
  save("marble.jpg");
}

function addInk(x, y, r, col) {
  let drop = new Drop(x, y, r, col);
  for (let other of drops) {
    other.marble(drop);
  }
  drops.push(drop);
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

function strophoid(sc, a, b, theta, omega) {
  let r = (b * sin(a - 2 * theta)) / sin(a - theta);
  let x = sc * r * cos(theta + omega);
  let y = sc * r * sin(theta + omega);
  return createVector(x, y);
}

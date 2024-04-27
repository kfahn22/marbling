// https://editor.p5js.org/codingtrain/sketches/fsw-rJrpr

// Formula for Astroid Involte from Wolfram MathWord
// https://mathworld.wolfram.com/AstroidInvolute.html

let drops = [];
let theta = 0;
// let a = 30;
// let n = 9;
// const e = 2.718281828459045;
// let sc = 1;
let palette;
//let dir = true;

let centerPoints = [];

function setup() {
  createCanvas(640, 640);
  palette = [
    color(51, 124, 160),
    color(62, 195, 0),
    color(255, 252, 49),
    color(255, 29, 21),
    color(30, 32, 25),
  ];
}
let val = 4;

function draw() {
  background(30, 32, 25);

  let v = pinwheel(100, theta);

  if (frameCount < 360) {
    let total = val / 2;
    for (let n = 0; n < total; n += 10) {
      if (v.x === 0 && v.y === 0) {
        continue;
      }
      let r = map(n, 0, total, 10, 4); // 14, 4
      addInk(v.x + width / 2, v.y + height / 2, r, random(palette));
    }

    val += 0.2;
    theta += 1;
    //a += 1;
  } else {
    noLoop();
  }
  //}

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

function pinwheel(sc, theta) {
  let r = sqrt(
    (sin(theta) * cos(theta)) / (pow(sin(theta), 4) - pow(cos(theta), 4))
  );

  x = sc * r * cos(theta);
  y = sc * r * sin(theta);
  return createVector(x, y);
}

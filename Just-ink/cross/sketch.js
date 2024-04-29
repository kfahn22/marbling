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

  let v = cross(60, 0.5, 0.5, theta);

  if (frameCount < 480) {
    let total = val / 2;
    for (let n = 0; n < total; n += 30) {
      if (v.x === 0 && v.y === 0) {
        continue;
      }
      let r = map(n, 0, total, 14, 4); // 14, 4
      addInk(v.x + width / 2, v.y + height / 2, r, random(palette));
    }

    val += 0.2;
    theta += 1;
    //theta += PI/64;
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

function sec(theta) {
  return 1 / cos(theta);
}

function csc(theta) {
  return 1 / sin(theta);
}

//mathworld.wolfram.com/Cruciform.html
https: function cross(sc, a, b, theta) {
  x = sc * a * sec(theta);
  y = sc * b * csc(theta);
  return createVector(x, y);
}

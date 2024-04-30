// https://editor.p5js.org/codingtrain/sketches/fsw-rJrpr

// Formula for Astroid Involte from Wolfram MathWord
// https://mathworld.wolfram.com/AstroidInvolute.html

let drops = [];
let theta = 0;
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
  let a = 40;
  //let v = epispiral(1, 9, theta);
  let v = trisectrix(75, theta);
  //let v = radialCurve(250, theta);
  //let v = quadrifolium(a, theta);
  // if (v.x === 0 && v.y === 0) {
  //   continue;
  // }
    
  if (frameCount < 720) {
    let total = val / 2;
    for (let n = 0; n < total; n += 40) {
      // 40
      let r = map(n, 0, total, 7, 4); // 14, 4
      addInk(v.x + width / 2, v.y + height / 2, r, random(palette));
    }

    val += 0.2;
    theta += 1;
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

function butterfly(sc, theta) {
  let r =
    pow(e, sin(theta)) -
    2 * cos(4 * theta) +
    pow(sin((1 / 24) * (2 * theta - PI)), 5);
  let x = floor(sc * r * cos(theta));
  let y = floor(-sc * r * sin(theta));

  //console.log(x,y)
  return createVector(x, y);
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

function sec(theta) {
  return 1 / cos(theta);
}

function epispiral(sc, n, theta) {
  let r = a * abs(sec(n * theta));
  let x = floor(sc * r * cos(theta));
  let y = floor(sc * r * sin(theta));
  //console.log(x,y)
  return createVector(x, y);
}

// https://mathworld.wolfram.com/MaclaurinTrisectrix.html
function trisectrix(sc, theta) {
  let x, y;
  let r = -(1 + 2 * cos(2 * theta) * sec(theta));
  if (frameCount % 2 === 0) {
    x = -floor(sc * r * cos(theta));
    y = -floor(sc * r * sin(theta));
  } else {
    x = floor(sc * r * cos(theta));
    y = floor(sc * r * sin(theta));
  }
  return createVector(x, y);
}

function radialCurve(a, theta) {
  let x = a * pow(cos(theta), 3);
  let y = a * pow(sin(theta), 3);
  return createVector(x, y);
}

function quadrifolium(a, theta) {
  let x = 12 * a * cos(theta) * pow(sin(theta), 2);
  let y = 12 * a * pow(cos(theta), 2) * sin(theta);

  return createVector(x, y);
}

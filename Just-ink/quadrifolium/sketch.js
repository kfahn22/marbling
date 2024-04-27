// https://editor.p5js.org/codingtrain/sketches/fsw-rJrpr

let drops = [];
let theta = 0;
let palette;

function setup() {
  createCanvas(640, 640);
  palette = [
    color(94, 43, 255),
    color(192, 76, 253),
    color(252, 109, 171),
    color(247, 246, 197),
    color(243, 250, 225),
  ];
}
let val = 4;

function draw() {
  //background(243,250,225);
  background(14, 0, 4);
  let a = 400;
  //let v = epispiral(1, 9, theta);
  //let v = trisectrix(75, theta);
  //let v = radialCurve(250, theta);
  let v = quadrifolium(a, 4, theta);
  //let v = superEllipse(50, 3, 3, theta, 5.4);

  if (frameCount < 720) {
    let total = val / 2;
    for (let n = 0; n < total; n += 40) {
      // 40
      let r = map(n, 0, total, 8, 4); // 14, 4
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

// change p to get different variations
function quadrifolium(a, p, theta) {
  let x = a * cos(theta) * pow(sin(theta), p);
  let y = a * pow(cos(theta), p) * sin(theta);
  return createVector(x, y);
}

function pedal(n, theta) {
  let r = (n - 2) * sin((n / (n - 2)) * (theta + 0.5 * PI));
  let x = sc * r * cos(theta);
  let y = sc * r * sin(theta);
  return createVector(x, y);
}

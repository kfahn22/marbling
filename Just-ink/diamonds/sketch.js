// https://editor.p5js.org/codingtrain/sketches/fsw-rJrpr

// Formula for Astroid Involte from Wolfram MathWord
// https://mathworld.wolfram.com/AstroidInvolute.html

//let frames = 60;
let drops = [];
let theta = 0;
// Theta can be incremented by 1 every frameCount or by an additional amount
// Adding in an additional ammount will change the render
// You can experiment with different values ranging from 0, 64;
let inc = 0;
let palette;

function setup() {
  createCanvas(640, 640);

  palette = [
    //color(237,240,96),
    color(161,239,139),
    color(255,251,254),
    color(239,99,81),
    color(84,101,255),
  ];
}

let start;
let val = 4;

function draw() {
  background(39, 41, 50);

  // version 1
  let v = astroid(200, 1, 1, 3, theta);
  let w = astroid(100, 1, 1, 7, theta);

  // version 2, inc = 32
  // let v = astroid(180, 1, 1, 3, theta);
  // let w = astroid(90, 1, 1, 5, theta);

  if (frameCount < 180) {
    let total = val / 2;
    for (let n = 0; n < total; n += 40) {
      let r = map(n, 0, total, 12, 4); // 14, 4

      addInk(v.x + width / 2, v.y + height / 2, r, random(palette));

      addInk(w.y + width / 2, w.x + height / 2, r * 0.75, random(palette));
    }

    val += 0.2;
    theta += 1 + (inc * PI) / 64;
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

function astroid(sc, a, b, c, theta) {
  let x = (sc * pow(cos(theta), c)) / a;
  let y = (sc * pow(sin(theta), c)) / b;
  return createVector(x, y);
}

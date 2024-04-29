// https://editor.p5js.org/codingtrain/sketches/fsw-rJrpr

// Formula for Hypocyloid Evolute from Wolfram MathWord
// https://mathworld.wolfram.com/HypocycloidEvolute.html

let drops = [];
let theta = 0;
let a = 5;
let b = 30;

let palette;
function setup() {
  createCanvas(640, 640);

  palette = [
    color(255, 113, 91),
    color(249, 203, 64),
    color(188, 237, 9),
    color(47, 82, 224),
  ];
  palette2 = [
    color(85, 73, 113),
    color(99, 118, 141),
    color(138, 198, 208),
    color(184, 243, 255),
  ];
  // yellow and blue
  palette3 = [
    color(30, 150, 252),
    color(162, 214, 249),
    color(252, 243, 0),
    color(255, 198, 0),
  ];
  // yellow and orange
  palette4 = [
    color(243, 227, 124),
    color(243, 211, 74),
    color(238, 162, 67),
    color(243, 167, 56),
    color(241, 217, 167),
  ];
}

//let start;
let val = 4;

function draw() {
  //1
  //background(76, 91, 92);
  //2
  //background(54, 33, 62);
  //3
  background(7, 42, 200);
  //4
  //background(208,0,0) // red
  //background(9,64,116) //  blue
  //background(76, 30, 79); // purple
  //background(43,45,66) // dk grey
  let v = evolute(45, theta, a, b);

  // 160, n += 40
  if (frameCount < 320) {
    let total = val / 2;
    for (let n = 0; n < total; n += 10) {
      let r = map(n, 0, total, 10, 2); // 14, 4
      addInk(v.x + width / 2, v.y + height / 2, r, random(palette3));
    }

    val += 0.2;
    theta += 1;
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

function evolute(sc, theta, a, b) {
  let x =
    sc *
    (a / (a - 2 * b)) *
    ((a - b) * cos(theta) - b * cos(((a - b) / b) * theta));
  let y =
    sc *
    (a / (a - 2 * b)) *
    ((a - b) * sin(theta) - b * sin(((a - b) / b) * theta));
  return createVector(x, y);
}

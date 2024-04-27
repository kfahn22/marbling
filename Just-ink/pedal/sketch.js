// https://editor.p5js.org/codingtrain/sketches/fsw-rJrpr

let drops = [];
let theta = 0;
let palette;

function setup() {
  createCanvas(640, 640);
  palette = [
    color(64, 31, 62),
    color(63, 46, 86),
    color(69, 63, 120),
    color(117, 154, 171),
  ];
  palette = [
    color(64, 31, 62),
    color(63, 46, 86),
    color(69, 63, 120),
    color(117, 154, 171),
  ];

}
let val = 4;

function draw() {
  //background(88,91,86);
  background(250, 242, 161);
 let v = pedal(47, 7, theta);
  //let h = hypocycloid(200, 7, theta);

  if (frameCount < 480) {
    let total = val / 2;
    for (let n = 0; n < total; n += 25) {
      // 40
      let r = map(n, 0, total, 9, 4); // 14, 4
      addInk(v.x + width / 2, v.y + height / 2, r, random(palette));
      // addInk(h.x + width / 2, h.y + height / 2, r, random(palette));
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

//mathworld.wolfram.com/HypocycloidPedalCurve.html

function hypocycloid(sc, n, theta) {
  let x = (sc / n) * ((n - 1) * cos(theta) + cos((n - 1) * theta));
  let y = (sc / n) * ((n - 1) * sin(theta) + sin((n - 1) * theta));
  return createVector(x, y);
}

function pedal(sc, n, theta) {
  let r = (n - 2) * sin((n / (n - 2)) * (theta + 0.5 * PI));
  let x = sc * r * cos(theta);
  let y = sc * r * sin(theta);
  return createVector(x, y);
}

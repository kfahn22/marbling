// https://mathworld.wolfram.com/EightCurve.html

// Code base from Daniel Shiffman's Heart Curve coding challenge

const curve = [];
let a = 2;

let sc = 20;
let n = 100;

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  let c1 = color(239, 195, 245, 180);
  let c2 = color(250, 166, 255, 150);
  let c3 = color(115, 83, 186, 75);
  let c4 = color(47, 25, 95, 50);
  // for (let i = 0; i < 0.15 * n; i++) {
  //   curve.push(new EightCurve(width / 2, height / 2, a, sc, 0, c1, 2));
  // }
  for (let i = 0; i < 0.15 * n; i++) {
    curve.push(new Epitrochoid(width / 2, height / 2, a, sc, 0, c1, 2));
  }
}

function draw() {
  background(15, 16, 32);
  for (let i = 0; i < curve.length; i++) {
    curve[i].oneCurve();
    curve[i].show();
  }
}

// function mousePressed() {
//   save("eight.jpg");
// }

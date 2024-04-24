// Code base from Daniel Shiffman's Heart Curve coding challenge
// https://thecodingtrain.com/challenges/134-heart-curve
// https://youtu.be/oUBAi9xQ2X4

// https://www.wolframalpha.com/input?i=spherical+spiral&assumption=%22ClashPrefs%22+-%3E+%7B%22SpaceCurve%22%2C+%22SphericalSpiral%22%7D

const fibonacci = [
  0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584,
  4181,
];
//Fn = Fn-1 + Fn-2

let points = [];
const a = 1;
const b = 0.2;
let angle = 0;
let frames = 60;
const e = 2.718;

function keyPressed() {
  if (key == "s") {
    const options = {
      units: "frames",
      delay: 0,
    };
    saveGif("spiral.gif", frames, options);
  }
}

function setup() {
  createCanvas(400, 450);
  for (let theta = 0; theta < 29; ) {
    const x = a * pow(e, b * theta) * cos(theta);
    const y = a * pow(e, b * theta) * sin(theta);
    points.push(createVector(x, y));
    theta += 0.1;
    //console.log(points);
  }
}

function draw() {
  background(0);
  stroke(204, 153, 0);
  noFill();

  translate(width / 2, height / 2);
  beginShape();
  for (let p of points) {
    vertex(p.x, p.y);
  }
  endShape();
}

function mousePressed() {
  save("spiral.jpg");
}

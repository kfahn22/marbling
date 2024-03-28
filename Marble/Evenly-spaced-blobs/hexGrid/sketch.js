// https://editor.p5js.org/codingtrain/sketches/fsw-rJrpr

let drops = [];
let r, s;
let n = 4; //5
let rn = 0;
let z = 40;
let c = 60;
//let blobRadius = 37;
let startPoints = [];
let endPoints = [];

let centerPoints = [];

function setup() {
  createCanvas(800, 800);
  r = 100;
  s = sqrt((3 * pow(r, 2)) / 4);

  let blobRadius = width / (6 * n);

  for (let y = 0; y < height + s; y += 2 * s) {
    for (let x = 0; x < width + r; x += 3 * r) {
      hexagon(x, y, r);
    }
  }

  //centerPoints = shuffle(centerPoints);
  //console.log(centerPoints);

  for (i = 0; i < centerPoints.length; i++) {
    for (let j = 0; j < 5; j++) {
      addInk(centerPoints[i].x, centerPoints[i].y, blobRadius);
    }
  }
}

function mousePressed() {
  save("marble.jpg");
}

function addInk(x, y, r) {
  let drop = new Drop(x, y, r);
  for (let other of drops) {
    other.marble(drop);
  }
  drops.push(drop);
}

function draw() {
  background(color5[0]);

  for (let drop of drops) {
    drop.show();
  }
  noLoop();
}

function hexagon(x, y, r) {
  //beginShape();
  for (let a = 0; a < 2 * PI; a += (2 * PI) / 6) {
    let x2 = cos(a) * r;
    let y2 = sin(a) * r;
    let v = createVector(x + x2, y + y2);
    if (v.x > 0 && v.x < width && v.y > 0 && v.y < height) {
      centerPoints.push(v);
    }
    //vertex(x + x2, y + y2);
  }
  //endShape(CLOSE);
}

// https://editor.p5js.org/codingtrain/sketches/fsw-rJrpr

let drops = [];
let n = 4;
let centerPoints = [];

function setup() {
  createCanvas(800, 800);
  let sp = width / n;
  let blobRadius = (width / 3) * n;

  for (let i = 0; i < 20; i++) {
    for (let i = sp; i < width; i += sp) {
      for (let j = sp; j < height; j += sp) {
        addInk(i, j, blobRadius);
      }
    }
  }

  let begin = createVector(0, height * 0.5);
  let end = createVector(width, height * 0.5);
  end.normalize();
  tineLines(end, begin, sp, -PI / 3);
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
  background(color7[0]);
  for (let drop of drops) {
    drop.show();
  }
  noLoop();
}

function tineLines(e, b, sp, angle) {
  for (let drop of drops) {
    for (let i = 0; i < 1; i++) {
      let end = createVector(e.x + sp * i, e.y + sp * i);
      end.normalize;
      let begin = createVector(b.x + sp * i, b.y + sp * i);

      drop.tine(end, begin, angle);
    }
  }
}

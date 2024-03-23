// https://editor.p5js.org/codingtrain/sketches/fsw-rJrpr

let drops = [];

function setup() {
  createCanvas(600, 600);
  for (let i = 0; i < 20; i++) {
    addInk(random(width), random(height), 50);
    addInk(300, 300, 50);
  }

  // let v = createVector(1, 1);
  // v.normalize();
  // tineLine(v, 300, 300, 80, 16);
}

let start;

function mousePressed() {
  start = createVector(mouseX, mouseY);
}

function mouseDragged() {
  let end = createVector(mouseX, mouseY);
  end.sub(start);
  end.normalize();
  tineLine(end, mouseX, mouseY, 2, 16);
}

function tineLine(v, x, y, z, c) {
  for (let drop of drops) {
    drop.tine(v, x, y, z, c);
  }
}

// function tineLine(xl, z, c) {
//   for (let drop of drops) {
//     drop.tine(xl, z, c);
//   }
// }

function addInk(x, y, r) {
  let drop = new Drop(x, y, r);
  for (let other of drops) {
    other.marble(drop);
  }
  drops.push(drop);
}

function draw() {
  // let x = random(width);
  // let y = random(height);
  // let r = random(10, 50);
  // addInk(x, y, r);

  // if (mouseIsPressed) {
  //   tineLine(mouseX, 4, 16);
  // }

  background(255);
  for (let drop of drops) {
    drop.show();
  }
}

// https://editor.p5js.org/codingtrain/sketches/fsw-rJrpr

let drops = [];
let n = 1;
let z = 60;
let c = 16;
let sp = 0;
//let ysp = 0;
let start = [];

function setup() {
  createCanvas(600, 600);
  for (let i = 0; i < 50; i++) {
    addInk(random(width), random(height), 50);
    addInk(300, 300, 50);
  }
}

function mousePressed() {
  //start = createVector(mouseX, mouseY);
  start.push(createVector(width / 2, 0));
  for (let i = 0; i < n; i++) {
    let v = createVector(i * sp, 0);
    v.add(start);
    start.push(v);
  }
}

// function mouseDragged() {
//   let end = createVector(mouseX, mouseY);
//   end.sub(start);
//   end.normalize();
//   tineLine(end, mouseX, mouseY, 2, 16);
// }

function mouseDragged() {
  let end = createVector(mouseX, mouseY);
  end.sub(start[0]);
  end.normalize();
  tineLine(end, mouseX, mouseY, 2, 16);
}

function tineLine(v, x, y, z, c) {
  for (let drop of drops) {
    drop.tine(v, x, y, z, c);
  }
}

// function tineLine(v, x, y, z, c) {
//   for (let drop of drops) {
//     // for (let i=0; i < drop.vertices.length; i++)
//     // let vert = createVector(drop.vertices[i].x, drop.vertices[0].y);
//     // console.log(drop.vertices[0].x);
//    // drop.tine(v, x, y, z, c, angle, n);
//     drop.horizontalStart(v, x, y, z, c);
//     let tines = drop.tines;
//     console.log(tines[0]);
//     //comb.addTines();
//   }
// }

// function tineLines(n, sp, v, x, y, z, c, angle) {
//   for (let drop of drops) {
//     drop.tines(n, sp, v, x, y, z, c, angle);
//   }
// }

function addInk(x, y, r) {
  let drop = new Drop(x, y, r);
  for (let other of drops) {
    other.marble(drop);
  }
  drops.push(drop);
  //console.log(drops[0].vertices[0].x);
}

function draw() {
  background(255);
  for (let drop of drops) {
    drop.show();
  }
}

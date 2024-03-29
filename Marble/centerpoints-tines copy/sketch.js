// https://editor.p5js.org/codingtrain/sketches/fsw-rJrpr

let drops = [];
let n = 8;

let z = 40;
let c = 60;
let blobRadius;
let centerPoints = [];
let offsetPoints = [];

function setup() {
  createCanvas(400, 400);
  let sp = width / n;
  blobRadius = width / (3 * n);

  for (let i = sp; i < width; i += sp) {
    for (let j = sp; j < height; j += sp) {
      centerPoints.push(createVector(i, j));
    }
  }

  centerPoints = shuffle(centerPoints);
  //offsetPoints = shuffle(offsetPoints);
  // let l = centerPoints.length;
  // console.log(l);
  // Deformation of blobs depends on order in which they are added
  for (let i = 0; i < centerPoints.length; i++) {
    addInk(i, 6, centerPoints);
  }
  // let begin = createVector(0, height / 2);
  // let end = createVector(width, height / 2);
  let begin = createVector(0, height * 0.5);
  let end = createVector(width, height* 0.5);
  end.normalize();
  tineLines(end, begin, sp, -PI/3);
}

// north() & south() cancel each other out
// east() & west() cancel each other out
function tineLines(e, b, sp, angle) {
  for (let drop of drops) {
    for (let i = 0; i < 1; i++) {
      let end = createVector(e.x + sp * i, e.y + sp * i);
      end.normalize;
      let begin = createVector(b.x + sp * i, b.y + sp * i);

      drop.tine(end, begin, angle);
      // drop.tine(end, begin, PI / 2);
      // drop.tine(end, createVector(begin.x + sp, begin.y), -PI / 2);
      // drop.tine(end, createVector(begin.x + 2 * sp, begin.y), PI / 2);
      // drop.tine(end, createVector(begin.x + 3 * sp, begin.y), -PI / 2);
      // if (i % 2 === 0) {
      //   drop.tine(end, begin, angle);
      // } else {
      //   drop.tine(end, begin, -angle);
      // }
      //  drop.tine(createVector(end.x + sp, end.y), createVector(begin.x + sp, begin.y), -PI / 2);
      //  drop.tine(
      //    createVector(end.x + 3* sp, end.y),
      //    createVector(begin.x + 2 * sp, begin.y),
      //    PI / 2
      //  );
      //  drop.tine(
      //    createVector(end.x + 3* sp, end.y),
      //    createVector(begin.x + 3 * sp, begin.y),
      //    -PI / 2
      //  );}
    }
  }
}

function mousePressed() {
  save("marble.jpg");
}

function addDrops(x, y, r) {
  let drop = new Drop(x, y, r);
  for (let other of drops) {
    other.marble(drop);
  }
  drops.push(drop);
}

// function addInk() {
//   for (let j = 0; j < 10; j++) {
//     for (i = 0; i < centerPoints.length; i++) {
//       //centerPoints = shuffle(centerPoints);
//       addDrops(centerPoints[i].x, centerPoints[i].y, blobRadius);
//     }
//   }
// }
function addInk(i, n, points) {
  for (let j = 0; j < n; j++) {
    addDrops(points[i].x, points[i].y, blobRadius);
  }
}

function draw() {
  //color1
  //background(102, 107, 106);
  //color2
  //background(35, 27, 27);
  // color3
  //background(91, 89, 65);
  // color4
  //background(1,28,39)
  //background(3, 37, 78);
  // color5
  background(242, 158, 75);
  for (let drop of drops) {
    drop.show();
  }
  noLoop();
}

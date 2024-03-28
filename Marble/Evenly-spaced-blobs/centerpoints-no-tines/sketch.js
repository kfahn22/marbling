// https://editor.p5js.org/codingtrain/sketches/fsw-rJrpr

let drops = [];
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
  let sp = width / n;
  let blobRadius = width / (4 * n);

  for (let i = sp; i < width; i += sp) {
    for (let j = sp; j < height; j += sp) {
      centerPoints.push(createVector(i, j));
    }
  }
  centerPoints = shuffle(centerPoints);

  console.log(centerPoints);
  //console.log(sp);
  // Order in which you add ink blobs affects outcome!
  // for (let k = 0; k < 5; k++) {
  //   for (let i = sp; i < width; i += sp) {
  //     for (let j = sp; j < height; j += sp) {
  //       //addInk(sp / 2 + sp * i, sp / 2 + sp * j, 35);

  //       // addInk(-blobRadius / 2 + sp * i, -blobRadius / 2 + sp * j, blobRadius);
  //       console.log(sp);
  //       addInk(sp / 4 + i, sp / 4 + j, blobRadius);
  //     }
  //   }
  // }

  // Blobs added k times at equal intervals
  for (let j = 0; j < 15; j++) {
    for (i = 0; i < centerPoints.length; i++) {
      addInk(centerPoints[i].x, centerPoints[i].y, blobRadius);
    }
  }
  // for (let drop of drops) {
  //   drop.vTine(width / 4, 20, 16, 1);
  // }
  // for (let i = sp; i < width; i += sp) {
  //   for (let j = sp; j < height; j += sp) {
  //     for (let k = 0; k < 5; k++) {
  //       addInk(sp / 4 + i, sp / 4 + j, blobRadius);
  //     }
  //   }
  // }

  // for (let i = 0; i < 1; i++) {
  //   tineLines();
  // }
}

// north() & south() cancel each other out
// east() & west() cancel each other out
function tineLines() {
  for (let drop of drops) {
    //drop.north();
    //drop.south();
    //drop.east();
    //drop.west();
    //drop.combine(1, 1);
    drop.combine();
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
  //color1
  //background(102, 107, 106);
  //color2
  background(35, 27, 27);
  // color3
  //background(91, 89, 65);
  // color4
  //background(1,28,39)
  //background(3, 37, 78);
  for (let drop of drops) {
    drop.show();
  }
  noLoop();
}

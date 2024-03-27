// https://editor.p5js.org/codingtrain/sketches/fsw-rJrpr

let drops = [];
let n = 8;
let rn = 0;
let z = 40;
let c = 60;
let blobRadius = 37;
let startPoints = [];
let endPoints = [];

function setup() {
  createCanvas(600, 600);
  sp = width / n;
  //console.log(sp);
  // Add ink blobs out of canvas bounderies b/c so still covers canvas after tines applied
  for (let i = -1; i < n + 3; i++) {
    for (let j = -1; j < n + 3; j++) {
      //addInk(sp / 2 + sp * i, sp / 2 + sp * j, 35);
      for (let k= 0; k< 5; k++)
      {addInk(-blobRadius / 2 + sp * i, -blobRadius / 2 + sp * j, blobRadius);}
    }
  }
  // for (let i = 0; i < 200; i++) {
  //   //addInk(random(width), random(height), 100);

  //   // addInk(width / 2 + random(-sp, sp), height / 2 + random(-sp, sp), 30);
  //   addInk(width / 2, height / 2, 30);
  // }

  for (let i = 0; i < 1; i++) {
    tineLines();
  }
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
  //background(35, 27, 27);
  // color3
  //background(91, 89, 65);
  // color4
  //background(1,28,39)
  background(3, 37, 78);
  for (let drop of drops) {
    drop.show();
  }
  noLoop();
}

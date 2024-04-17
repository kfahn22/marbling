// https://editor.p5js.org/codingtrain/sketches/fsw-rJrpr

let drops = [];
let n = 20;
let sp;
let blobRadius;
let centerPoints = [];

function setup() {
  createCanvas(400, 400);
  sp = width / n;
  //blobRadius = width / (2 * n);
  blobRadius = 5;
  for (let i = sp; i < width; i += sp) {
    for (let j = sp; j < height; j += sp) {
      centerPoints.push(createVector(i, j));
    }
  }
  // Shuffle because deformation of blobs depends on order in which they are added
  centerPoints = shuffle(centerPoints);

  // Add evenly spaced blobs of ink
  // for (let i = 0; i < centerPoints.length; i++) {
  //   addInk(i, 3, centerPoints);
  // }

  // Add ink blobs in center of canvas
  for (let i = 0; i < 50; i++) {
    addDrops(width / 2, height / 2, blobRadius);
  }

  // nv, nh, vdir, hdir, vz, vc, hz, hc

  // For ink in center
  hvTines(4, 12, 1, -1, 60, 10, 80, 30);

  // For evenly spaced blobs
  // hvTines(4, 0, 1, -1, 80, 16, 30, 10);
}

// Function to add a horizontal or vertical comb
// nh (nv) - number of horizontal (vertical) tines
// hdir (hdir)- horizontal (vertical) dir  1, -1
// vz, vc, hz, hc parameters controlling strength of tine
function hvTines(nv, nh, vdir, hdir, vz, vc, hz, hc) {
  for (let drop of drops) {
    if (nh > 0) {
      // Alternating horizontal tines
      for (let i = 0; i < nh; i++) {
        if ((i + 1) % 2 == 0) {
          hdir = 1;
        } else {
          hdir = -1;
        }
        drop.tine(
          null,
          createVector(0, (height / nh) * (1 + i)),
          0,
          hdir,
          hz,
          hc
        );
      }
    }
    if (nv > 0) {
      for (let i = 0; i < nv; i++) {
        if ((i + 1) % 2 == 0) {
          vdir = -1;
        } else {
          vdir = 1;
        }
        drop.tine(
          null,
          createVector((width / nv) * (1 + i), 0),
          0,
          vdir,
          vz,
          vc
        );
      }
    }
  }
}

function tineLines(end, begin, angle) {
  for (let drop of drops) {
    for (let i = 0; i < 1; i++) {
      let end = createVector(e.x + sp * i, e.y);
      end.normalize();
      let begin = createVector(b.x + sp * i, b.y);
      drop.tine(end, begin, angle);
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

function addInk(i, n, points) {
  for (let j = 0; j < n; j++) {
    addDrops(points[i].x, points[i].y, blobRadius);
  }
}

function draw() {
  background(color7[4]);
  for (let drop of drops) {
    drop.show();
  }
  noLoop();
}

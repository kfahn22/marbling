const circleDetail = 500;

// let colors = [
//   [18, 69, 89],
//   [89, 131, 146],
//   [174, 195, 176],
//   [239, 246, 224],
// ];

let colors = [
  [160, 238, 192],
  [138, 233, 193],
  [134, 205, 130],
  [114, 162, 118],
];

class Drop {
  constructor(x, y, r) {
    this.center = createVector(x, y);
    this.r = r;
    this.n = 8;
    this.z = 30;
    this.c = 16;
    // try to create one than one tine
    let sp = width / this.n;
    this.startPoints = [];
    for (let i = 0; i < this.n; i++) {
      this.startPoints.push(sp / 2 + sp * i);
      //console.log(this.startPoints);
    }
    this.vertices = [];
    for (let i = 0; i < circleDetail; i++) {
      let angle = map(i, 0, circleDetail, 0, TWO_PI);
      let v = createVector(cos(angle), sin(angle));
      v.mult(this.r);
      v.add(this.center);
      this.vertices[i] = v;
    }
    this.vtines = [];
    this.htines = [];
    this.col = random(color5);
  }

  // Function that adds starting points for tines
  addPoints() {
    let sp = width / this.n;
    for (let i = 0; i < this.n; i++) {
      this.startPoints.push(sp * i * 1.5);
    }
  }

  // tine(m, x, y, z, c) {
  //   let u = 1 / pow(2, 1 / c);
  //   let b = createVector(x, y);
  //   for (let v of this.vertices) {
  //     let pb = p5.Vector.sub(v, b);
  //     let n = m.copy().rotate(HALF_PI);
  //     let d = abs(pb.dot(n));
  //     let mag = z * pow(u, d);
  //     v.add(m.copy().mult(mag));
  //   }
  // }

  // need to shuffle or they will be correlated
  //  let startX = shuffle(startPoints);
  //     let startY = shuffle(startPoints);
  combine() {
    let u = 1 / pow(2, 1 / this.c);
    this.addPoints();
    for (let i = 0; i < this.n; i++) {
      let x = this.startPoints[i];
      let y = this.startPoints[i];
    }
    // this.south();
    // this.west();
    // this.north();
    // this.east();

    for (let i = 0; i < 1; i++) {
      this.east();
      this.south();
      this.west();
      this.north();
    }
  }

  north() {
    let y;
    let dir = -1;
    //this.addPoints();
    for (let i = 0; i < this.n; i++) {
      let x = this.startPoints[i];
      y += this.vTine(x, this.z, this.c, dir);
      this.vtines.push(x, y);
    }
  }

  south() {
    let x;
    //this.addPoints();
    for (let i = 0; i < this.n; i++) {
      let y = this.startPoints[i];
      x += this.vTine(y, this.z, this.c, 0);
      this.htines.push(x, y);
    }
  }

  east() {
    let x;
    //this.addPoints();
    for (let i = 0; i < this.n; i++) {
      let y = this.startPoints[i];
      x += this.hTine(y, this.z, this.c, 1);
      this.htines.push(x, y);
    }
  }

  west() {
    let x;
    // this.addPoints();
    for (let i = 0; i < this.n; i++) {
      let y = this.startPoints[i];
      x += this.hTine(y, this.z, this.c, 0);
      this.htines.push(x, y);
    }
  }

  // vertical tine
  vTine(x, z, c, dir) {
    let u = 1 / pow(2, 1 / c);
    for (let v of this.vertices) {
      v.x = v.x;
      // v.y = v.y + dir * z * pow(u, abs(v.x - x));
      if (dir === 0) {
        v.y = v.y + z * pow(u, abs(v.x - x));
      } else if (dir === 1) {
        v.y = v.y - z * pow(u, abs(v.x - x));
      }
    }
  }

  // horizontal tine
  hTine(y, z, c, dir) {
    let u = 1 / pow(2, 1 / c);
    for (let v of this.vertices) {
      v.y = v.y;
      if (dir === 0) {
        v.x = v.x + z * pow(u, abs(v.y - y));
      } else if (dir === 1) {
        v.x = v.x - z * pow(u, abs(v.y - y));
      }
    }
  }

  marble(other) {
    for (let v of this.vertices) {
      let c = other.center;
      let r = other.r;
      let p = v.copy();
      p.sub(c);
      let m = p.mag();
      // magsquared
      let root = sqrt(1 + (r * r) / (m * m));
      // adding a coefficient to root really changes the look
      p.mult(0.99 * root);
      p.add(c);
      v.set(p);
    }
  }

  show() {
    fill(this.col);
    noStroke();
    beginShape();
    for (let v of this.vertices) {
      vertex(v.x, v.y);
    }
    endShape(CLOSE);
  }
}

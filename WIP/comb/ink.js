const circleDetail = 1000;

let colors = [
  [18, 69, 89],
  [89, 131, 146],
  [174, 195, 176],
  [239, 246, 224],
];

class Drop {
  constructor(x, y, r) {
    this.center = createVector(x, y);
    this.r = r;
    //this.sp = width/this.n;
    this.n = 4;
    this.z = 60;
    this.c = 8;
    // try to create one than one tine
    //this.start = createVector(0, 0);
    this.startPoints = [];
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
    this.col = random(colors);
  }

  // Function that adds starting points for tines
  addPoints() {
    let s;
    let sp = width / this.n;
    s = 0;
    for (let i = 0; i < this.n; i++) {
      this.startPoints.push(s + sp * i);
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

  combine(vdir, hdir) {
    let u = 1 / pow(2, 1 / this.c);
    let b = [];
    this.addPoints();
    for (let i = 0; i < this.n; i++) {
      let x = this.startPoints[i];
      let y = this.startPoints[i];
      b.push(createVector(x, y));

      for (let v of this.vertices) {
        if (vdir === 0) {
          v.x = v.x;
          v.y = v.y + this.z * pow(u, abs(v.x - x));
        } else if (vdir === 1) {
          v.y = v.y - this.z * pow(u, abs(v.x - x));
        }
      }
    }
  }

  // need to shuffle or they will be correlated
  //  let startX = shuffle(startPoints);
  //     let startY = shuffle(startPoints);
  north() {
    let y;
    this.addPoints();
    for (let i = 0; i < this.n; i++) {
      let x = this.startPoints[i];
      y += this.vTine(x, this.z, this.c, 1);
      this.vtines.push(x, y);
    }
  }

  south() {
    let x;
    this.addPoints();
    for (let i = 0; i < this.n; i++) {
      let y = this.startPoints[i];
      x += this.vTine(y, this.z, this.c, 0);
      this.htines.push(x, y);
    }
  }

  east() {
    let x;
    this.addPoints();
    for (let i = 0; i < this.n; i++) {
      let y = this.startPoints[i];
      x += this.hTine(y, this.z, this.c, 1);
      this.htines.push(x, y);
    }
  }

  west() {
    let x;
    this.addPoints();
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
      let root = sqrt(1 + (r * r) / (m * m));
      p.mult(root);
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

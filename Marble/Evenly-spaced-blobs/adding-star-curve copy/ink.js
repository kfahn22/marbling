const circleDetail = 720;

// for (let i = 0; i < 11; i++) {
//   //let angle = TWO_PI * i / 5;
//   let angle = (360 * i) / 5;
//   let x = cos(angle) * this.r1;
//   let y = sin(angle) * this.r1;
//   this.particles.push(new Particle(x, y));
//   // angle += TWO_PI / this.adj;
//   angle += 360 / this.adj;
//   x = cos(angle) * this.r2;
//   y = sin(angle) * this.r2;
//   this.particles.push(new Particle(x, y));
// }

function polarToCartesian(r, angle) {
  return createVector(r * cos(angle), r * sin(angle));
}

class Drop {
  constructor(x, y, r) {
    this.center = createVector(x, y);
    this.r1 = 25;
    this.r2 = 5;
    this.spacing = 5;
    this.n = 8;
    this.z = 80;
    this.c = 32;
    // try to create one than one tine
    let sp = width / this.n;
    this.startPoints = [];
    for (let i = 0; i < this.n; i++) {
      this.startPoints.push(sp / 2 + sp * i);
    }
    this.vertices = [];

    let v;
    // add gear curve
    for (let i = 0; i < circleDetail; i += this.spacing) {
      let a = map(i, 0, circleDetail, 0, TWO_PI);
      //for (let a = 0; a < 360; a += this.spacing) {
      if (a % 2 == 0) {
        v = polarToCartesian(this.r1, a);
      } else {
        v = polarToCartesian(this.r2, a);
      }
      v.mult(this.r);
      v.add(this.center);
      this.vertices[i] = v;
    }

    this.vtines = [];
    this.htines = [];
    this.col = random(color6);
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

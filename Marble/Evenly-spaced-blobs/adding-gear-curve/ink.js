const circleDetail = 100;

function hyperbolicTan(theta) {
  let e = 2.71828;
  let l = pow(e, 2 * theta);
  return (l - 1) / (l + 1);
}

class Drop {
  constructor(x, y, r) {
    this.center = createVector(x, y);
    this.r = r;
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
    let sc = 60;
    // add gear curve
    for (let i = 0; i < circleDetail; i += 1) {
      let angle = map(i, 0, circleDetail, 0, TWO_PI);
      this.r = sc * (1 + (1 / 10) * hyperbolicTan(10 * sin(10 * angle)));
      //let r = 1 + (1 / 10) * hyperbolicTan(10 * sin(10 * i));
      let v = createVector(cos(angle), sin(angle));
      v.mult(this.r);
      v.add(this.center);
      this.vertices[i] = v;
    }
    this.vtines = [];
    this.htines = [];
    this.col = random(color6);
  }

  // showGear() {
  //   // stroke(this.col);
  //   // let sw = map(Math.log2(this.radius), 3.4, Math.log2(100), 0.3, 4);
  //   // strokeWeight(sw);
  //   // //strokeWeight(0.5 * pow(this.radius, 0.3));
  //   push();
  //   setCenter(this.center.a, this.center.b);
  //   polarGear(0, this.radius * 2, this.radius, 20);
  //   pop();
  // }

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

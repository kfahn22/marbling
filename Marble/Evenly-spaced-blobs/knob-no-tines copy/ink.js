const circleDetail = 200;

function hyperbolicCos(theta) {
  let e = 2.71828;
  let k = pow(e, theta);
  let l = pow(e, -theta);
  return (k + l) / 2;
}

class Drop {
  constructor(x, y, r) {
    this.center = createVector(x, y);
    this.r = r;
    this.n = 8;
    this.z = 2;
    this.c = 50;
    // try to create one than one tine
    //let sp = width / this.n;
    // this.startPoints = [];
    // for (let i = 0; i < this.n; i++) {
    //   this.startPoints.push(sp / 2 + sp * i);
    // }
    this.vertices = [];
    let sc = 50;
    // add knob curve
    for (let i = 0; i < circleDetail; i += 1) {
      let angle = map(i, 0, circleDetail, 0, TWO_PI);
      this.r = sc * (1 + (1 / 10) * hyperbolicCos(2 * sin(10 * angle)));
      let v = createVector(cos(angle), sin(angle));
      v.mult(this.r);
      v.add(this.center);
      this.vertices[i] = v;
    }
    // this.vtines = [];
    // this.htines = [];
    this.col = random(color7);
  }

  // // Function that adds starting points for tines
  // addPoints() {
  //   let sp = width / this.n;
  //   for (let i = 0; i < this.n; i++) {
  //     this.startPoints.push(sp * i * 1.5);
  //   }
  // }

  tine(m, x, y, z, c) {
    let u = 1 / pow(2, 1 / c);
    let b = createVector(x, y);
    for (let v of this.vertices) {
      let pb = p5.Vector.sub(v, b);
      let n = m.copy().rotate(HALF_PI);
      let d = abs(pb.dot(n));
      let mag = z * pow(u, d);
      v.add(m.copy().mult(mag));
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

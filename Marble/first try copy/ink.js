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
    this.sp = 10;
    this.n = 1;
    this.z = 60;
    this.c = 16;
    // try to create one than one tine
    this.start = createVector(0, 0);
    this.startPoints = [];
    for (let i = 0; i < this.n; i++) {
      let v = createVector(i * this.sp, 0);
      v.add(this.start);
      this.startPoints[i] = v;
    }
    this.vertices = [];
    for (let i = 0; i < circleDetail; i++) {
      let angle = map(i, 0, circleDetail, 0, TWO_PI);
      let v = createVector(cos(angle), sin(angle));
      v.mult(this.r);
      v.add(this.center);
      this.vertices[i] = v;
    }
    this.tines = [];
    this.col = random(colors);
  }

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

  // vertical tine
  vTine(x, z, c) {
    let u = 1 / pow(2, 1 / c);
    for (let v of this.vertices) {
      v.x = v.x;
      v.y = v.y + z * pow(u, abs(v.x - x));
    }
  }

  // horizontal tine
  hTine(y, z, c) {
    let u = 1 / pow(2, 1 / c);
    for (let v of this.vertices) {
      v.x = v.x + z * pow(u, abs(v.y - y));
      v.y = v.y;
    }
  }
  // x, y - mouseX, mouseY
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

  horizontalStart(x, y, z, c) {
    for (let i = 0; i < this.n; i++) {
      let m = this.startPoints[i];
      console.log(m);
      let t = this.tine(m, x, y, z, c);
      this.tines.push(t);
    }
  }

  // m - current
  // x,y - initial
  // z -
  // tine(m, x, y, z, c, angle) {
  //   let u = 1 / pow(2, 1 / c);
  //   //let u = pow(0.5, 1 / c);
  //   let b = createVector(x, y);
  //   for (let v of this.vertices) {
  //     let pb = p5.Vector.sub(v, b);
  //     let n = m.copy().rotate(angle);
  //     let d = abs(pb.dot(n));
  //     let mag = z * pow(u, d);
  //     v.add(m.copy().mult(mag));
  //   }
  // }

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

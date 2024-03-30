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
    // this.n = 8;
    // this.z = 2;
    // this.c = 50;
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
    this.col = random(color7);
  }

  tine(end, begin, angle) {
    let u = 1 / pow(2, 1 / this.c);
    //let b = createVector(x, y);
    for (let v of this.vertices) {
      let pb = p5.Vector.sub(v, begin);
      let n = end.copy().rotate(angle);
      let d = abs(pb.dot(n));
      let mag = this.z * pow(u, d);
      v.add(end.copy().mult(mag));
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

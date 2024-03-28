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
    let sc = 10;
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
    this.col = random(color7);
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

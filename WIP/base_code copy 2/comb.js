class Comb {
  constructor(x, y, n, sp, z, c, angle) {
    this.x = x;
    this.y = y;
    this.n = n;
    this.sp = sp;
    this.z = z;
    this.c = c;
    this.angle = angle;
    this.v = createVector(this.x, this.y);
    this.start = [this.v];
  }

  horizontalStart() {
    for (let i = 0; i < this.n; i++) {
      let newTine = this.v.add(this.sp * i, 0);
      this.start.push(newTine);
    }
  }

  verticalStart() {
    for (let i = 0; i < this.n; i++) {
      let newTine = this.v.add(0, this.sp * i);
      this.start.push(newTine);
      this.start.push(newTine);
    }
  }

  tine(m, x, y, z, c, angle) {
    let u = pow(0.5, 1 / c);
    let b = createVector(x, y);
    for (let v of this.vertices) {
      let pb = p5.Vector.sub(v, b);
      let n = m.copy().rotate(angle);
      let d = abs(pb.dot(n));
      let mag = z * pow(u, d);
      v.add(m.copy().mult(mag));
    }
  }

  addTines() {
    this.horizontalStart();
    for (let i = 0; i < this.n; i++) {
      let m = this.start[i];
      this.tine(m, this.x, this.y, this.z, this.c, this.angle);
    }
  }
}

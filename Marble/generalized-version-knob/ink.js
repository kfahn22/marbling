const circleDetail = 100;

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
    this.z = 60;
    this.c = 20;
    this.vertices = [];
    let sc = 60;
    // add knob curve
    for (let i = 0; i < circleDetail; i += 1) {
      let angle = map(i, 0, circleDetail, 0, TWO_PI);
      this.r = sc * (1 + (1 / 10) * hyperbolicCos(2 * sin(10 * angle)));
      //let r = 1 + (1 / 10) * hyperbolicTan(10 * sin(10 * i));
      let v = createVector(cos(angle), sin(angle));
      v.mult(this.r);
      v.add(this.center);
      this.vertices[i] = v;
    }
    this.col = random(color7);
  }

  // general purpose - working
  // tine(end, begin, angle) {
  //   let u = 1 / pow(2, 1 / this.c);
  //   for (let v of this.vertices) {
  //     if (end != null) {
  //       let pb = p5.Vector.sub(v, begin);
  //       let n = end.copy().rotate(angle);
  //       let d = abs(pb.dot(n));
  //       let mag = this.z * pow(u, d);
  //       v.add(end.copy().mult(mag));
  //     } else if (begin.y === 0) {
  //       v.x = v.x;
  //       v.y = v.y + this.z * pow(u, abs(v.x - begin.x));
  //     } else if (begin.x === 0) {
  //       v.y = v.y;
  //       v.x = v.x + this.z * pow(u, abs(v.y - begin.y));
  //     }
  //   }
  // }

  // Incorporate direction of vert/horz tines
  // dir 1 or -1
  tine(end, begin, angle, dir, z, c) {
    let u = 1 / pow(2, 1 / c);
    for (let v of this.vertices) {
      if (end != null) {
        let pb = p5.Vector.sub(v, begin);
        let n = end.copy().rotate(angle);
        let d = abs(pb.dot(n));
        let mag = this.z * pow(u, d);
        v.add(end.copy().mult(mag));
      } else if (begin.y === 0) {
        v.x = v.x;
        v.y = v.y + dir * z * pow(u, abs(v.x - begin.x));
      } else if (begin.x === 0) {
        v.y = v.y;
        v.x = v.x + dir * z * pow(u, abs(v.y - begin.y));
      }
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

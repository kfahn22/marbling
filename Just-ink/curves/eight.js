// // https://mathworld.wolfram.com/EightCurve.html

function secant(theta) {
  return 1 / cos(theta);
}

class EightCurve {
  constructor(_px, _py, _a, _sc, _rot, _c, _st) {
    this.px = _px;
    this.py = _py;
    this.a = _a;
    this.sc = _sc;
    this.points = [];
    this.rot = _rot;
    this.st = _st;
    this.c = _c;
    this.col = color(this.c);
  }

  // We need to loop through curve once before creating object
  oneCurve() {
    for (let theta = 0; theta < 361; theta += 1) {
      // Equations for eight curve
      let r = pow(pow(this.a, 2) * pow(secant(theta), 2) * cos(2 * theta), 0.5);
      let x = this.sc * r * sin(theta);
      let y = this.sc * r * cos(theta);
      let p = createVector(x, y);
      if (this.points.length < 361) {
        this.points[theta] = p;
      } else {
        break;
      }
      console.log(this.points);
    }
  }

  show(rot) {
    push();
    noFill();
    translate(this.px, this.py);
    rotate(this.rot);
    beginShape();
    for (let v of this.points) {
      strokeWeight(1);
      stroke(this.col);
      vertex(v.x, v.y);
    }
    endShape();
    pop();
  }
}

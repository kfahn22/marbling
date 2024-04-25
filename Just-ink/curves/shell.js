// https://mathworld.wolfram.com/EpitrochoidEvolute.html

// let c1 = h - b * cos((a / b) * theta);
// let c2 = b - h * cos((a / b) * theta);
// let denominator =
//   pow(b, 3) + (a + b) * pow(h, 2) - b * (a + 2 * b) * h * cos((a / b) * theta);
// let x =
//   (sc *
//     (a * h * (a + b) * c1 * cos(theta) + b * c2 * cos(((a + b) / b) * theta))) /
//   denominator;

// let y =
//   (sc *
//     (a * h * (a + b) * c1 * sin(theta) + b * c2 * sin(((a + b) / b) * theta))) /
//   denominator;
// return createVector(x, y);

let color2 = [
  [221, 255, 247],
  [255, 210, 252],
  [233, 128, 252],
  [185, 106, 201],
];

class Shell {
  constructor(_px, _py, _a, _sc, _rot, _c, _st) {
    this.px = _px;
    this.py = _py;
    this.a = _a;
    this.sc = _sc;
    this.points = [];
    this.rot = _rot;
    this.st = _st;
    this.a = 5;
    this.b = 10;
    this.h = 20;
    this.col = color(random(color2));
  }

  // We need to loop through curve once before creating object
  oneCurve() {
    for (let theta = 0; theta < 361; theta += 1) {
      // Equations for Epitrochoid Evolute curve
      //   let c1 = this.h - this.b * cos((this.a / this.b) * theta);
      //   let c2 = this.b - this.h * cos((this.a / this.b) * theta);
      let c1 = this.h - this.b * cos((this.a * theta) / this.b);
      let c2 = this.b - this.h * cos((this.a * theta) / this.b);
      let denominator =
        pow(this.b, 3) +
        (this.a + this.b) * pow(this.h, 2) -
        this.b *
          (this.a + 2 * this.b) *
          this.h *
          cos((this.a / this.b) * theta);
      let x =
        (sc *
          (this.a * this.h * (this.a + this.b) * c1 * cos(theta) +
            this.b * c2 * cos(((this.a + this.b) * theta) / this.b))) /
        denominator;

      let y =
        (sc *
          (this.a * this.h * (this.a + this.b) * c1 * sin(theta) +
            this.b * c2 * sin(((this.a + this.b) / this.b) * theta))) /
        denominator;
      let p = createVector(x, y);
      if (this.points.length < 361) {
        this.points[theta] = p;
      } else {
        break;
      }
      //console.log(this.points);
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

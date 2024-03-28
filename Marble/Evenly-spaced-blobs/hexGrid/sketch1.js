// From tutorial by Gorilla Sun
// https://www.gorillasun.de/blog/a-guide-to-hexagonal-grids-in-p5js/
let hexagonSize;
function setup() {
  w = min(windowWidth, windowHeight);
  createCanvas(w, w);

  gridWidth = w;
  gridHeight = w;
  hexagonSize = w / 10;
  
}

function drawHexagon(cX, cY, r) {
  hx = cX + cY / 2;
  hy = (sqrt(3) / 2) * cY;

  beginShape();
  for (let a = TAU / 12; a < TAU + TAU / 12; a += TAU / 6) {
    vertex(hx + r * cos(a), hy + r * sin(a));
  }
  endShape(CLOSE);
}

// function makeSpiral(centerX, centerY, size, count) {
//   var x = 0;
//   var y = 0;

//   s = size / 1.75;

//   push();
//   translate(centerX, centerY);
  //drawHexagon(centerX, centerY, size / 1.75);
//   for (let n = 0; n < count; n++) {
//     for (let i = 0; i < n; i++) {
//       x++;
//       drawHexagon(x * s, y * s, s / 1.75);
//     } // move right
//     for (let i = 0; i < n - 1; i++) {
//       y++;
//       drawHexagon(x * s, y * s, s / 1.75);
//     } // move down right. Note N-1
//     for (let i = 0; i < n; i++) {
//       x--;
//       y++;
//       drawHexagon(x * s, y * s, s / 1.75);
//     } // move down left
//     for (let i = 0; i < n; i++) {
//       x--;
//       drawHexagon(x * s, y * s, s / 1.75);
//     } // move left
//     for (let i = 0; i < n; i++) {
//       y--;
//       drawHexagon(x * s, y * s, s / 1.75);
//     } // move up left
//     for (let i = 0; i < n; i++) {
//       x++;
//       y--;
//       drawHexagon(x * s, y * s, s / 1.75);
//     } // move up right
//   }
//   pop();
//}

function draw() {
  background(0);

  makeSpiral(w / 2, w / 2, hexagonSize, 5);

  noLoop();
}

// modified from: https://stackoverflow.com/a/43913544
function makeSpiral(centerX, centerY, radius, count) {
    var x = centerX
    var y = centerY
    var angle = TAU / 6
    var side = 0

    drawHexagon(x,y,hexagonSize/1.75)
    count--;
    while (count > 0) {
        for (var t = 0; t < floor((side+4)/6)+(side%6==0) && count; t++) {
            y = y - radius * cos(side * angle);
            x = x - radius * sin(side * angle);
            drawHexagon(x, y, hexagonSize/1.75);
            count--;
        }
        side++;
    }
}

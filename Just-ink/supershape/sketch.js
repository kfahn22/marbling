// https://editor.p5js.org/codingtrain/sketches/fsw-rJrpr

// Formula for Astroid Involte from Wolfram MathWord
// https://mathworld.wolfram.com/AstroidInvolute.html
// n1=n2=n3=0.3
// m = 3; a = 2; b = 2;
let drops = [];
let theta = 0;
var n1 = 1;
var n2 = 1;
var n3 = 1;
var m = 6;
var a = 1;
var b = 1;
// let total = 300;
let sc = 200;
let palette;
// let dir = true;

let centerPoints = [];

function setup() {
  createCanvas(640, 640);
  palette = [
    color(69,74,222),
    color(177,74,237),
    color(200,116,217),
    color(225,187,201),
  ];
}
let val = 4;

function draw() {
  background(27,31,59);

  let v = superSH(sc, theta);

  if (frameCount < 386) {
    let total = val / 2;
    for (let n = 0; n < total; n += 40) {
      let r = map(n, 0, total, 10, 4); // 14, 4
      addInk(v.x + width / 2, v.y + height / 2, r, random(palette));
    }

    val += 0.2;
    //theta += 1;
    theta += PI / 64;
  } else {
    noLoop();
  }

  for (let drop of drops) {
    drop.show();
  }
}

function mousePressed() {
  save("marble.jpg");
}

function addInk(x, y, r, col) {
  let drop = new Drop(x, y, r, col);
  for (let other of drops) {
    other.marble(drop);
  }
  drops.push(drop);
}

function removeDuplicates(arr) {
  for (let i = arr.length - 1; i >= 0; i--) {
    for (let j = i - 1; j >= 0; j--) {
      if (arr[i].equals(arr[j])) {
        arr.splice(i, 1);
        break; // Once a duplicate is found and removed, no need to continue checking
      }
    }
  }
}

function supershape(theta) {
  let part1 = (1 / a) * cos((theta * m) / 4);
  part1 = abs(part1);
  part1 = pow(part1, n2);

  let part2 = (1 / b) * sin((theta * m) / 4);
  part2 = abs(part2);
  part2 = pow(part2, n3);

  let part3 = pow(part1 + part2, 1 / n1);

  if (part3 === 0) {
    return 0;
  }
  return 1 / part3;
}

function superSH(sc, theta) {
  let r = supershape(theta);
  let x = sc * r * cos(theta);
  let y = sc * r * sin(theta);
  return createVector(x, y);
}

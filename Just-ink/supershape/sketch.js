// https://editor.p5js.org/codingtrain/sketches/fsw-rJrpr

// Formula for Astroid Involte from Wolfram MathWord
// https://mathworld.wolfram.com/AstroidInvolute.html

let drops = [];
let theta = 0;
var n1 = 0.3;
var n2 = 0.3;
var n3 = 0.3;
var m = 3;
var a = 2;
var b = 2;
let total = 300;
let sc = 1;
let palette;
let dir = true;

let centerPoints = [];

function setup() {
  createCanvas(640, 640);
  palette = [color(239, 189, 213), color(190, 151, 198), color(134, 97, 193)];
}
let val = 4;

function draw() {
  background(29, 30, 44);

  let v = superSH(300, theta);

  if (frameCount < 240) {
    let total = val / 2;
    for (let n = 0; n < total; n += 40) {
      // 40
      let r = map(n, 0, total, 10, 4); // 14, 4
      addInk(v.x + width / 2, v.y + height / 2, r, random(palette));
    }

    val += 0.2;
    theta += 1;
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

function superSH(radius, theta) {
  let r = supershape(theta);
  let x = sc * radius * r * cos(theta);
  let y = sc * radius * r * sin(theta);
  return createVector(x, y);
}

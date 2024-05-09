// https://editor.p5js.org/codingtrain/sketches/fsw-rJrpr

let palette;
let drops = [];
let theta = 0;
let val = 4;


// Theta can be incremented by 1 every frameCount or by an additional amount
// Adding in an additional ammount will change the render
// You can experiment with different values ranging from 0, 1/64;
let inc = 1/32;

function setup() {
  createCanvas(640, 640);
  palette = [
    color(64, 31, 62),
    color(63, 46, 86),
    color(69, 63, 120),
    color(117, 154, 171),
  ];
  palette2 = [
    color(91,140,90),
    color(211,96,96),
    color(125,56,125),
    color(255,238,136)
  ]
  palette3 = [
    //color(160,62,153),
    //color(115,29,216),
    color(131,50,172),
    color(255,225,234),
    color(255,160,253),
    color(233,82,222),
  ];

  palette4 = [
    color(221,97,74),
    color(76,185,68),
    color(60,22,66),
    color(255,217,114),
    color(5,102,141)
    //color(244,166,152),
    //color(237,240,218)
    //color(76,28,0)
  ]
  palette5 = [
    color(245, 156, 169),
    color(246, 130, 140),
    color(223, 87, 188),
    color(160, 62, 153),
  ];
  palette6 = [
    color(255,240,243),
    color(255,204,213),
    color(255,179,193),
    color(255,143,163),
    color(255, 117, 143),
    color(255,77,109),
    color(201,24,74),
    color(164,19,60),
    color(128,15,47),
    
  ]
}



function draw() {
 
  background(146,148,135) // sage green
  background(135,188,222) // lt blue
 let v = pedal(47, 7, theta);

  if (frameCount < 480) {
    let total = val / 2;
    for (let n = 0; n < total; n += 25) {
      let r = map(n, 0, total, 9, 4); // 14, 4
      addInk(v.x + width / 2, v.y + height / 2, r, random(palette6));
    }

    val += 0.2;
    theta += 1 + inc * PI;
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

//mathworld.wolfram.com/HypocycloidPedalCurve.html

function hypocycloid(sc, n, theta) {
  let x = (sc / n) * ((n - 1) * cos(theta) + cos((n - 1) * theta));
  let y = (sc / n) * ((n - 1) * sin(theta) + sin((n - 1) * theta));
  return createVector(x, y);
}

function pedal(sc, n, theta) {
  let r = (n - 2) * sin((n / (n - 2)) * (theta + 0.5 * PI));
  let x = sc * r * cos(theta);
  let y = sc * r * sin(theta);
  return createVector(x, y);
}

function setup() {
  createCanvas(800, 800);
  background(255); // White background
}

function draw() {
  // Define your vectors z and u, and the constant yL
  let z = createVector(1, 0); // Example vector for z
  let u = createVector(0, 1); // Example vector for u
  let yL = 100; // Example constant for yL

  // Loop through the canvas pixels
  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
      // Calculate the new coordinates using the marbling function
      let newX = z.dot(u) * abs(y - yL) + x;
      let newY = y; // Assuming y remains unchanged for simplicity

      // Convert the new coordinates to pixel positions
      let pixelX = floor(map(newX, 0, width, 0, width));
      let pixelY = floor(map(newY, 0, height, 0, height));

      // Set the color based on the new coordinates
      let colorValue = map(pixelX + pixelY, 0, width + height, 0, 255);
      stroke(colorValue);

      // Draw a point at the new coordinates
      point(pixelX, pixelY);
    }
  }
}

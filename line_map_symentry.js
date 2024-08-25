let height = 600
let width = 600


function setup() {
  createCanvas(height, width);
}

function draw() {
  background(200);

  // Draw the top line.
  line(0, height/3, mouseX, width/3);
	line(2*width/3, height, 2*width/3 , mouseY);

  // Remap mouseX from [0, 100] to [0, 50].
  let x = map(mouseX, 0, 100, 0, 50);
	let y = map(mouseY, 0, 100, 0, 50)

  // Draw the bottom line.
  line(0, 2*height/3, x, 2*width/3);
	line(width/3, height, width/3, y  + height/2 );
}

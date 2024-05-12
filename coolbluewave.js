let simplex;

let xStep = 10;
let xFreq = 0.003;
let yFreq = 0.003;
let amplitude = 100;
let velocity = 0.005;
let waveCount = 50;

function setup() {
	createCanvas(600, 600);
	simplex = new SimplexNoise();
	//noStroke();
}

function draw() {
	background(100);
	
	let yStep = (height) / waveCount;

	for (let y = -100; y <= (height+100); y += yStep) {
		push();
		translate(0, y);

		let gradient = drawingContext.createLinearGradient(0, height / 2, width, height / 2);
		gradient.addColorStop(0, "#a8c0ff");
		gradient.addColorStop(1, "#3f2b96");
		drawingContext.fillStyle = gradient;

		beginShape();
		for (let x = 0; x <= width; x += xStep) {
			let noise = simplex.noise3D(x * xFreq, y * yFreq, frameCount * velocity) * amplitude;
			vertex(x, noise);
		}
		vertex(width, height+2000);
		vertex(0, height+2000);
		stroke(50)
		endShape(CLOSE);
		pop();
	}
}

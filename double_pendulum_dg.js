let r1 = 150
let r2 = 250
let m1 = 40
let m2 = 40
let a1 = Math.PI / 2 + (2/100000);
let a2 = Math.PI / 2
let a1_v = 0;
let a2_v = 0;
let a1_a = 0;
let a2_a = 0;
let px2 = -1;
let py2 = -1;
let g = 0.35;
let g_min = -0.75;
let g_max = 0.75;
let g_inc = 0.0001;
let pg;

function setup() {
	createCanvas(windowWidth, windowHeight);
	pg = createGraphics(windowWidth, windowHeight);
	pg.translate(width / 2 , windowHeight/2);
	
	//fill(255)
	//stroke(255)
	//strokeWeight(2)
}

function draw() {
	
	
	
	background('#2c3e50');
	image(pg, 0, 0, width, height)
	translate(width / 2, 200);

	x1 = r1 * sin(a1)
	y1 = r1 * cos(a1)
	x2 = x1 + r2 * sin(a2)
	y2 = y1 + r2 * cos(a2)
	
	let num1 = -g * (2 * m1 + m2) * sin(a1);
	let num2 = -m2 * g * sin(a1 - 2 * a2);
	let num3 = -g * 2 * sin(a1 - a2) * m2;
	let num4 = a2_v * a2_v * r2 + a1_v * a1_v * r1 * cos(a1 - a2);
	let den = r1 * (2 * m1 + m2 - m2 * cos(2 * a1 - 2 * a2));
	a1_a = (num1 + num2 + num3 * num4) / den;

	num1 = 2 * sin(a1 - a2);
	num2 = (a1_v * a1_v * r1 * (m1 + m2));
	num3 =  g * (m1 + m2) * cos(a1);
	num4 = a2_v * a2_v * r2 * m2 * cos(a1 - a2);
	den = r2 * (2 * m1 + m2 - m2 * cos(2 * a1 - 2 * a2));
	a2_a = (num1 * (num2 + num3 + num4)) / den;

	//line(0, 0, x1, y1)
	//ellipse(x1, y1, m1, m1)
	
	//line(x1, y1, x2, y2)
	//ellipse(x2, y2, m2, m2)

	a1_v += a1_a
	a2_v += a2_a
	a1 += a1_v
	a2 += a2_v
	
	pg.stroke(color('#2980b9'))
	pg.strokeWeight(4)
	if (frameCount > 1) {
		pg.line(px2, py2, x2, y2)
	}
	px2 = x2
  py2 = y2
	
	if(g == g_max){		
		g = g_min
	}
	else {
		g = g_max
	} 
	
	
}

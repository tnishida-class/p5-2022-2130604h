function setup() {
  createCanvas(128,128);
}

function draw() {
  background(0);
  strokeWeight(4);
  fill(178, 100, 162);
  triangle(1,120,116,120,116,10);
  fill(94, 185, 84);
  triangle(5,108,106,108,106,0);
  fill(255);
  textSize(20);
  textFont("serif");
  text("46", 68, 100);
}
function setup() {
  createCanvas(128,128);
}

function draw() {
  background(255);
  strokeWeight(4);
  fill(178, 100, 162);
  triangle(12,120,116,120,116,10);
  fill(255);
  triangle(0,108,106,108,106,0);
  fill(116, 37, 129);
  textSize(20);
  textFont("serif");
  text("46", 68, 100);
}

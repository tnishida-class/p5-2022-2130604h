// 最終課題を制作しよう

let balls;

function setup(){
  createCanvas(windowWidth, windowHeight);
  noStroke();
  balls = [];
}

function draw(){
  //background(160, 192, 255);
  background(0);
  for(let i = 0; i < balls.length; i++){
    let b = balls[i];
    fill(random(255),random(255), random(255), 80);
    //regularPolygon(random(15,20), random(width)/4, random(height)/4, b.size);
    regularPolygon(random(15,20), width/2+b.x, height/2+b.y, b.size);
    //ellipse(width/2+ b.x, height/2+b.y, b.size);
    b.x += b.vx;
    b.y += b.vy;
  }
  let count = 0;
let cycle = 10;
count = (count + 1) % cycle;
const b = { x: 1, y: 1, size: random(10,60), vx:random(-10,10), vy:random(-10,10) };
balls.push(b);
  
  //ellipse(random(width), random(height), random(100));
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

function regularPolygon(n, cx, cy, r){
  beginShape();
  
  for(let i = 0; i < n; i++){
    let theta = TWO_PI * i  /n ;
    let x = cx + cos(theta) * r;
    let y = cy + sin(theta) * r;
    vertex(x,y);
  }
  endShape(CLOSE);
}

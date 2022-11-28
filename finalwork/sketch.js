// 最終課題を制作しよう

let balls;
// let ax
// let ay
// let bx
// let by

function setup(){
  createCanvas(windowWidth, windowHeight);
  noStroke();
  balls = [];
  
  //createrName('hello',height/2,width/2,255,255,255);
}

function draw(){
  //background(160, 192, 255);
  background(0);
  for(let i = 0; i < balls.length; i++){
    let b = balls[i];
    fill(random(255),random(255), random(255), 80);
    //Polygon(random(15,20), random(width)/4, random(height)/4, b.size);
    Polygon(random(15,20), width/2+b.x, height/2+b.y, b.size);
    //ellipse(width/2+ b.x, height/2+b.y, b.size);
    b.x += b.vx;
    b.y += b.vy;
    createrName('Naoya Mishima',width/2-50,height/2,255,255,255);
    if (mouseIsPressed){
      stroke(color(0,255,0));
      fill(random(255),random(255), random(255), 80);
      //Polygon(random(15,20), width/2+b.x, height/2+b.y, b.size);
    }
    else if(keyIsDown(" ".charCodeAt(0))){
      stroke(color(255,255,0         ));
      fill(random(255),random(255), random(255), 80);
    }
  }                      
  let count = 0;
let cycle = 90;
count = (count + 1) % cycle;
const b = { x: 1, y: 1, size: random(10,60), vx:random(-10,10), vy:random(-10,10) };
balls.push(b);

fill(100);
ellipse(width/6, height/2);
// ellipse();
fill(255,255,255,10)
bezier(width/6, height/2, width/2, 0, width/2, height, 5*width/6, height/2);
//stroke(100);
fill(0);
line(width/6, height/2, width/2, 0);
// storoke(0);
line(width/2, height, 5*width/6, height/2);



  //ellipse(random(width), random(height), random(100));
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

function Polygon(n, cx, cy, r){
  beginShape();
  
  for(let i = 0; i < n; i++){
    let theta = TWO_PI * i  /n ;
    let x = cx + cos(theta) * r;
    let y = cy + sin(theta) * r;
    vertex(x,y);
  }
  endShape(CLOSE);
}


function createrName(t,cx,cy,cr,cg,cb){
  let w = textWidth(t);
  let h = textAscent() + textDescent();
  let p = 10;
  fill(cr,cg,cb);
  noStroke();
  fill(cr,cg,cb,1);
  rect(cx, cy,  1.2*w +  2,  1.4*h + 2);
  
  fill(230);
  
  textFont("serif");
  text(t, cx+p, cy+h);
}





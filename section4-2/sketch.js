//　テキスト「オブジェクト」
// 練習問題：ボールのサイズをランダムに変更してみよう
// 練習問題：何も操作しなくてもボールが湧いてくる機能を追加しよう

let balls;

function setup(){
  createCanvas(windowWidth, windowHeight);
  balls = [];
}

function draw(){
  background(160, 192, 255);
  for(let i = 0; i < balls.length; i++){
    let b = balls[i];
    ellipse(width/2+ b.x, height/2+b.y, b.size);
    b.x += b.vx;
    b.y += b.vy;
  }


let count = 0;
let cycle = 10;
count = (count + 1) % cycle;
const b = { x: 1, y: 1, size: random(10,60), vx:random(-10,10) , vy:random(-10,10) };
balls.push(b);

}


function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

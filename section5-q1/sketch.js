// 練習問題：吹き出し
// 吹き出しの位置、背景色 etc. を関数 balloon の引数で指定できるようにしてみよう
// 吹き出しにしっぽを付けてみよう
function setup(){
  createCanvas(1000, 1000);
  background(255);
  balloon("I love nogizaka46",100,100,150,0,160);
}

function balloon(t,cx,cy,cr,cg,cb){
  let w = textWidth(t);
  let h = textAscent() + textDescent();
  let p = 2;
  fill(cr,cg,cb);
  noStroke();

  rect(cx, cy,  1.2*w + p * 2,  1.2*h + p * 2);
  fill(cr,cg,cb);
  triangle(cx+100,cy+50,  cx-10+1.2*w + p * 2,  cy+1.2*h + p * 2, cx-40+1.2*w + p*2,  cy+1.2*h + p );
  fill(255);
  text(t, 1.2*cx+p, cy+h+ p);
}

// 練習問題「心臓の鼓動のように大きくなったり小さくなったりする円」
let count;
let cycle;

function setup(){
  createCanvas(windowWidth, windowHeight);
  count = 0;
  cycle = 100;
}
function draw(){
  background(160, 192, 255);
  count = (count + 1) % cycle;
  // BLANK[1]
  let size = count
  if(size <75){size = 70}
  if(keyIsDown("A".charCodeAt(0))){count = 2 * (count + 1) % cycle}
  ellipse(width / 2, height / 2, size);

}



// /function draw(){
//   background(160, 192, 255);
//   count = (count + 1)%cycle;
  
//   let size = count // BLANK[1]
//   if(keyIsdown("A".charCodeAt(0))){
//     count = 2*(count + 1) % cycle 
//   }
//   ellipse(width / 2, height / 2, size);
  
// }


// function draw(){
//   background(160, 192, 255);
//   count = (count + 1) % cycle;
//   size = count; // BLANK[1]
//   if(size = 100){
//     size = count
//   }
//   ellipse(width / 2, height / 2, size);
// }

// //function draw(){
//   background(160, 192, 255);
//   count = (count + 1) % cycle;
//   size = count; // BLANK[1]
//   if(size = 100){
//     size = count
//   }
//   ellipse(width / 2, height / 2, size);


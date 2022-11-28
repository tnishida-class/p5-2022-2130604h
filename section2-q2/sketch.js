// チェッカー
function setup() {
  createCanvas(200, 200);
  let size = width / 8;
  noStroke();
  for(let i = 0; i < 8; i++){
    for(let j = 0; j < 8; j++){
      if((i+j) % 2 == 1 && j<3){
        fill(180);
        rect(i*25, j*25, 25, 25);
        fill(255,0,0)
        circle(i*25+12, j*25+12,20);

      }
      else if((i+j) % 2 == 1 && j<5){
        fill(180);
        rect(i*25, j*25, 25, 25);
       

      }
      else if((i+j) % 2 == 1 && j<8){
        fill(180);
        rect(i*25, j*25, 25, 25);
        fill(1)
        circle(i*25+12, j*25+12,20);

      }


      // ここを変えます
      console.log(i, j);
      
    }
      // BLANK[1] (hint: rectのx座標は size * i, y座標はsize * j)
    }
  }


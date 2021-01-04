let perTop = .789441382;
let perBottom = .6;

let rArray = [];

let petalNum = 5;
let petalWidth = 20;
let radius = 50;

let rows =15;
let columns = 15;

let colorF = {
  r: 200,
  g: 200,
  b: 200
};

let colorS = {
  r: 160,
  g: 160,
  b: 160
};

let w = 1070;
let h = 1070;

function setup() {
  createCanvas(1080,1080); 
  // createCanvas(windowWidth,windowHeight);
  // createCanvas(500,500);
}

function draw() {
  frameRate(9.5);
  if (frameCount < 1000) {
  
    background(225,222,220);
    translate((width-w)/2,(height-h)/2 )
        
    radius = width/columns/2;
  
  for (let j = 0; j<rows; j++){
    let per = random(perBottom,perTop);
    
    resetArray();
    for (let b=0; b<columns*per; b++){
      let r = Math.floor(random(rArray.length));
      rArray.splice(r, 1);
    }
}
    
    
    for(let i=0; i<columns; i+=1){
      for(let j=0; j<rows; j+=1){
        x = w*(i+0.5)/columns;
        y = h*(j+0.5)/rows;
        radius = random(width/columns/4,width/columns/2);
        petalNum = Math.floor(random(5,20));
        petalWidth = random(petalNum,radius);

        let flipColor = random(2);
        if (flipColor < 1){
          colorF = {r: random(255), g: random(255), b: random(255)};
        } else {
          colorF = {r: random(255), g: random(255), b: random(255)};
        }
        
        colorS = {r: colorF.r-40, g: colorF.g-40, b: colorF.b-40};

        fill(colorF.r,colorF.g,colorF.b);
        stroke(colorS.r,colorS.g,colorS.b);
        let flip = random(2);
        if (flip<1){
        flower1(x,y,radius, petalNum, petalWidth);
        }
        else {
          flower2(x,y,radius, petalNum, petalWidth);
        }
      }
    };    
 
  }
}

function resetArray() {
  rArray=[];
  for (let a=0; a<columns; a++){
    rArray.push(a);
  }   
}


function row(y) {
    for (let i=0; i<columns; i++){
      if (rArray.includes(i)){
       noFill();//not per
      }else{
        fill(colorF.r,colorF.g,colorF.b);//per
      }
      flower1((width/columns)*i,y, radius, petalNum, petalWidth);
  }
}


function flower1(x, y, radius, petalNum, petalWidth){
  let angle = TWO_PI / petalNum;
  push();
  translate(x, y);
  rotate(random(TWO_PI));
  push();
    for (let a = 0; a < TWO_PI; a += angle) {
      let p1={ x: 0, y: 0}; 
      let p2={ x: radius/2, y: -petalWidth}; 
      let p3={ x: radius, y: 0};
      let p4={ x: radius/2, y: petalWidth}; 
      push();
        rotate(a);
        beginShape();
          vertex(p1.x, p1.y);
          bezierVertex(p1.x, p1.y, p2.x, p2.y, p3.x, p3.y);
          bezierVertex(p3.x, p3.y, p4.x, p4.y, p1.x, p1.y);
          vertex(p1.x, p1.y);
        endShape();  
      pop();
    }
  pop();
  push();
    for (let a = 0; a < TWO_PI; a += angle) {
      let p1={ x: 0, y: 0}; 
      let p2={ x: radius/2, y: -petalWidth}; 
      let p3={ x: radius, y: 0};
      let p4={ x: radius/2, y: petalWidth}; 
      push();        
        noFill();
        rotate(a);
        beginShape();
          vertex(p1.x, p1.y);
          bezierVertex(p1.x, p1.y, p2.x, p2.y, p3.x, p3.y);
          bezierVertex(p3.x, p3.y, p4.x, p4.y, p1.x, p1.y);
          vertex(p1.x, p1.y);
        endShape();  
      pop();
    }
  pop();
  pop();
}

function flower2(x, y, radius, petalNum, petalWidth){
  let angle = TWO_PI / petalNum;
  push();
  translate(x, y);
  rotate(random(TWO_PI));
  push();
    for (let a = 0; a < TWO_PI; a += angle) {
      push();
        rotate(a);
        line(0,0,radius/2,0);
      pop();
    }
  pop();
  push();
    for (let a = 0; a < TWO_PI; a += angle) {
      push();
        noStroke();
        rotate(a);
        ellipse(radius/2,0,petalWidth);
      pop();
    }
  pop();
  push();
    for (let a = 0; a < TWO_PI; a += angle) {
      push();
        noFill();
        rotate(a);
        ellipse(radius/2,0,petalWidth);
      pop();
    }
  pop();
  
  pop();
}



// function mousePressed() {
//   loop();
// }

// function mouseReleased() {
//   noLoop();
// }

// if enter is pressed, download a jpg file
 // saveCanvas('flower_grid_'+frameCount, 'jpg');

function keyPressed() {
  if (keyCode == 13) {
	saveCanvas('flowers', 'jpg');
  } else {
  }
}

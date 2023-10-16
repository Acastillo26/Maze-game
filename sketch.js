let win = false;

let targetX = 550;
let targetY = 432;


var pic;
X=10
Y=10


function preload() {
  pic=loadImage("1280px-Maze_simple.svg.png");
}

function setup() {
  createCanvas(1500, 900);
 // background('lightgray');
  
}

function draw() {
   if (dist(mouseX,mouseY,targetX,targetY)<10){
    
    
    win=true;
  }
  else {
    text("move mouse to get to the green arrow",200,60);
    
   
    
  }
  
  
  circle(targetX,targetY,20);
  
  if (win)
  {
     background('green');
    text('You WON!!', 250, 50);
 text('Press any key to restart', 100, 230);
  }  
  
  image(pic,Y,X,600,500);
 


  fill("red");
  circle(mouseX, mouseY, 50);
  if (mouseIsPressed){
  
    circle(mouseX, mouseY, 50);
  
 
 
}
  
}

function mousePressed() {
 



}

  
 





  





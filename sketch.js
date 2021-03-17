var balloon, balloonANM;
var backIMG;
function preload(){
  backIMG = loadImage("Hot Air Ballon-01.png");
  balloonANM = loadAnimation("Hot Air Ballon-03.png", "Hot Air Ballon-04.png");
}

function setup() {
  createCanvas(500, 500);
  balloon = createSprite(250, 400, 25, 100);
  balloon.addAnimation("Hot Air Ballon-02.png", balloonANM);
  balloon.scale = 0.5;
}

function draw() {
  background(backIMG);  
  if(keyDown(LEFT_ARROW)){
    balloon.x = balloon.x - 10;
  }
  else if(keyDown(RIGHT_ARROW)){
    balloon.x = balloon.x + 10;
  }
  else if(keyDown(UP_ARROW)){
    balloon.y = balloon.y - 10;
    if(balloon.scale > 0.1){
      balloon.scale = balloon.scale - 0.01;
    }
  }
  else if(keyDown(DOWN_ARROW)){
    balloon.y = balloon.y + 10;
    if(balloon.scale < 1){
      balloon.scale = balloon.scale + 0.01;
    }
  }

  
  drawSprites();
}
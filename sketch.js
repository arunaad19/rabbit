var garden,rabbit;
var gardenImg,rabbitImg;
var path,pathImg;
var apple,appleImg;
function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  pathImg   = loadImage("path.png");
  appleImg  = loadImage("apple.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);
garden.velocityY=-5;
garden.y=50;
garden.y = height/2;

path=createSprite(200,200,100,200);
path.addImage(pathImg);
path.velocityY=+5;
 
apple=createSprite(200,100)
apple.addImage(appleImg);
apple.scale=0.05;


//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  if (garden.y > 400){
    garden.y = height/2;
  }
  if (keyDown("left")){
    rabbit.velocityX=-5;
  }
  if (keyDown("right")){
    rabbit.velocityX=+5;
  }
  if (keyDown("up")){
    rabbit.velocityY=-5;
  }
  if (keyDown("down")){
    rabbit.velocityY=+5;
  }
  
  
  
  if (rabbit.isTouching(apple)){
    apple.visible=false;
  }


  drawSprites();
}

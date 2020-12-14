var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var survivalTime,score; 
var ground;


function preload(){
  createCanvas(400,400)
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving" , monkey_running)
  monkey.scale = 0.1
  
  ground = createSprite(400,350,400,10);
  ground.velocityX = -4  
  score = 0
  survivalTime = 0
}


function draw() {
  background("white")
  
  ground.x = ground.width/2;

  FoodGroup = createGroup();
  obstacleGroup = createGroup();
    
  food();
  obstacles();
  monkey.collide(ground);

  survivalTime = Math.round(frameCount/50)
  
  monkey.velocityY = monkey.velocityY + 0.8

  
    if(keyDown("space") && monkey.y>=305){
      monkey.velocityY = -16
    }
  
      
  
  text("Score: "+score,275,50)
  
  
  survivalTime = Math.ceil(frameCount/40)
  text("Survival Time: "+survivalTime,75,50)
  

  
  
  
  drawSprites();
  
}

function food(){
  if(frameCount%80==0){
   banana=createSprite(400,Math.round(random(120,200)),20,20);
    banana.addImage(bananaImage)
    banana.velocityX = -8
    banana.scale = 0.1
    banana.lifetime = 50
    FoodGroup.add(banana);
  }
}

function obstacles(){
  if(frameCount%300==0){
    obstacle = createSprite(400,320,20,20)
    obstacle.addImage(obstaceImage);
    obstacle.velocityX = -8
    obstacle.scale = 0.15
    obstacle.lifetime = 80
    obstacleGroup.add(obstacle);
  }
}



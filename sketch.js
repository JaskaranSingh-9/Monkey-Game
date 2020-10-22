
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;
var survivalTime=0;
var score=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;
  
  ground=createSprite(400,350,900,10);
  ground.velocityX=-4
  ground.x=ground.width/2;
  console.log(ground.X);
  
  FoodGroup=createGroup();
  obstacleGroup=createGroup();
  
  survivalTime=0;
  score=0;
}


function draw() {
  background("white");
  
  if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
  if(keyDown("space")&& monkey.y >= 200) {
        monkey.velocityY = -12;
        
    }
    
   
    monkey.velocityY = monkey.velocityY + 0.8
monkey.collide(ground);
  
  stroke("black");
  textSize(10);
  fill("black");
  text("Score "+score,20,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime =  Math.ceil(frameCount/frameRate());
  text("Survival Time: " +survivalTime,100,50);
  
  if(monkey.isTouching(FoodGroup)){
    FoodGroup.destroyEach();
    score=score+1;
  }
  spawnObstacles()
  spawnBanana();
  drawSprites();
}

function spawnBanana() {
  
  if (frameCount % 80 === 0) {
    var banana = createSprite(600,120,40,10);
    banana.y = Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -8;
    
     
    banana.lifetime = 200;
    
    banana.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
    
    FoodGroup.add(banana);
  }
}
function spawnObstacles(){
 if (frameCount % 300 === 0) {
    var obstacle = createSprite(600,300,40,10);
    obstacle.addImage(obstaceImage);
    obstacle.scale = 0.3;
    obstacle.velocityX = -8;
    
     
    obstacle.lifetime = 200;
   obstacle.depth =  monkey.depth;
    monkey.depth = monkey.depth + 1;
    
    
    obstacleGroup.add(obstacle);
  }
}








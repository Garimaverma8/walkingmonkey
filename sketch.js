var PLAY = 1;
var END = 0;
var gameState = 1;

var monkey,monkey_running;
var banana,bananaImage;
var ground;
var obstacle,obstacleImage;

var score = 0;

function preload(){
  createCanvas(400,400);
  
  monkey_running = loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
}

function setup(){
  
  monkey = createSprite(40,340,5,10);
  monkey.addAnimation("running" ,monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(10,395,800,10);
  ground.velocityX = -4;
 
  BananasGroup = new Group();
  obstaclesGroup = new Group();
  
monkey.setCollider("rectangle",-180,0,monkey_running.width,monkey_running.height);
  
  
}

function draw(){
  background("lightblue");
  stroke ("black");
  textSize (18);
  fill ("orange");
  score = score + Math.round(getFrameRate()/60);
  text ("survival time: "+ score,130,15);
 
  
if (gameState ===  PLAY){
  
   ground.x = ground.width/2;
  
   
  
  if (keyDown("space")&& monkey.y >= 100) {
    monkey.velocityY = -8;
    
  }
   monkey.velocityY = monkey.velocityY + 0.9;
   monkey.collide(ground);
 
    if (monkey.isTouching(obstaclesGroup)){
    monkey.velocity = 0;

  }
 
 
  
   foods();
   stone();
  
}
  
if (gameState === END){
  
}
  
   
  drawSprites();
  
}

function foods(){
  if (frameCount % 100 === 0){
  banana = createSprite(370,200,10,10);
  banana.scale = 0.1;
  banana.y = Math.round(random(80,300));
  banana.addImage("banana",bananaImage);
  banana.velocityX = -6;
  banana.lifetime = 100;
    
  BananasGroup.add(banana);
    
  }
  
}

function stone(){
  if (frameCount % 90 === 0){
  obstacle = createSprite(370,370,10,10);
  obstacle.addImage("obstacle",obstacleImage);
  obstacle.scale = 0.1;
  obstacle.x = Math.round(random(450,700));
  obstacle.velocityX = -3.5;
  obstacle.lifetime = 200;
    

    
 obstaclesGroup.add(obstacle);
  
    
  }
  
   
}
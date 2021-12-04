var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var runner,runnerImg
var  invisibleLine,invisibleLineGroup;
var gameState = "play"

function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
 runnerImg = loadImage("Runner.png.png");
  spookySound = loadSound("spooky.wav");
}

function setup() {
  createCanvas(600, 600);
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;
  
  runner=createSprite(200,50);
  runner.addImage("runner",runnerImg);
  runner.scale=0.15;

  climbersGroup=new Group();
invisibleLineGroup=new Group();
doorsGroup=new Group();
}

function draw() {
  background(200);
 if(gameState==="play") {
  if(tower.y > 400){
    tower.y = 300
  }
  if(keyDown("space")){
    runner.velocityY=-5;
  }
  if(keyDown("RIGHT_ARROW")){
  runner.x=runner.x+3
  }
  if(keyDown("LEFT_ARROW")){
    runner.x=runner.x-3
  }
  if(climbersGroup.isTouching(runner)){
    runner.velocityY=0;
   
  }
//adding gravity
runner.velocityY=runner.velocityY+0.5
  doors();
  if( runner.y > 600){
    runner.destroy();
    gamestate="end"
  }


 if (gameState === "end"){
  stroke("yellow");
  fill("yellow");
  textSize(30);
  text("Game Over", 230,250)

 

 }


}
drawSprites();
}

 
   


function doors(){
  if(frameCount % 300===0){
    var door=createSprite(random(100,450),50);
    door.addImage("door",doorImg);
    door.velocityY=1;
    door.lifetime=500;

    var climber=createSprite(random(100,450),110);
    climber.addImage("climber",climberImg);
    climber.velocityY=1;
    climber.x=door.x;
    climber.lifetime=500;
    runner.depth=door.depth;
    runner.depth=runner.depth+1;

    var invisibleLine=createSprite(195,75)

    invisibleLine.x=door.x;
    invisibleLine.visible=false;
invisibleLine.width=climber.width;
invisibleLine.height=2;
invisibleLine.velocityY=1;


    doorsGroup.add(door);
    invisibleLineGroup.add(invisibleLine);
    climbersGroup.add(climber);
  }

 }



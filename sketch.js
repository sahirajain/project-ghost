var towerImg, tower;
var  doorImg, door, doorsGroup, climberImg, climber, climbersGroup, ghost, ghostImg,score, invisibleBlockGroup, invisibleBlock;
var gameState = "play"

function preload(){
    ghost_running =   loadAnimation("ghost-jumping.png","ghost-standing.png");
    ghost_collided = loadAnimation("ghost-standing.png");

    door=loadAnimation("door.png");
    tower=loadAnimation("tower.png")

    gameOver=loadAnimation("Game-Over-PNG-Image.png")
    restart=loadAnimation("images.jpg")
}



function setup() {
    createCanvas(600, 200);
    ghost = createSprite(50,180,20,50);
    ghost.addAnimation("running",ghost_running);
    ghost.addAnimation("collide",ghost_collided)

    gameOver = createSprite(300,100);
    gameOver.addImage(gameOver);

    restart = createSprite(300,140);
    restart.addImage(restart);

    gameOver.scale = 0.5;
    restart.scale = 0.5;

    gameOver.visible = false;
    restart.visible = false;

    obstaclesGroup = new Group();

    score = 0;
}



function draw() {
    background(255);
    text("Score: "+ score, 500,50);

    if (gameState===PLAY){
        score = score + Math.round(getFrameRate()/60);

        if(keyDown("space") && ghost.x >= 159) {
            ghost.velocityx = -12;
          }
          trex.velocityY = trex.velocityY + 0.8
          if (tower.y < 0){
            tower.y = tower.width/2;
          }
          if(door.isTouching(trex)){
            gameState = END;
    }
}
else if (gameState === END) {
    gameOver.visible = true;
    restart.visible = true;
    tower.velocityY = 0;
    ghost.velocityX = 0;
    ghost.changeAnimation("collided",ghost_collided);
    
}
if(mousePressedOver(restart)) {
    reset();
  }
  drawSprites();
}
function reset(){
    gameState = PLAY;
    gameOver.visible = false;
    restart.visible = false;
    
    obstaclesGroup.destroyEach();
    cloudsGroup.destroyEach();
    
    trex.changeAnimation("running",trex_running);
    
    if(localStorage["HighestScore"]<score){
      localStorage["HighestScore"] = score;
    }
    console.log(localStorage["HighestScore"]);
    
    score = 0;
    
  }

var boy, boyImg;
var forest, forestImg;
var rock, rockImg, rocksGroup;
var gameState = "Play";


function preload(){
boyImg = loadImage("Boy.png");
forestImg = loadImage("Forest.png")
rockImg = loadImage("rock.png");

}

function setup() {
createCanvas(600, 600);
boy = createSprite(200,480);
boy.addImage("boy", boyImg);
boy.scale=0.2;


forest = createSprite(300,510);
forest.addImage("forest", forestImg);
forest.velocityX=-5;

rocksGroup = new Group()

}

function draw() {
background("white")

if(gameState === "Play"){
if(forest.x<0){
    forest.x=600
}

if(keyDown("SPACE")){
    boy.y=boy.y-5
}

boy.y = boy.y+0.5

boy.depth = forest.depth
boy.depth = boy.depth+1

spawnRocks()

if(rocksGroup.isTouching(boy)){
    gameState = "End"
}

drawSprites()
}

if(gameState === "End"){
  boy.destroy();
  forest.destroy();
  textSize(20);
  text("GAME OVER", 300,300)
}
 
}

function spawnRocks(){
 if(frameCount % 100 === 0){
     rock = createSprite(500, 550);
     rock.addImage("rock", rockImg);
     rock.scale = 0.05
 
     rocksGroup.add(rock)

     rock.x = Math.round(random(50,600));

     rock.lifetime = 800

     rock.velocityX=-5;

     

 }
}
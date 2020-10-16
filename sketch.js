var car, ground;

function preload(){
car1 = loadImage("p1.png")


}

function setup() {
  createCanvas(displayWidth,displayHeight);
  ground = createSprite(displayWidth/2,displayHeight/2,200,displayHeight)
 car = createSprite(400, 200, 50, 50);
 car.addImage(car1)
 car.velocityX = 0
 car.velocityY = 0



}

function draw() {
  background(0,0,0);  
if (keyDown("up")){
car.velocityY = -2
car.velocityX = 0 
}

if (keyWentUp("up")){
car.velocityY = 0;
car.velocityX = 0;
}

if(keyDown("down")){

  car.velocityY = 2
  car.velocityX= 0
  }
  if(keyWentUp("down")){
    car.velocityY = 0;
    car.velocityX = 0;
  }

if (keyDown("right")){
  car.velocityX = +2
  car.velocityY = 0
}  
if(keyWentUp("right")){
car.velocityX = 0;
car.velocityY = 0;

}

if (keyDown("left")){
car.velocityX = -2
car.velocityY = 0
}
if(keyWentUp("left")){
car.velocityX = 0;
car.velocityY = 0
}
if(ground.y<450){
  ground.y = ground.height/2
}

ground.velocityX= 0;
ground.velocityY = -3





  drawSprites();

}
var box;
var boximg;
function preload(){
  boximg=loadImage("caixa.png");
}
function setup() {
  createCanvas(400,400);
  box=createSprite(200, 200, 20, 20);
  box.addImage(boximg);
  box.scale=0.2
}

function draw() 
{
  background(30);
if(keyIsDown(87)){
box.position.y-=5
}
if(keyIsDown(83)){
  box.position.y+=5
}
if(keyIsDown(65)){
  box.position.x-=5
}
if(keyIsDown(68)){
  box.position.x+=5
}

  drawSprites();

}





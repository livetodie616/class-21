var object1,rect2;



function setup() {
  createCanvas(800,400);
  gameObject2=createSprite(600,100,50,50);
  gameObject2.shapeColor="red"
  gameObject2.debug=true
 gameObject3=createSprite(600,300,50,50);
  gameObject3.shapeColor="red"
  gameObject3.debug=true
  gameObject2.velocityY=2
  gameObject3.velocityY=-2
}

function draw() {
  background(0);  
 bounceOff(gameObject2,gameObject3);
  drawSprites();
}

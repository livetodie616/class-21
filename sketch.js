var rect1,rect2;



function setup() {
  createCanvas(800,400);
  rect1=createSprite(600,100,50,50);
  rect1.shapeColor="red"
  rect1.debug=true
  rect2=createSprite(600,300,50,50);
  rect2.shapeColor="red"
  rect2.debug=true
  gameObject1=createSprite(100,100,55,55)
  gameObject1.shapeColor="yellow"

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
  rect2.x=mouseX
  rect2.y=mouseY 
  //isTouching();
  bounceOff(gameObject2,gameObject3);
  
  if(isTouching(rect2,rect1)){
    rect1.shapeColor="green"
    rect2.shapeColor="green"
 

  }
  else{
    rect1.shapeColor="red"
    rect2.shapeColor="red"
  }
  if(isTouching(rect2,gameObject1)){
    gameObject1.shapeColor="green"
    rect2.shapeColor="green"


  }
  else{
    gameObject1.shapeColor="yellow"
    rect2.shapeColor="red"
  }
  drawSprites();
}

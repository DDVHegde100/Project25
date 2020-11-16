
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper,rect1,rect2,rect3,ground;
var dustbinImg;
function preload()
{
	paper=loadImage("paper.png");
    dustbinImg=loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
dustbinImg= new DustBin(1005,37.5,80,80);
paper = new Paper(100,300,5);
ground = new Ground(600,650,1200,20);
rect1 = new DustBin(1000,630,250,20);
rect2 = new DustBin(880,565,20,150);
rect3 = new DustBin(1130,565,20,150);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightBlue");
  
  drawSprites();
 paper.display();
 ground.display();
 dustbinImg.display();
 rect1.display();
 rect2.display();
 rect3.display();
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paperObject.body.paperObject.body.position,{x:85,y:-85})
	}
}




const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var side1,side2,side3;
var ground;
var ball;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	side1 = new Ground(850, 665,200,20);
	
	side2=new Ground(750, 620,20,100);
	
	side3=new Ground(945, 620,20,100, {isStatic:true});
	
	ground = new Ground(800,680,1600,40);

	ball = new Paper(200,200,20,20);
	World.add(world, ball);

	Engine.run(engine);
  
}


function draw() {
  
rectMode(CENTER);

  background(0);
  ball.display();
  ground.display();
  side1.display();
  side2.display();
  side3.display();
  drawSprites();
 
}
function keyPressed() {
    if(keyCode === 39){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:45,y:-50});
	}
	
  }





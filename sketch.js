
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
Ground1 = new Ground(400,700,800,20);
Hammer1 = new Hammer(300,200);
Iron1 = new Iron(500,100,60);
Stone1 = new Stone(200,100,50,50)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Ground1.display()
  Hammer1.display() 
  Iron1.display()
  Stone1.display() 

  drawSprites();
 
}




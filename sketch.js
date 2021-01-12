const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground,rope1,mango,stone;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(400,700,800,20);

	mango = Bodies.ellipse(600,100,15,{isStatic: true});
	mango.fill("yellow");
	//Create the Bodies Here.
	stone = new Stone(200,350,30,{isStatic: true});
	stone.fill(0)

	rope1 = new rope(stone,{x:200,y:350});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  Engine.update(engine);

  ground.display();
  stone.display();
  
  ellipseMode(RADIUS);
  ellipse(this.mango.position.x,this.mango.position.y,15);
  
  drawSprites();
 
}

function mouseDragged(){
    //if (gameState!=="launched"){
        Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
    //}
}


function mouseReleased(){
    rope.fly();
}


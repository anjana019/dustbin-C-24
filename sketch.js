var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	//World.add(world, packageBody);
	

	//Create a Ground
	//ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	//World.add(world, ground);
	dustbin1 = new Dustbin (600,580,20,100);
	dustbin2 = new Dustbin (655,620,90,20);
	dustbin3 = new Dustbin (710,580,20,100);
	ground= new Ground(width/2,620,width,20);
	paper=new Paper(200,450,40);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  ground.display();
  paper.display();
 
}
function keyPressed(){
   if(keyCode===UP_ARROW){
	Matter.Body.applyForce(paper.body,paper.body.position,{x:105, y:-100});
   }
}



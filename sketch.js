

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var paper,ground;
var world;

var dustbin,dustbinImg;

function preload(){

dustbinImg = loadImage("dustbingreen.png")

}





function setup() {
	createCanvas(1300, 500);
  rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;


 
	paper=new Paper(200,420,30);
	ground=new Ground(0,470,3000,20);



	dustbin= createSprite(1032,385,20,20);
    dustbin.addImage(dustbinImg);
    dustbin.scale = 0.45;

	dustbin1=new Dustbin(1000,450);
	dustbin2=new Dustbin(1000,450);
	dustbin3=new Dustbin(1000,450);




  //Create the Ground
  ///var render = Render.create({
	///  element: document.body,
	///  engine: engine,
	 /// options: {
	 ///   width: 1200,
	  ///  height: 700,
	  ///  wireframes: false
	///  }
	///});


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(210);
  

  paper.display();
  ground.display();
  dustbin.display();



  drawSprites();
 
}

function keyPressed() {
  if (keyCode === UP_ARROW) {

    Matter.Body.applyForce(paper.body,paper.body.position,{x:74,y:-75});
  
  }
}



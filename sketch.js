
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var bob1,bob2,bob3,bob4,bob5;
var rope1,rope2,rope3,rope4,rope5;
var roof;

function setup() {
	createCanvas(1600, 700);
  rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  roof=new Roof(width/2,height/4,width/7,20);
    var bobdia=40;
    var startbobposx=width/2
    var startbobposy=height/4+500
    bob1=new Bob(startbobposx-bobdia*2,startbobposy,bobdia)
    bob2=new Bob(startbobposx-bobdia,startbobposy,bobdia)
    bob3=new Bob(startbobposx,startbobposy,bobdia)
    bob4=new Bob(startbobposx+bobdia,startbobposy,bobdia)
    bob5=new Bob(startbobposx+bobdia*2,startbobposy,bobdia)
    rope1=new Rope(bob1.body,roof.body,-bobdia*2,0)
    rope2=new Rope(bob2.body,roof.body,-bobdia*1,0)
    rope3=new Rope(bob3.body,roof.body,0,0)
    rope4=new Rope(bob4.body,roof.body,bobdia,0)
    rope5=new Rope(bob5.body,roof.body,+bobdia*2,0)

    Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  roof.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  bob1.display();
  bob3.display();
  bob4.display();
  bob5.display();
  bob2.display();
}
function keyPressed(){
  if(keyCode===UP_ARROW){
    Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-45})
  }
}
function drawLine(constraint){
  bobbodyposition=constraint.bodyA.position
  roofbodyposition=constraint.bodyB.position
  roofbodyoffset=constraint.pointB
  roofbodyX=roofbodyposition.x+roofbodyoffset.x
  roofbodyY=roofbodyposition.y+roofbodyoffset.y
  line(bobbodyposition.x,bobbodyposition.y,roofbodyX,roofbodyY)
}
function mouseDragged(){
  Matter.Body.setPosition(bob1.body,{x:mouseX,y:mouseY});
}
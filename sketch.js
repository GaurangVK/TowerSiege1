const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var engine,body,world;


var Ground;
var Box1,Box2,Box3,Box4,Box5,Box6,Box7,Box8,Box9,Box10;


function setup() {
  createCanvas(1200,600);
  engine=Engine.create();
 world=engine.world;
body=Bodies.world;

  Ground=new ground(600, 580, 1200, 40);
  Box1=new Box(330,240);
  Box2=new Box(360,240);
  Box3=new Box(390,240);
  Box4=new Box(420,240);

  Box5=new Box(345,190);
  Box6=new Box(375,190);
  Box7=new Box(405,190);

  Box8=new Box(360,140);
  Box9=new Box(390,140);

  Box10=new Box(375,90);
}

function draw() {
  background(0);  
  Engine.update(engine);

     Ground.display();
     Box1.display();
     Box2.display();
     Box3.display();
     Box4.display();
     Box5.display();
     Box6.display();
     Box7.display();
     Box8.display();
     Box9.display();
     Box10.display();
     
  drawSprites();
}
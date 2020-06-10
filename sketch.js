const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world,object,ground;
function setup(){
    createCanvas(displayWidth,displayHeight);
    engine = Engine.create();
    console.log(engine);
    world = engine.world;
    var options = {
        restitution: 2.0,
        friction:0.05,
        density:0.1,
    }
    object = Bodies.circle(displayWidth/2,displayHeight/2,50,options);
    World.add(world,object);
var option = {
    isStatic:true

}
 ground = Bodies.rectangle(displayWidth/2,displayHeight,displayWidth,10,option);
 World.add(world,ground);
    console.log(object.position);
    
}
function draw(){
    background("Black");

  Engine.update(engine);
  rectMode(CENTER);
  ellipseMode(RADIUS);
 ellipse(object.position.x,object.position.y,50,50);
 rect(ground.position.x,ground.position.y,displayWidth,10);
}
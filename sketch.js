//ALL THE VARIABLES
var Engine = Matter.Engine;
var  World = Matter.World;

var  Bodies = Matter.Bodies;

var boxes = [];

var ground;

var gravity_sli;// GET it SLI??


//SETUB HEHEHEHAHHA
function setup() {
    createCanvas(400, 400);
    //Rise(well actually you should fall) my glorious creation!!!!
    engine = Engine.create();
    world = engine.world;
    Engine.run(engine);
    //The slider
    gravity_sli = createSlider(0, 100, 50);
    gravity_sli.position(10, 460);
    gravity_sli.input = map(engine.world.gravity, gravity_sli.min, gravity_sli.max, 0, 1);
 //settings 
    var options = {
        isStatic: true
    }
//there is no need of this
    ground = Bodies.rectangle(200, height - 50, width, 10, options);
    World.add(world, ground);
}
 
function mousePressed() {
//ADDING THE BOXES!!!
//https://i.imgflip.com/1uukvw.jpg
    if (mouseY < 350) {
        boxes.push(new Box(mouseX, mouseY, random(15, 69), random(4, 20)));
    }
}
 
function draw() {
    background(51);
    //set the value of gravity to gravity actually showing
    var final_gravity = gravity_sli.value();
    //showing the damn boxes
    for (var i = 0; i < boxes.length; i++) {
        boxes[i].show();
    }
    noStroke();
    //Making the ground green!! #teamtrees
    fill("green");
    //centering the ground so it aint out of the damn screen 
    rectMode(CENTER);
    //creating the ground
    rect(ground.position.x, ground.position.y, width, 10);
    fill("silver");

    text("Set Gravity to: " + final_gravity, 160, 381);
}
 


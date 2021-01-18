const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var batman;
var engine, world;
var canvas;
var droparray = [];
var dropcount;
var umbrella;

var walk;

function preload() {
    walk = loadAnimation("Walking Frame/walking_1.png", "Walking Frame/walking_2.png", "Walking Frame/walking_3.png", 
                        "Walking Frame/walking_4.png", "Walking Frame/walking_5.png", "Walking Frame/walking_6.png", 
                        "Walking Frame/walking_7.png", "Walking Frame/walking_8.png");
}
function setup() {
    engine = Engine.create();
    world = engine.world;

    canvas = createCanvas(800, 800);

    dropcount = 0;

    batman = createSprite(200, 750);
    batman.scale = 0.3;
    umbrella = new Umbrella(100, 700, 100, 140);
}
function draw() {
    background(0, 0, 0);
    dropcount += 1;
    Engine.update(engine);


    if (frameCount % 10 === 0) {
        var drop = new Drop(random(0, width), 0, 10);
        droparray.push(drop);
    }

    for (var j = 0; j < droparray.length; j++) {
        droparray[j].update();
        droparray[j].display();
    }

    umbrella.update();
    umbrella.display();
}
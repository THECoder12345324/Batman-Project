const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var canvas;
var droparray = [];
var dropcount;

function preload() {

}
function setup() {
    engine = Engine.create();
    world = engine.world;

    canvas = createCanvas(800, 800);

    dropcount = 0;
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

}
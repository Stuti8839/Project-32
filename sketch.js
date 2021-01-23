const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var score = 0;


function preload() {
}

function setup(){
    createCanvas(1200, 800);
    engine = Engine.create();
    world = engine.world;

    stand1 = new Ground(450,390,900,20);
    //level 1
    block1 = new Block(300,275,30,40);
    block2 = new Block(330,275,30,40);
    block3 = new Block(360,275,30,40);
    block4 = new Block(390,275,30,40);
    block5 = new Block(420,275,30,40);
    block6 = new Block(450,275,30,40);
    block7 = new Block(480,275,30,40);
    //level 2
    block8 = new Block(330,235,30,40);
    block9 = new Block(360,235,30,40);
    block10 = new Block(390,235,30,40);
    block11 = new Block(420,235,30,40);
    block12 = new Block(450,235,30,40);
    //level 3
    block13 = new Block(360,195,30,40);
    block14 = new Block(390,195,30,40);
    block15 = new Block(420,195,30,40);
    //level 4
    block16 = new Block(390,155,30,40);

    polygon = Bodies.rectangle(50,200,20);
    World.add(world, polygon);

    slingshot = new SlingShot(polygon.body, {x:100,y:200});
}

function draw(){
    if (backgroundImg) 
        background(backgroundImg);
        
    Engine.update(engine);
    strokeWeight(4);

    text("SCORE : "+score,750,40);

    stand1.display();    
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();

    block1.Score();
    block2.Score();
    block3.Score();
    block4.Score();
    block5.Score();
    block6.Score();
    block7.Score();
    block8.Score();
    block9.Score();
    block10.Score();
    block11.Score();
    block12.Score();
    block13.Score();
    block14.Score();
    block15.Score();
    block16.Score();

    slingshot.display();
}

function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed() {
    if(keyCode === 32){
		slingshot.attach(polygon.body);
    }
}

async function getBackground() {
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);

    if (hour<=18 && 6>=hour){
        bg = "day.jpg";
    } else {
        bg = "night.jpg";
    }

    backgroundImg = loadImage(bg);
}
var canvas;
var music;
var surface1,surface2,surface3,surface4;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    surface1 = createSprite(500,350,20,20);
    surface2 = createSprite(400,350,20,20);
    surface3 = createSprite(300,350,20,20);
    surface4 = createSprite(200,350,20,20);
    //create box sprite and give velocity

}

function draw() {
    background(rgb("Red"));
    drawSprites();
    surface1.display();
    surface2.display();
    surface3.display();
    surface4.display();
    //create edgeSprite



    //add condition to check if box touching surface and make it box
}

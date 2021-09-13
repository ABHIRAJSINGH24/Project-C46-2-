var background1_img;

var spacehip, spaceship_img;

function preload(){  
    background1_img = loadImage("Images/Space1.jpg");
    background2_img = loadImage("Images/Space2.png"); 
}

function setup(){
    createCanvas(displayWidth,displayHeight);

    gameState = 1;

    spaceship = new Spaceship(displayWidth/2,displayHeight-200);

}

function draw(){

    spaceship.y -= 5;
    camera.position.y = spaceship.y - 250;

    background(background2_img);

    spaceship.display();
    moveLeft(spaceship);
    moveRight(spaceship);
}

function moveLeft(body){
    if(keyDown(LEFT_ARROW) && body.x>50){
        body.x = body.x - 7
    }
}

function moveRight(body){
    if(keyDown(RIGHT_ARROW) && body.x<displayWidth-50){
        body.x = body.x + 7
    }
}
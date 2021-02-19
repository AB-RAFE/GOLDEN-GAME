var gameState = 0;

var carSprite, carIMG, carAnimation;
var cloudIMG, sunImage, sunSprite;
var roadSprite, roadIMG;
var groundSprite1, groundIMG;
var treeIMG1, treeIMG2;
var coinImage,obstaclesImage;
var clouds, trees, coins, obstacles;
var music;
var text;

function preload() {

    carIMG = loadImage("img/car (5).png");
    carAnimation = loadAnimation("img/car (5).png", "img/car (6).png", "img/car (7).png", "img/car (8).png", "img/car (1).png", "img/car (2).png", "img/car (3).png", "img/car (4).png");
    treeIMG1 = loadImage("img/tree1.png");
    treeIMG2 = loadImage("img/tree2.png");
    cloudIMG = loadImage("img/cloud.png");
    roadIMG = loadImage("img/road.png");
    groundIMG = loadImage("img/ground.png");
    sunImage = loadImage("img/sun.png");
    coinImage = loadImage("img/coin.png");
    obstaclesImage = loadImage("img/stone.png");

    music = loadSound("checkPoint.mp3");
}

function setup() {
    createCanvas(windowWidth, windowHeight - 10);

    groundSprite1 = createSprite(windowWidth / 2 + 350, windowHeight - 60, 10, 10);
    groundSprite1.addImage(groundIMG);
    groundSprite1.scale = 0.25;

    roadSprite = createSprite(windowWidth / 2 + 250, windowHeight - 50, 10, 10);
    roadSprite.addImage(roadIMG);
    roadSprite.scale = 0.7;

    carSprite = createSprite(300, windowHeight - 100, 20, 20);
    carSprite.addImage(carIMG);
    carSprite.addAnimation("car", carAnimation);
    carSprite.scale = 0.3;

    sunSprite = createSprite(windowWidth - 200, 100, 10, 10);
    sunSprite.addImage(sunImage);
    sunSprite.scale = 0.35;

    text1 = createElement("h1");
    text1.html("Press 'space' to start");
    text1.position(windowWidth/2 - 150,windowHeight/2 - 100);

    score = 0;
}

function draw() {
    background("#87CEEB");

    
    // var start = createSprite(windowWidth / 2, windowHeight / 2, 100, 60);
    // start.shapeColor = 255
    if(keyDown("space")){
        gameState = 1;
        text1.hide();
    }    
    
        if (gameState === 1) {
            clouds = new Cloud();
            coins = new Coin();
            obstacles = new Obstacles();
            trees = new Tree();

            score = score + Math.round(getFrameRate()/60);
            textSize(20);
            text("Score -> " + score + "m.",20,25);
            // music.play();
            if (groundSprite1.x < 400) {
                groundSprite1.x += 700;
            }
            if (roadSprite.x < 500) {
                roadSprite.x += 500;
            }

            // if(gameState === 1) {
            carSprite.changeAnimation("car", carAnimation);
            roadSprite.velocityX = -5;
            groundSprite1.velocityX = -5;
            // }

            // if(obstacles.obstaclesGroup.isToching(carSprite)){
            //     obstaclesGroup.destroyEach();
            //     music.play();
            // }


            clouds.display();
            trees.display();
            coins.display();
            obstacles.display();


            drawSprites();
            carSprite.display();
        }
}
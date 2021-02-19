class Obstacles{
    constructor() {
        this.obstaclesGroup = new Group();
    }
    display() {
        if (frameCount % 300 === 0) {
            var obstacles = createSprite(windowWidth + 10,windowHeight - 100, 50, 50);
            obstacles.addImage(obstaclesImage);
            obstacles.velocityX = -5;
            obstacles.scale = 0.15;
            obstacles.lifetime = 600;

            this.obstaclesGroup.add(obstacles);
        }
    }
}
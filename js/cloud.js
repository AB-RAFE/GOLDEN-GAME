class Cloud {
    constructor() {
    }
    display() {
        if (frameCount % Math.round(random(50,100)) === 0) {
            var cloud = createSprite(windowWidth + 10,Math.round(random(100,180)), 40, 10);
            cloud.addImage(cloudIMG);
            cloud.velocityX = -3;
            cloud.lifetime = 600;
        }
    }
}
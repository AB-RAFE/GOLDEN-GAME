class Coin{
    constructor() {
        this.coinGroup = new Group();
    }
    display() {
        if (frameCount % Math.round(random(50,200)) === 0) {
            var coin = createSprite(windowWidth + 10,windowHeight - 100, 40, 10);
            coin.addImage(coinImage);
            coin.velocityX = -5;
            coin.scale = 0.2;
            coin.lifetime = 600;

            this.coinGroup.add(coin);
        }
    }
}
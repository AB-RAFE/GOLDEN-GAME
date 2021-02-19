class Tree{
    constructor(){

    }
    display() {
        if (frameCount % Math.round(random(60,400)) === 0) {
            var tree = createSprite(windowWidth+200,390,10,40);
            tree.addImage(treeIMG2);
            tree.velocityX = -5
            tree.lifetime = 600;
        }
    }
}
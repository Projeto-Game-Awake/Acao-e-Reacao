class Choice extends Phaser.GameObjects.Container {

    constructor(x,y,choice, click) {
        let image = new Phaser.GameObjects.Sprite(
            scene,
            0,
            0,
            choice.image
          )
        let text = scene.add.text(0, 30, choice.description, { font: '"Press Start 2P"' });
        super(scene, x, y, [image, text]);

        image.setInteractive();
        image.on("pointerdown",click); 
        scene.add.existing(this);
    }
}
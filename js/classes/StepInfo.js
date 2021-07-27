class StepInfo extends Phaser.GameObjects.Container {

    constructor(x,y,choice, click) {

console.log("CHOICE", choice)

        let image = new Phaser.GameObjects.Sprite(
            scene,
            0,
            0,
            choice.image
          )

        let style = { 
            fontSize: 24,
            fontFamily: 'Arial',
            align: "left",
            wordWrap: { width: 450, useAdvancedWrap: true }
        }
        let text = scene.add.text(0, 30, choice.description, style);
        super(scene, x, y, [image, text]);

        scene.add.existing(this);
    }
}
class Choice extends Phaser.GameObjects.Container {

    constructor(x,y,decision, click) {

        let style = { 
            fontSize: 24,
            fontFamily: 'Arial',
            align: "left",
            wordWrap: { width: 300, useAdvancedWrap: true }
        }


        let text = scene.add.text(0, 30, decision, style);
        super(scene, x, y, [text]);

        text.setInteractive();
        text.on("pointerdown",click); 
        scene.add.existing(this);
    }
}
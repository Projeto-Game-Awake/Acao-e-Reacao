class Choice extends Phaser.GameObjects.Container {

    constructor(x,y,decision, click) {

        let style = {
            fontSize: 24,
            fontFamily: 'Arial',
            align: "left",
            backgroundColor: '#2323CB',
            color:'#FFFFFF',
            wordWrap: { width: 300, useAdvancedWrap: true }
        }

        let text = scene.add.text(0, 30, decision, style);

        //  And now we'll color in some of the letters
        text.setOrigin(0,0)
        super(scene, x, y, [text]);

        text.setInteractive();
        text.on("pointerdown",click); 
        scene.add.existing(this);
    }
}
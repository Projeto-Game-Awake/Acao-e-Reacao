class StepInfo extends Phaser.GameObjects.Container {

    constructor(choice) {
        const screenWidth = scene.cameras.main.width;
        const x = 0
        const y = 0

        const border = {
            top: 10,
            right: 100
        }

console.log("CHOICE", choice)

        let image = new Phaser.GameObjects.Sprite(
            scene,
            0,
            0,
            choice.image
          )

          image.setOrigin(0,0)

        let style = { 
            fontSize: 24,
            fontFamily: 'Arial',
            align: "left",
            wordWrap: { width: 600, useAdvancedWrap: true }
        }

        let question = '';
        if(typeof choice.question !== 'undefined') {
            question =  '"' + choice.question + '"';
        }

        let text = scene.add.text(screenWidth - border.right, border.top, choice.description + question, style);
        
        text.setOrigin(1,0)

            //  And now we'll color in some of the letters
        text.setTint(0xff0000);

        if(typeof choice.image === 'undefined') {
            super(scene, x, y, [text]);
        } else {
            super(scene, x, y, [image, text]);
        }

        scene.add.existing(this);
    }
}
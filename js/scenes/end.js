class end extends Phaser.Scene {
  constructor() {
    super("end");
  }
  init(data) {
    this.choice = data.choice;
    this.story_config = data.story_config;
  }
  preload() {
    this.load.image("image", "assets/spritesheets/image.png");
  }
  create() {
    scene = this;
    let story_config = this.story_config

    const screenWidth = scene.cameras.main.width;
    const screenHeight = scene.cameras.main.height;
    new StepInfo(this.choice)
    
    let home = this.add.image(0, screenHeight-250, "home");
    home.setOrigin(0,0)
    home.setInteractive();
    home.on("pointerdown",function() {
      scene.scene.start("first");
    });

    let style = { 
        fontSize: 80,
        fontFamily: 'Arial',
        align: "left",
        wordWrap: { width: 300, useAdvancedWrap: true },
        backgroundColor: "#000000"
    }
    let end = scene.add.text(600, 300, "FIM", style);

  }
}

class end extends Phaser.Scene {
  constructor() {
    super("end");
  }
  init(data) {
    this.choice = data.choice;
  }
  preload() {
    this.load.image("image", "assets/spritesheets/image.png");
  }
  create() {
    scene = this;

    let choiceContainer = new Choice(10,110, this.choice, function() {});
    
  }
}

class next extends Phaser.Scene {
  constructor() {
    super("next");
  }
  init(choice, story) {
    this.situation = data.situation;
    this.step = 
    this.story = story
  }
  preload() {
    this.load.image("image", "assets/spritesheets/image.png");
  }
  create() {
    scene = this;

    let descrition = scene.add.text(10, 60, this.situation.text);
    for(let i in this.situation.choices) {
      let choice = this.situation.choices[i];
      let click = function() {
        if(typeof choice.end === "undefined") {
          scene.scene.start("next", {
            "situation": choice.situation
          });
        } else {
          scene.scene.start("end", {
            "choice": choice.end
          });
        }
      }
      let choiceContainer = new Choice(10,110 + i * 60, choice, click);
    }
  }
}

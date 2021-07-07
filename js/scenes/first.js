class first extends Phaser.Scene {
  constructor() {
    super("first");
  }
  preload() {
    this.load.image("image", "assets/spritesheets/image.png");
  }
  create() {
    scene = this;
    let title = scene.add.text(10, 10, story.title);

    let descrition = scene.add.text(10, 60, story.situation.text);
    for(let i in story.situation.choices) {
      let choice = story.situation.choices[i];
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

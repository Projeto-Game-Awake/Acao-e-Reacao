class first extends Phaser.Scene {
  constructor() {
    super("first");
  }
  preload() {
    this.load.image("image", "assets/spritesheets/image.png");

    let levelName = "story_test"
    game.load.json('story', `../resources/configs/${levelName}.json`);

    var story_config = game.cache.getJSON('story');
    let images = story_config.images;


    for (let index = 0; index < images.length; index++) {
      const imageName = images[index];
      this.load.image(imageName, `assets/${levelName}/${imageName}.png`);
    }
  }
  create() {
    scene = this;

    var story_config = game.cache.getJSON('story');
    let steps = story_config.steps;
    let transitions = story_config.transitions

    let title = scene.add.text(10, 10, story_config.title);

    let description = scene.add.text(10, 60, story_config.steps.first.description);

    let currentStep = "first";
    let nextSteps = transitions["first"];


    for(let i in nextSteps) {
      let choice = nextSteps[i];

      let click = function() {
        if(typeof choice.end === "undefined") {
          scene.scene.start("next", {
            choice, story_config
          });
        } else {
          scene.scene.start("end", {
            "choice": choice.end
          });
        }
      }
      let choiceContainer = new Choice(10,110 + i * 60, strps[choice.to], click);
    }
  }
}

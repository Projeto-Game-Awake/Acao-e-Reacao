class next extends Phaser.Scene {
  constructor() {
    super("next");
  }
  // init(choice, currentstep, story_config) {
  init(data) {
    this.choice = data.choice;
    this.current_step = data.currentstep;
    this.story_config = data.story_config
  }

  update() {
    this.cameras.main.setBackgroundColor('rgba(255, 255, 255, 1)');
  }

  create() {
    scene = this;
    let story_config = this.story_config

    let steps = story_config.steps;

    let currentstepInfo = steps[this.current_step];
    let decisions = currentstepInfo.decision

    const screenWidth = scene.cameras.main.width;
    new StepInfo(this.choice)

    for (let i in decisions) {
      let decision = decisions[i];
      let choice = steps[decision.to]

      let click = function () {
        scene.scene.start("next", {
          choice,
          currentstep: decision.to,
          story_config
        });
      }
      let choiceContainer = new Choice(screenWidth / 2 + i * 300, 500, decision.text, click);
    }
  }
}
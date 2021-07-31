class next extends Phaser.Scene {
  constructor() {
    super("next");
  }
  // init(choice, currentstep, story_config) {
  init(data) {
    this.choice = data.choice;
    this.stack = data.stack;
    this.current_step = data.currentstep;
    this.story_config = data.story_config;
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
    const screenHeight = scene.cameras.main.height;
    new StepInfo(this.choice)

    let home = this.add.image(0, screenHeight-250, "home");
    home.setOrigin(0,0)
    home.setInteractive();
    home.on("pointerdown",function() {
      scene.scene.start("first");
    });

    let back = this.add.image(128, screenHeight-250, "voltar");
    back.setOrigin(0,0)
    back.setInteractive();
    back.on("pointerdown",function() {
      if(scene.stack.length==0) {
        scene.scene.start("first");
      } else {
        let item = scene.stack.pop();
        scene.scene.start("next", {
          choice:item.choice,
          stack:scene.stack,
          currentstep: item.to,
          story_config
        });
      }
    });
    if(typeof decisions === 'undefined') {
      scene.scene.start("end", {
        choice: this.choice,
        stack:scene.stack,
        currentstep: null,
        story_config
      });
    } else {
      for (let i in decisions) {
        let decision = decisions[i];
        let choice = steps[decision.to]
  
        let click = function () {

          var item = {
            choice:scene.choice,
            to:scene.current_step
          }
          scene.stack.push(item);
          scene.scene.start("next", {
            choice,
            stack:scene.stack,
            currentstep: decision.to,
            story_config
          });
        }
        let choiceContainer = new Choice(screenWidth / 2 + i * 300, 400, decision.text, click);
      }
    }
  }
}
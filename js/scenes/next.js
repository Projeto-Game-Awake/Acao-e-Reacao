class next extends Phaser.Scene {
  constructor() {
    super("next");
  }
  // init(choice, currentstep, story_config) {
    init(data){
    this.choice = data.choice;
    this.current_step = data.currentstep;
    this.image = data.choice.image;
    this.story_config = data.story_config
  }

  create() {
    scene = this;
    let story_config = this.story_config

    let transitions = story_config.transitions
    let steps = story_config.steps;

    let nextSteps = transitions[this.current_step];

    new StepInfo(0,0, this.choice)
    
    for(let i in nextSteps) {
      let transition = nextSteps[i];
      let choice = steps[transition.to]

      let click = function() {
        if(typeof transition.end === "undefined") {
          scene.scene.start("next", {
            choice,
            currentstep: transition.to, 
            story_config
          });
        } else {
          scene.scene.start("end", {
            "choice": transition.end
          });
        }
      }
      let choiceContainer = new Choice(10 + i*400,300 , transition.decision, click);
    }
  }
}

class first extends Phaser.Scene {
  constructor() {
    super("first");
  }
  preload() {
    this.levelName = "story_test"
    let fileName = `assets/configs/${this.levelName}.json`
    console.log(fileName)
    this.load.json('story', fileName);
    
    
    this.load.image('image_1', `assets/images/story_test/image_1.png`);
    this.load.image('image_2', `assets/images/story_test/image_2.png`);
  }
  update(){
    this.cameras.main.setBackgroundColor('rgba(255, 0, 0, 0.5)');
  }
  create() {
    this.story_config = this.cache.json.get('story');

    let images = this.story_config.images;

    for (let index = 0; index < images.length; index++) {
      const imageName = images[index];
      const imageFileName = `assets/images/${this.levelName}/${imageName}.png`
      console.log(imageName, imageFileName)
      this.load.image(imageName, imageFileName);
    }
    scene = this;

    let story_config = this.story_config
    let choice = story_config.steps["first"];

    scene.scene.start("next",{
      choice, 
      currentstep:"first",
      story_config
    }
    );

  }
}

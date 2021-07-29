class first extends Phaser.Scene {
  constructor() {
    super("first");
  }
  preload() {
    this.levelName = "story_1"
    let fileName = `assets/configs/${this.levelName}.json`
    console.log(fileName)
    this.load.json('story', fileName);
    
    
    this.load.image('image_1', `assets/images/story_test/image_1.png`);
    this.load.image('image_2', `assets/images/story_test/image_2.png`);


    this.load.image('1', `assets/images/story_1/1.png`);
    this.load.image('2', `assets/images/story_1/2.png`);
    this.load.image('3', `assets/images/story_1/3.png`);
    this.load.image('4', `assets/images/story_1/4.png`);
    this.load.image('5', `assets/images/story_1/5.png`);
    this.load.image('6', `assets/images/story_1/6.png`);
    this.load.image('7', `assets/images/story_1/7.png`);
    this.load.image('8', `assets/images/story_1/8.png`);
    this.load.image('9', `assets/images/story_1/9.png`);
    this.load.image('10', `assets/images/story_1/10.png`);
    this.load.image('11', `assets/images/story_1/11.png`);
    this.load.image('12', `assets/images/story_1/12.png`);
    this.load.image('13', `assets/images/story_1/13.png`);
    this.load.image('14', `assets/images/story_1/14.png`);
    this.load.image('15', `assets/images/story_1/15.png`);
    this.load.image('16', `assets/images/story_1/16.png`);
    this.load.image('17', `assets/images/story_1/17.png`);
    this.load.image('18', `assets/images/story_1/18.png`);
    this.load.image('19', `assets/images/story_1/19.png`);
    this.load.image('20', `assets/images/story_1/20.png`);
    this.load.image('21', `assets/images/story_1/21.png`);
    this.load.image('22', `assets/images/story_1/22.png`);
    this.load.image('23', `assets/images/story_1/23.png`);
    this.load.image('24', `assets/images/story_1/24.png`);
    this.load.image('25', `assets/images/story_1/25.png`);
    this.load.image('26', `assets/images/story_1/26.png`);


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

class first extends Phaser.Scene {
  constructor() {
    super("first");
    this.levelName = "story_1";
  }
  preload() {
    this.load.image('image_1', `assets/images/story_test/image_1.png`);
    this.load.image('image_2', `assets/images/story_test/image_2.png`);
    this.load.image('voltar', `assets/images/voltar.png`);
    
    let fileName = `assets/configs/${this.levelName}.json`    
    this.load.json('story', fileName); 
    this.load.on('filecomplete-json-story', (key, type, data) => {
      let images = data.images;
      for (let index = 0; index < images.length; index++) {
        const imageName = images[index];
        const imageFileName = `assets/images/${this.levelName}/${imageName}.png`
        this.load.image(imageName, imageFileName);
      }
    });  
  }
  update(){
    this.cameras.main.setBackgroundColor('rgba(255, 0, 0, 0.5)');
  }
  create() {
    this.story_config = this.cache.json.get('story');
    
    scene = this;

    let story_config = this.story_config
    let choice = story_config.steps["first"];

    let style = { 
      fontSize: 80,
      fontFamily: 'Arial',
      align: "left",
      wordWrap: { width: 600, useAdvancedWrap: true }
    }
    let text = scene.add.text(0, 30, this.story_config.title, style);

    text.setOrigin(0,0)

    text.setInteractive();
    text.on("pointerdown",function() {
      scene.scene.start("next",{
        choice, 
        currentstep:"first",
        story_config
      });
    });

  }
}

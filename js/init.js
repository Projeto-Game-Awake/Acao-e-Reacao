var scene;
var gameConfig = {
  type: Phaser.AUTO,
  scale: {
    parent: "FCG-board",
    width: 1200,
    height: 700,
  },
  scene: [first,next,end],
};


var game = new Phaser.Game(gameConfig);

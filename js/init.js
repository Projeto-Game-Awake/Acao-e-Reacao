var scene;
var gameConfig = {
  type: Phaser.AUTO,
  scale: {
    parent: "FCG-board",
    width: 800,
    height: 700,
  },
  scene: [first,next,end],
};
var story = {
  "title":"Assistir aula online",
  "situation": {
    "text":"Devo assistir a aula?",
    "choices":[
      {
        "text":"Sim",
        "image":"",
        "end": {
          "text":"Bom",
          "image":""
        }
      },
      {
        "text":"Não",
        "image":"",
        "end": {
          "text":"Ok",
          "image":""
        }
      }
    ]
  }
}
var story = {
  "title":"Assistir aula online",
  "situation": {
    "text":"Devo assistir a aula?",
    "choices":[
      {
        "text":"Sim",
        "image":"",
        "situation": {
          "text":"Mesmo?",
          "choices":[ 
            {
              "text":"Sim",
              "image":"",
              "end": {
                "text":"Bom",
                "image":""
              }
            },
            {
              "text":"Não",
              "image":"",
              "end": {
                "text":"Quase",
                "image":""
              }
            }
          ]
        }
      },
      {
        "text":"Não",
        "image":"",
        "end": {
          "text":"Ok",
          "image":""
        }
      }
    ]
  }
}
var game = new Phaser.Game(gameConfig);

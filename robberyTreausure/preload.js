class preload extends Phaser.Scene {
  constructor() {
    super("preload");

    // Put global variable here



  }

  preload() {
    // intro
this.load.image('intro', 'assets/mainPage.png'); 

  this.load.atlas('thief-front', 'assets/thief-front.png', 'assets/thief-front.json');
  this.load.atlas('thief-back', 'assets/thief-back.png', 'assets/thief-back.json');
  this.load.atlas('thief-left', 'assets/thief-left.png', 'assets/thief-left.json');
  this.load.atlas('thief-right', 'assets/thief-right.png', 'assets/thief-right.json');


//enemy
this.load.atlas('Guardback', 'assets/Guardback.png', 'assets/Guardback.json');
this.load.atlas('Guardfront', 'assets/Guardfront.png', 'assets/Guardfront.json');
this.load.atlas('Guardleft', 'assets/Guardleft.png', 'assets/Guardleft.json');
this.load.atlas('Guardright', 'assets/Guardright.png', 'assets/Guardright.json');

//item
this.load.atlas('money', 'assets/money.png', 'assets/money.json');
this.load.atlas('necklace', 'assets/necklace.png', 'assets/necklace.json');
this.load.atlas('diamond', 'assets/diamond.png', 'assets/diamond.json');
this.load.atlas('picture', 'assets/picture.png', 'assets/picture.json');



  }
  create() {
    console.log("*** preload scene");

    this.add.image(0,0,'intro').setOrigin(0,0);
    console.log("This is introScene")
    // Check for spacebar or any key here
    var spaceDown = this.input.keyboard.addKey("SPACE");

    this.anims.create({
      key:'front',
      frames:[
      { key:'thief-front', frame:'front-01' },
      { key:'thief-front', frame:'front-03' },
      { key:'thief-front', frame:'front-02' },
      { key:'thief-front', frame:'front-05' },
      { key:'thief-front', frame:'front-04' },
      { key:'thief-front', frame:'front-06' },
  ],
      frameRate:10,
      repeat:-1
  })

  this.anims.create({
      key:'left',
      frames:[
      { key:'thief-left', frame:'left-03' },
      { key:'thief-left', frame:'left-06' },
      { key:'thief-left', frame:'left-01' },
      { key:'thief-left', frame:'left-02' },
      { key:'thief-left', frame:'left-05' },
      { key:'thief-left', frame:'left-07' },
      { key:'thief-left', frame:'left-04' },
  ],
      frameRate:10,
      repeat:-1
  })

  this.anims.create({
      key:'back',
      frames:[
      { key:'thief-back', frame:'back-01' },
      { key:'thief-back', frame:'back-03' },
      { key:'thief-back', frame:'back-02' },
      { key:'thief-back', frame:'back-05' },
      { key:'thief-back', frame:'back-04' },
      
  ],
      frameRate:10,
      repeat:-1
  })

  this.anims.create({
      key:'right',
      frames:[
      { key:'thief-right', frame:'Right-03' },
      { key:'thief-right', frame:'Right-06' },
      { key:'thief-right', frame:'Right-01' },
      { key:'thief-right', frame:'Right-02' },
      { key:'thief-right', frame:'Right-05' },
      { key:'thief-right', frame:'Right-08' },
      { key:'thief-right', frame:'Right-07' },
      { key:'thief-right', frame:'Right-04' },
      
  ],
      frameRate:10,
      repeat:-1
  })

  // enemy ( guard )

  this.anims.create({
    key: 'guard',
    frames: [
      { key: 'Guardback', frame: 'Guardback-07'},
      { key: 'Guardback', frame: 'Guardback-01'},
      { key: 'Guardback', frame: 'Guardback-02'},
      { key: 'Guardback', frame: 'Guardback-03'},
      { key: 'Guardback', frame: 'Guardback-04'},
      { key: 'Guardback', frame: 'Guardback-05'},
      { key: 'Guardback', frame: 'Guardback-06'},
     
     
    ],

    frameRate: 10,
    repeat: -1
  })

  this.anims.create({
    key: 'guard',
    frames: [
      { key: 'Guardfront', frame: 'Guardfront-06'},
      { key: 'Guardfront', frame: 'Guardfront-02'},
      { key: 'Guardfront', frame: 'Guardfront-05'},
      { key: 'Guardfront', frame: 'Guardfront-07'},
      { key: 'Guardfront', frame: 'Guardfront-01'},
      { key: 'Guardfront', frame: 'Guardfront-03'},
      { key: 'Guardfront', frame: 'Guardfront-04'},
     
     
    ],

    frameRate: 10,
    repeat: -1
  })
  
  this.anims.create({
    key: 'guard',
    frames: [
      { key: 'Guardleft', frame: 'Guardleft-02'},
      { key: 'Guardleft', frame: 'Guardleft-01'},
      { key: 'Guardleft', frame: 'Guardleft-03'},
      { key: 'Guardleft', frame: 'Guardleft-06'},
      { key: 'Guardleft', frame: 'Guardleft-07'},
      { key: 'Guardleft', frame: 'Guardleft-04'},
      { key: 'Guardleft', frame: 'Guardleft-05'},
     
     
    ],

    frameRate: 10,
    repeat: -1
  })
  
  this.anims.create({
    key: 'guard',
    frames: [
      { key: 'Guardright', frame: 'Guardright-01'},
      { key: 'Guardright', frame: 'Guardright-02'},
      { key: 'Guardright', frame: 'Guardright-04'},
      { key: 'Guardright', frame: 'Guardright-05'},
      { key: 'Guardright', frame: 'Guardright-07'},
      { key: 'Guardright', frame: 'Guardright-03'},
      { key: 'Guardright', frame: 'Guardright-06'},
     
     
    ],

    frameRate: 10,
    repeat: -1
  })

  //item

  this.anims.create({
    key: 'picture',
    frames: [
      { key: 'picture', frame: 'picture-05'},
      { key: 'picture', frame: 'picture-04'},
      { key: 'picture', frame: 'picture-06'},
      { key: 'picture', frame: 'picture-03'},
      { key: 'picture', frame: 'picture-02'},
      { key: 'picture', frame: 'picture-01'},
      { key: 'picture', frame: 'picture-07'},
     
     
    ],

    frameRate: 10,
    repeat: -1
  })

  this.anims.create({
    key: 'diamond',
    frames: [
      { key: 'diamond', frame: 'diamond-02'},
      { key: 'diamond', frame: 'diamond-01'},
      { key: 'diamond', frame: 'diamond-04'},
      { key: 'diamond', frame: 'diamond-03'},
     
    ],

    frameRate: 10,
    repeat: -1
  })

  this.anims.create({
    key: 'money',
    frames: [
      { key: 'money', frame: 'money-02'},
      { key: 'money', frame: 'money-04'},
      { key: 'money', frame: 'money-01'},
      { key: 'money', frame: 'money-03'},
     
     
    ],

    frameRate: 10,
    repeat: -1
  })

  this.anims.create({
    key: 'necklace',
    frames: [
      { key: 'necklace', frame: 'necklace-01'},
      { key: 'necklace', frame: 'necklace-03'},
      { key: 'necklace', frame: 'necklace-04'},
      { key: 'necklace', frame: 'necklace-02'},
     
     
    ],

    frameRate: 10,
    repeat: -1
  })

    // On spacebar event, call the world scene
    spaceDown.on(
      "down",
      function () {
        console.log("Jump to world scene");

        let player = {};
        player.x = 399;
        player.y = 670;
    
        this.scene.start("world", { player: player });
      },
      this
    );
    
    
          // Optional parameters

    //     );


    // Add any text in the main page
    this.add.text(50, 50, "Press spacebar to continue", {
      font: "30px Courier",
      fill: "#FFFFFF",
    });

    // Create all the game animations here
  }
}

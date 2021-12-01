class world extends Phaser.Scene {
  constructor() {
    super("world");
  }

  // incoming data from scene below
  init(data) {
    this.playerPos = data.playerPos;
  }

  preload() {
    // Step 1, load JSON
    this.load.tilemapTiledJSON("world", "assets/tiledmap.json");

    // Step 2 : Preload any images here, nickname, filename
    this.load.image("pipoPng", "assets/Pipo.png");
    this.load.image("fencePng", "assets/Fence32x32.png" );
    this.load.image("StreetPng", "assets/Street.png");
    this.load.image("housePng", "assets/House.png" );
    this.load.image("house2Png", "assets/House2.png");
    
  }

  create() {
    console.log("*** world scene");

    //Step 3 - Create the map from main
    let map = this.make.tilemap({ key: "world" });

    // Step 4 Load the game tiles
    // 1st parameter is name in Tiled,
    // 2nd parameter is key in Preload
    let grassTiles = map.addTilesetImage("Pipo", "pipoPng");
    let roadTiles = map.addTilesetImage("Street", "StreetPng");
    let house1Tiles = map.addTilesetImage("House", "housePng");
    let house2Tiles = map.addTilesetImage("House2", "house2Png");
    let fenceTiles = map.addTilesetImage("Fence", "fencePng");

    let tileArray = [grassTiles,roadTiles,house1Tiles,house2Tiles,fenceTiles]

    // Step 5  Load in layers by layers
    this.grassLayer = map.createLayer("grass", tileArray, 0, 0);
    this.roadLayer = map.createLayer("road", tileArray, 0, 0);
    this.roadLampLayer = map.createLayer("roadLamp", tileArray, 0, 0);
    this.house1Layer = map.createLayer("house1", tileArray, 0, 0);
    this.treeLayer = map.createLayer("tree", tileArray, 0, 0);


  
    

  

    // Add main player here with physics.add.sprite


  this.physics.world.bounds.width = this.grassLayer.width;
  this.physics.world.bounds.height = this.grassLayer.height;

  this.player = this.physics.add.sprite(345,670,"front")
  
  //enemy
  this.enemy = this.physics.add.sprite(520,202,"guard")
  this.enemy2 = this.physics.add.sprite(320,289,"guard")

   // enemy tween
   this.time.addEvent({
    delay: 1000,
    callback: this.moveLeftRight,
    callbackScope: this,
    loop: false,
  });

  this.time.addEvent({
    delay: 1000,
    callback: this.moveLeftRight,
    callbackScope: this,
    loop: false,
  });


    //enable debug

   window.player = this.player;
   this.player.setCollideWorldBounds(true); // don't go out of the this.map
      

    // Add time event / movement here

    // enemy
 
 
 

    // get the tileIndex number in json, +1
    //mapLayer.setTileIndexCallback(11, this.room1, this);

    // Add custom properties in Tiled called "mouintain" as bool

    // What will collider witg what layers

    this.roadLampLayer.setCollisionByProperty({ lamp: true })
    this.roadLayer.setCollisionByProperty({ fence: true, mailbox: true })
    this.treeLayer.setCollisionByProperty({ trees: true ,flower: true })  
    
  

    this.physics.add.collider(this.player, this.roadLampLayer);
    this.physics.add.collider(this.player, this.roadLayer);
    this.physics.add.collider(this.player, this.treeLayer);
   
    this.physics.add.overlap(
      this.player,
      this.enemy,
      this.enemyOverlap,
      null,
      this
    );

    this.physics.add.overlap(
      this.player,
      this.enemy2,
      this.enemy2Overlap,
      null,
      this
    );

    // create the arrow keys
    this.cursors = this.input.keyboard.createCursorKeys();

    // camera follow player
    this.cameras.main.startFollow(this.player);

    // Receive position from init()
    


  } /////////////////// end of create //////////////////////////////
  moveLeftRight() {
    console.log("moveDownUp");
    this.tweens.timeline({
      targets: this.enemy,
      loop: -1, // loop forever
      ease: "Linear",
      duration: 3000,
      tweens: [
        {
          x: 272,
        },
        {
          x: 368, //must same with add sprite x
        },
      ],
    });
  }

  moveLeftRight() {
    console.log("moveDownUp");
    this.tweens.timeline({
      targets: this.enemy2,
      loop: -1, // loop forever
      ease: "Linear",
      duration: 3000,
      tweens: [
        {
          x: 368,
        },
        {
          x: 520,
        },
      ],
    });
  }
  
  update() {
    // check for Hole1
    if (
      this.player.x > 460 &&
      this.player.x < 484 &&
      this.player.y > 596 &&
      this.player.y < 620
    ) {
      this.room1();
    }

    //check for Hole2
    if (
      this.player.x > 16 &&
      this.player.x < 66 &&
      this.player.y > 264 &&
      this.player.y < 284
    ) {
      this.room1();
    }

    //check for Hole3
    if (
      this.player.x > 541 &&
      this.player.x < 571 &&
      this.player.y > 96 &&
      this.player.y < 119
    ) {
      this.room1();
    }

    if (this.cursors.left.isDown) {
      this.player.body.setVelocityX(-200);
      this.player.anims.play("left", true); // walk left
    } 
    else if (this.cursors.right.isDown) {
      this.player.body.setVelocityX(200);
      this.player.anims.play("right", true);
    } else if (this.cursors.up.isDown) {
      this.player.body.setVelocityY(-200);
      this.player.anims.play("back", true);
      //console.log('up');
    } else if (this.cursors.down.isDown) {
      this.player.body.setVelocityY(200);
      this.player.anims.play("front", true);
      //console.log('down');
    } else {
      this.player.anims.stop();
      this.player.body.setVelocity(0, 0);
    }
  }  /////////////////// end of update //////////////////////////////

  // Function hit people
  enemyOverlap() {
    console.log( "guard overlap player");
    this.scene.start("gameover");
  }
    enemy2Overlap() {
      console.log( "guard overlap player");
      this.scene.start("gameover");
  }

  // Function to jump to room1
  room1(player, tile) {
    console.log("room1 function");
    this.scene.start("room1");
  }
} //////////// end of class world ////////////////////////

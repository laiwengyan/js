class room1 extends Phaser.Scene {

    constructor() {
        super({ key: 'room1' });
    }
        
        // Put global variable here
    


    init(data) {
        this.playerPos = data.playerPos;

    }

    preload() {
        this.load.tilemapTiledJSON("room1", "assets/Room1.json");

         // Step 2 : Preload any images here, nickname, filename
         this.load.image("megaPixelPng", "assets/MegaPixel.png");
         this.load.image("pipoPng", "assets/Pipo.png");
         this.load.image("samplessssPng", "assets/Samplessss.png");
         this.load.image("stairPng", "assets/Stair.png");
         this.load.image("tilesetsPng", "assets/tilesets.png");
         this.load.image("wallPng", "assets/Wall.png");
         

    }

    create() {
        console.log('*** room1 scene');
        
        let map = this.make.tilemap({ key: "room1" });

        let megaPixelTiles = map.addTilesetImage("MegaPixel", "megaPixelPng");
     let pipoTiles = map.addTilesetImage("Pipo", "pipoPng");
     let samplesTiles = map.addTilesetImage("Samplessss", "samplessssPng");
     let stairTiles = map.addTilesetImage("Stair", "stairPng");
     let setTiles = map.addTilesetImage("tilesets", "tilesetsPng");
     let wallTiles = map.addTilesetImage("Wall", "WallPng");

     let tileArray = [ megaPixelTiles,pipoTiles,samplesTiles,stairTiles,setTiles,wallTiles]

  // Step 5  Load in layers by layers
  this.sidewallLayer = map.createLayer("sidewall", tileArray, 0, 0);
  this.floorLayer = map.createLayer("floor", tileArray, 0, 0);
  this.sideLayer = map.createLayer("side", tileArray, 0, 0);
  this.wallLayer = map.createLayer("wall", tileArray, 0, 0);
  this.wall2Layer = map.createLayer("wall2", tileArray, 0, 0);
  this.furnitureLayer = map.createLayer("furniture", tileArray, 0, 0);
  this.furniture2Layer = map.createLayer("furniture2", tileArray, 0, 0);

  // collect item
//   this.money = this.physics.add.sprite(-10,-10, 'money');
 

  this.physics.world.bounds.width = this.sidewallLayer.width;
  this.physics.world.bounds.height = this.sidewallLayer.height;

  this.player = this.physics.add.sprite(438,244,"front")
  
  //enemy
  this.enemy = this.physics.add.sprite(254,430,"guard")

  // enemy tween
  this.time.addEvent({
    delay: 1000,
    callback: this.moveLeftRight,
    callbackScope: this,
    loop: false,
  });


  //collider
  this.sidewallLayer.setCollisionByExclusion(-1, true);
  this.furniture2Layer.setCollisionByProperty({ television: true ,sofa: true,vest: true,table: true,bookstand: true })
  this.furnitureLayer.setCollisionByProperty({ bookrac: true ,book: true,store:true })
  this.wall2Layer.setCollisionByProperty({ window: true  })



  this.physics.add.collider(this.player, this.sidewallLayer);
  this.physics.add.collider(this.player, this.furniture2Layer);
  this.physics.add.collider(this.player, this.furnitureLayer);
  this.physics.add.collider(this.player, this.wall2Layer);

  

   

// collect item
this.diamond = this.physics.add.sprite(479,465, 'diamond').setScale(1);
this.money = this.physics.add.sprite(128,537, 'money').setScale(1);
this.money1 = this.physics.add.sprite(521,277, 'money').setScale(1);

this.physics.add.overlap(
    this.player,
    this.enemy,
    this.enemyOverlap,
    null,
    this
  );

  
  //enable debug
   window.player = this.player;
   this.player.setCollideWorldBounds(true);

// create the arrow keys
this.cursors = this.input.keyboard.createCursorKeys();

 // camera follow player
 this.cameras.main.startFollow(this.player);

} /////////////////// end of create //////////////////////////////

moveLeftRight() {
    console.log("moveDownUp");
    this.tweens.timeline({
      targets: this.enemy,
      loop: -1, // loop forever
      ease: "Linear",
      duration: 1000,
      tweens: [
        {
          x: 487,
        },
        {
          x: 368, //must same with add sprite x
        },
      ],
    });
  }




    

    update() {
         // check for world
    if (
        this.player.x > 421 &&
        this.player.x < 450 &&
        this.player.y > 219 &&
        this.player.y < 232
      ) {
        this.world();
      }


  
 // check for room2
    if (
        this.player.x > 500 &&
        this.player.x < 524 &&
        this.player.y > 512 &&
        this.player.y < 532
      ) {
        this.room2();
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
    }

    // Function hit people
  enemyOverlap() {
    console.log( "guard overlap player");
    this.scene.start("gameover");
  }
          // Function to jump to room2
          room2(player, tile) {
            console.log("room2 function");
            this.scene.start("room2");
          }
            world(player, tile) {
                console.log("world function");            
                this.scene.start("world", { player: player });
            }

    }//////end of update///////

    



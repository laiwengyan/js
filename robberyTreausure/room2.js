class room2 extends Phaser.Scene {

    constructor() {
        super({ key: 'room2' });
    }
        
        // Put global variable here
    


    init(data) {
        this.playerPos = data.playerPos;

    }

    preload() {
        this.load.tilemapTiledJSON("room2", "assets/room2.json");

         // Step 2 : Preload any images here, nickname, filename
         this.load.image("pipoPng", "assets/Pipo.png");
         this.load.image("samplessssPng", "assets/Samplessss.png");
         

    }

    create() {
        console.log('*** room2 scene');
        
        let map = this.make.tilemap({ key: "room2" });

      
     let pipoTiles = map.addTilesetImage("Pipo", "pipoPng");
     let samplesTiles = map.addTilesetImage("Samplessss", "samplessssPng");

     let tileArray = [ pipoTiles,samplesTiles]

  // Step 5  Load in layers by layers
  this.floorLayer = map.createLayer("floor", tileArray, 0, 0);
  this.wallLayer = map.createLayer("wall", tileArray, 0, 0);
  this.furnitureLayer = map.createLayer("furniture", tileArray, 0, 0);
  this.sidewallLayer = map.createLayer("sidewall", tileArray, 0, 0);
  this.sidewall2Layer = map.createLayer("sidewall2", tileArray, 0, 0);
 

  // collect item
this.diamond = this.physics.add.sprite(124,236, 'diamond').setScale(1);
this.diamond1 = this.physics.add.sprite(420,428, 'diamond').setScale(1);
this.money = this.physics.add.sprite(431,220, 'money').setScale(1);
this.money1 = this.physics.add.sprite(271,297, 'money').setScale(1);
this.picture = this.physics.add.sprite(167,379, 'picture').setScale(1);


  this.physics.world.bounds.width = this.sidewallLayer.width;
  this.physics.world.bounds.height = this.sidewallLayer.height;

  this.player = this.physics.add.sprite(428,173,"front")

  //enemy
  this.enemy = this.physics.add.sprite(487,260,"guard")
  this.enemy2 = this.physics.add.sprite(274,255,"guard")


  //collider
  this.sidewallLayer.setCollisionByExclusion(-1, true);
  this.furnitureLayer.setCollisionByProperty({ mirror: true ,book: true,bed: true ,bathroom: true ,window: true })




  this.physics.add.collider(this.player, this.sidewallLayer);
  this.physics.add.collider(this.player, this.furnitureLayer);

  //enable debug
   window.player = this.player;
   this.player.setCollideWorldBounds(true);

// create the arrow keys
this.cursors = this.input.keyboard.createCursorKeys();

 // camera follow player
 this.cameras.main.startFollow(this.player);
    }
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
        x: 487, //must same with add sprite x
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
        x: 274,
      },
    ],
  });
}
    

 /////////////////// end of create //////////////////////////////




    

    update() {
         // check for room1
     if (
        this.player.x > 503 &&
        this.player.x < 484 &&
        this.player.y > 193 &&
        this.player.y < 193
      ) {
        this.room1();
      }


  
 // check for room2
    if (
        this.player.x > 480 &&
        this.player.x < 504 &&
        this.player.y > 149 &&
        this.player.y < 192
      ) {
        this.room3();
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

    enemyOverlap() {
      console.log( "guard overlap player");
      this.scene.start("gameover");
    }
      enemy2Overlap() {
        console.log( "guard overlap player");
        this.scene.start("gameover");
    }
    
          // Function to jump to room2
          room3(player, tile) {
            console.log("room3 function");
            this.scene.start("room3");
          }
            room1(player, tile) {
              console.log("world function");            
              this.scene.start("room1", { player: player });
          }

    }//////end of update///////

    


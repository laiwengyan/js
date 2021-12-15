class room3 extends Phaser.Scene {
  constructor() {
    super("room3");
  }

  // incoming data from scene below
  init(data) {
    this.playerPos = data.player;
  }

  preload() {
    // Step 1, load JSON
    this.load.tilemapTiledJSON("room3", "assets/room3.json");

    // Step 2 : Preload any images here, nickname, filename
    this.load.image("pipoPng", "assets/Pipo.png");
    this.load.image("stairPng", "assets/Stair.png");
    this.load.audio("room","assets/room.mp3");
    this.load.audio("collect","assets/collect.mp3");
    this.load.audio("bang","assets/bang.mp3");
    this.load.image("heart","assets/heart.png");
    
  }

  create() {
    console.log("*** room3 scene");

    //Step 3 - Create the map from main
    let map = this.make.tilemap({ key: "room3" });

    // Step 4 Load the game tiles
    // 1st parameter is name in Tiled,
    // 2nd parameter is key in Preload
    let pipoTiles = map.addTilesetImage("Pipo", "pipoPng");
    let stairTiles = map.addTilesetImage("Stair", "stairPng");
    

    let tileArray = [pipoTiles,stairTiles]

    // Step 5  Load in layers by layers
    this.floorLayer = map.createLayer("floor", tileArray, 0, 0);
    this.wallLayer = map.createLayer("wall", tileArray, 0, 0);
    this.sidewallLayer = map.createLayer("sidewall", tileArray, 0, 0);
    this.sidewall2Layer = map.createLayer("sidewall2", tileArray, 0, 0);
    this.furnitureLayer = map.createLayer("furniture", tileArray, 0, 0);


  
    
// create life
this.heart1 = this.add.image(50,610, 'heart').setScrollFactor(0).setVisible(false);
this.heart2 = this.add.image(100,610,'heart').setScrollFactor(0).setVisible(false);
this.heart3 = this.add.image(150,610,'heart').setScrollFactor(0).setVisible(false);
  
if(window.heart == 3){
this.heart1.setVisible(true);
this.heart2.setVisible(true);
this.heart3.setVisible(true);
}else if (window.heart == 2){
this.heart1.setVisible(true);
this.heart2.setVisible(true);
}else if (window.heart == 1){
this.heart1.setVisible(true);
}
  

    // score
    var score = 0;
    var scoreText;
    scoreText = this.add.text(100, 100, 'treasure: 0', { fontSize: '18px', fill: '#FFFFFF' }).setScrollFactor(0);

    // collect item
this.diamond = this.physics.add.sprite(404,392, 'diamond').play("diamond").setScale(1);
this.necklace = this.physics.add.sprite(140,329, 'necklace').play("necklace").setScale(1);
this.money1 = this.physics.add.sprite(247,559, 'money').play("money").setScale(1);
this.picture = this.physics.add.sprite(347,283, 'picture').play("picture").setScale(1);
this.picture1 = this.physics.add.sprite(647,541, 'picture').play("picture").setScale(1);

  this.physics.world.bounds.width = this.floorLayer.width;
  this.physics.world.bounds.height = this.floorLayer.height;

  //player
  this.player = this.physics.add.sprite(417,159,"thief-front").setSize(12,32)

//Audio
  this.collect1Snd = this.sound.add('collect');
  this.collect2Snd = this.sound.add('collect');
  this.collect3Snd = this.sound.add('collect');
  this.collect4Snd = this.sound.add('collect');
  this.collect5Snd = this.sound.add('collect');

  this.bangSnd = this.sound.add('bang');

  //load collectitem
 
this.physics.add.overlap(this.player, this.diamond, collectItem, null, this);
this.physics.add.overlap(this.player, this.necklace, collectItem2, null, this);
this.physics.add.overlap(this.player, this.money1, collectItem3, null, this);
this.physics.add.overlap(this.player, this.picture, collectItem4, null, this);
this.physics.add.overlap(this.player, this.picture1, collectItem5, null, this);


function collectItem (player, diamond)
{
  this.collect1Snd.play();
    diamond.disableBody(true, true);
    score += 1;
    scoreText.setText('Treasure: ' + score);
}

function collectItem2 (player, necklace)
{
  this.collect2Snd.play();
  necklace.disableBody(true, true);
  score += 1;
  scoreText.setText('Treasure: ' + score);
}

function collectItem3 (player, money1)
{
  this.collect3Snd.play();
    money1.disableBody(true, true);
    score += 1;
    scoreText.setText('Treasure: ' + score);
}

function collectItem4 (player, picture)
{
  this.collect4Snd.play();
    picture.disableBody(true, true);
    score += 1;
    scoreText.setText('Treasure: ' + score);
}

function collectItem5 (player, picture1)
{
  this.collect5Snd.play();
    picture1.disableBody(true, true);
    score += 1;
    scoreText.setText('Treasure: ' + score);
}

  //enemy
  this.Guardfront = this.physics.add.sprite(325,319,"Guardfront").play("Guardfront")

// enemy tween
this.time.addEvent({
  delay: 1000,
  callback: this.moveUpDown,
  callbackScope: this,
  loop: false,
});


    //enable debug

   window.player = this.player;
   this.player.setCollideWorldBounds(true); // don't go out of the this.map
      

 
    // Add time event / movement here

    // get the tileIndex number in json, +1
    //mapLayer.setTileIndexCallback(11, this.room1, this);

    // Add custom properties in Tiled called "mouintain" as bool

    // What will collider witg what layers

    this.sidewallLayer.setCollisionByExclusion(-1, true);
    this.sidewall2Layer.setCollisionByExclusion(-1, true);
    this.furnitureLayer.setCollisionByProperty({ window: true, smallcupboard: true, bed: true, cupboard: true, piano: true, clock: true })
    
    
  

    this.physics.add.collider(this.player, this.sidewallLayer);
    this.physics.add.collider(this.player, this.sidewall2Layer);
    this.physics.add.collider(this.player, this.furnitureLayer);
    
   
    this.physics.add.overlap(
      this.player,
      this.Guardfront,
      this.GuardfrontOverlap,
      null,
      this
    );
  

    // create the arrow keys
    this.cursors = this.input.keyboard.createCursorKeys();

    // camera follow player
    this.cameras.main.startFollow(this.player);

    // Receive position from init()
    


  } /////////////////// end of create //////////////////////////////

  moveUpDown() {
    console.log("moveDownUp");
    this.tweens.timeline({
      targets: this.Guardfront,
      loop: -1, // loop forever
      ease: "Linear",
      duration: 3000,
      tweens: [
        {
          y: 522,
        },
        {
          y: 319,
        },
      ],
    });
  }

  update() {
    // check for world
    if (
      this.player.x > 524 &&
      this.player.x < 544 &&
      this.player.y > 133 &&
      this.player.y < 166
    ) {
      this.winscence();
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
  
  
  
  
  /////////////////// end of update //////////////////////////////

  GuardfrontOverlap() {
    console.log( "Guardfront overlap player");
    this.scene.start("gameover");
    this.bangSnd.play();
    console.log("deduct life")
    this.cameras.main.shake(100);
    this.bangSnd.play();
    window.heart--;

    if (window.heart == 2) {
      this.heart3.setVisible(false);
    }else if (window.heart == 1) {
      this.heart2.setVisible(false);
    }else if (window.heart == 0){
      this.heart1.setVisible(false);
    console.log("you are dead");
    this.scene.start("gameover");
    }
  }

  // Function to jump to world
  winscence(player, tile) {
    console.log("winscence function");
    this.scene.start("winscence");
  
  }
} //////////// end of class world ////////////////////////

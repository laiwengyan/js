class rules extends Phaser.Scene {
    constructor() {
      super("rules");
  
      // Put global variable here
    }
  
    preload() {
      // Preload all the assets here
      
      // Preload any images here
      this.load.image('rules', 'assets/rules.png');

  
    }
  
    create() {
      console.log("*** rules scene");
  
      this.add.image(0,0,'rules').setOrigin(0,0);
      console.log("rules Scene")

  
  
      // Add any sound and music here
      // ( 0 = mute to 1 is loudest )
      //this.music = this.sound.add('bgMusic').setVolume(0.3) // 10% volume
  
      //this.music.play()
      //window.music = this.music

  
      // Check for spacebar or any key here
      var spaceDown = this.input.keyboard.addKey("SPACE");
  
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
  
      // Add any text in the main page
      // this.add.text(90, 600, "Press spacebar to continue", {
      //   font: "30px Courier",
      //   fill: "#FFFFFF",
      // });
  
      // Create all the game animations here
    }
  }
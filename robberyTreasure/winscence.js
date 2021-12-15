class winscence extends Phaser.Scene {
    constructor() {
      super("winscence");
  
      // Put global variable here
    }
  
    preload() {
      // Preload all the assets here
      
      // Preload any images here
      this.load.image('winscence', 'assets/winScence.png');

  
    }
  
    create() {
      console.log("*** winscene");
  
      this.add.image(0,0,'winscence').setOrigin(0,0);
      console.log("win Scene")

  
  
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
          console.log("Jump to preload scene");

      
          this.scene.start("preload");
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
var config = {
    type: Phaser.AUTO,
    // pixel size * tile map size * zoom 
    width: 32 * 20,
    height: 32 * 20,
    physics: {
        default: 'arcade',
        arcade: {

            debug: false
        }
    },
    // scale: {
    //     mode: Phaser.Scale.FIT,
    //     autoCenter: Phaser.Scale.CENTER_BOTH
    // },
    backgroundColor: '#000000',
    pixelArt: true,
    scene: [preload,storyline,character,gameplay,,rules,world,listroom1,room1,listroom2,room2,listroom3,room3,gameover,winscence]
};

var game = new Phaser.Game(config);
window.heart=3;
﻿var config = {
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
    scene: [preload,world,room1,room2,room3,gameover]
};

var game = new Phaser.Game(config);
window.addEventListener('load', function(event){

    'use strict';

    //init functions

    var keyDownUp = function(event) { controller.keyDownUp(event.type, event.keyCode); };

    var render = function(){
        display.bg(game.world.background_color);
        display.drawPlayer(
            game.world.player.x,
            game.world.player.y,
            game.world.player.width,
            game.world.player.height,
            game.world.player.color
        );
        display.render();
    };

    var update = function(){
        if(controller.left.active)  {   game.world.player.rotateLeft();}
        if(controller.right.active) {   game.world.player.rotateRight();}
        if(controller.up.active)    {   game.world.player.moveForward();}
    };

    var resize = function(event) {
        display.resize(document.documentElement.clientWidth - 32, document.documentElement.clientHeight - 32, game.world.height / game.world.width);
        display.render();
    
    };

    //handles user input
    var controller   = new Controller();
    //targets canvas and resizing
    var display      = new Display(document.querySelector('canvas'));
    //holds game logic
    var game         = new Game();
    //where above modules interact
    var engine       = new Engine(1000/30, render, update);

    //init
    /* This is very important. The buffer canvas must be pixel for pixel the same
    size as the world dimensions to properly scale the graphics. All the game knows
    are player location and world dimensions. We have to tell the display to match them. */
    // display.buffer.canvas.height = game.world.height;
    // display.buffer.canvas.width = game.world.width;
    
    window.addEventListener('resize', resize);
    window.addEventListener('keydown', keyDownUp);
    window.addEventListener('keyup', keyDownUp);

    resize();
    
    engine.start();
});
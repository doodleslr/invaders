window.addEventListener('load', function(event){

    'use strict';

    //init functions
    var ctx = document.querySelector('canvas').getContext('2d');   

    var keyDownUp = function(event) { controller.keyDownUp(event.type, event.keyCode); };

    var update = function(){
        // waiting for controller input
        if(controller.left.active || controller.right.active || controller.up.active)  {
            game.world.player.update(controller);
        };

        // updating background to remove player trails
        display.bg(game.world.background_color);
        display.drawPlanet(game.world.planet.x, game.world.planet.y, game.world.planet.width, game.world.planet.height, game.world.planet.color);

        // updating player rotation
        ctx.save();
        ctx.translate(  
                        game.world.player.x + game.world.player.width / 2, 
                        game.world.player.y + game.world.player.height / 2
        );
        ctx.rotate(game.world.player.angle);
        display.drawPlayer(
                        game.world.player.width /-2,
                        game.world.player.height / -2,
                        game.world.player.width,
                        game.world.player.height,
                        game.world.player.color,
                        game.world.player.angle
        );
        ctx.restore();

        game.world.update();
    };

    // KEEP RESIZE
    // var resize = function(event) {
    //     // display.resize(document.documentElement.clientWidth - 32, document.documentElement.clientHeight - 32, game.world.height / game.world.width);
    //     // display.render();
    
    // };

    //handles user input
    var controller   = new Controller();
    //holds game logic
    var game         = new Game();
    //targets canvas and resizing
    var display      = new Display(document.querySelector('canvas'), game.world.height, game.world.width);
    //where above modules interact
    var engine       = new Engine(1000/30, update);
    
    //window.addEventListener('resize', resize);
    window.addEventListener('keydown', keyDownUp);
    window.addEventListener('keyup', keyDownUp);

    //resize();
    
    engine.start();
});
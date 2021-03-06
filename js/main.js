window.addEventListener('load', function(event){

    'use strict';
    //init functions
    let planetArr = null;
    const reqUrl = "js/planets.json";
    const ctx = document.querySelector('#player-canvas').getContext('2d');

    const requestJSON = function(){
        let request = new XMLHttpRequest();
        request.open("GET", reqUrl);
        request.responseType = "json";
        request.onload = function(){ planetArr = request.response; engine.start(); };
        request.send();
    }

    var executed = false;
    const runOnceAndThen = function(){
        if(!executed){
            executed = true;
            genPlanetCol();
            genPlanetDraw();
        } else { drawPlanet(); }
    }

    const genPlanetCol = function(){
        for(var i = planetArr.planet.length - 1; i > -1; --i) {
            game.world.planetArr(
                planetArr.planet[i].x, 
                planetArr.planet[i].y, 
                planetArr.planet[i].radius,
                planetArr.planet[i].name
            );
        };
    };

    const genPlanetDraw = function(){
        for(var i = planetArr.planet.length - 1; i > -1; --i) {
            display.genPlanet  (   
                planetArr.planet[i].x, 
                planetArr.planet[i].y,
                planetArr.planet[i].name,
                planetArr.planet.length
            );
        };
    };

    const drawPlanet = function(){ display.drawPlanet(); };

    const playerRotate = function(){
        ctx.save();
        ctx.translate   (   game.world.player.x + game.world.player.width / 2, 
                            game.world.player.y + game.world.player.height / 2
                        );
        ctx.rotate(game.world.player.angle);
        display.drawPlayer  (
                                game.world.player.width / -2,
                                game.world.player.height / -2
                            );
        ctx.restore();
    };

    const keyDownUp = function(event) { controller.keyDownUp(event.type, event.keyCode, event); };

    const update = function(){
        if(controller.left.active || controller.right.active || controller.up.active)  {
            game.world.player.update(controller);
        };

        runOnceAndThen();

        display.drawParticle(game.world.player.particlePool);

        display.bg(game.world.background_color);

        playerRotate();

        game.world.update();
    };

    //handles user input
    const controller   = new Controller();
    //holds game logic
    const game         = new Game();
    //targets canvas and resizing
    const display      = new Display(document.querySelector('#background-canvas'), document.querySelector('#player-canvas'), game.world.height, game.world.width);
    //where above modules interact
    const engine       = new Engine(1000/30, update);
    
    window.addEventListener('keydown', keyDownUp);
    window.addEventListener('keyup', keyDownUp);
    requestJSON();
});
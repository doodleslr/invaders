window.addEventListener('load', function(event){

    'use strict';

    //init functions
    var render = function(){
        display.renderColor(game.color);
        display.render();
    };

    var update = function(){
        game.update();
    };

    //objects
    //handles user input
    var controller   = new Controller();
    //targets canvas and resizing
    var display      = new Display(document.querySelector('canvas'));
    //holds game logic
    var game         = new Game();
    //where above modules interact
    var engine       = new Engine(1000/30, render, update);

    //init
    window.addEventListener('resize', display.handleResize);
    window.addEventListener('keydown', controller.handleKeyDownUp);
    window.addEventListener('keyup', controller.handleKeyDownUp);

    display.resize();
    engine.start();

});
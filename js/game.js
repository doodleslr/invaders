const Game = function(){

    //world properties
    this.world = {
        background_color: 'rgba(61, 61, 106, 0.25)',

        friction: 0.9,
        max_speed: 1,

        player: new Game.Player(100, 100, '#fff000'),

        height: 72,
        width: 128,

        collide: function(object){

        }
    }
};

Game.prototype = {
    constructor : Game
};

Game.Player = function(x, y, color){
    this.color      = color;
    this.height     = 12;
    this.width      = 12;

    this.x          = x;
    this.y          = y;

    this.angle      = 0;
};

Game.Player.prototype = {
    constructor : Game.player,

    moveForward     : function(){ this.y -= 5; },
    rotateLeft      : function(){ this.x -= 5; },
    rotateRight     : function(){ this.angle += 5 * Math.PI / 180; }
}
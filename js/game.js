const Game = function(){

    //world properties
    this.world = {
        background_color: 'rgba(61, 61, 106, 0.25)',

        friction: 0.9,
        max_speed: 1,

        player: new Game.Player(150, 70),

        height: 72,
        width: 128,

        collide: function(object){

        },

        update: function(){

            // //apply rotation on case 37/39

            // //speed increment on case 38 forward arrow true
            // this.player.speed += 0.1;
            // this.player.update();

            // //apply friction when case 38 false
            // this.player.speed *= this.friction;
            // this.player.update();
            
            // //don't leave canvas
            // this.collideObject(this.player);
        }
    }

    //game logic
    this.update = function(){
        this.world.update();
    };
};

Game.prototype = {
    constructor : Game
};

Game.Player = function(x, y){
    this.color      = '#ff0000';
    this.height     = 12;
    this.width      = 12;
    
    this.speedX     = 0;
    this.speedY     = 0;

    this.moveAngle  = 1;

    this.x          = x;
    this.y          = y;
};

Game.Player.prototype = {
    constructor : Game.player,

    moveForward : function(){ this.speedY += 0.5; },
    moveLeft    : function(){ this.speedX -= 5; },
    moveRight   : function(){ this.speedX += 5; },

    rotate:function(){

    },

    update: function(){
        // this.x += this.velocity_x;
        // this.y += this.velocity_y;
    }
}
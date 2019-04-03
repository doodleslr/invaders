const Game = function(){

    this.world = {
        // World properties
        background_color: 'rgba(61, 61, 106, 0.25)',
        height: 350,
        width: 600,

        player: new Game.Player(400, 200, 0),

        // create for loop from json array of planets
        // can include important info to insert for each planet and its location
        // can also ideally generate html elements bound to each planet
        // should be easy on collision to ref which planet info to show
        // get one single planet collision working first before generating more
        // poth pt7 and game.js
        planet: new Game.Planet(50, 50),

        // World movement
        // Between 0.95 and 0.99 for best results
        friction: 0.96,
        update: function(){
            this.player.velocity_x *= this.friction;
            this.player.velocity_y *= this.friction;
            this.player.x += this.player.velocity_x;
            this.player.y += this.player.velocity_y;

            // World collision
            if      (this.player.getLeft()   < 0           ){ this.player.setLeft(0);             this.player.velocity_x = 0;}
            else if (this.player.getRight()  > this.width  ){ this.player.setRight(this.width);   this.player.velocity_x = 0;}
            if      (this.player.getTop()    < 0           ){ this.player.setTop(0);              this.player.velocity_y = 0;}
            else if (this.player.getBottom() > this.height ){ this.player.setBottom(this.height); this.player.velocity_y = 0;}
        }
    }
};

Game.prototype = {
    constructor : Game
};

Game.Player = function(x, y, a){
    // Player properties
    this.color      = '#ff0000';
    this.height     = 36;
    this.width      = 36;

    // Player position
    this.x          = x;
    this.y          = y;
    
    // Player movement
    this.speed      = 1;
    this.velocity_x = 0;
    this.velocity_y = 0;

    // Player rotation
    this.moveAngle  = 10;
    this.angle      = a;

    this.update     = function(controller){
                            if(controller.left.active)  {   this.rLeft();}
                            if(controller.right.active) {   this.rRight();}
                            if(controller.up.active)    {   this.forward();}
                        };
    this.rLeft      = function(){
                            this.angle -= this.moveAngle * Math.PI / 180;
                        };
    this.rRight     = function(){
                            this.angle += this.moveAngle * Math.PI / 180;
                        };
    this.forward    = function(){
                            this.x += this.speed * Math.sin(this.angle);
                            this.y -= this.speed * Math.cos(this.angle);
                            this.velocity_x += this.speed * Math.sin(this.angle);
                            this.velocity_y -= this.speed * Math.cos(this.angle);
                        };
    
    this.getLeft    = function(){   return this.x;  };
    this.getRight   = function(){   return this.x + this.width;     };
    this.getTop     = function(){   return this.y;  };
    this.getBottom  = function(){   return this.y + this.height;    };

    this.setLeft    = function(x){   this.x   =   x;  };
    this.setRight   = function(x){   this.x   =   x - this.width;     };
    this.setTop     = function(y){   this.y   =   y;  };
    this.setBottom  = function(y){   this.y   =   y - this.height;    };
};

Game.Planet = function(x, y){
    this.color      = '#fff';
    this.height     = 36;
    this.width      = 36;

    this.x          = x;
    this.y          = y;

}
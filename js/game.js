const Game = function(){

    this.world = new Game.World();

    this.update = function(){
        this.world.update();
    }
};

Game.prototype = { constructor : Game };

// WORLD-----------------------------------------------------------------------------------------------------------
Game.World = function(){

    // World properties
    this.background_color   = 'rgba(61, 61, 106, 0.25)';
    this.height             = 436;
    this.width              = 576;
    this.friction           = 0.96;

    this.vector             = new Game.World.Vector();

    this.player             = new Game.World.Player(400, 200, 0);

    // create for loop from json array of planets
    // can include important info to insert for each planet and its location
    // can also ideally generate html elements bound to each planet
    // should be easy on collision to ref which planet info to show
    // get one single planet collision working first before generating more
    this.planet             = new Game.World.Planet(50, 50);

    this.update             = function(){
        this.player.velocity_x *= this.friction;
        this.player.velocity_y *= this.friction;
        this.player.x += this.player.velocity_x;
        this.player.y += this.player.velocity_y;

        this.collideWorld(this.player);
        if(this.vector.checkCol(this.player, this.planet)) {
            this.player.velocity_x = 0;
            this.player.velocity_y = 0;
        }
        
    };
};
Game.World.prototype = {

    constructor: Game.World,

    collideWorld:function(object) {
        if      (object.getLeft()   < 0           ){ object.setLeft(0);             object.velocity_x = 0; }
        else if (object.getRight()  > this.width  ){ object.setRight(this.width);   object.velocity_x = 0; }
        if      (object.getTop()    < 0           ){ object.setTop(0);              object.velocity_y = 0; }
        else if (object.getBottom() > this.height ){ object.setBottom(this.height); object.velocity_y = 0; }
    }
};

// PLAYER ---------------------------------------------------------------------------------------------------------------
Game.World.Player = function(x, y, a){

    // Player properties
    this.height     = 20;
    this.width      = 8;
    this.color      = '#ff0000';
    this.radius     = 8;
    
    // Player movement
    this.speed      = 1;
    this.x          = x;
    this.y          = y;
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
};

Game.World.Player.prototype = {
    constructor: Game.World.Player,

        // World collision function bank
        getLeft:      function(){   return this.x;                     },
        getRight:     function(){   return this.x       + this.width;  },
        getTop:       function(){   return this.y;                     },
        getBottom:    function(){   return this.y       + this.height; },

        setLeft:      function(x){  this.x       =   x;                },
        setRight:     function(x){  this.x       =   x - this.width;   },
        setTop:       function(y){  this.y       =   y;                },
        setBottom:    function(y){  this.y       =   y - this.height;  }
};

// PLANETS -----------------------------------------------------------------------------------------------------------------
Game.World.Planet = function(x, y){
    this.color      = '#fff';
    this.radius     = 25;

    this.x          = x;
    this.y          = y;
};

// VECTOR COLLISION--------------------------------------------------------------------------------------------------------------------
Game.World.Vector = function(){
    this.x   = null;
    this.y   = null;
};

Game.World.Vector.prototype = {
    constructor: Game.World.Vector,

    checkCol:     function(obj1, obj2) {
        this.x = obj1.x - obj2.x;
        this.y = obj1.y - obj2.y;

        if(Math.sqrt(this.x * this.x + this.y * this.y) < obj1.radius + obj2.radius){
            return true;
        }
        return false;
    }
}
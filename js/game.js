const Game = function(){

    this.world = new Game.World();

    this.update = function(){
        this.world.update();
    }
};

Game.prototype = { constructor : Game };

// WORLD-----------------------------------------------------------------------------------------------------------
Game.World = function(){

    this.collider       = new Game.World.Collider();

    // World properties
    this.columns            = 12;
    this.rows               = 9;
    this.tile_size          = 48;
    this.background_color   = 'rgba(61, 61, 106, 0.25)';
    this.height             = this.tile_size * this.rows;
    this.width              = this.tile_size * this.columns;
    this.friction           = 0.96;

    // Tile map
    this.collision_map =    [00,01,01,01,00,00,01,01,01,01,01,00,
                             01,00,00,00,01,01,00,00,00,00,00,01,
                             01,00,00,00,00,00,00,01,01,01,01,00,
                             00,01,00,00,00,00,00,01,00,00,01,00,
                             01,00,00,01,00,01,00,00,00,01,01,00,
                             01,00,00,00,00,00,00,00,00,00,00,01,
                             01,00,00,01,01,01,00,00,01,00,01,00,
                             00,01,00,00,01,00,00,00,01,01,00,00,
                             00,00,01,01,00,01,01,01,00,00,00,00];
                             // Will need to eventually alter to represent planet position

    this.player             = new Game.World.Player(400, 200, 0);

    // create for loop from json array of planets
    // can include important info to insert for each planet and its location
    // can also ideally generate html elements bound to each planet
    // should be easy on collision to ref which planet info to show
    // get one single planet collision working first before generating more
    // poth pt7 and game.js
    this.planet             = new Game.World.Planet(50, 50);

    this.update             = function(){
        this.player.velocity_x *= this.friction;
        this.player.velocity_y *= this.friction;
        this.player.x += this.player.velocity_x;
        this.player.y += this.player.velocity_y;
        
        this.player.x_old = this.player.x;
        this.player.y_old = this.player.y;

        this.collideObject(this.player);
    };
};
Game.World.prototype = {

    constructor: Game.World,

    collideObject:function(object) {
        // World boundaries
        if      (object.getLeft()   < 0           ){ object.setLeft(0);             object.velocity_x = 0; }
        else if (object.getRight()  > this.width  ){ object.setRight(this.width);   object.velocity_x = 0; }
        if      (object.getTop()    < 0           ){ object.setTop(0);              object.velocity_y = 0; }
        else if (object.getBottom() > this.height ){ object.setBottom(this.height); object.velocity_y = 0; }

        var bottom, left, right, top, value;

        // Obtains collision_map value for object
        top     = Math.floor(object.getTop()    / this.tile_size);
        left    = Math.floor(object.getLeft()   / this.tile_size);
        value   = this.collision_map[top * this.columns + left];
        this.collider.collide(value, object, left * this.tile_size, top * this.tile_size, this.tile_size);

        top     = Math.floor(object.getTop()    / this.tile_size);
        right   = Math.floor(object.getRight()   / this.tile_size);
        value   = this.collision_map[top * this.columns + right];
        this.collider.collide(value, object, right * this.tile_size, top * this.tile_size, this.tile_size);

        bottom = Math.floor(object.getBottom() / this.tile_size);
        left   = Math.floor(object.getLeft()   / this.tile_size);
        value  = this.collision_map[bottom * this.columns + left];
        this.collider.collide(value, object, left * this.tile_size, bottom * this.tile_size, this.tile_size);
    
        bottom = Math.floor(object.getBottom() / this.tile_size);
        right  = Math.floor(object.getRight()  / this.tile_size);
        value  = this.collision_map[bottom * this.columns + right];
        this.collider.collide(value, object, right * this.tile_size, bottom * this.tile_size, this.tile_size);
    }
};
// WORLD COLLISION -----------------------------------------------------------------------------------------------------
Game.World.Collider = function(){
    this.collide = function(value, object, tile_x, tile_y, tile_size){
        if(value){
            // if(this.collidePlanetLeft   (object, tile_x)) {
            //     object.setTop(tile_x - 0.01);
            //     object.velocity_x = 0;
            // };
            // if(this.collidePlanetRight  (object, tile_x + tile_size)){
            //     object.setTop(tile_x + tile_size);
            //     object.velocity_x = 0;
            // };
            if(this.collidePlanetBottom    (object, tile_y)){
                object.setTop(tile_y - 0.01);
                object.velocity_y = 0;
            };
            if(this.collidePlanetTop (object, tile_y + tile_size)){
                object.setTop(tile_y + tile_size);
                object.velocity_y = 0;
            };
        };
    };
};
Game.World.Collider.prototype = {

    constructor: Game.World.Collider,

    // TOP AND BOTTOM ARE RELATIVE TO ROTATING SHIP

    // collidePlanetLeft: function(object, tile_left){
    //     if(object.getRight() > tile_left /*&& object.getOldRight() <= tile_left*/) { return true; } return false;
    // },

    // collidePlanetRight: function(object, tile_right){
    //     if(object.getLeft() < tile_right /*&& object.getOldLeft() >= tile_right*/) { return true; } return false;
    // },

    collidePlanetBottom: function(object, tile_top){
        if(object.getTop() > tile_top /*&& object.getOldBottom() <= tile_top*/) { return true; } return false;
    },

    collidePlanetTop: function(object, tile_bottom){
        if(object.getTop() < tile_bottom /*&& object.getOldTop() >= tile_bottom*/) { return true; } return false;
    }
};

// PLAYER ---------------------------------------------------------------------------------------------------------------
Game.World.Player = function(x, y, a){



    // Player properties
    Game.World.Object.call(this, x, y, 20, 8);
    this.color      = '#ff0000';
    
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
};

Game.World.Player.prototype = {
    constructor: Game.World.Player,

        // Collision function bank
        // MOVE THIS BACK DOWN ONCE YOU FIGURE OUT WHAT THE FUCK THE DIFFERENCE IS
        getLeft:      function(){   return this.x;                     },
        getRight:     function(){   return this.x       + this.width;  },
        getTop:       function(){   return this.y;                     },
        getBottom:    function(){   return this.y       + this.height; },
    
        getOldLeft:   function(){   return this.x_old;                 },
        getOldRight:  function(){   return this.x_old   + this.width;  },
        getOldTop:    function(){   return this.y_old;                 },
        getOldBottom: function(){   return this.y_old   + this.height; },
    
        setLeft:      function(x){  this.x       =   x;                },
        setRight:     function(x){  this.x       =   x - this.width;   },
        setTop:       function(y){  this.y       =   y;                },
        setBottom:    function(y){  this.y       =   y - this.height;  },
    
        setOldLeft:   function(x){  this.x_old   =   x;                },
        setOldRight:  function(x){  this.x_old   =   x - this.width;   },
        setOldTop:    function(y){  this.y_old   =   y;                },
        setOldBottom: function(y){  this.y_old   =   y - this.height;  }
}

// PLANETS -----------------------------------------------------------------------------------------------------------------
Game.World.Planet = function(x, y){
    this.color      = '#fff';
    this.height     = 36;
    this.width      = 36;

    this.x          = x;
    this.y          = y;
};

// some stupid fucken shit because the function is being a blatant cunt
Game.World.Object = function(x, y, height, width){
    this.height = height;
    this.width  = width;
    this.x      = x;
    this.x_old  = x;
    this.y      = y;
    this.y_old  = y;
};

// Game.World.Object.prototype = {
//     constructor:Game.World.Object,

// };
// Object.assign(Game.World.Player.prototype, Game.World.Object.prototype);
// Game.World.Player.prototype.constructor = Game.World.Player;
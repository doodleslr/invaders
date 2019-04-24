const Game = function(){
    this.world = new Game.World();
    this.update = function(){ this.world.update(); }
};

Game.prototype = { constructor : Game };

// WORLD-----------------------------------------------------------------------------------------------------------
Game.World = function(){

    // World properties
    this.background_color   = 'rgba(0, 0, 10, 0.3)';
    this.height             = 480;
    this.width              = 640;
    this.friction           = 0.96;

    this.vector             = new Game.World.Vector();

    this.player             = new Game.World.Player(400, 200, 0);

    this.planet             = new Array();

    this.planetArr          = function(x, y, r, n){
        this.planet.push        ( new Game.World.Planet(x, y, r, n))
    };

    var item                = null;
    var plyr                = this.player;

    this.update             = function(){
        this.player.velocity_x  *= this.friction;
        this.player.velocity_y  *= this.friction;
        this.player.x           += Math.round(this.player.velocity_x * 4) / 4;
        this.player.y           += Math.round(this.player.velocity_y * 4) / 4;

        this.collideWorld(this.player);

        var p = this.planet.length - 1;
        var b = this.planet.length - 1;
        var t = this.player.particlePool.length -1;
        
        for(p; p > -1; --p){
            var plnt = this.planet[p];
            item = document.querySelector('#' + plnt.name);
            if(this.vector.checkCol(plyr, plnt)) {
                for(b; b > -1; --b){
                    let obj = this.planet[b];
                    all = document.querySelector('#' + obj.name);
                    all.classList.remove('active');
                }
                if(item.classList.contains('hover-active')){
                    this.player.velocity_x *= 0.75;
                    this.player.velocity_y *= 0.75;
                } else {
                    this.player.velocity_x *= 0.75;
                    this.player.velocity_y *= 0.75;
                    item.classList.add('hover-active');
                }
            } else {
                item.classList.remove('hover-active');
            }
        }

        for(t; t > -1; --t){
            var particle    = this.player.particlePool[t];

            particle.life   *= 0.9;
            if(particle.life <= 1) {
                this.player.particlePool.splice(t, 1);
            }
            
            particle.speed  *= 0.78;
            particle.angle  += (1 - Math.random() * 2) * (Math.PI / 18);
            particle.x      -= Math.floor(Math.random() * particle.speed) * Math.sin(particle.angle);
            particle.y      += Math.floor(Math.random() * particle.speed) * Math.cos(particle.angle);
            particle.size   *= 0.95;
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
    this.height     = 30;
    this.width      = 30;
    this.color      = '#ff0000';
    this.radius     = 7;
    
    // Player movement
    this.speed      = 0.5;
    this.x          = x;
    this.y          = y;
    this.velocity_x = 0;
    this.velocity_y = 0;

    // Player rotation
    this.moveAngle  = 7;
    this.angle      = a;

    this.particlePool = new Array();

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
                            this.genParticle(this.x + (this.width / 2), this.y + (this.height / 2));
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
    setBottom:    function(y){  this.y       =   y - this.height;  },

    genParticle:  function(x, y){  if(this.particlePool.length <= 50) { this.particlePool.push(new Game.World.Player.Particle(x, y, this.angle, Math.floor(Math.random() * 3) + 1))} } 
};

Game.World.Player.Particle = function(x, y, a, s){
    this.x          = x;
    this.y          = y;
    this.angle      = a;
    this.speed      = 35;
    this.life       = 150;
    this.size       = s;
}

// PLANETS -----------------------------------------------------------------------------------------------------------------
Game.World.Planet = function(x, y, r, n){
    this.radius     = r;
    this.name       = n
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

        if(Math.sqrt(this.x * this.x + this.y * this.y) < obj1.radius + obj2.radius){ return true; }
        return false;
    }
};
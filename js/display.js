const Display = function(assetCanvas, plyrCanvas, height, width){

    assetCanvas.width   = plyrCanvas.width = Math.round(width);
    assetCanvas.height  = plyrCanvas.height = Math.round(height);

    const assetContext  = assetCanvas.getContext('2d');
    const plyrContext   = plyrCanvas.getContext('2d');

    this.drawPlayer = function(x, y, width, height, color, angle){
        plyrContext.fillStyle = color;
        plyrContext.fillRect(Math.round(x), Math.round(y), width, height, angle);
    };
    
    // image asset loading
    var planetStore = [];
    var finished = false;
    this.genPlanet = function(x, y, name, arrLength){
        var img = new Image();
        img.src = 'images/' + name + '.svg';
        if(!finished){
            planetStore.push({
                image : img,
                x : x,
                y : y,
            });
            img.onload = function(){
                if(planetStore.length === arrLength) {
                    finished = true;
                }
            }
        } 
    };

    this.drawPlanet = function(){
        for (var i = planetStore.length - 1; i > -1; --i) {
            assetContext.drawImage(planetStore[i].image, planetStore[i].x, planetStore[i].y);
        };
    }

    // must fill bg of playable canvas not bg canvas
    this.bg = function(color){
        plyrContext.fillStyle = color;
        plyrContext.fillRect(0, 0, plyrCanvas.width, plyrCanvas.height);
    };

    // KEEP MAY BE ESSENTIAL TO RESIZE IN MAIN
    // ALSO TO DRAW SPACESHIP AND WORLD OBJECTS
    // this.render = function() {
    //     context.drawImage(canvas,
    //     0, 0, canvas.width, canvas.height,
    //     0, 0, context.canvas.width, context.canvas.height
    //     ); 
    // };

    // this.resize = function(width, height, ratio) {

    //     if(height / width > ratio) {
    //         this.context.canvas.height = width * ratio;
    //         this.context.canvas.width = width; 
    //     } else {
    //         this.context.canvas.height = height;
    //         this.context.canvas.width = height * ratio; 
    //     }
    // };
};

Display.prototype = {
    constructor : Display
};
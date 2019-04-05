const Display = function(canvas, height, width){

    canvas.width = width;
    canvas.height = height;

    var context = canvas.getContext('2d');

    this.bg = function(color){
        context.fillStyle = color;
        context.fillRect(0, 0, canvas.width, canvas.height);
    };

    this.drawPlayer = function(x, y, width, height, color, angle){
        context.fillStyle = color;
        context.fillRect(Math.round(x), Math.round(y), width, height, angle);
    };

    this.drawPlanet = function(x, y, radius, color){
        context.fillStyle = color;
        context.fill();
        context.arc(x, y, radius, 0, 2* Math.PI);
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
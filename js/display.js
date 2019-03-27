const Display = function(canvas){

    this.buffer = document.createElement('canvas').getContext('2d'),
    this.context = canvas.getContext('2d');

    this.bg = function(color){
        this.buffer.fillStyle = color;
        this.buffer.fillRect(0, 0, this.buffer.canvas.width, this.buffer.canvas.height);
    };

    this.drawPlayer = function(x, y, width, height, color){
        this.buffer.fillStyle = color;
        this.buffer.fillRect(Math.floor(x), Math.floor(y), width, height);
    };

    this.render = function() {
        this.context.drawImage(this.buffer.canvas,
        0, 0, this.buffer.canvas.width, this.buffer.canvas.height,
        0, 0, this.context.canvas.width, this.context.canvas.height
        ); 
    };

    this.resize = function(width, height, ratio) {

        if(height / width > ratio) {
            this.context.canvas.height = width * ratio;
            this.context.canvas.width = width; 
        } else {
            this.context.canvas.height = height;
            this.context.canvas.width = height * ratio; 
        }
        
    };
};

Display.prototype = {
    constructor : Display
};
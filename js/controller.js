const Controller = function(){
    this.down = new Controller.ButtonInput();
    this.up = new Controller.ButtonInput();
    this.left = new Controller.ButtonInput();
    this.right = new Controller.ButtonInput();

    this.keyDownUp = function(event) {
        var down = (event.type == 'keydown') ? true : false;
        //why is this only a binary decision on keydown

        switch(event.keyCode){

            case 37: this.left.getInput(down); break;
            case 38: this.up.getInput(down); break;
            case 39: this.right.getInput(down); break;
            case 40: this.down.getInput(down);
        }

        alert('You pressed a key (' + event.keyCode + ')!');
    };

    this.handleKeyDownUp = (event)=>{
        this.keyDownUp(event);
    };
};

//appending constructor: to the controller
//what does contructor do tho..
//try break it and observe
//similar to JSON params?
Controller.prototype = {
    contructor : Controller
}

//init this.down as false?
Controller.ButtonInput = function(){
    this.active = this.down = false;
}

//constructor param is above function
//getinput param determines key pressed?
Controller.ButtonInput.prototype = {
    constructor : Controller.ButtonInput,
    getInput : function(down){
        if(this.down != down) this.active = down;
        this.down = down;
    }
};
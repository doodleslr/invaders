const Controller = function(){

    this.up = new Controller.ButtonInput();
    this.left = new Controller.ButtonInput();
    this.right = new Controller.ButtonInput();

    this.keyDownUp = function(event, keycode, e) {
        var buttonDown = (event == 'keydown') ? true : false;

        switch(keycode){
            case 37: e.preventDefault(); this.left.getInput(buttonDown); break;
            case 38: e.preventDefault(); this.up.getInput(buttonDown); break;
            case 39: e.preventDefault(); this.right.getInput(buttonDown); break;
        }
    };
};

Controller.prototype = { contructor : Controller }

Controller.ButtonInput = function(){
    this.active = false;
    this.down = false;
}

Controller.ButtonInput.prototype = {
    constructor : Controller.ButtonInput,

    getInput : function(buttDown){
        if (this.down != buttDown) this.active = buttDown;
        this.down = buttDown;
    }
};
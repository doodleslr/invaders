const Display = function(assetCanvas, plyrCanvas, height, width){

    assetCanvas.width   = plyrCanvas.width = Math.round(width);
    assetCanvas.height  = plyrCanvas.height = Math.round(height);

    const assetContext  = assetCanvas.getContext('2d');
    const plyrContext   = plyrCanvas.getContext('2d');

    var plyrImg = new Image();
    plyrImg.src = 'images/player.gif';

    this.drawPlayer = function(x, y){ plyrContext.drawImage(plyrImg, x, y) };
    
    // image asset loading
    var planetStore = [];
    var finished = false;
    this.genPlanet = function(x, y, name, arrLength){
        var img = new Image();
        img.src = 'images/' + name + '.png';
        if(!finished){
            planetStore.push({
                image : img,
                x : x,
                y : y,
            });
            img.onload = function(){
                if(planetStore.length === arrLength) { finished = true; }
            }
        } 
    };

    this.drawPlanet = function(){
        for(var i = planetStore.length - 1; i > -1; --i){
            assetContext.drawImage(planetStore[i].image, planetStore[i].x, planetStore[i].y);
        };
    }

    this.drawParticle = function(particleArr, x, y){
        plyrContext.fillStyle = '#fff';
        for(var i = particleArr.length - 1; i > -1; --i){
            plyrContext.fillRect(particleArr[i].x, particleArr[i].y, particleArr[i].size, particleArr[i].size);
        }
    }

    // must fill bg of playable canvas not bg canvas
    this.bg = function(color){
        plyrContext.fillStyle = color;
        plyrContext.fillRect(0, 0, plyrCanvas.width, plyrCanvas.height);
    };
};

Display.prototype = { constructor : Display };
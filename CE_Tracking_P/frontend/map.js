//Se asocia la variable canvas con el canbas creado en el html.
var canvas = document.querySelector("canvas")
;
//Configuración de los parámetros del canvas.
canvas.width = 450;
canvas.height = 450;
var ctx = canvas.getContext('2d');
var sendX;
var sendY;

// Variables para el mapa
let selectedNode;
let nodeList = [];
//let 

/*
    Canvas para el mapa
    :D
*/

var mouse = {

    x: undefined,
    y: undefined,
    click: false
}

function Map(){

    var mapImage = new Image();
    mapImage.src = "./images/map-template.png";

    this.draw = function(){

        ctx.drawImage(mapImage, 0, 0);
    }

    this.draw();
}

function Marker(x, y, isCenter, id){
    
    // Position to calculate hitboxes and animations
    this.x = x;
    this.y = y;
    this.initialY = y;

    // Node data for Distribution Centers
    this.id = id;
    this.isCenter = isCenter;
    this.centerName = '';
    this.centerConnections = [];

    // Funni graphics stuff
    this.pinImage = new Image();

    // Command that sets up the 
    this.newCenter = function(){

        this.isCenter = true;
        console.log(nodeList);
        setUpCentros(this);
        nodeList.push(this);
    }
    
    // Function that draws in the pin sprite
    this.draw = function(){
        
        if(this.centerName){

            this.pinImage.src = "./images/marker.png";
        }
        else{

            this.pinImage.src = "./images/add-marker.png";
        }

        ctx.drawImage(this.pinImage, this.x, this.y);
    }

    // Function that animates the sprite when selected and identifies input
    this.update = function() {

        //Checks hitbox for the animation to play
        if (mouse.x > this.x && mouse.x < this.x + 75 && mouse.y > this.initialY && mouse.y < this.initialY + 75){
            
            //Animation stuff
            ctx.fillStyle = 'rgba(75, 100, 170, .6)';
            ctx.fillRect(this.x, this.initialY, 75, 75);

            if(this.y > this.initialY - 10){

                this.y -= 2;
            }

            //Shows the popup
            showWeight(this);

            //checks if you clicked the box
            if(mouse.click && !isInMenu){
                console.log('this pin has been clicked!');
                mouse.click = false;
                
                if(!this.isCenter){

                    this.newCenter();
                }
                else{

                    editCentros(this);
                }
            }
        }
        else{

            this.y = this.initialY;
        }

        this.draw();
    }
}

var pinArray = [];
var idNum = 0

for(var i = 0; i < 4; i++){

    for(var j = 0; j < 4; j++){

        pinArray.push(new Marker(((200 * j) + 75)/2, ((200 * i) + 75)/2, false, idNum));
        idNum++;
    }
}

function mapRendering(){

    requestAnimationFrame(mapRendering);
    
    ctx.clearRect(0, 0, 900, 900);
    var map = new Map();

    for(var i = 0; i < pinArray.length; i++){

        pinArray[i].update();
    }
}

window.addEventListener('mousemove', function(event){

    var rect = canvas.getBoundingClientRect();

    mouse.x = event.clientX - rect.left;
    mouse.y = event.clientY - rect.top;

    //console.log(mouse);
});

window.addEventListener('mousedown', function(event){

    if(event.button == 0){

        mouse.click = true;
        console.log('there\'s a click :3' + mouse.click);
    }
    
});

window.addEventListener('mouseup', function(event){

    if(event.button == 0) mouse.click = false;
});

mapRendering();


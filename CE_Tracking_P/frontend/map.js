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
let nodeList = [];

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
        console.log('this is nodeList: ' + nodeList);
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
        if (mouse.x > this.x && mouse.x < this.x + 75 && mouse.y > this.initialY && mouse.y < this.initialY + 75  && !isInMenu){
            
            //Animation stuff
            ctx.fillStyle = 'rgba(75, 100, 170, .6)';
            ctx.fillRect(this.x, this.initialY, 75, 75);

            if(this.y > this.initialY - 10){

                this.y -= 2;
            }

            //Shows the popup
            showWeight(this);

            //checks if you clicked the box
            if(mouse.click){
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

function Drone(x, y, path){

    // Position of Images
    this.img = new Image();
    this.x = x;
    this.y = y;

    //Variables for path traversal and speed calculation
    this.path = path;
    this.dx;
    this.dy;
    this.endX;
    this.endY;
    this.hasFinished = false;

    this.draw = function(){

        calculatePath(nodeList, this);

        this.img.src = './images/drone.png';
        ctx.drawImage(this.img, this.x, this.y);

    }

    this.moveToCenter = function(){

        if(this.x != this.endX && this.y != this.endY && this.y != 0){

            this.x += 1;
            this.y -= 1;
        }
    }
}

var pinArray = [];
var idNum = 0

for(var i = 0; i < 4; i++){

    for(var j = 0; j < 4; j++){

        pinArray.push(new Marker(((200 * j) + 75)/2, ((200 * i) + 75)/2, false, idNum));
        
        if(idNum == 2 || idNum == 7 || idNum == 14){
            
            pinArray[idNum].isCenter = true;
            pinArray[idNum].centerName = 'test ' + idNum;
            nodeList.push(pinArray[idNum]);
        }

        idNum++;
    }
}

function calculatePath(paths, node){

    var pathsArray = paths;
    var startNode = node;

    startNode.dx = (startNode.endX - startNode.x)/2;
    startNode.dy = (startNode.endY - startNode.y)/2;

    //debug line rendering
    ctx.beginPath();
    ctx.moveTo(startNode.x + 75/2, startNode.y + 75/2);
    ctx.lineTo(pathsArray[0].x + 75/2, pathsArray[0].y + 75/2);
    ctx.strokeStyle = "rgba(200, 59, 51, 1)";
    ctx.lineWidth = 5;
    ctx.stroke();
}

var drones = new Drone(137.5, 137.5, nodeList);
var map = new Map();
function mapRendering(){

    //basic animation rendering stuff
    requestAnimationFrame(mapRendering);
    ctx.clearRect(0, 0, 450, 450);

    map.draw();

    //checks all of the set pins and checks if they are centers or
    for(var i = 0; i < pinArray.length; i++){

        pinArray[i].update();
    }

    //Draws the drones up
    drones.moveToCenter();
    drones.draw();
}

//checks some inputs
window.addEventListener('mousemove', function(event){

    var rect = canvas.getBoundingClientRect();

    mouse.x = event.clientX - rect.left;
    mouse.y = event.clientY - rect.top;

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


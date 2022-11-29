//Se asocia la variable canvas con el canbas creado en el html.
var canvas = document.querySelector("canvas");

//Configuración de los parámetros del canvas.
canvas.width = 450;
canvas.height = 450;
var ctx = canvas.getContext('2d');
var sendX;
var sendY;

// Variables para el mapa
let nodeList = [];
let numDronesActivos = 0;

/* 
 *  Canvas para el mapa
 *  :D
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

/**
 * Clase representativa de los marcadores y centros de distribución
 * @param {number} x 
 * @param {number} y 
 * @param {boolean} isCenter 
 * @param {number} id 
 */
function Marker(x, y, isCenter, posNum){
    
    // Position to calculate hitboxes and animations
    this.x = x;
    this.y = y;
    this.initialY = y;

    // Node data for Distribution Centers
    this.posNum = posNum;
    this.id = 16;
    this.isCenter = isCenter;
    this.centerName = '';
    this.centerConnections = [];

    // Funni graphics stuff
    this.pinImage = new Image();

    /**
     * Función encargada de cambiar los marcadores del mapa
     */
    this.newCenter = function(){

        this.isCenter = true;
        console.log('this is nodeList: ', nodeList);
        setUpCentros(this);
        droneRoute1.push(this);
        droneRoute2.push(this);
        nodeList.push(this);
    }

    this.deleteCenter = function(){

        this.isCenter = false;
    }
    
    /**
     * Función encargada de desplegar los gráficos
     */
    this.draw = function(){
        
        if(this.centerName){

            this.pinImage.src = "./images/marker.png";
        }
        else{

            this.pinImage.src = "./images/add-marker.png";
        }

        ctx.drawImage(this.pinImage, this.x, this.y);
    }

    /**
     * Función que se encarga de la animación y registrar acciones de parte del
     * usuario
     */
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
            }
        }
        else{

            this.y = this.initialY;
        }

        this.draw();
    }
}

/**
 * Clase que representa el dron de entrega
 * @param {Marker} startPoint Centro en el que el dron empieza
 * @param {Marker[]} path 
 */
 function Drone(startPoint, path, weight){

    this.path = path;
    this.package = '696969'; //haha funni

    // Position of Images
    this.img = new Image();
    this.x = startPoint.x;
    this.y = startPoint.initialY;
    // console.log('the drone is in ' + this.x, this.y);
    
    // Calcula la posición del nodo por llegar
    this.endX = this.path[1].x;
    this.endY = this.path[1].initialY;
    // this.weight = weight[0];
    // console.log('the drone goes to ' + this.endX, this.endY);

    //Variables for path traversal and speed calculation
    this.dx = (this.endX - this.x)/100;
    this.dy = (this.y - this.endY)/100;

    // console.log('x speed: ' + this.dx);
    // console.log('y speed: ' + this.dy);

    this.hasFinished = false;

    /**
     * Función que renderiza la imagen del dron!
     */
    this.draw = function(){

        if(!this.hasFinished){

            //debug lines
            ctx.beginPath();
            ctx.moveTo(this.x + 75/2, this.y + 75/2);
            ctx.lineTo(this.endX + 75/2, this.endY + 75/2);
            ctx.strokeStyle = "rgba(200, 59, 51, 1)"
            ctx.lineWidth = 10;
            ctx.stroke();

            //Rendering the Drone sprite itself
            this.img.src = './images/drone.png';
            ctx.drawImage(this.img, this.x, this.y);

        }
    }

    /**
     * Función que se encarga de mover el dron a la posición que sigue
     */
    this.moveToCenter = function(){

        if((this.x != this.endX || this.y != this.endY) && !this.hasFinished){

            this.x += this.dx;
            this.y -= this.dy;
        }
        else{

            if(!this.hasFinished){

                this.hasFinished = true;
                this.recalculateRoute(this);
                
            }
            else{
                updateReg();
                modPackage(this.package);
            }
        }
    }

    this.setInitialStuff = function(){

        this.x = this.path[0].x;
        this.y = this.path[0].initialY;
        console.log('the drone is in ' + this.x, this.y);

        this.endX = this.path[1].x;
        this.endY = this.path[1].initialY;
        console.log('the drone goes to ' + this.endX, this.endY);

        this.dx = (this.endX - this.x)/100;
        this.dy = (this.y - this.endY)/100;

        console.log('x speed: ' + this.dx);
        console.log('y speed: ' + this.dy);
    }

    this.recalculateRoute = function(){

        this.path.shift();

        if (this.path.length > 1){
    
            this.hasFinished = false;
            console.log('the route has been recalculated! \n')

            this.x = this.path[0].x;
            this.y = this.path[0].initialY;
            console.log('the drone is in ' + this.x, this.y);

            this.endX = this.path[1].x;
            this.endY = this.path[1].initialY;
            console.log('the drone goes to ' + this.endX, this.endY);

            this.dx = (this.endX - this.x)/100;
            this.dy = (this.y - this.endY)/100;

            console.log('x speed: ' + this.dx);
            console.log('y speed: ' + this.dy);
        }
        else{

            this.hasFinished = true;
            pendPack -= 1;
            deliPack += 1;
            numDronesActivos -= 1;
            console.log('the route has been finished!');
        }    
    }
}

/**
 * Función que recalcula el siguiente punto al que el dron debe moverse
 * @param {Drone} droneSelf es el nodo que quiere recalcular su ruta
 */

var pinArray = [];
var droneRoute1 = [];
var droneRoute2 = [];
var idNum = 0
var posNum = 0

for(var i = 0; i < 4; i++){

    for(var j = 0; j < 4; j++){

        pinArray.push(new Marker(((200 * j) + 75)/2, ((200 * i) + 75)/2, false, posNum));
        posNum++;
    }
}

for(var i = 0; i < availableCenters.length; i++){

    var randomCenter = Math.floor(Math.random()*15);
    var repeats = false;
    // console.log(randomCenter);

    for(var j = 0; j < pinArray.length; j++){

        if(pinArray[j].id != 16 && pinArray[j].posNum == randomCenter){

            repeats = true
            // console.log("it repeats!")
            break;
        }
        else{

            repeats = false;
        }
    }

    if(!repeats){

        pinArray[randomCenter].isCenter = true;
        pinArray[randomCenter].centerName = availableCenters[i].nombre;
        pinArray[randomCenter].id = idNum;
        nodeList.push(pinArray[randomCenter]);
        droneRoute1.push(pinArray[randomCenter]);
        droneRoute2.push(pinArray[randomCenter]);

        // console.log(availableCenters);
        // console.log(nodeList);

        idNum++
    }
    else{

        i--;
    }
}

//var drones = new Drone(nodeList[0], nodeList);
var map = new Map();


let drone0 = new Drone(droneRoute1[0], droneRoute1);
drone0.hasFinished = true;
let drone1 = new Drone(droneRoute2[0], droneRoute2);
drone1.hasFinished = true;
var drone2 = new Drone(droneRoute1[0], droneRoute1);
drone2.hasFinished = true;
let drone3 = new Drone(droneRoute1[0], droneRoute1);
drone3.hasFinished = true;
let drone4 = new Drone(droneRoute1[0], droneRoute1);
drone4.hasFinished = true;
let drone5 = new Drone(droneRoute1[0], droneRoute1);
drone5.hasFinished = true;
let drone6 = new Drone(droneRoute1[0], droneRoute1);
drone6.hasFinished = true;
let drone7 = new Drone(droneRoute1[0], droneRoute1);
drone7.hasFinished = true;
let drone8 = new Drone(droneRoute1[0], droneRoute1);
drone8.hasFinished = true;
let drone9 = new Drone(droneRoute1[0], droneRoute1);
drone9.hasFinished = true;

var droneActive = [false, false, false, false, false, false, false, false, false, false];

/**
 * Función que se encarga de renderizar los distintos
 * elementos
 */
function mapRendering(){

    //basic animation rendering stuff
    requestAnimationFrame(mapRendering);
    ctx.clearRect(0, 0, 450, 450);

    map.draw();

    //checks all of the set pins and checks if they are centers or
    for(var i = 0; i < pinArray.length; i++){

        pinArray[i].update();
    }

    // Checks if there are drones in an array and updates them if there are any
    if (droneActive[0]){
        drone0.moveToCenter();
        drone0.draw();
    }

    if (droneActive[1]){
        drone1.moveToCenter();
        drone1.draw();
    }

    if (droneActive[2]){
        drone2.moveToCenter();
        drone2.draw();
    }

    if (droneActive[3]){
        drone3.moveToCenter();
        drone3.draw();
    }

    if (droneActive[4]){
        drone4.moveToCenter();
        drone4.draw();
    }

    if (droneActive[5]){
        drone5.moveToCenter();
        drone5.draw();
    }

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


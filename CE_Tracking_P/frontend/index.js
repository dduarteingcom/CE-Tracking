//Se asocia la variable canvas con el canbas creado en el html.
let canvas = document.querySelector("canvas")
;
//Configuración de los parámetros del canvas.
canvas.width = 450;
canvas.height = 450;
var ctx = canvas.getContext('2d');

//Variable para los pedidos
let reqPack = 0;
let deliPack = 0;
let pendPack = 0;

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

function Marker(x, y){
    
    this.x = x;
    this.y = y;
    this.initialy = y;

    this.pinImage = new Image();
    this.pinImage.src = "./images/marker.png";

    this.draw = function(){

        ctx.drawImage(this.pinImage, this.x, this.y);
    }

    this.update = function() {

        if (mouse.x > this.x && mouse.x < this.x + 75 && mouse.y > this.initialy && mouse.y < this.initialy + 75){

            ctx.fillStyle = 'rgba(75, 100, 170, .6)'
            ctx.fillRect(this.x, this.initialy, 75, 75);

            if(this.y > this.initialy - 10){

                this.y -= 2;
            }

            if(mouse.click){
                console.log('this pin has been clicked!');
                mouse.click = false;
            }
        }
        else{

            this.y = this.initialy;
        }

        this.draw();
    }
}

var pinArray = [];

for(var i = 0; i < 4; i++){

    for(var j = 0; j < 4; j++){

        pinArray.push(new Marker(((200 * j) + 75)/2, ((200 * i) + 75)/2));
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
    
})

window.addEventListener('mouseup', function(event){

    if(event.button == 0) mouse.click = false;
})

// /*
//     Formulario de entrega y botones
//     y los Pop Ups
// */
// //Se le asigna el texto que va a llevar el label.
// document.getElementById("totalPackages").innerHTML = "Numero de paquetes solicitados: " + reqPack + "<br>" +
//     "Numero de paquetes entregados: " + deliPack + "<br>" + "Número de paquetes pendientes: " + pendPack;

// //Se asocian las las variables con los elementos pertnecientes al HTML.
// var btnAbrirPopup = document.getElementById('btn-abrir-popup'),
//     overlay = document.getElementById('overlay'),
//     popup = document.getElementById('popup'),
//     btnCerrarPopup = document.getElementById('btn-cerrar-popup'),
//     btnAvailableR= document.getElementById("btnAvailabeR");

// //Función que hace visible el Pop Up
// btnAbrirPopup.addEventListener('click', function () {
//     overlay.classList.add('active');
//     popup.classList.add('active');
// });

// //Función que esconde el Pop Up
// btnCerrarPopup.addEventListener('click', function (e) {
//     e.preventDefault();
//     overlay.classList.remove('active');
//     popup.classList.remove('active');
// });
// //Función de prueba cuando se le da al boton de ver Rutas disponibles.
// btnAvailableR.addEventListener('click',function(){
//     alert("Se cerró");
// });

// //Función de prueba cuando se le da al boton de ver Rutas disponibles.
// btnAvailableR.addEventListener('click',function(){
//     alert("Se cerró");
// });

mapRendering();
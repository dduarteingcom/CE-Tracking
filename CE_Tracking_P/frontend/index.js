//Se asocia la variable canvas con el canbas creado en el html.
let canvas = document.querySelector("canvas")
;
//Configuración de los parámetros del canvas.
canvas.width = 750;
canvas.height = 750;
var ctx = canvas.getContext('2d');

//Variable para los pedidos
let reqPack = 0;
let deliPack = 0;
let pendPack = 0;

/*
    Canvas para el mapa
    :D
*/
// Parámetros de las líneas
var colour = '';
var startPoint = (0, 0);
var endPoint = (0, 0);

// Cargando las imagenes del mapa
function loadMap(){
    var mapImage = document.getElementById('mapImage');
    //var pinIcon = document.getElementById('mapPin');

    ctx.drawImage(mapImage, 0, 0);
}

/*
    Formulario de entrega y botones
    y los Pop Ups
*/
//Se le asigna el texto que va a llevar el label.
let routes;
document.getElementById("totalPackages").innerHTML = "Numero de paquetes solicitados: " + reqPack + "<br>" +
    "Numero de paquetes entregados: " + deliPack + "<br>" + "Número de paquetes pendientes: " + pendPack;

//Se asocian las las variables con los elementos pertnecientes al HTML.
var btnAbrirPopup = document.getElementById('btn-abrir-popup'),
    overlay1 = document.getElementById('overlay1'),
    overlay2 = document.getElementById('overlay2'),
    popup = document.getElementById('popup'),
    popup2 = document.getElementById('popup2'),
    btnCerrarPopup = document.getElementById('btn-cerrar-popup'),

    btnCerrarPopup2 = document.getElementById('btn-cerrar-popup2'),
    btnAvailableR= document.getElementById("btnAvailabeR"),
    btnSubmit = document.getElementById("btnSubmit");

    btnAvailableR= document.getElementById("btnAvailabeR");


//Función que hace visible el Pop Up
btnAbrirPopup.addEventListener('click', function () {
    overlay1.classList.add('active');
    popup.classList.add('active');
});

addRoutes= function (x) {
    for (var i in x) {
        let newOption = new Option(x[i],'Option Value');
        const select = document.querySelector('select');
        select.add(newOption,undefined);
    }
}
deleteRoutes=function(selectBox){
    var x =selectBox.length;
    while (x> 0) {
        const select = document.querySelector('select');
        select.remove(0);
        x--;
    }
}



//Función que esconde el Pop Up
btnCerrarPopup.addEventListener('click', function (e) {
    e.preventDefault();
    overlay1.classList.remove('active');
    popup.classList.remove('active');
});
btnCerrarPopup2.addEventListener('click', function (e) {
    e.preventDefault();
    overlay2.classList.remove('active');
    popup2.classList.remove('active');
    document.getElementById("iInitailPoint").value ="";
    document.getElementById("iFinalPoint").value="";
    deleteRoutes(routes);
});
//Función de prueba cuando se le da al boton de ver Rutas disponibles.
btnAvailableR.addEventListener('click',function(){
    addRoutes(["A-B-C","D-E-F","G-H-I"]);
    routes=["A-B-C","D-E-F","G-H-I"];
    var initialPoint = document.getElementById("iInitailPoint").value;
    var finalPoint= document.getElementById("iFinalPoint").value;
    overlay1.classList.remove('active');
    popup.classList.remove('active');
    overlay2.classList.add('active');
    popup2.classList.add('active');
});
btnSubmit.addEventListener("click", function(){
    overlay2.classList.remove('active');
    popup2.classList.remove('active');
    document.getElementById("iInitailPoint").value ="";
    document.getElementById("iFinalPoint").value="";
    deleteRoutes(routes);
});

//Función de prueba cuando se le da al boton de ver Rutas disponibles.
btnAvailableR.addEventListener('click',function(){
    alert("Se cerró");
});


setTimeout(() => {






})


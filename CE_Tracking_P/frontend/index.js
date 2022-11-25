//Se asocia la variable canvas con el canbas creado en el html.
let canvas = document.querySelector("canvas")
;
//Configuración de los parámetros del canvas.
canvas.width = 750;
canvas.height = 450;

var ctx = canvas.getContext('2d');
//Variable para la cantidad de paquetes pedidos.
let reqPack = 0;
//Variable para la cantidad de paquetes entregados.
let deliPack = 0;
//Variable para la cantidad de paquetes de pendientes.
let pendPack = 0;
//Se le asigna el texto que va a llevar el label.
document.getElementById("totalPackages").innerHTML = "Numero de paquetes solicitados: " + reqPack + "<br>" +
    "Numero de paquetes entregados: " + deliPack + "<br>" + "Número de paquetes pendientes: " + pendPack;
//Se asocian las las variables con los elementos pertnecientes al HTML.
var btnAbrirPopup = document.getElementById('btn-abrir-popup'),
    overlay = document.getElementById('overlay'),
    popup = document.getElementById('popup'),
    btnCerrarPopup = document.getElementById('btn-cerrar-popup'),
    btnAvailableR= document.getElementById("btnAvailabeR");
//Función que hace visible el Pop Up
btnAbrirPopup.addEventListener('click', function () {
    overlay.classList.add('active');
    popup.classList.add('active');
});
//Función que esconde el Pop Up
btnCerrarPopup.addEventListener('click', function (e) {
    e.preventDefault();
    overlay.classList.remove('active');
    popup.classList.remove('active');
});
//Función de prueba cuando se le da al boton de ver Rutas disponibles.
btnAvailableR.addEventListener('click',function(){
    alert("Se cerró");
});



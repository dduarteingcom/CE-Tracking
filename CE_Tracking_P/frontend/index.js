let canvas = document.querySelector("canvas")
;
canvas.width = 750;
canvas.height = 450;
var ctx= canvas.getContext('2d');
let reqPack = 0;
let deliPack=0;
let pendPack=0;
reqPack=5;
deliPack=77;
pendPack= 76;
document.getElementById("reqPackages").innerHTML= "Numero de paquetes solicitados: "+ reqPack+"<br>"+
    "Numero de paquetes entregados: "+ deliPack +"<br>" + "Número de paquetes pendientes: " + pendPack;
var btnAbrirPopup = document.getElementById('btn-abrir-popup'),
    overlay = document.getElementById('overlay'),
    popup = document.getElementById('popup'),
    btnCerrarPopup = document.getElementById('btn-cerrar-popup');
btnAbrirPopup.addEventListener('click', function(){
    overlay.classList.add('active');
    popup.classList.add('active');
});

btnCerrarPopup.addEventListener('click', function(e){
    e.preventDefault();
    overlay.classList.remove('active');
    popup.classList.remove('active');
});



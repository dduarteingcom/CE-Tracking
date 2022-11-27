//Variable para los pedidos
let reqPack = 0;
let deliPack = 0;
let pendPack = 0;
let allPack=[];
let selPack;

//Una variable para evitar unos errores
let isInMenu = false;

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
    btnAbrirPopup3= document.getElementById('btn-abrir-popup3'),
    overlay1 = document.getElementById('overlay1'),
    overlay2 = document.getElementById('overlay2'),
    overlay3 = document.getElementById('overlay3'),
    overlayCentros = document.getElementById('overlaySetCentros'),
    popup = document.getElementById('popup'),
    popup2 = document.getElementById('popup2'),
    popup3 = document.getElementById('popup3'),
    popup4 = document.getElementById('popup4'),
    popupCentro = document.getElementById('popupCentros'),
    btnCerrarPopup = document.getElementById('btn-cerrar-popup'),
    btnCerrarPopup2 = document.getElementById('btn-cerrar-popup2'),
    btnCerrarPopup3 = document.getElementById('btn-cerrar-popup3'),
    btnCerrarPopup4 = document.getElementById('btn-cerrar-popup4'),
    btnSubmit = document.getElementById('btnSubmit'),
    btnAvailableR= document.getElementById("btnAvailabeR"),
    btnSetCentro = document.getElementById("btnSetCentro");
    btnPaquete=document.getElementById("btnPaquete");

//Función que hace visible el Pop Up
btnAbrirPopup.addEventListener('click', function () {
    overlay1.classList.add('active');
    popup.classList.add('active');
    isInMenu = true;
});
//Función que hace visible el Pop Up del menu de anadir centros
btnAbrirPopup.addEventListener('click', function () {
    overlay1.classList.add('active');
    popup.classList.add('active');
    isInMenu = true;
});

addRoutes= function (x) {
    for (var i in x) {
        let newOption = new Option(x[i],'i');
        const select = document.getElementById('opciones');
        select.add(newOption,toString());
    }
}
deleteRoutes=function(selectBox){
    var x =selectBox.length;
    while (x> 0) {
        const select = document.getElementById('opciones');
        select.remove(0);
        x--;
    }
}
deletePackages=function(){
    var x =allPack.length;
    while (x> 0) {
        const select = document.getElementById('selectPackage');
        select.remove(0);
        x--;
    }
}



//Función que esconde el Pop Up
btnCerrarPopup.addEventListener('click', function (e) {
    e.preventDefault();
    overlay1.classList.remove('active');
    popup.classList.remove('active');
    isInMenu = false;
});
btnCerrarPopup2.addEventListener('click', function (e) {
    e.preventDefault();
    overlay2.classList.remove('active');
    popup2.classList.remove('active');
    document.getElementById("iInitailPoint").value ="";
    document.getElementById("iFinalPoint").value="";
    deleteRoutes(routes);
    isInMenu = false;
});
btnCerrarPopup3.addEventListener('click', function (e) {
    e.preventDefault();
    overlay3.classList.remove('active');
    popup3.classList.remove('active');
    deletePackages();
    isInMenu = false;
});

btnCerrarPopup4.addEventListener('click', function (e) {
    e.preventDefault();
    popup4.classList.remove('active');
    document.getElementById("conCenters").innerHTML="";
    isInMenu = false;

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
    isInMenu = true;

});
btnSubmit.addEventListener('click', function(){
    overlay2.classList.remove('active');
    popup2.classList.remove('active');
    document.getElementById("iInitailPoint").value ="";
    document.getElementById("iFinalPoint").value="";
    deleteRoutes(routes);
    isInMenu = true;

});
btnAbrirPopup3.addEventListener('click', function (){
    overlay3.classList.add('active');
    popup3.classList.add('active')
    addPackages();
    document.getElementById("statusPackage").innerHTML ="";
    isInMenu = true;
});
function leerSelectedR(){
    let select = document.getElementById('opciones');
    let text = select.options[select.selectedIndex].text;
    console.log(text); // English
}

class Package{
    constructor(code,stat) {
        this._code = code;
        this._stat = stat;
    }

    get code() {
        return this._code;
    }

    set code(value) {
        this._code = value;
    }

    get stat() {
        return this._stat;
    }

    set stat(value) {
        this._stat = value;
    }
}
let paquetito1=new Package("FJD878","Pendiente de entrega");
let paquetito2=new Package("KVB897","En Proceso");
let paquetito3=new Package("OPF112","Pendiente de entrega");
let paquetito4=new Package("ÑPS084","Entregado");
allPack.push(paquetito1);
allPack.push(paquetito2);
allPack.push(paquetito3);
allPack.push(paquetito4);
addPackages= function () {
    for (var i in allPack) {
        let newOption = new Option(allPack[i].code,'i');
        const select = document.getElementById('selectPackage');
        select.add(newOption,toString());
    }
}
function leerSelectedP(){
    let select = document.getElementById('selectPackage');
    let text = select.options[select.selectedIndex].text;
    selPack=text;
}

function showStat(x){
    var cont=0;
    while(cont!==allPack.length){
        if(x===allPack[cont].code){
            document.getElementById("statusPackage").innerHTML = "El paquete " +allPack[cont].code +
                " Se encuentra en el siguiente estado: " +allPack[cont].stat;
            break
        }
        else{
            cont++;
        }
    }
}
btnPaquete.addEventListener('click', function (){
    showStat(selPack);
});

function showWeight(nombre){
    
    popup4.classList.add('active');
    if (nombre.isCenter){
        document.getElementById("conCenters").innerHTML="El centro de distribución "+
        nombre.centerName + " está conectado con los siguientes centros: ";
    }
    else{
        document.getElementById("conCenters").innerHTML="El centro de distribución "+
        "no está activo en este momento";
    }
}

var curNodeSel;
function setUpCentros(curNode){

    overlayCentros.classList.add('active');
    btnAbrirPopup.classList.add('active');
    isInMenu = true;
    curNodeSel = curNode;
    
}

function editCentros(curNode){

    curNodeSel = curNode;
    overlayCentros.classList.add('active');
    btnAbrirPopup.classList.add('active');
    isInMenu = true;

    //Grabs the name from the currently selected node and puts it in the entry
    document.getElementById("nombreCentro").value = curNodeSel.centerName;
    
}

btnSetCentro.addEventListener('click', function(){
    
    //Activates the UI Elements
    overlayCentros.classList.remove('active');
    popupCentro.classList.remove('active');

    //Sets the center name by the Entry we made
    curNodeSel.centerName = document.getElementById("nombreCentro").value;
    console.log('the marker "' + curNodeSel.centerName + '" has been added!')

    //reset for next item
    document.getElementById("nombreCentro").value = '';
    isInMenu = false;
});

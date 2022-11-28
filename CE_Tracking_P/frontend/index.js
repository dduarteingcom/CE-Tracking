/**
 * Variable donde se lleva la cuenta de la cantidad de pedidos que se hayan realizado
 * @type {number}
 */
let reqPack = 0;
let deliPack = 0;
let pendPack = 0;
/**
 * Variable donde se almacenan todos los paquetes que han sido solicitados
 * @type {*[]}
 */
let allPack = [];
let selPack;
/**
 * //Variable que almacena el nombre del valor al que le deseamos realizar cambios.
 */
let modOdCenters;
/**
 * //Variable que almacena el nombre de uno de los centros con los que se quiere modificar el peso.
 */
let modOdSelected;
/**
 * //Una variable para evitar unos errores.
 * @type {boolean}
 */
let isInMenu = false;
/**
 * //Variable que almacena el valor dado en el input para modificar el nombre de un centro creado.
 */
let newName;
/**
 * //Variable que almacena el valor dado en el input para modificar los pesos con otros centros.
 */
let newWeight;
/*
    Formulario de entrega y botones
    y los Pop Ups
*/
/**
 * Array donde se almacenan todas las posibles rutas para la entrega de un paquete.
 */
let routes;
document.getElementById("totalPackages").innerHTML = "Numero de paquetes solicitados: " + reqPack + "<br>" +
    "Numero de paquetes entregados: " + deliPack + "<br>" + "Número de paquetes pendientes: " + pendPack;
/**
 * Variable en donde se guardan todos los centros de distribución creados.
 * @type {*[]}
 */
let availableCentes=[];
/**
 * Función que se encarga de actualizar el label donde se encuentra el historial de todos los paquetes.
 * @constructor
 */
function UpdateReg() {
    document.getElementById("totalPackages").innerHTML = "Numero de paquetes solicitados: " + reqPack + "<br>" +
        "Numero de paquetes entregados: " + deliPack + "<br>" + "Número de paquetes pendientes: " + pendPack;
}

//Se asocian las variables con los elementos pertnecientes al HTML.
/**
 * Este botón abre el Pop-Up para la ventana donde se ponen los puntos de inicio y final para un determinado paquete
 * @type {HTMLElement}
 */
var btnAbrirPopup = document.getElementById('btn-abrir-popup'),
    /**
     * Botón que abre la ventana para visualizar el estado de un paquete.
     * @type {HTMLElement}
     */
    btnAbrirPopup3 = document.getElementById('btn-abrir-popup3'),
    /**
     * Botón que abre la ventana para modificar los centros de distribución
     * @type {HTMLElement}
     */
    btnAbrirPopup4 = document.getElementById('btn-abrir-popupUltimate'),
    /**
     * Overlay para la ventana emergente donde se solicita el punto de inicio y el punto final
     * para calcular las rutas.
     * @type {HTMLElement}
     */
    overlay1 = document.getElementById('overlay1'),
    /**
     * Overlay para la ventana emergente donde se elige la ruta deseada.
     * @type {HTMLElement}
     */
    overlay2 = document.getElementById('overlay2'),
    /**
     * Overlay para la ventana emergente donde se puede visualizar los estados de los paquets.
     * @type {HTMLElement}
     */
    overlay3 = document.getElementById('overlay3'),
    /**
     * Overlay que aparece al crear un nuevo centro de distribución.
     * @type {HTMLElement}
     */
    overlayCentros = document.getElementById('overlaySetCentros'),
    //Creo que tenemos que eliminar este.
    /**
     * Overlay donde se añaden pesos con los otros centros de distribución.
     * @type {HTMLElement}
     */
    overlayCentros2 = document.getElementById('overlaySetCentros2'),
    /**
     * Overlay para la ventana en donde se modifican los centros de distribución.
     * @type {HTMLElement}
     */
    overlayUltimate = document.getElementById('overlayUltimate'),
    /**
     * Ventana emergente en donde se solicita un pedido, en esta se seleccionan los puntos de
     * incio y de entrega.
     * @type {HTMLElement}
     */
    popup = document.getElementById('popup'),
    /**
     * Ventana de emergente donde se selecciona la ruta para el nuevo paqauete.
     * @type {HTMLElement}
     */
    popup2 = document.getElementById('popup2'),
    /**
     * Ventana emergente donde se puede visualizar el estado de un paquete.
     * @type {HTMLElement}
     */
    popup3 = document.getElementById('popup3'),
    /**
     * Ventana emergente donde se menciona información del centro de Distribución.
     * @type {HTMLElement}
     */
    popup4 = document.getElementById('popup4'),
    /**
     * Ventana emergente que pide el nombre para crear un nuevo centro de distribución.
     * @type {HTMLElement}
     */
    popupCentros = document.getElementById('popupCentros'),
    //Creo que también se tiene que borrar
    /**
     * Ventana emergente donde genera los pesos con los nodos ya creados.
     * @type {HTMLElement}
     */
    popupCentros2 = document.getElementById('popupCentros2'),
    /**
     * Ventana emergente donde es posible modificar los datos de los centros de distribución.
     * @type {HTMLElement}
     */
    popupUltimate = document.getElementById('popupUltimate'),
    /**
     * Botón que cierra la ventana donde se pide el punto de inicio y final del nuevo paquete.
     * @type {HTMLElement}
     */
    btnCerrarPopup = document.getElementById('btn-cerrar-popup'),
    /**
     * Botón que cierra la ventana donde se selecciona la ruta deseada para el nuevo paquete.
     * @type {HTMLElement}
     */
    btnCerrarPopup2 = document.getElementById('btn-cerrar-popup2'),
    /**
     * Botón que cierra la ventana en la que se puede visualizar el estado del pedido.
     * @type {HTMLElement}
     */
    btnCerrarPopup3 = document.getElementById('btn-cerrar-popup3'),
    /**
     * Botón que cierra la ventana donde se muestra información de los centros.
     * @type {HTMLElement}
     */
    btnCerrarPopup4 = document.getElementById('btn-cerrar-popup4'),
    /**
     * Botón que sirve para cerrar la ventana para crear un nuevo nodo.
     * @type {HTMLElement}
     */
    btnCerrarPopupCentros = document.getElementById('btn-cerrar-popupCentros'),
    //Creo que también se tiene que borrar.
    /**
     * Botón que sirve para cerrar la ventana donde se establecen las conexiones con los centros ya creados.
     * @type {HTMLElement}
     */
    btnCerrarPopupCentros2 = document.getElementById('btn-cerrar-popupCentros2'),
    /**
     * Botón que sirve para cerrar la ventana donde se editan los centros.
     * @type {HTMLElement}
     */
    btnCerrarPopupUltimate = document.getElementById('btn-cerrar-popupUltimate'),
    /**
     * Botón que toma el nombre dado en el input de la ventana para el nuevo centro
     * @type {HTMLElement}
     */
    btnSetCentros = document.getElementById("btnSetCentros"),
    /**
     * Botón que toma los datos de la ventana donde se eligen los pesos con los centros que ya habían sido
     * creados previamente.
     * @type {HTMLElement}
     */
    btnSetCentros2 = document.getElementById('btnSetCentros2'),
    /**
     * Botón que sirve para tomar la ruta seleccionada para de la ventana.
     * @type {HTMLElement}
     */
    btnSubmit = document.getElementById('btnSubmit'),
    /**
     * Botón que sirve para tomar los puntos seleccionados en la ventana.
     * @type {HTMLElement}
     */
    btnAvailableR = document.getElementById("btnAvailabeR"),
    /**
     *
     * @type {HTMLElement}
     */
    btnPaquete = document.getElementById("btnPaquete"),
    /**
     * Botón que sirve para mostrar el estado de un paquete seleccionado.
     * @type {HTMLElement}
     */
    btnAddCpopupCentros = document.getElementById("btnAddCpopupCentros"),
    /**
     * Botón que sirve para obtener la información brindada en la Ventana Emergente de la modificación de
     * los centros.
     * @type {HTMLElement}
     */
    btnUltimate = document.getElementById('btnUltimate');

/**
 * //Función que hace visible la ventana emergente donde se solicitan los puntos de inicio y final.
 */
btnAbrirPopup.addEventListener('click', function () {
    overlay1.classList.add('active');
    popup.classList.add('active');
    isInMenu = true;
});
/**
 * Función que añade todos los paquetes que se haya solicitado al select de la venta para visualizar el
 * estado de los paquetes.
 */
addPackages = function () {
    for (var i in allPack) {
        let newOption = new Option(allPack[i].code, 'i');
        const select = document.getElementById('selectPackage');
        select.add(newOption, toString());
    }
}
/**
 * Función que añade todas las rutas posibles al select de la ventana para un nuevo pedido.
 * @param x Array con las listas disponibles.
 */
addRoutes = function (x) {
    for (var i in x) {
        let newOption = new Option(x[i], 'i');
        const select = document.getElementById('opciones');
        select.add(newOption, toString());
    }
}
/**
 * Función que añade todos los posibles centros para el punto de inicio y final del nuevo paquete.
 * @param punto Con este parámetro se sabe si se trata de un punto de inicio o un punto final.
 */
addAvailableCenter = function (punto) {
    if (punto === inicio) {
        for (var i in availableCentes) {
            let newOption = new Option(availableCentes[i], 'i');
            const select = document.getElementById('iInitalPoint');
            select.add(newOption, toString());
        }
    }
    else {
        for (var i in availableCentes) {
            let newOption = new Option(availableCentes[i], 'i');
            const select = document.getElementById('iFinalPointPoint');
            select.add(newOption, toString());
        }
    }
}
/**
 *
 * @param x
 */
addCentersN = function () {
    var x=[]
    for (var i in x) {
        let newOption = new Option(x[i], 'i');
        const select = document.getElementById('nombreCentro');
        select.add(newOption, toString());
    }
}
addConnectedC = function (x) {
    for (var i in x) {
        let newOption = new Option(x[i], 'i');
        const select = document.getElementById('nombreCentro2');
        select.add(newOption, toString());
    }
}
addmodOdCenters = function (x) {
    for (var i in x) {
        let newOption = new Option(x[i], 'i');
        const select = document.getElementById('modOdCenters');
        select.add(newOption, toString());
    }
}
addmodmodOdSelected = function (x) {
    for (var i in x) {
        let newOption = new Option(x[i], 'i');
        const select = document.getElementById('modOdSelected');
        select.add(newOption, toString());
    }
}
deleteRoutes = function (selectBox) {
    var x = selectBox.length;
    while (x > 0) {
        const select = document.getElementById('opciones');
        select.remove(0);
        x--;
    }
}
deletePackages = function () {
    var x = allPack.length;
    while (x > 0) {
        const select = document.getElementById('selectPackage');
        select.remove(0);
        x--;
    }
}
deleteInPoint = function (selectBox) {
    var x = selectBox.length;
    while (x > 0) {
        const select = document.getElementById('iInitalPoint');
        select.remove(0);
        x--;
    }
}
deleteFinPoint = function (selectBox) {
    var x = selectBox.length;
    while (x > 0) {
        const select = document.getElementById('iFinalPoint');
        select.remove(0);
        x--;
    }
}
deleteCentersN = function (selectBox) {
    var x = selectBox.length;
    while (x > 0) {
        const select = document.getElementById('nombreCentro');
        select.remove(0);
        x--;
    }
}
deleteConnectedCenters = function (selectBox) {
    var x = selectBox.length;
    while (x > 0) {
        const select = document.getElementById('nombreCentro2');
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
    document.getElementById("iInitalPoint").value = "";
    document.getElementById("iFinalPoint").value = "";
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
    popup4.classList.remove('active');
    document.getElementById("conCenters").innerHTML = "";
    isInMenu = false;
});
btnCerrarPopupCentros.addEventListener('click', function (e) {
    e.preventDefault();
    overlayCentros.classList.remove('active');
    isInMenu = false;

});
btnCerrarPopupCentros2.addEventListener('click', function (e) {
    e.preventDefault();
    overlayCentros2.classList.remove('active');
    popupCentros2.classList.remove('active');
    isInMenu = false;

});
btnCerrarPopupUltimate.addEventListener('click', function (e) {
    e.preventDefault();
    overlayUltimate.classList.remove('active');
    popupUltimate.classList.remove('active');
    document.getElementById("newName").value = "";
    document.getElementById("newWeight").value = "";
    isInMenu = false;
});
//Función de prueba cuando se le da al boton de ver Rutas disponibles.
btnAvailableR.addEventListener('click', function () {
    addRoutes(["A-B-C", "D-E-F", "G-H-I"]);
    routes = ["A-B-C", "D-E-F", "G-H-I"];
    overlay1.classList.remove('active');
    popup.classList.remove('active');
    overlay2.classList.add('active');
    popup2.classList.add('active');
    isInMenu = true;

});
btnSubmit.addEventListener('click', function () {
    overlay2.classList.remove('active');
    popup2.classList.remove('active');
    document.getElementById("iInitalPoint").value = "";
    document.getElementById("iFinalPoint").value = "";
    deleteRoutes(routes);
    isInMenu = true;
    reqPack++;
    UpdateReg();

});

btnAbrirPopup3.addEventListener('click', function () {
    overlay3.classList.add('active');
    popup3.classList.add('active');
    addPackages();
    document.getElementById("statusPackage").innerHTML = "";
    isInMenu = true;
});
btnAddCpopupCentros.addEventListener('click', function () {

});

function leerSelectedR() {
    let select = document.getElementById('opciones');
    let text = select.options[select.selectedIndex].text;
    console.log(text); // English
}


class Package {
    constructor(code, stat) {
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

let paquetito1 = new Package("FJD878", "Pendiente de entrega");
let paquetito2 = new Package("KVB897", "En Proceso");
let paquetito3 = new Package("OPF112", "Pendiente de entrega");
let paquetito4 = new Package("ÑPS084", "Entregado");
allPack.push(paquetito1);
allPack.push(paquetito2);
allPack.push(paquetito3);
allPack.push(paquetito4);


function leerSelectedP() {
    let select = document.getElementById('selectPackage');
    let text = select.options[select.selectedIndex].text;
    selPack = text;
}

function leerSelectedIn() {
    let select = document.getElementById('iInitalPoint');
    let text = select.options[select.selectedIndex].text;

}

function leerSelectedFin() {
    let select = document.getElementById('iFinalPoint');
    let text = select.options[select.selectedIndex].text;

}

function leerCenterName() {
    let select = document.getElementById('nombreCentro');
    let text = select.options[select.selectedIndex].text;
}

function leerCenterConnected() {
    let select = document.getElementById('nombreCentro2');
    let text = select.options[select.selectedIndex].text;
}

function leerMododSelected() {
    let select = document.getElementById('modOdSelected')
    let text = select.options[select.selectedIndex].text;
    modOdSelected = text;
}

function leerMododCenters() {
    let select = document.getElementById('modOdCenters')
    let text = select.options[select.selectedIndex].text;
    modOdCenters = text;
}

function showStat(x) {
    var cont = 0;
    while (cont !== allPack.length) {
        if (x === allPack[cont].code) {
            document.getElementById("statusPackage").innerHTML = "El paquete " + allPack[cont].code +
                " Se encuentra en el siguiente estado: " + allPack[cont].stat;
            break
        } else {
            cont++;
        }
    }
}

btnPaquete.addEventListener('click', function () {
    showStat(selPack);
});

function showWeight(nombre) {

    popup4.classList.add('active');
    if (nombre.isCenter) {
        document.getElementById("conCenters").innerHTML = "El centro de distribución " +
            nombre.centerName + " está conectado con los siguientes centros: ";
    } else {
        document.getElementById("conCenters").innerHTML = "El centro de distribución " +
            "no está activo en este momento";
    }
}

function bubblesort(x) {
    let verify = true;
    while (verify) {
        verify = false;
        for (var i = 0; i < x.length - 1; i++) {
            if (x[i] > x[i + 1]) {
                verify = true;
                var temp = x[i];
                x[i] = x[i + 1];
                x[i + 1] = temp;
            }
        }
    }
}

var curNodeSel;

function setUpCentros(curNode) {

    overlayCentros.classList.add('active');
    btnAbrirPopup.classList.add('active');
    isInMenu = true;
    curNodeSel = curNode;

}

function editCentros(curNode) {

    curNodeSel = curNode;
    overlayCentros.classList.add('active');
    btnAbrirPopup.classList.add('active');
    isInMenu = true;

    //Grabs the name from the currently selected node and puts it in the entry
    document.getElementById("nombreCentro").value = curNodeSel.centerName;

}

btnSetCentros.addEventListener('click', function (e) {
    e.preventDefault();
    //Activates the UI Elements
    overlayCentros.classList.remove('active');
    popupCentros.classList.remove('active');
    overlayCentros2.classList.add('active');
    popupCentros2.classList.add('active');

    //Sets the center name by the Entry we made
    curNodeSel.centerName = document.getElementById("nombreCentro").value;
    console.log('the marker "' + curNodeSel.centerName + '" has been added!')

    //reset for next item
    document.getElementById("nombreCentro").value = '';
    isInMenu = false;
});
btnSetCentros2.addEventListener('click', function (e) {
    e.preventDefault();
    var x = document.getElementById("iPesoN").value;
    console.log(x);
    document.getElementById("iPesoN").value = "";
    overlayCentros2.classList.remove('active');
    popupCentros2.classList.remove('active');
    isInMenu = true;
});
btnAbrirPopup4.addEventListener('click', function () {
    overlayUltimate.classList.add('active');
    popupUltimate.classList.add('active');
    isInMenu = true;
});
btnUltimate.addEventListener('click', function (e) {
    e.preventDefault();
    overlayUltimate.classList.remove('active');
    popupUltimate.classList.remove('active');
    newName = document.getElementById("newName").value;
    newWeight = document.getElementById("newWeight").value;
    document.getElementById("newName").value = "";
    document.getElementById("newWeight").value = "";
    isInMenu = true;
});

class Centros {
    constructor (name){ //constructor
        this.name = name;
        this.path = [];
        this.value = 0;

    }

    setPaths(path){ //definir paths con pesos
        this.path = path
    }

    getName(){ //getter de nombre
        return this.name
    }

    getPath(){ //getter de path
        return this.path
    }
}

class Generador{
    constructor() {
        this.upperbound = 20;
        this.grafoTotal = [];
        this.grafoUtilizable = [];
        this.grafoTempUtili = [];
        this.grafoVertices = [];
        this.listaAdy = [];
        this.v = 16
        this.isVisited = new Array(this.v);
        this.pathList = [];

        this.siquirres = new Centros("siquirres");
        this.pococi = new Centros("pococi");
        this.guatuso = new Centros("guatuso");
        this.sanFrancisco = new Centros("sanFrancisco");
        this.desamparados = new Centros("desamparados");
        this.xetulul = new Centros("xetulul");
        this.xocomil = new Centros("xocomil");
        this.paten = new Centros("paten");
        this.coronado = new Centros("coronado");
        this.tibas = new Centros("tibas");
        this.helsinki = new Centros("helsinki");
        this.praga = new Centros("praga");
        this.shanghai = new Centros("shanghai");
        this.osaka = new Centros("osaka");
        this.calgari = new Centros("calgari");
        this.porto = new Centros("porto");

        this.siquirres.setPaths([0, Math.trunc(Math.random()*20), Math.trunc(Math.random()*20),Math.trunc(Math.random()*20),Math.trunc(Math.random()*20),Math.trunc(Math.random()*20),Math.trunc(Math.random()*20),Math.trunc(Math.random()*20),Math.trunc(Math.random()*20), Math.trunc(Math.random()*20), Math.trunc(Math.random()*20), Math.trunc(Math.random()*20), Math.trunc(Math.random()*20), Math.trunc(Math.random()*20),Math.trunc(Math.random()*20), Math.trunc(Math.random()*20)]);
        this.pococi.setPaths([Math.trunc(Math.random()*20), 0, Math.trunc(Math.random()*20),Math.trunc(Math.random()*20),Math.trunc(Math.random()*20),Math.trunc(Math.random()*20),Math.trunc(Math.random()*20),Math.trunc(Math.random()*20),Math.trunc(Math.random()*20), Math.trunc(Math.random()*20), Math.trunc(Math.random()*20), Math.trunc(Math.random()*20), Math.trunc(Math.random()*20), Math.trunc(Math.random()*20),Math.trunc(Math.random()*20), Math.trunc(Math.random()*20)]);
        this.guatuso.setPaths([Math.trunc(Math.random()*20), Math.trunc(Math.random()*20), 0,Math.trunc(Math.random()*20),Math.trunc(Math.random()*20),Math.trunc(Math.random()*20),Math.trunc(Math.random()*20),Math.trunc(Math.random()*20),Math.trunc(Math.random()*20), Math.trunc(Math.random()*20), Math.trunc(Math.random()*20), Math.trunc(Math.random()*20), Math.trunc(Math.random()*20), Math.trunc(Math.random()*20),Math.trunc(Math.random()*20), Math.trunc(Math.random()*20)]);
        this.sanFrancisco.setPaths([Math.trunc(Math.random()*20), Math.trunc(Math.random()*20), Math.trunc(Math.random()*20),0,Math.trunc(Math.random()*20),Math.trunc(Math.random()*20),Math.trunc(Math.random()*20),Math.trunc(Math.random()*20),Math.trunc(Math.random()*20), Math.trunc(Math.random()*20), Math.trunc(Math.random()*20), Math.trunc(Math.random()*20), Math.trunc(Math.random()*20), Math.trunc(Math.random()*20),Math.trunc(Math.random()*20), Math.trunc(Math.random()*20)]);
        this.desamparados.setPaths([Math.trunc(Math.random()*20), Math.trunc(Math.random()*20), Math.trunc(Math.random()*20),Math.trunc(Math.random()*20),0,Math.trunc(Math.random()*20),Math.trunc(Math.random()*20),Math.trunc(Math.random()*20),Math.trunc(Math.random()*20),Math.trunc(Math.random()*20), Math.trunc(Math.random()*20), Math.trunc(Math.random()*20), Math.trunc(Math.random()*20), Math.trunc(Math.random()*20), Math.trunc(Math.random()*20),Math.trunc(Math.random()*20)]);
        this.xetulul.setPaths([Math.trunc(Math.random()*20), Math.trunc(Math.random()*20), Math.trunc(Math.random()*20),Math.trunc(Math.random()*20),Math.trunc(Math.random()*20),0,Math.trunc(Math.random()*20),Math.trunc(Math.random()*20),Math.trunc(Math.random()*20),Math.trunc(Math.random()*20), Math.trunc(Math.random()*20), Math.trunc(Math.random()*20), Math.trunc(Math.random()*20), Math.trunc(Math.random()*20), Math.trunc(Math.random()*20),Math.trunc(Math.random()*20)]);
        this.xocomil.setPaths([Math.trunc(Math.random()*20), Math.trunc(Math.random()*20), Math.trunc(Math.random()*20),Math.trunc(Math.random()*20),Math.trunc(Math.random()*20),Math.trunc(Math.random()*20),0,Math.trunc(Math.random()*20),Math.trunc(Math.random()*20),Math.trunc(Math.random()*20), Math.trunc(Math.random()*20), Math.trunc(Math.random()*20), Math.trunc(Math.random()*20), Math.trunc(Math.random()*20), Math.trunc(Math.random()*20),Math.trunc(Math.random()*20)]);
        this.paten.setPaths([Math.trunc(Math.random()*20), Math.trunc(Math.random()*20), Math.trunc(Math.random()*20),Math.trunc(Math.random()*20),Math.trunc(Math.random()*20),Math.trunc(Math.random()*20),Math.trunc(Math.random()*20),0,Math.trunc(Math.random()*20),Math.trunc(Math.random()*20), Math.trunc(Math.random()*20), Math.trunc(Math.random()*20), Math.trunc(Math.random()*20), Math.trunc(Math.random()*20), Math.trunc(Math.random()*20),Math.trunc(Math.random()*20)]);
        this.coronado.setPaths([Math.trunc(Math.random()*20), Math.trunc(Math.random()*20), Math.trunc(Math.random()*20),Math.trunc(Math.random()*20),Math.trunc(Math.random()*20),Math.trunc(Math.random()*20),Math.trunc(Math.random()*20),Math.trunc(Math.random()*20),0,Math.trunc(Math.random()*20), Math.trunc(Math.random()*20), Math.trunc(Math.random()*20), Math.trunc(Math.random()*20), Math.trunc(Math.random()*20), Math.trunc(Math.random()*20),Math.trunc(Math.random()*20)]);
        this.tibas.setPaths([Math.trunc(Math.random()*20), Math.trunc(Math.random()*20), Math.trunc(Math.random()*20),Math.trunc(Math.random()*20),Math.trunc(Math.random()*20),Math.trunc(Math.random()*20),Math.trunc(Math.random()*20),Math.trunc(Math.random()*20),Math.trunc(Math.random()*20),0, Math.trunc(Math.random()*20), Math.trunc(Math.random()*20), Math.trunc(Math.random()*20), Math.trunc(Math.random()*20), Math.trunc(Math.random()*20),Math.trunc(Math.random()*20)]);
        this.helsinki.setPaths([Math.trunc(Math.random()*20), Math.trunc(Math.random()*20), Math.trunc(Math.random()*20),Math.trunc(Math.random()*20),Math.trunc(Math.random()*20),Math.trunc(Math.random()*20),Math.trunc(Math.random()*20),Math.trunc(Math.random()*20),Math.trunc(Math.random()*20), Math.trunc(Math.random()*20),0, Math.trunc(Math.random()*20), Math.trunc(Math.random()*20), Math.trunc(Math.random()*20), Math.trunc(Math.random()*20),Math.trunc(Math.random()*20)]);
        this.praga.setPaths([Math.trunc(Math.random()*20), Math.trunc(Math.random()*20), Math.trunc(Math.random()*20),Math.trunc(Math.random()*20),Math.trunc(Math.random()*20),Math.trunc(Math.random()*20),Math.trunc(Math.random()*20),Math.trunc(Math.random()*20),Math.trunc(Math.random()*20), Math.trunc(Math.random()*20), Math.trunc(Math.random()*20),0, Math.trunc(Math.random()*20), Math.trunc(Math.random()*20), Math.trunc(Math.random()*20),Math.trunc(Math.random()*20)]);
        this.shanghai.setPaths([Math.trunc(Math.random()*20), Math.trunc(Math.random()*20), Math.trunc(Math.random()*20),Math.trunc(Math.random()*20),Math.trunc(Math.random()*20),Math.trunc(Math.random()*20),Math.trunc(Math.random()*20),Math.trunc(Math.random()*20),Math.trunc(Math.random()*20), Math.trunc(Math.random()*20), Math.trunc(Math.random()*20), Math.trunc(Math.random()*20),0, Math.trunc(Math.random()*20), Math.trunc(Math.random()*20),Math.trunc(Math.random()*20)]);
        this.osaka.setPaths([Math.trunc(Math.random()*20), Math.trunc(Math.random()*20), Math.trunc(Math.random()*20),Math.trunc(Math.random()*20),Math.trunc(Math.random()*20),Math.trunc(Math.random()*20),Math.trunc(Math.random()*20),Math.trunc(Math.random()*20),Math.trunc(Math.random()*20), Math.trunc(Math.random()*20), Math.trunc(Math.random()*20), Math.trunc(Math.random()*20), Math.trunc(Math.random()*20),0, Math.trunc(Math.random()*20),Math.trunc(Math.random()*20)]);
        this.calgari.setPaths([Math.trunc(Math.random()*20), Math.trunc(Math.random()*20), Math.trunc(Math.random()*20),Math.trunc(Math.random()*20),Math.trunc(Math.random()*20),Math.trunc(Math.random()*20),Math.trunc(Math.random()*20),Math.trunc(Math.random()*20),Math.trunc(Math.random()*20), Math.trunc(Math.random()*20), Math.trunc(Math.random()*20), Math.trunc(Math.random()*20), Math.trunc(Math.random()*20), Math.trunc(Math.random()*20),0, Math.trunc(Math.random()*20)]);
        this.porto.setPaths([Math.trunc(Math.random()*20), Math.trunc(Math.random()*20), Math.trunc(Math.random()*20),Math.trunc(Math.random()*20),Math.trunc(Math.random()*20),Math.trunc(Math.random()*20),Math.trunc(Math.random()*20),Math.trunc(Math.random()*20),Math.trunc(Math.random()*20), Math.trunc(Math.random()*20), Math.trunc(Math.random()*20), Math.trunc(Math.random()*20), Math.trunc(Math.random()*20), Math.trunc(Math.random()*20),Math.trunc(Math.random()*20), 0]);
        this.grafoTotal.push(this.siquirres,this.pococi,this.guatuso,this.sanFrancisco,this.desamparados,this.xetulul,this.paten,this.coronado,this.tibas,this.helsinki,this.praga,this.shanghai, this.osaka, this.calgari, this.porto);

        this.grafoUtilizable.push(this.siquirres.getPath());
        this.grafoUtilizable.push(this.pococi.getPath());
        this.grafoUtilizable.push(this.guatuso.getPath());
        this.grafoUtilizable.push(this.sanFrancisco.getPath());
        this.grafoUtilizable.push(this.desamparados.getPath());
        this.grafoUtilizable.push(this.xetulul.getPath());
        this.grafoUtilizable.push(this.xocomil.getPath());
        this.grafoUtilizable.push(this.paten.getPath());
        this.grafoUtilizable.push(this.coronado.getPath());
        this.grafoUtilizable.push(this.tibas.getPath());
        this.grafoUtilizable.push(this.helsinki.getPath());
        this.grafoUtilizable.push(this.praga.getPath());
        this.grafoUtilizable.push(this.shanghai.getPath());
        this.grafoUtilizable.push(this.osaka.getPath());
        this.grafoUtilizable.push(this.calgari.getPath());
        this.grafoUtilizable.push(this.porto.getPath());
        this.largo=16;

    }


    eliminarCentroInicio(a, b){
        while (a > b){
            for(var x=0; x<this.largo;x++){
                for(var y=0;y<this.grafoUtilizable[x].length;y++){
                    if(this.grafoUtilizable[x][a]>0){
                        this.grafoUtilizable[x][a]=0;
                    }
                }
            }
            for(var z=0; z<this.largo;z++){
                if(this.grafoUtilizable[a][z]>0){
                    this.grafoUtilizable[a][z]=0;
                }
            }
            a = a - 1;
        }
        this.largo= b+1;
        console.log(this.largo)
        addCentersServer(this.grafoUtilizable,this.largo);
        return(this.grafoUtilizable);

    }

    eliminarCentroUnico(a){
        for(var x=0; x<this.grafoUtilizable.length;x++){
            for(var y=0;y<this.grafoUtilizable[x].length;y++){
                if(this.grafoUtilizable[x][a]>0){
                    this.grafoUtilizable[x][a]=0;
                }
            }
        }
        for(var z=0; z<this.grafoUtilizable.length;z++){
            if(this.grafoUtilizable[a][z]>0){
                this.grafoUtilizable[a][z]=0;
            }
        }
        addCentersServer(this.grafoUtilizable,this.largo);
        this.largo--;
        return this.grafoUtilizable

    }

    addCentro(nodo){
        for(var x=0; x<this.largo+1;x++){
            for(var y=0;y<this.largo+2;y++){
                if(this.grafoUtilizable[x][nodo] === 0){
                    this.grafoUtilizable[x][nodo]=9;
                }
            }
        }
        for(var z=0; z<this.largo+2;z++){
            if(this.grafoUtilizable[nodo][z] === 0){
                this.grafoUtilizable[nodo][z]=9;
            }
        }
        this.grafoUtilizable[nodo][nodo]= 0;
        this.largo++;
        addCentersServer(this.grafoUtilizable,this.largo);
        return this.grafoUtilizable

    }

    subirCentro(nodo, costo){
        for(var x=0; x<this.grafoUtilizable.length;x++){
            for(var y=0;y<this.grafoUtilizable[x].length;y++){
                if(this.grafoUtilizable[x][nodo] > 0){
                    this.grafoUtilizable[x][nodo] = costo;
                }
            }
        }
        for(var z=0; z<this.largo;z++){
            if(this.grafoUtilizable[nodo][z] > 0){
                this.grafoUtilizable[nodo][z]= costo;
            }
        }
        this.grafoUtilizable[nodo][nodo]= 0;
        addCentersServer(this.grafoUtilizable,this.largo);
        return this.grafoUtilizable;
    }

    newgraph(){
        for(var x=0; x<this.grafoUtilizable.length;x++){
            this.tempVert = [];
            for(var y=0;y<this.grafoUtilizable[x].length;y++){
                if(this.grafoUtilizable[x][y]>0){
                    this.tempVert.push(1);
                }
                else{
                    this.tempVert.push(0);
                }
            }
            this.grafoVertices.push(this.tempVert);
        }
        console.log(this.grafoVertices);

    }

    getListaAdy(){
        for(var x=0; x<this.grafoVertices.length; x++){
            this.temp = [];
            for(var y=0;y<this.grafoVertices[x].length;y++){
                if(this.grafoVertices[x][y] > 0) {
                    this.temp.push(y);
                }
            }
            this.listaAdy.push(this.temp);
        }
        console.log(this.listaAdy);
    }

    printAllPaths(s,d)
    {

        for(let i=0;i<this.v;i++)
            this.isVisited[i]=false;

        // add source to path[]
        this.pathList.push(s);

        // Call recursive utility
        this.printAllPathsUtil(s, d, this.isVisited, this.pathList);
    }

    // A recursive function to print
    // all paths from 'u' to 'd'.
    // isVisited[] keeps track of
    // vertices in current path.
    // localPathList<> stores actual
    // vertices in the current path
    printAllPathsUtil(u,d,isVisited,localPathList)
    {
        if (u === (d)) {
            console.log(localPathList);
            // if match found then no need to
            // traverse more till depth
            return;
        }

        // Mark the current node
        isVisited[u] = true;

        // Recur for all the vertices
        // adjacent to current vertex
        for (let i=0;i< this.listaAdy[u].length;i++) {
            if (!isVisited[this.listaAdy[u][i]]) {
                // store current node
                // in path[]
                localPathList.push(this.listaAdy[u][i]);
                this.printAllPathsUtil(this.listaAdy[u][i], d,
                    isVisited, localPathList);

                // remove current node
                // in path[]
                localPathList.splice(localPathList.indexOf
                (this.listaAdy[u][i]),1);
            }
        }

        // Mark the current node
        isVisited[u] = false;
    }
    aumentarCantidadC(){
        var num= this.cantidadCentros;
        num++;
        return num;
    }



}
/**
 * Variable donde se lleva la cuenta de la cantidad de pedidos que se hayan realizado
 * @type {number}
 */
let reqPack = 0;
let deliPack = 0;
let pendPack = 0;
var givenG = [];
var newG = [];


/**
 * Variable donde se almacenan todos los paquetes que han sido solicitados
 * @type {*[]}
 */
let allPack = [];
let selPack;
/**
 * //Variable que almacena el nombre del valor al que le deseamos realizar cambios.
 */
let vModOdCenters;
/**
 * //Variable que almacena el nombre de uno de los centros con los que se quiere modificar el peso.
 */
let vModOdSelected;
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
var availableCenters = [];

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
    btnAbrirPopUpUltimate = document.getElementById('btn-abrir-popupUltimate'),
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
    addAvailableCenter("iInitalPoint");
    addAvailableCenter("iFinalPoint");
    isInMenu = true;
});

/**
 * Función que añade todos los paquetes que se haya solicitado al select de la venta para visualizar el
 * estado de los paquetes.
 */
function addPackages() {
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
function addRoutes(x) {
    for (var i in x) {
        let newOption = new Option(x[i], 'i');
        const select = document.getElementById('opciones');
        select.add(newOption, toString());
    }
}

/**
 * Función que añade todos los posibles centros a selects en específico.
 * @param punto Select al que se quiere añadir información
 */
function addAvailableCenter(punto) {
    for (var i in availableCenters) {
        let newOption = new Option(availableCenters[i].nombre, 'i');
        const select = document.getElementById(punto);
        select.add(newOption, toString());
    }
}

/**
 * Añade los nombres default al select de la ventana para crear un nuevo centro.
 */
function addCentersN() {
    var x = ["Siquirres", "Pococí", "Guatuso", "San Francisco", "Desamparados", "Xetulul", "Xocomil", "Paten",
        "Coronado", "Tibás", "Helsinki", "Praga", "Shanghai", "Osaka", "Calgari", "Porto"];
    for (var i in x) {
        let newOption = new Option(x[i], 'i');
        const select = document.getElementById('nombreCentro');
        select.add(newOption, toString());
    }
}

/**
 * Función que sirve para no se acumulen las mismas opciones en la ventana para seleccionar las rutas
 * @param selectBox Rutas disponibles para la nueva entrega.
 */
function deleteRoutes(selectBox) {
    var x = selectBox.length;
    while (x > 0) {
        const select = document.getElementById('opciones');
        select.remove(0);
        x--;
    }
}

/**
 * Función que sirve para que no se acumulen todos los paquetes solicitados en la ventana para visualizar
 * estado de los paquetes.
 */
function deletePackages() {
    var x = allPack.length;
    while (x > 0) {
        const select = document.getElementById('selectPackage');
        select.remove(0);
        x--;
    }
}

/**
 * Esta función sirve para que no se acumulen opciones en distintos selects.
 * @param punto Este corresponde al select al que le quiero eliminar las opciones.
 */
function deleteAvailableCenters(punto) {
    var x = availableCenters.length;
    while (x > 0) {
        const select = document.getElementById(punto);
        select.remove(0);
        x--;
    }
}

/**
 * Función que permite que no se acumulen las opciones en el select para crear un nuevo centro.
 */
function deleteCentersN () {
    var selectBox = ["Siquirres", "Pococí", "Guatuso", "San Francisco", "Desamparados", "Xetulul", "Xocomil", "Paten",
        "Coronado", "Tibás", "Helsinki", "Praga", "Shanghai", "Osaka", "Calgari", "Porto"];
    var x = selectBox.length;
    while (x > 0) {
        const select = document.getElementById('nombreCentro');
        select.remove(0);
        x--;
    }
}
/**
 * Función que se encarga de cerrar la ventana donde se seleccionan los puntos de inicio y final.
 */
btnCerrarPopup.addEventListener('click', function (e) {
    e.preventDefault();
    overlay1.classList.remove('active');
    popup.classList.remove('active');
    isInMenu = false;
    deleteAvailableCenters("iInitalPoint");
    deleteAvailableCenters("iFinalPoint");
});
/**
 * Función que se encarga de cerrar la ventana donde aparecen todas las opciones para las posibles rutas.
 */
btnCerrarPopup2.addEventListener('click', function (e) {
    e.preventDefault();
    overlay2.classList.remove('active');
    popup2.classList.remove('active');
    document.getElementById("iInitalPoint").value = "";
    document.getElementById("iFinalPoint").value = "";
    deleteRoutes(routes);
    isInMenu = false;
});
/**
 * Función que se encarga de cerrar la ventana en donde se puede visualizar el estado de todos los paquetes.
 */
btnCerrarPopup3.addEventListener('click', function (e) {
    e.preventDefault();
    overlay3.classList.remove('active');
    popup3.classList.remove('active');
    deletePackages();
    isInMenu = false;
});
/**
 * Función que se encarga de cerrar la ventana emergente donde aparece información del centro por el que pasó
 * encima el mouse.
 */
btnCerrarPopup4.addEventListener('click', function (e) {
    e.preventDefault();
    popup4.classList.remove('active');
    popup4.classList.remove('active');
    document.getElementById("conCenters").innerHTML = "";
    isInMenu = false;
});
/**
 * Función que se encarga de cerrar la ventana donde se crea el nuevo centro de distribución.
 */
btnCerrarPopupCentros.addEventListener('click', function (e) {
    e.preventDefault();
    overlayCentros.classList.remove('active');
    isInMenu = false;
});
//Creo que esta también se tiene que borrar.
/**
 * Función que se encarga de cerrar la ventana donde se solicita los pesos con los centros ya existentes.
 */
btnCerrarPopupCentros2.addEventListener('click', function (e) {
    e.preventDefault();
    overlayCentros2.classList.remove('active');
    popupCentros2.classList.remove('active');
    isInMenu = false;

});
/**
 * Función que se encarga de cerrar la ventana en donde se modifican los centros de distribución.
 */
btnCerrarPopupUltimate.addEventListener('click', function (e) {
    e.preventDefault();
    overlayUltimate.classList.remove('active');
    popupUltimate.classList.remove('active');
    document.getElementById("newName").value = "";
    document.getElementById("newWeight").value = "";
    isInMenu = false;
    deleteAvailableCenters("modOdCenters");
    deleteAvailableCenters("modOdSelected");
});
/**
 * Con esta función el botón se encarga de mostrar la ventana de rutas disponibles.
 */
btnAvailableR.addEventListener('click', function () {
    addRoutes(["A-B-C", "D-E-F", "G-H-I"]);
    routes = ["A-B-C", "D-E-F", "G-H-I"];
    overlay1.classList.remove('active');
    popup.classList.remove('active');
    overlay2.classList.add('active');
    popup2.classList.add('active');
    isInMenu = true;
    deleteAvailableCenters("iInitalPoint");
    deleteAvailableCenters("iFinalPoint");

});
/**
 * Con esta función al presionar el botón es posible realizar el pedido
 */
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
/**
 * Con esta función al presionar el botón es posible abrir la ventana donde se visualiza el estado de los
 * paquetes.
 */
btnAbrirPopup3.addEventListener('click', function () {
    overlay3.classList.add('active');
    popup3.classList.add('active');
    addPackages();
    document.getElementById("statusPackage").innerHTML = "";
    isInMenu = true;
});

/**
 * Clase que representa a un paquete
 */
class Package {
    /**
     * Constructro de la clase paquete.
     * @param code
     * @param stat
     */
    constructor(code, stat) {
        this._code = code;
        this._stat = stat;
    }

    /**
     * Obtener código del paquete
     * @returns {*} Código del paquete.
     */
    get code() {
        return this._code;
    }

    /**
     * Editar código del paquete
     * @param value
     */
    set code(value) {
        this._code = value;
    }

    /**
     * Obtener el estado del paquete
     * @returns {*} El estado del paquete
     */
    get stat() {
        return this._stat;
    }

    /**
     * Editar el estado del paquete
     * @param value
     */
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

/**
 * Función que se encarga de leer la ruta seleccionada
 */
function leerSelectedR() {
    let select = document.getElementById('opciones');
    let text = select.options[select.selectedIndex].text;
    console.log(text); // English
}

/**
 * Función que se encarga de leer el paquete que al que se le quiere visualizar el estado.
 */
function leerSelectedP() {
    let select = document.getElementById('selectPackage');
    let text = select.options[select.selectedIndex].text;
    selPack = text;
}

/**
 * Función que se encarga de leer el punto inicial seleccionado.
 */
function leerSelectedIn() {
    let select = document.getElementById('iInitalPoint');
    let text = select.options[select.selectedIndex].text;

}

/**
 * Función que se encarga de leer el punto final seleccionado.
 */
function leerSelectedFin() {
    let select = document.getElementById('iFinalPoint');
    let text = select.options[select.selectedIndex].text;

}

/**
 * Función que se encarga de leer el nombre seleccionado para un nuevo centro de distribución.
 */
function leerCenterName() {
    let select = document.getElementById('nombreCentro');
    let text = select.options[select.selectedIndex].text;
}

//Creo que esta se tiene que borrar
/**
 * Función que se encarga de leer el centro con el que se quiere conectar con el nuevo.
 */
function leerCenterConnected() {
    let select = document.getElementById('nombreCentro2');
    let text = select.options[select.selectedIndex].text;
}

/**
 * Función que lee el centro que quiere ser modificado
 */
function leerMododSelected() {
    let select = document.getElementById('modOdSelected')
    let text = select.options[select.selectedIndex].text;
    vModOdSelected = text;
}

/**
 * Función que lee el centro con el que se le quiere cambiar el peso.
 */
function leerMododCenters() {
    let select = document.getElementById('modOdCenters')
    let text = select.options[select.selectedIndex].text;
    vModOdCenters = text;
}

/**
 * Función que se encarga de mostrar el estado del pedido que se está solicitando visualizar.
 * @param x Código del pedido
 */
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

/**
 * Esta función se encarga principalmente de llamar a la función showStat() al presionar el botón.
 */
btnPaquete.addEventListener('click', function () {
    showStat(selPack);
});

/**
 * Función que muestra los pesos que tiene el centro seleccionado, con los otros pesos.
 * @param nombre Nombre del nodo seleccionado
 */
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

/**
 * Función que se encarga de ordenar las rutas según su peso.
 * @param x Array con los pesos de todas las rutas.
 */
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

/**
 * Función que al presionar el botón guarda los datos de la ventana para crear un nuevo centro.
 */
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
//Hay que eliminarla
btnSetCentros2.addEventListener('click', function (e) {
    e.preventDefault();
    var x = document.getElementById("iPesoN").value;
    console.log(x);
    document.getElementById("iPesoN").value = "";
    overlayCentros2.classList.remove('active');
    popupCentros2.classList.remove('active');
    isInMenu = true;
});
/**
 * Función que al presionar el botón se abre la ventana emergente donde se modifica el centro de distribución.
 */
btnAbrirPopUpUltimate.addEventListener('click', function () {
    overlayUltimate.classList.add('active');
    popupUltimate.classList.add('active');
    addAvailableCenter("modOdSelected");
    addAvailableCenter("modOdCenters");
    isInMenu = true;
});
/**
 * Función que obtiene los datos dados en la ventana para modificar el centro de distribución.
 */
btnUltimate.addEventListener('click', function (e) {
    e.preventDefault();
    overlayUltimate.classList.remove('active');
    popupUltimate.classList.remove('active');
    newName = document.getElementById("newName").value;
    newWeight = document.getElementById("newWeight").value;
    document.getElementById("newName").value = "";
    document.getElementById("newWeight").value = "";
    isInMenu = true;
    deleteAvailableCenters("modOdCenters");
    deleteAvailableCenters("modOdSelected");
});

class Center {
    constructor(nombre, posicion, weightCen) {
        this._nombre = nombre;
        this._posicion = posicion;
        this._weightCen = weightCen;
    }

    get nombre() {
        return this._nombre;
    }

    set nombre(value) {
        this._nombre = value;
    }

    get posicion() {
        return this._posicion;
    }

    set posicion(value) {
        this._posicion = value;
    }

    get weightCen() {
        return this._weightCen;
    }

    set weightCen(value) {
        this._weightCen = value;
    }
}

function addCentersServer(matrix,cont) {
    console.log("Ac")
    availableCenters=[];
    var y = ["Siquirres", "Pococí", "Guatuso", "San Francisco", "Desamparados", "Xetulul", "Xocomil", "Paten",
        "Coronado", "Tibás", "Helsinki", "Praga", "Shanghai", "Osaka", "Calgari", "Porto"];
    for (var x = 0; x < cont; x++) {
        var temp = [];
        for (var z = 0; z < cont; z++) {
            temp.push(matrix[x][z]);
        }
        z = cont;
        for (z; z < 16; z++) {
            temp.push(0);
        }
        var center = new Center(y[x], x, temp);
        availableCenters.push(center);
        newG.push(temp)
    }

}

let grafito = new Generador()
let random=Math.trunc(Math.random()*7)+1
console.log(random)
console.log(grafito.eliminarCentroInicio(15, random));




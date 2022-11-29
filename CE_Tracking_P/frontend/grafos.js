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

            addCentersServer(this.grafoUtilizable);
        }


        eliminarCentro(a){
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

        }

        addCentro(nodo){
            for(var x=0; x<this.grafoUtilizable.length;x++){
                for(var y=0;y<this.grafoUtilizable[x].length;y++){
                    if(this.grafoUtilizable[x][nodo] === 0){
                        this.grafoUtilizable[x][nodo]=9;
                    }
                }
            }
            for(var z=0; z<this.grafoUtilizable.length;z++){
                if(this.grafoUtilizable[nodo][z] === 0){
                    this.grafoUtilizable[nodo][z]=9;
                }
            }
            this.grafoUtilizable[nodo][nodo]= 0;
        }

        subirCentro(nodo, costo){
            for(var x=0; x<this.grafoUtilizable.length;x++){
                for(var y=0;y<this.grafoUtilizable[x].length;y++){
                    if(this.grafoUtilizable[x][nodo] > 0){
                        this.grafoUtilizable[x][nodo] = costo;
                    }
                }
            }
            for(var z=0; z<this.grafoUtilizable.length;z++){
                if(this.grafoUtilizable[nodo][z] > 0){
                    this.grafoUtilizable[nodo][z]= costo;
                }
            }
            this.grafoUtilizable[nodo][nodo]= 0;
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

Test = new Generador();
Test.newgraph();
Test.getListaAdy();









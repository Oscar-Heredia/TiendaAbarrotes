class Producto{
    constructor(Nombre,Precio,ID,Cantidad){
            this.Nombre=Nombre;
            this.Precio=Precio;
            this.ID=ID;
            this.Cantidad=Cantidad;
    }
    info(){
        return "Nombre: "+this.Nombre+"<br>"+"Precio: "+this.Precio+"<br>"+"ID: "+this.ID+"<br>"+"Cantidad: "+this.Cantidad+"<br>";
    }
}

class Inventario{
    constructor(){
        this.datos=[]
    }
    agreagar(nuevo){
        this.datos.push(nuevo)
    }
    listar(){
        let txtt=""
        for(let i=0; i<this.datos.length; i++){
            txtt=txtt+this.datos[i].info()+"<br>";
        }
        return txtt
    }

    eliminar(ID){
        for(let i=0;i<this.datos.length; i++){
            if (this.datos[i].ID===ID) {
                return this.datos.splice(i);
            }
        }
        return null
    }

    buscar(ID){
        for(let i=0;i<this.datos.length; i++){
            if (this.datos[i].ID===ID) {
                return this.datos[i];
            }
        }
        return null
    }
}

let Tienda=new Inventario()

function Agregar(){
    let ID,Nombre,Precio,Cantidad
    Nombre=document.getElementById("Nombre").value
    Precio=document.getElementById("Precio").value
    ID=document.getElementById("ID").value
    Cantidad=document.getElementById("Cantidad").value
    let pro=new Producto(Nombre,Precio,ID,Cantidad)
    Tienda.agreagar(pro) 

    document.getElementById("Nombre").value="";
    document.getElementById("Precio").value="";
    document.getElementById("ID").value="";
    document.getElementById("Cantidad").value="";

    alert("Se agrego el producto :)");

}

function Buscar(){
    let ID=document.getElementById("textoabuscar").value
    let res=Tienda.buscar(ID)
    if (res==null) {
        document.getElementById("resultado").innerHTML="Ingrese el ID";
        document.getElementById("textoabuscar").value="";
    }else{
        document.getElementById("resultado").innerHTML="Se encontro <br>"+res.info();
        document.getElementById("textoabuscar").value="";
        
    }
}

function Eliminar2(){
    let ID=document.getElementById("textoabuscar").value
    let res=Tienda.eliminar(ID)
    if (res==null) {
        document.getElementById("resultado").innerHTML="Ingrese el ID";
        document.getElementById("textoabuscar").value="";
    }else{
        document.getElementById("resultado").innerHTML="Se elimino el producto con el ID: <br>"+ ID;
        document.getElementById("textoabuscar").value="";
        alert("Se elimino el producto :)");
    }
}

function limpiar(){
    document.getElementById("resultado").innerHTML="";
    document.getElementById("lista").innerHTML="";
}

function lista(){
    document.getElementById("lista").value="";
    let res=Tienda.listar()
    document.getElementById("lista").innerHTML=res;
    
}
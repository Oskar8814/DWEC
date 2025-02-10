// NO SE PUEDE CAMBIAR LA ESTRUCTURA DE LOS DATOS SUMINISTRADOS
let articulos = [
    {id: 1, nombre:"Monitor", caracteristicas: {precio:151.23, descuento: 10}},
    {id: 2, nombre:"Ratón", caracteristicas: {precio:5.45, descuento: 5}},
    {id: 3, nombre:"Cascos", caracteristicas: {precio:15.59, descuento:15}},
    {id: 4, nombre:"Escáner", caracteristicas: {precio:95.12, descuento: 20}},
]


// Escribe aquí tu código

addEventListener('load', cargar, true);

function cargar() {
    let tablaIzq = document.getElementById("tblIzquierda");
    let tbodyI = tablaIzq.getElementsByTagName("tbody");
    let code = '';

    for (const element of articulos) {
        code += `<tr onmouseover=pintar(this) onmouseout=limpiar(this)>
        <td>${element.nombre}</td>
        <td>${element.caracteristicas.precio}</td>
        <td>
            <button type="button" onclick=izquierda(this) ><</button>
            <button type="button" onclick=derecha(this) >></button>
            <button type="button" onclick=descuento(${element.caracteristicas.descuento}) >Dto.</button>
        </td>
        </tr>`;
        tbodyI[0].innerHTML=code;
    }
}

function derecha(e) {
    let posicion = e.parentElement.parentElement.parentElement.parentElement;
    console.log(posicion);
    let tablaIzq = document.getElementById("tblIzquierda");
    console.log(tablaIzq);
    if (posicion != tablaIzq) {
        alert("Ya se encuentra en la tabla derecha");
    }else{
        let tablaDrch = document.getElementById("tblDerecha");
        let tbodyD = tablaDrch.getElementsByTagName("tbody");
        let pasar = e.parentNode.parentNode; 
        // let clon = pasar.cloneNode(true);

        tbodyD[0].appendChild(pasar);
        console.log(clon);
    }

}

function izquierda(e) {
    let posicion = e.parentElement.parentElement.parentElement.parentElement;
    console.log(posicion);
    let tablaDrch = document.getElementById("tblDerecha");
    console.log(tablaDrch);
    if (posicion != tablaDrch) {
        alert("Ya se encuentra en la tabla izquierda");
    }else{
        let tablaIzq = document.getElementById("tblIzquierda");
        let tbodyI = tablaIzq.getElementsByTagName("tbody");
        let pasar = e.parentNode.parentNode; 
        // let clon = pasar.cloneNode(true);

        tbodyI[0].appendChild(pasar);
    }
}


function descuento(desc) {
    alert(desc);
}

function pintar(e) {
    e.setAttribute('style', 'background-color: yellow;');
}

function limpiar(e) {
    e.setAttribute('style',"");
}
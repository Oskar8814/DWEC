// NO SE PUEDE CAMBIAR LA ESTRUCTURA DE LOS DATOS SUMINISTRADOS
let articulos = [
    {id: 1, nombre:"Monitor", caracteristicas: {precio:151.23, descuento: 10}},
    {id: 2, nombre:"Ratón", caracteristicas: {precio:5.45, descuento: 5}},
    {id: 3, nombre:"Cascos", caracteristicas: {precio:15.59, descuento:15}},
    {id: 4, nombre:"Escáner", caracteristicas: {precio:95.12, descuento: 20}},
]


// Escribe aquí tu código

addEventListener('load',cargar);

function cargar() {
    
    let tablaI = document.getElementById('tblIzquierda');
    let tbodyI = tablaI.getElementsByTagName('tbody');
    let codeF = '';
    
    for (const element of articulos) {
        let fila = document.createElement('tr');
        let codeF = `<td>${element.nombre}</td> 
        <td>${element.caracteristicas.precio}</td>
        <td>
        <button onclick=izquierda(this) type="button"><</button>
        <button onclick=derecha(this) type="button">></button>
        <button onclick=descuento(${element.caracteristicas.descuento}) type="button">Dto.</button>
        </td>
        `;
        fila.innerHTML=codeF;

        fila.addEventListener('mouseover',pintar);
        fila.addEventListener('mouseout',limpiar);
        tbodyI[0].appendChild(fila);
    }
}

function pintar() {
    this.setAttribute('style','background-color:yellow');
}
function limpiar() {
    this.setAttribute('style','')
}


function descuento(d) {
    alert(d);
}

function izquierda(e) {
    let tablaI = document.getElementById('tblIzquierda');
    
    let filaTabla = e.parentElement.parentElement.parentElement.parentElement
    console.log(filaTabla);

    if (filaTabla==tablaI) {
        alert("Ya se encuentra en la tabla izquierda");
    } else {
        let fila = e.parentElement.parentElement
        let tablaI = document.getElementById('tblIzquierda');
        let tbodyI = tablaI.getElementsByTagName('tbody');
        tbodyI[0].appendChild(fila);
    }
}

function derecha(e) {
    let tablaD = document.getElementById('tblDerecha');

    let filaTablaD = e.parentElement.parentElement.parentElement.parentElement;

    if (filaTablaD==tablaD) {
        alert("Ya se encuentra en la tabla derecha");
    } else {
        let fila = e.parentElement.parentElement;
        let tablaD = document.getElementById('tblDerecha');
        let tbodyD = tablaD.getElementsByTagName('tbody');
        tbodyD[0].appendChild(fila);
    }
}
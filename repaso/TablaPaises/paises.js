let paises = [
    { nombre: 'Francia', capital: 'París', datos: { gobierno: 'República', habitantes: 67407241, idioma: 'francés' }, imagen: 'imagenes/france.png' },
    { nombre: 'Alemania', capital: 'Berlín', datos: { gobierno: 'República federal', habitantes: 83149300, idioma: 'alemán' }, imagen: 'imagenes/germany.png' },
    { nombre: 'Italy', capital: 'Roma', datos: { gobierno: 'República parlamentaria', habitantes: 60257566, idioma: 'italiano' }, imagen: 'imagenes/italy.png' },
    { nombre: 'Portugal', capital: 'Lisboa', datos: { gobierno: 'República unitaria', habitantes: 10295909, idioma: 'portugués' }, imagen: 'imagenes/portugal.png' },
    { nombre: 'España', capital: 'Madrid', datos: { gobierno: 'Monarquía parlamentaria', habitantes: 47450795, idioma: 'español' }, imagen: 'imagenes/spain.png' },
];

let encabezados=["Nº", "Pais", "Capital", "Habitantes", "Bandera", "Acciones"];

addEventListener('load',cargarTabla);

function cargarTabla() {
    let tabla = document.getElementById('paises');
    tabla.border=1;
    let thead = document.createElement('thead');
    let filaH = document.createElement('tr');
    let codeH ='';

    for (const dato of encabezados) {
        codeH += `<th>${dato}</th>`;
    }
    filaH.innerHTML=codeH;
    thead.appendChild(filaH);
    tabla.appendChild(thead);
    
    let tbody = document.createElement('tbody');
    // tbody.setAttribute('id','tbody');
    let codeF="";
    aux = 1;
    for (const element of paises) {
        let fila = document.createElement('tr');
        codeF = `<td>${aux}</td><td>${element.nombre}</td><td>${element.capital}</td><td>${element.datos.habitantes}</td><td><img src="${element.imagen}" alt=""></td>
        <td>
        <button onclick=idioma('${element.datos.idioma}') type="button">Idioma</button>
        <button onclick=borrar(this) type="button">Borrar</button>
        <button onclick=arriba(this) type="button">Arriba</button>
        <button onclick=abajo(this) type="button">Abajo</button>
        </td>
        `;
        fila.innerHTML=codeF;
        aux++;
        tbody.appendChild(fila);
    }
    tabla.appendChild(tbody)
}

function idioma(idioma) {
    alert(idioma);
}

function borrar(e) {
    let elto = e.parentElement.parentElement;
    // elto.remove();
    let tabla = document.getElementById('paises');
    let tbody = tabla.getElementsByTagName('tbody');
    tbody[0].removeChild(elto);
}

function arriba(e) {
    let elto = e.parentElement.parentElement;
    let tabla = document.getElementById('paises');
    let tbody = tabla.getElementsByTagName('tbody');
    // console.log(elto.previousSibling)
    if (tbody[0].firstElementChild == elto) {
        alert("No puede subir es el primer elemento");
    }else{
        tbody[0].insertBefore(elto,elto.previousSibling);
    }
}

function abajo(e) {
    let elto = e.parentElement.parentElement;
    let tabla = document.getElementById('paises');
    let tbody = tabla.getElementsByTagName('tbody');
    // console.log(elto.nextSibling.nextSibling)
    if (tbody[0].lastElementChild == elto) {
        alert("No puede bajar es el último elemento");
    }else{
        tbody[0].insertBefore(elto,elto.nextSibling.nextSibling);
    }
}
// No se puede cambiar la estructura de los datos suministrados

let provincias = [
    {id:1, nombre:"Sevilla"},
    {id:2, nombre:"Huelva"},
    {id:3, nombre:"Cádiz"},
];

let localidades = [
    { id: 1, nombre:"Utrera", idProvincia: 1 , datos:{cp: 41710, poblacion: 51700,}},
    { id: 2, nombre:"Los Palacios", idProvincia: 1, datos:{cp: 41720, poblacion: 38600,} },
    { id: 3, nombre:"Dos Hermanas", idProvincia: 1, datos:{cp: 41700, poblacion: 138900} },
    { id: 4, nombre:"Alcalá de Guadaíra", idProvincia: 1, datos:{cp: 41500, poblacion: 76600} },
    { id: 5, nombre:"Niebla", idProvincia: 2, datos:{cp: 21840, poblacion: 4244} },
    { id: 6, nombre:"Bonares", idProvincia: 2, datos:{cp: 21830, poblacion: 6101} },
    { id: 7, nombre:"Chipiona", idProvincia: 3 , datos:{cp: 11550, poblacion: 19600}},
    { id: 8, nombre:"Jerez", idProvincia: 3 , datos:{cp: 11401, poblacion: 213200}},
    { id: 9, nombre:"Rota", idProvincia: 3 , datos:{cp: 11520, poblacion: 29700}},
];


// Escribe aquí tu código

addEventListener('load',cargar);

function cargar() {
    let select = document.getElementById('selectProvincias');
    let code = '<option value="">Todas</option>';
    for (const element of provincias) {
        code +=`<option value="${element.id}">${element.nombre}</option>`;
    }
    select.innerHTML=code;

    let tabla = document.getElementById('tblLocalidades');
    let thead = document.createElement('thead');

    let codeTH = `<tr>
        <th>Provincia</th>
        <th>Localidad</th>
        <th></th>
    </tr>`;
    thead.innerHTML=codeTH;
    tabla.appendChild(thead);

    let tbody = document.createElement('tbody');
    let codeF ='';

    for (const element of localidades) {
        let fila = document.createElement('tr');
        codeF =`<td>${provincias[element.idProvincia -1].nombre}</td>
            <td>${element.nombre}</td>
            <td onmouseover=datos(${element.id}) onmouseout=limpiar()><img src="info.png" alt=""></td>
        `;
        fila.innerHTML=codeF;
        tbody.appendChild(fila);
    }
    
    tabla.appendChild(tbody);
}

let select = document.getElementById('selectProvincias');
select.addEventListener('change',filtrar);

function filtrar() {
    let select = document.getElementById('selectProvincias');
    let provincia = select.value;
    let tabla = document.getElementById('tblLocalidades');
    tabla.innerHTML = "";

    let thead = document.createElement('thead');

    let codeTH = `<tr>
        <th>Provincia</th>
        <th>Localidad</th>
        <th></th>
    </tr>`;
    thead.innerHTML=codeTH;
    tabla.appendChild(thead);

    let tbody = document.createElement('tbody');
    let codeF ='';

    for (const element of localidades) {
        let fila = document.createElement('tr');
        if (element.idProvincia==provincia) {
            codeF = `<td>${provincias[element.idProvincia -1].nombre}</td>
            <td>${element.nombre}</td>
            <td onmouseover=datos(${element.id}) onmouseout=limpiar()><img src="info.png" alt=""></td>
            `;
            fila.innerHTML=codeF;
            tbody.appendChild(fila);
        }
    }
    tabla.appendChild(tbody);
}

function limpiar() {
    let div =document.getElementById('datos');
    div.innerHTML="";
}

function datos(id) {
    
    let div = document.getElementById('datos');

    for (const element of localidades) {
        if (element.id == id) {
            let p1 = `<p>CP ${element.datos.cp}</p><p>Población:${element.datos.poblacion}</p>`;
            div.innerHTML=p1;
        }
    }
}
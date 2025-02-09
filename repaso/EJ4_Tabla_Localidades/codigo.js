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

addEventListener('load',inicializarEventos,false);

function inicializarEventos() {
    rellenarSelect();
    rellenarTabla();
}

function rellenarSelect() {
    let select = document.getElementById("selectProvincias");
    let code = `<option value="">Todas</option>`;
    for (const element of provincias) {
        code +=`<option value="${element.id}">${element.nombre}</option>`;
    }
    select.innerHTML=code;
    select.addEventListener('change',rellenarTablaFiltrada)
}

function rellenarTabla(){
    let tabla = document.getElementById("tblLocalidades");
    

    let thead = document.createElement("thead");
    thead.innerHTML=`            
            <thead>
                <th>Provincia</th>
                <th>Localidad</th>
                <th></th>
            </thead>`;
    
    tabla.appendChild(thead);//Agrega el encabezado a la tabla

    let tbody = document.createElement("tbody");
    for (const element of localidades) {
        let codigo ='';
        let fila = document.createElement("tr");
        
        codigo += `<td>${provincias[element.idProvincia-1].nombre}</td><td>${element.nombre}</td><td onmouseover=entrar(${element.id}) onmouseout=salir() id="${element.id}"><img src="info.png" alt=""></td>`;
        fila.innerHTML=codigo;
        tbody.appendChild(fila);//Agrega cada fila al cuerpo
    }
    tabla.appendChild(tbody);
    
}

function rellenarTablaFiltrada(e) {
    let provinciaSeleccionada = e.target.value;
    console.log(provinciaSeleccionada); 

    let tabla = document.getElementById("tblLocalidades");
    tabla.innerHTML = ''

    let thead = document.createElement("thead");
    thead.innerHTML=`            
            <thead>
                <th>Provincia</th>
                <th>Localidad</th>
                <th></th>
            </thead>`;
    
    tabla.appendChild(thead);//Agrega el encabezado a la tabla

    let tbody = document.createElement("tbody");
    for (const element of localidades) {
        let codigo ='';
        if (element.idProvincia == provinciaSeleccionada) {            
            let fila = document.createElement("tr");
            
            codigo += `<td>${provincias[element.idProvincia-1].nombre}</td><td>${element.nombre}</td><td onmouseover=entrar(${element.id}) onmouseout=salir() id="${element.id}"><img src="info.png" alt=""></td>`;
            fila.innerHTML=codigo;
            tbody.appendChild(fila);//Agrega cada fila al cuerpo
        }
    }
    tabla.appendChild(tbody);

}

function entrar(e) {
    // console.log(e);
    let datos = document.getElementById("datos");
    let codigo ='';
    codigo= `<p>CP: ${localidades[e-1].datos.cp}</p> <p>Población: ${localidades[e-1].datos.poblacion}</p>`;
    datos.innerHTML=codigo;
}
function salir() {
    let datos = document.getElementById("datos");
    datos.innerHTML='';
}
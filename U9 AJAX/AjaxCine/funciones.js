addEventListener('load', inicializarEventos);

function inicializarEventos(){
    cargarGeneros();
}

let conexion1;
function cargarGeneros() {
    conexion1 = new XMLHttpRequest();
    conexion1.open('GET', 'cargar_genero.php',true);
    conexion1.timeout = 3000; // Tiempo máximo de espera del API 3sg
    conexion1.addEventListener('readystatechange', cargarDatosGenero); // Añadimos el callback
    conexion1.addEventListener('timeout',tiempoVencido);
    conexion1.send();
}

function tiempoVencido() {
    document.getElementById("inputTabla").innerHTML = "Tiempo de espera vencido";
}

function cargarDatosGenero(e) {
    if (conexion1.readyState==4) {
        if (conexion1.status == 200) {
            let select = document.getElementById('inputGenero');
            // let resultados = document.getElementById('resultados').innerHTML='';
            try {
                // Con JSON.parse se convierte el texto JSON en un objeto JavaScript
                let datos = JSON.parse(conexion1.responseText); // Los datos JSON se recuperan al igual que el texto plano                
                
                //Poblamos el select genero
                var optionCode2 = "<option value='todas'>Todas</option>";
                
                for (const element of datos) {
                    optionCode2+= `<option value='${element.genero}'>${element.genero}</option>`;
                }

                select.innerHTML=optionCode2;
                select.addEventListener("change",cargarPeliculas);
            } catch (ex) {
                document.getElementById("inputTabla").innerHTML = "Error al cargar extraer del XML: " + ex.message;
            }
        } else {
            // Se ha recibido un código status distinto de 200
            document.getElementById("inputTabla").innerHTML = "Error al cargar los datos";
        }
    }else{
        document.getElementById("inputTabla").innerHTML = "Cargando...";
    }
}

function cargarPeliculas(e) {
    const genero = document.getElementById('inputGenero').value;

    conexion1 = new XMLHttpRequest();
    if (genero=='todas') {
        conexion1.open('GET', 'cargar_pelicula.php',true);
    } else {
        conexion1.open('GET', `cargar_pelicula.php?genero=${genero}`,true);
    }
    conexion1.timeout = 3000; // Tiempo máximo de espera del API 3sg
    conexion1.addEventListener('readystatechange', cargarDatosPeliculas); // Añadimos el callback
    conexion1.addEventListener('timeout',tiempoVencido);
    conexion1.send();
}

function cargarDatosPeliculas() {
    if (conexion1.readyState==4) {
        if (conexion1.status == 200) {
            let resultados = document.getElementById('inputTabla');
            resultados.innerHTML='';
            
            try {
                let xmlDoc = conexion1.responseXML; // En la propiedad responseXML se almacena el XML (tiene una estructura similar al DOM)
                // Obtener todos los elementos <pelicula> dentro del XML
                let peliculas = xmlDoc.getElementsByTagName("pelicula");
                console.log(peliculas)

                let tbody = document.getElementById('inputTabla');
                let codeB ='';

                for (let i = 0; i < peliculas.length; i++) {
                    let titulo = peliculas[i].getElementsByTagName('titulo')[0].textContent;
                    let anio= peliculas[i].getElementsByTagName('anio')[0].textContent;
                    let genero= peliculas[i].getElementsByTagName('genero')[0].textContent;
                    let portada= peliculas[i].getElementsByTagName('poster')[0].textContent;
                    // let sinopsis= peliculas[i].getElementsByTagName('sinopsis')[0].textContent;
                    
                    codeB+=`<tr><td>${titulo}</td><td>${anio}</td><td>${genero}</td><td><td><img src="${portada}" width="100"></td></td><td><button type="button" onclick=detalles(${i}) class="btn btn-warning">Detalles</button></td></tr>`;
                }
                tbody.innerHTML=codeB;
                // tabla.appendChild(tbody);
                // resultados.appendChild(tabla);
                

            } catch (ex) {
                document.getElementById("inputTabla").innerHTML = "Error al cargar extraer del XML: " + ex.message;
            }
        } else {
            // Se ha recibido un código status distinto de 200
            document.getElementById("inputTabla").innerHTML = "Error al cargar los datos";
        }
    }else{
        document.getElementById("inputTabla").innerHTML = "Cargando...";
    }
}

function detalles(e) {
    let trama = document.getElementById('inputTrama');
    let xmlDoc = conexion1.responseXML;
    let peliculas = xmlDoc.getElementsByTagName("pelicula");
    let sinopsis= peliculas[e].getElementsByTagName('sinopsis')[0].textContent;
    trama.innerHTML=sinopsis;
}
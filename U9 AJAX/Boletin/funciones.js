addEventListener("load", inicializarEventos, false);

function inicializarEventos() {
    cargarDatosComunidad();
}

let conexion1;

function cargarDatosComunidad(e) {
    conexion1 = new XMLHttpRequest(); //Crear el objeto ajax
    conexion1.open("GET", "cargar_comunidades_json.php", true);
    conexion1.timeout = 3000; // Tiempo máximo de espera del API 3sg
    conexion1.addEventListener("readystatechange", procesarDatosComunidad); // Añadimos el callback
    conexion1.addEventListener("timeout", tiempoVencido);  //El evento ontimeout se dispara cuando se ha superado el tiempo de espera
    conexion1.send();
}

function cargarDatosProvincia(e) {
    const id = document.getElementById('comunidad').value;

    conexion1 = new XMLHttpRequest();
    conexion1.open('GET', `cargar_provincias.php?comunidad=${id}`, true);
    conexion1.timeout = 3000; // Tiempo máximo de espera del API 3sg
    conexion1.addEventListener('readystatechange', procesarDatosProvincia); // Añadimos el callback
    conexion1.addEventListener('timeout', tiempoVencido); // El evento ontimeout se dispara cuando se ha superado el tiempo de espera
    conexion1.send();
}

function tiempoVencido() {
    document.getElementById("resultados").innerHTML = "Tiempo de espera vencido";
}

function procesarDatosComunidad() {
    if (conexion1.readyState == 4) {
        if (conexion1.status == 200) {
            let select = document.getElementById("comunidad");
            
            let resultados = document.getElementById("resultados");
            resultados.innerHTML = ""; // Limpiar resultados previos
    
            try {
            // Con JSON.parse se convierte el texto JSON en un objeto JavaScript
            let datos = JSON.parse(conexion1.responseText); // Los datos JSON se recuperan al igual que el texto plano
            
            //Poblar el select de comunidades
            var optionCode = "<option value=''>Seleccionar...</option>";
            for (let i = 0; i < datos.length; i++) {
                optionCode+= `<option value='${datos[i].id}'>${datos[i].nombre}</option>`;
            }
            select.innerHTML = optionCode;
            select.addEventListener("change",cargarDatosProvincia);

            }catch (ex) {
                document.getElementById("resultados").innerHTML = "Error al cargar parsear el JSON: " + ex.message;
            }
        } else {
            // Se ha recibido un código status distinto de 200
            document.getElementById("resultados").innerHTML ="Error al cargar los datos";
        }
    } else {
        document.getElementById("resultados").innerHTML = "Cargando...";
    }
}

function procesarDatosProvincia() {
    if (conexion1.readyState == 4) {
        if (conexion1.status == 200) {
            let resultados = document.getElementById("resultados");
            let select = document.getElementById("provincias");
            resultados.innerHTML = ""; // Limpiar resultados previos
            try {
                let xmlDoc = conexion1.responseXML; // En la propiedad responseXML se almacena el XML
                let provincias = xmlDoc.getElementsByTagName("provincia"); // Obtener todos los elementos <provincia>

                // Inicializar las opciones con un valor por defecto
                let optionCode = "<option value=''>Seleccionar...</option>";

                for (let f = 0; f < provincias.length; f++) {
                    // Extraer el nombre y el id de la provincia
                    let id = provincias[f].getElementsByTagName("id")[0].textContent;
                    let nombre = provincias[f].getElementsByTagName("nombre")[0].textContent;
                    
                    // Cargar las opciones del select
                    optionCode += `<option value='${id}'>${nombre}</option>`;
                }

                // Cargar con las opciones el select el formulario
                select.innerHTML = optionCode;

                select.addEventListener("change",resultadosProvincia);
            } catch (ex) {
                resultados.innerHTML = "Error al extraer datos del XML: " + ex.message;
            }

        } else {
            // Código de estado distinto de 200
            document.getElementById("resultados").innerHTML = "Error al cargar los datos";
        }
    } else {
        document.getElementById("resultados").innerHTML = "Cargando...";
    }
}

function resultadosProvincia(){
    let select = document.getElementById("provincias");
    let option = select.options[select.selectedIndex];

    let id = option.value;
    let nombre = option.textContent;

    if (id != '') {
        // Mostrar el id y nombre en un div
        let resultados = document.getElementById("resultados");
        resultados.innerHTML = `id: ${id}, Nombre: ${nombre}`;
    } else {
        resultados.innerHTML = "";
    }
    
}
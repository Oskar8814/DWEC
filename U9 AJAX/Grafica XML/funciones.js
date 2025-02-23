// addEventListener('load', inicializarEventos, false);
google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(inicializarEventos);
function inicializarEventos() {
    cargarCiudades();
    cargarAnios();
}

let conexion1;
function cargarCiudades(e) {
    conexion1 = new XMLHttpRequest();
    conexion1.open('GET', 'carga_ciudadesXML.php',true);
    conexion1.timeout = 3000; // Tiempo máximo de espera del API 3sg
    conexion1.addEventListener('readystatechange', cargarDatosCiudades); // Añadimos el callback
    conexion1.addEventListener('timeout',tiempoVencido);
    conexion1.send();
}    

function tiempoVencido() {
    document.getElementById("resultados").innerHTML = "Tiempo de espera vencido";
}

function cargarDatosCiudades() {
    if (conexion1.readyState==4) {
        if (conexion1.status == 200) {
            let select = document.getElementById('ubicacion');
            try {
                let xmlDoc = conexion1.responseXML; // En la propiedad responseXML se almacena el XML (tiene una estructura similar al DOM)
                let resultados = document.getElementById('resultados').innerHTML='';
                // Obtener todos los elementos <ciudad> dentro del XML
                let ciudades = xmlDoc.getElementsByTagName("ciudad");

                let code = `<option value'0'>Seleccionar...</option>`;
                for (let i = 0; i < ciudades.length; i++) {
                    let id = ciudades[i].getElementsByTagName('id')[0].textContent;
                    let nombre= ciudades[i].getElementsByTagName('nombre')[0].textContent;
                    
                    code+=`<option value='${id}'>${nombre}</option>`;
                }
                select.innerHTML=code;
                select.addEventListener("change",cargarDatosLluvia);
            } catch (ex) {
                document.getElementById("resultados").innerHTML = "Error al cargar extraer del XML: " + ex.message;
            }
        } else {
            // Se ha recibido un código status distinto de 200
            document.getElementById("resultados").innerHTML = "Error al cargar los datos";
        }
    }else{
        document.getElementById("resultados").innerHTML = "Cargando...";
    }
}

let conexion2;
function cargarAnios(e) {
    conexion2 = new XMLHttpRequest();
    conexion2.open('GET', 'carga_años.php',true);
    conexion2.timeout = 3000; // Tiempo máximo de espera del API 3sg
    conexion2.addEventListener('readystatechange', cargarDatosAnios); // Añadimos el callback
    conexion2.addEventListener('timeout',tiempoVencido);
    conexion2.send();
}  

function cargarDatosAnios() {
    if (conexion2.readyState==4) {
        if (conexion2.status == 200) {
            let select = document.getElementById('anio');
            let resultados = document.getElementById('resultados').innerHTML='';
            try {
                // Con JSON.parse se convierte el texto JSON en un objeto JavaScript
                let datos = JSON.parse(conexion2.responseText); // Los datos JSON se recuperan al igual que el texto plano                
                
                //Poblamos el select anio
                var optionCode2 = "<option value='0'>Seleccionar...</option>";
                
                for (const element of datos) {
                    optionCode2+= `<option value='${element}'>${element}</option>`;
                }

                select.innerHTML=optionCode2;
                select.addEventListener("change",cargarDatosLluvia);
            } catch (ex) {
                document.getElementById("resultados").innerHTML = "Error al cargar extraer del XML: " + ex.message;
            }
        } else {
            // Se ha recibido un código status distinto de 200
            document.getElementById("resultados").innerHTML = "Error al cargar los datos";
        }
    }else{
        document.getElementById("resultados").innerHTML = "Cargando...";
    }
}

function cargarDatosLluvia(e) {
    const idCiudad = document.getElementById('ubicacion').value;
    const año = document.getElementById('anio').value;

    if (idCiudad!=="0" && año!=="0") {
        conexion1 = new XMLHttpRequest();
        conexion1.open('GET', `carga_datosLluvia.php?ubicacion=${idCiudad}&anio=${año}`,true);
        conexion1.timeout = 3000; // Tiempo máximo de espera del API 3sg
        conexion1.addEventListener('readystatechange', mostrarDatosLluvias); // Añadimos el callback
        conexion1.addEventListener('timeout',tiempoVencido);
        conexion1.send();
    } else {
        let resultados = document.getElementById('resultados').innerHTML='Esperando a la seleccion de año y ciudad';
    }
    
}

function mostrarDatosLluvias(e) {

    if (conexion1.readyState==4) {
        if (conexion1.status == 200) {
            let resultados = document.getElementById('resultados');
            resultados.innerHTML='';
            
            try {
                let xmlDoc = conexion1.responseXML; // En la propiedad responseXML se almacena el XML (tiene una estructura similar al DOM)
                // Obtener todos los elementos <ciudad> dentro del XML
                let lluvias = xmlDoc.getElementsByTagName("lluvia");
                // console.log(lluvias)

                let tabla = document.createElement("table");
                let thead = document.createElement('thead');

                let codeH = '<tr><th>Mes</th><th>Año</th><th>Precipitacion(mm)</th></tr>';
                thead.innerHTML= codeH;
                tabla.appendChild(thead);

                let tbody = document.createElement('tbody');
                let codeB ='';

                for (let i = 0; i < lluvias.length; i++) {
                    let mes = lluvias[i].getElementsByTagName('mes')[0].textContent;
                    let anio= lluvias[i].getElementsByTagName('año')[0].textContent;
                    let precipitacion= lluvias[i].getElementsByTagName('precipitacion_mm')[0].textContent;
                    
                    codeB+=`<tr><td>${mes}</td><td>${anio}</td><td>${precipitacion}</td></tr>`;
                }
                tbody.innerHTML=codeB;
                tabla.appendChild(tbody);
                resultados.appendChild(tabla);
                
                // if (!Array.isArray(lluvias) || lluvias.length === 0) {
                //     document.getElementById("resultados").innerHTML = "No hay datos disponibles.";
                //     return;
                // }

                let datosProcesados = [["Mes", "Precipitación"]];

                for (let j = 0; j < lluvias.length; j++) {
                    let mes = lluvias[j].getElementsByTagName('mes')[0].textContent;
                    let precipitacion= lluvias[j].getElementsByTagName('precipitacion_mm')[0].textContent;
                    
                    if (mes && precipitacion) {
                        datosProcesados.push([
                            mes,
                            parseFloat(precipitacion),
                        ]);
                    }
                }

                google.charts.setOnLoadCallback(() => drawBarChart(datosProcesados));

            } catch (ex) {
                document.getElementById("resultados").innerHTML = "Error al cargar extraer del XML: " + ex.message;
            }
        } else {
            // Se ha recibido un código status distinto de 200
            document.getElementById("resultados").innerHTML = "Error al cargar los datos";
        }
    }else{
        document.getElementById("resultados").innerHTML = "Cargando...";
    }
}


function drawBarChart(datos) {
    if (datos.length <= 1) {
        document.getElementById("resultados").innerHTML = "No hay suficientes datos para mostrar el gráfico.";
        return;
    }

    var data = google.visualization.arrayToDataTable(datos);
    var options = {
        title: "Precipitaciones por Mes",
        chartArea: { width: "80%" },
        hAxis: {
            title: "Milímetros de lluvia",
            minValue: 0,
        },
        vAxis: {
            title: "Mes",
        },
        legend: { position: "none" },
    };

    var chart = new google.visualization.BarChart(document.getElementById("barchart_material"));
    chart.draw(data, options);
}
// addEventListener("load", inicializarEventos, false);
google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(inicializarEventos);
function inicializarEventos() {
    cargarCiudades();
    cargarAños();
}

let conexion1;

function cargarCiudades(e) {
    conexion1 = new XMLHttpRequest() //Crea el obj ajax
    conexion1.open("GET", "carga_ciudadesjson.php", true);
    conexion1.timeout = 3000;//Tiempo de espera a la api
    conexion1.addEventListener("readystatechange", cargarDatosCiudades); //Añadir el callback
    conexion1.addEventListener("timeout", tiempoVencido);  //El evento ontimeout se dispara cuando se ha superado el tiempo de espera
    conexion1.send();
}

let conexion2
function cargarAños(e) {
    conexion2 = new XMLHttpRequest() //Crea el obj ajax
    conexion2.open("GET", "carga_años.php", true);
    conexion2.timeout = 3000;//Tiempo de espera a la api
    conexion2.addEventListener("readystatechange", cargarDatosAños); //Añadir el callback
    conexion2.addEventListener("timeout", tiempoVencido);  //El evento ontimeout se dispara cuando se ha superado el tiempo de espera
    conexion2.send();
}

function tiempoVencido() {
    document.getElementById("resultados").innerHTML = "Tiempo de espera vencido";
}

function cargarDatosCiudades() {
    if (conexion1.readyState == 4 ) {
        if (conexion1.status==200 ) {
            
            let select = document.getElementById('ubicacion');

            let resultados = document.getElementById('resultados');
            resultados.innerHTML = ""; // Limpiar resultados previos

            try{
                // Con JSON.parse se convierte el texto JSON en un objeto JavaScript
                let datos = JSON.parse(conexion1.responseText); // Los datos JSON se recuperan al igual que el texto plano                
                
                //Poblamos el select ubicacion
                var optionCode = "<option value='0'>Seleccionar...</option>";
                for (const element of datos) {
                    optionCode+= `<option value='${element.id}'>${element.nombre}</option>`;
                }

                select.innerHTML=optionCode;
                
                //Añadir el evento change
                select.addEventListener("change",cargarDatosLluvia);
            }catch(ex){
                document.getElementById("resultados").innerHTML = "Error al cargar parsear el JSON: " + ex.message;
            }

        } else {
            // Se ha recibido un código status distinto de 200
            document.getElementById("resultados").innerHTML ="Error al cargar los datos";
        }
    }else{
        document.getElementById("resultados").innerHTML = "Cargando...";
    }
}

function cargarDatosAños() {
    if (conexion2.readyState == 4 ) {
        if (conexion2.status==200 ) {
            
            let selectA = document.getElementById('anio');

            let resultados = document.getElementById('resultados');
            resultados.innerHTML = ""; // Limpiar resultados previos

            try{
                // Con JSON.parse se convierte el texto JSON en un objeto JavaScript
                let datosAnios = JSON.parse(conexion2.responseText); // Los datos JSON se recuperan al igual que el texto plano
                
                //Poblamos el select anio
                var optionCode2 = "<option value='0'>Seleccionar...</option>";
                for (const element2 of datosAnios) {
                    optionCode2+= `<option value='${element2.año}'>${element2.año}</option>`;
                }
                selectA.innerHTML=optionCode2;
                selectA.addEventListener("change",cargarDatosLluvia);
            }catch(ex){
                document.getElementById("resultados").innerHTML = "Error al cargar parsear el JSON: " + ex.message;
            }

        } else {
            // Se ha recibido un código status distinto de 200
            document.getElementById("resultados").innerHTML ="Error al cargar los datos de Años";
        }
    }else{
        document.getElementById("resultados").innerHTML = "Cargando Años...";
    }
}

function cargarDatosLluvia(e){
    const idCiudad = document.getElementById('ubicacion').value;
    const año = document.getElementById('anio').value;
    
    if (idCiudad !== "0" && año !== "0") { 
        conexion1 = new XMLHttpRequest() //Crea el obj ajax
        conexion1.open("GET", `carga_lluviajson.php?ciudad=${idCiudad}&anio=${año}`, true);
        conexion1.timeout = 3000;//Tiempo de espera a la api
        conexion1.addEventListener("readystatechange", mostrarLluvias); //Añadir el callback
        conexion1.addEventListener("timeout", tiempoVencido);  //El evento ontimeout se dispara cuando se ha superado el tiempo de espera
        conexion1.send();
        

    } else {
        console.log("Esperando que ambos selects tengan un valor...");
        document.getElementById("resultados").innerHTML = "Esperando que ambos selects tengan un valor...";
    }


}


function mostrarLluvias() {
    if (conexion1.readyState == 4 && conexion1.status == 200) {
        try {
            document.getElementById("resultados").innerHTML = "";

            let datos2 = JSON.parse(conexion1.responseText);
            console.log("Datos recibidos:", datos2);

            if (!Array.isArray(datos2) || datos2.length === 0) {
                document.getElementById("resultados").innerHTML = "No hay datos disponibles.";
                return;
            }

            let datosProcesados = [["Mes", "Precipitación"]];
            datos2.forEach(element4 => {
                if (element4.mes && element4.precipitacion) {
                    datosProcesados.push([element4.mes, parseFloat(element4.precipitacion)]);
                }
            });

            console.log("Datos procesados para el gráfico:", datosProcesados);

            google.charts.setOnLoadCallback(() => drawChart(datosProcesados));
        } catch (ex) {
            document.getElementById("resultados").innerHTML = "Error al parsear JSON: " + ex.message;
        }
    }
}

function drawChart(datos) {
    if (datos.length <= 1) {
        document.getElementById("resultados").innerHTML = "No hay suficientes datos para mostrar el gráfico.";
        return;
    }

    var data = google.visualization.arrayToDataTable(datos);
    var options = {
        title: "Precipitaciones por Mes",
        is3D: true,
    };

    var chart = new google.visualization.PieChart(document.getElementById("piechart_3d"));
    chart.draw(data, options);
}

// function mostrarLluvias (e) {
//     if (conexion1.readyState == 4 ) {
//         if (conexion1.status==200 ) {

//             let resultados = document.getElementById('resultados');
//             resultados.innerHTML = ""; // Limpiar resultados previos

//             try{
//                 // Con JSON.parse se convierte el texto JSON en un objeto JavaScript
//                 let datos2 = JSON.parse(conexion1.responseText); // Los datos JSON se recuperan al igual que el texto plano  

//                 // Transformamos los datos de la API en el formato requerido para el gráfico

//                 let dataArray = [["Mes", "Cantidad"]];
//                 if (!Array.isArray(datos2) || datos2.length === 0) {
//                     console.warn("No hay datos válidos para graficar.");
//                     // Devuelve solo los encabezados, evitando errores en Google Charts
//                 }

//                 for (const element4 of datos2) {
//                     if (element4.mes && element4.precipitacion) {
//                         dataArray.push([element4.mes,element4.precipitacion]);
//                     }
//                 }

//                 var data = google.visualization.arrayToDataTable(dataArray);

//                 var options = {
//                     title: "Precipitaciones",
//                     is3D: true,
//                 };

//                 var chart = new google.visualization.PieChart(
//                     document.getElementById("piechart_3d")
//                 );

//                 google.charts.setOnLoadCallback(() => chart.draw(data, options));

//             }catch(ex){
//                 document.getElementById("resultados").innerHTML = "Error al cargar parsear el JSON: " + ex.message;
//             }

//         } else {
//             // Se ha recibido un código status distinto de 200
//             document.getElementById("resultados").innerHTML ="Error al cargar los datos de las lluvias";
//         }
//     }else{
//         document.getElementById("resultados").innerHTML = "Cargando datos de las lluvias...";
//     }
// }
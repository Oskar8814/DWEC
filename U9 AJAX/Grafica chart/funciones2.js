// Cargar Google Charts
google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(inicializarEventos);

function inicializarEventos() {
    cargarCiudades();
    cargarAños();
}

let conexion1;

function cargarCiudades() {
    conexion1 = new XMLHttpRequest();
    conexion1.open("GET", "carga_ciudadesjson.php", true);
    conexion1.timeout = 3000;
    conexion1.addEventListener("readystatechange", cargarDatosCiudades);
    conexion1.addEventListener("timeout", tiempoVencido);
    conexion1.send();
}

let conexion2;
function cargarAños() {
    conexion2 = new XMLHttpRequest();
    conexion2.open("GET", "carga_años.php", true);
    conexion2.timeout = 3000;
    conexion2.addEventListener("readystatechange", cargarDatosAños);
    conexion2.addEventListener("timeout", tiempoVencido);
    conexion2.send();
}

function tiempoVencido() {
    document.getElementById("resultados").innerHTML = "Tiempo de espera vencido";
}

function cargarDatosCiudades() {
    if (conexion1.readyState == 4 && conexion1.status == 200) {
        let select = document.getElementById("ubicacion");
        let resultados = document.getElementById("resultados");
        resultados.innerHTML = "";

        try {
            let datos = JSON.parse(conexion1.responseText);
            let optionCode = "<option value='0'>Seleccionar...</option>";
            for (const element of datos) {
                optionCode += `<option value='${element.id}'>${element.nombre}</option>`;
            }

            select.innerHTML = optionCode;
            select.addEventListener("change", cargarDatosLluvia);
        } catch (ex) {
            resultados.innerHTML = "Error al parsear el JSON: " + ex.message;
        }
    }
}

function cargarDatosAños() {
    if (conexion2.readyState == 4 && conexion2.status == 200) {
        let selectA = document.getElementById("anio");
        let resultados = document.getElementById("resultados");
        resultados.innerHTML = "";

        try {
            let datosAnios = JSON.parse(conexion2.responseText);
            let optionCode2 = "<option value='0'>Seleccionar...</option>";
            for (const element2 of datosAnios) {
                optionCode2 += `<option value='${element2}'>${element2}</option>`;
            }
            selectA.innerHTML = optionCode2;
            selectA.addEventListener("change", cargarDatosLluvia);
        } catch (ex) {
            resultados.innerHTML = "Error al parsear el JSON: " + ex.message;
        }
    }
}

function cargarDatosLluvia() {
    const idCiudad = document.getElementById("ubicacion").value;
    const año = document.getElementById("anio").value;

    if (idCiudad !== "0" && año !== "0") {
        conexion1 = new XMLHttpRequest();
        conexion1.open("GET", `carga_lluviajson.php?ciudad=${idCiudad}&anio=${año}`, true);
        conexion1.timeout = 3000;
        conexion1.addEventListener("readystatechange", mostrarLluvias);
        conexion1.addEventListener("timeout", tiempoVencido);
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
                    datosProcesados.push([
                        element4.mes,
                        parseFloat(element4.precipitacion),
                    ]);
                }
            });

            console.log("Datos procesados para el gráfico de barras:", datosProcesados);

            google.charts.setOnLoadCallback(() => drawBarChart(datosProcesados));
        } catch (ex) {
            document.getElementById("resultados").innerHTML = "Error al parsear JSON: " + ex.message;
        }
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

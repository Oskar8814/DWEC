addEventListener("load", inicializarEventos, false);

function inicializarEventos() {
    let ob = document.getElementById("boton1");
    ob.addEventListener("click", presionBoton, false);
}

let conexion1;
function presionBoton(e) {
    conexion1 = new XMLHttpRequest(); //Crear el objeto ajax
    conexion1.open("GET", "cargar_perifericos_json.php", true);
    conexion1.timeout = 3000; // Tiempo máximo de espera del API 3sg
    conexion1.addEventListener("readystatechange", procesarDatos); // Añadimos el callback
    conexion1.addEventListener("timeout", tiempoVencido); // El evento ontimeout se dispara cuando se ha superado el tiempo de espera
    conexion1.send();
}

function tiempoVencido() {
    document.getElementById("resultados").innerHTML = "Tiempo de espera vencido";
}

function procesarDatos() {
if (conexion1.readyState == 4) {
    if (conexion1.status == 200) {
        let resultados = document.getElementById("resultados");
        resultados.innerHTML = ""; // Limpiar resultados previos

    try {
        // let salida = '';
        // Con JSON.parse se convierte el texto JSON en un objeto JavaScript
        let datos = JSON.parse(conexion1.responseText); // Los datos JSON se recuperan al igual que el texto plano

        // Crear tabla
        let tabla = document.createElement("table");
        tabla.border = "1";

        // Crear encabezado de la tabla
        let thead = document.createElement("thead");
        thead.innerHTML = `
                    <tr>
                        <th>Código</th>
                        <th>Descripción</th>
                        <th>Precio</th>
                    </tr>
                `;
        tabla.appendChild(thead); //Agrega el encabezado a la tabla

        let tbody = document.createElement('tbody'); //Crea el cuerpo de la tabla
        for (let f = 0; f < datos.length; f++) {
            var salida = '';
            let fila = document.createElement("tr");

            salida += "<td>" + datos[f].codigo + "</td>";
            salida += "<td>" + datos[f].descripcion + "</td>";
            salida += "<td>" + datos[f].precio + "</td>";

            fila.innerHTML = salida;
            tbody.appendChild(fila);//Agrega cada fila al cuerpo
        }

        tabla.appendChild(tbody); //Agrega el cuerpo a la tabla.

        resultados.appendChild(tabla);//Agregar la tabla al div
        
        } catch (ex) {
            document.getElementById("resultados").innerHTML = "Error al cargar parsear el JSON: " + ex.message;
        }
    } else {
      // Se ha recibido un código status distinto de 200
        document.getElementById("resultados").innerHTML =
        "Error al cargar los datos";
    }
} else {
    document.getElementById("resultados").innerHTML = "Cargando...";
}
}

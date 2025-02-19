let conexion1;
function enviarPeticionAJAX() {
    let titulo = document.getElementById("titulo").value;
    let select = document.getElementById("tipo");
    let option = select.options[select.selectedIndex];
    let id = option.value;

    // console.log(titulo);
    // console.log(id);

    conexion1 = new XMLHttpRequest(); //Crear el objeto ajax
    conexion1.open("GET",`https://www.omdbapi.com/?i=tt3896198&apikey=526b77bd&s=${titulo}&type=${id}`,true);
    conexion1.timeout = 3000; // Tiempo máximo de espera del API 3sg
    conexion1.addEventListener("readystatechange", procesarDatos); // Añadimos el callback
    //conexion1.addEventListener("timeout", tiempoVencido);  El evento ontimeout se dispara cuando se ha superado el tiempo de espera
    conexion1.send();
}

function procesarDatos() {
    if (conexion1.readyState == 4) {
        if (conexion1.status == 200) {
            let resultados = document.getElementById("resultados");
            resultados.innerHTML = ""; // Limpiar resultados previos

            try {
                // Con JSON.parse se convierte el texto JSON en un objeto JavaScript
                let datos = JSON.parse(conexion1.responseText); // Los datos JSON se recuperan al igual que el texto plano
                let peliculas = datos.Search;
                // console.log(peliculas);

                //Poblar el resultado de la busqueda
                if (peliculas != undefined) {
                // Crear tabla
                    let tabla = document.createElement("table");
                    tabla.border = "1";

                    // Crear encabezado de la tabla
                    let thead = document.createElement("thead");
                    thead.innerHTML = `
                        <tr>
                            <th>Titulo</th>
                            <th>Año</th>
                            <th>IMBD</th>
                            <th>Tipo</th>
                            <th>Poster</th>
                        </tr>
                    `;
                    tabla.appendChild(thead); //Agrega el encabezado a la tabla

                    let tbody = document.createElement("tbody"); //Crea el cuerpo de la tabla
                    // for (let f = 0; f < peliculas.length; f++) {
                    //     var salida = '';
                    //     let fila = document.createElement("tr");

                    //     salida +="<td>" + peliculas[f].Title + "</td>";
                    //     salida +="<td>" + peliculas[f].Year + "</td>";
                    //     salida +="<td>" + peliculas[f].imdbID + "</td>";
                    //     salida +="<td>" + peliculas[f].Type + "</td>";
                    //     salida += `<td><img src="${peliculas[f].Poster}" alt=""></td>`

                    //     fila.innerHTML = salida;
                    //     tbody.appendChild(fila);//Agrega fila al cuerpo
                    // }

                    for (const element of peliculas) {
                        var salida = "";
                        let fila = document.createElement("tr");
                        salida += `<td>${element.Title}</td>`;
                        salida += `<td>${element.Year}</td>`;
                        salida += `<td>${element.imdbID}</td>`;
                        salida += `<td>${element.Type}</td>`;
                        salida += `<td><img src="${element.Poster}" alt=""></td>`;

                        fila.innerHTML = salida;
                        tbody.appendChild(fila); //Agrega fila al cuerpo
                    }

                    tabla.appendChild(tbody); //Agrega el cuerpo a la tabla

                    resultados.appendChild(tabla); //Agregar la tabla al div
                } else {
                    resultados.innerHTML = "No existen datos para esa busqueda";
                    }
            } catch (ex) {
                document.getElementById("resultados").innerHTML = "Error al cargar parsear el JSON: " + ex.message;
                }
        } else {
            // Se ha recibido un código status distinto de 200
            document.getElementById("resultados").innerHTML = "Error al cargar los datos";
            }
    } else {
    document.getElementById("resultados").innerHTML = "Cargando...";
        }
}

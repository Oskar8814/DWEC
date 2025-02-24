let boton = document.getElementById('buscar');
boton.addEventListener('click', busqueda);
let boton2 = document.getElementById('buscar2');
boton2.addEventListener('click', busqueda2);


let conexion1;
function busqueda() {
    let artista = document.getElementById('artista').value;

    if (artista) {
        console.log(artista);
        conexion1 = new XMLHttpRequest() //Crea el obj ajax
        conexion1.open('GET',`https://api.reccobeats.com/v1/artist/search?searchText=${artista}`)
        conexion1.timeout = 3000;//Tiempo de espera a la api
        conexion1.addEventListener("readystatechange", cargarDatosArtista); //Añadir el callback
        conexion1.addEventListener("timeout", tiempoVencido);  //El evento ontimeout se dispara cuando se ha superado el tiempo de espera
        conexion1.send();
    }
    else{
        document.getElementById('resultados').innerHTML='Falta el Artista.';
    }
}

function busqueda2() {
    let album = document.getElementById('album').value;
    
    if (artista) {
        console.log(album);
        conexion1 = new XMLHttpRequest() //Crea el obj ajax
        conexion1.open('GET',`https://api.reccobeats.com/v1/album/search?searchText=${album}`)
        conexion1.timeout = 6000;//Tiempo de espera a la api
        conexion1.addEventListener("readystatechange", cargarDatosAlbum); //Añadir el callback
        conexion1.addEventListener("timeout", tiempoVencido);  //El evento ontimeout se dispara cuando se ha superado el tiempo de espera
        conexion1.send();
    }
    else{
        document.getElementById('resultados').innerHTML='Falta el Album.';
    }
}

function tiempoVencido() {
    document.getElementById("resultados").innerHTML = "Tiempo de espera vencido";
}

function cargarDatosArtista(e) {
    if (conexion1.readyState == 4) {
        if (conexion1.status==200) {
            let datos = JSON.parse(conexion1.responseText)
            let resultados = document.getElementById('resultados');
            resultados.innerHTML='';

            console.log(datos.content);
            if ((datos.content).length!==0) {
                try {
                    let tabla =document.createElement('table');
                    tabla.setAttribute('class','table table-bordered table-striped w-50 table-hover');
                    let thead = document.createElement('thead');

                    let codeH = '<tr><th>Nombre</th><th>Spotify</th></tr>';
                    thead.innerHTML=codeH;
                    tabla.appendChild(thead);

                    let tbody=document.createElement('tbody');
                    let codeB='';
                    for (const element of datos.content) {
                        codeB+=`<tr><td>${element.name}</td><td><a target='_blank' href=${element.href}>${element.href}</a></td></tr>`;
                    }
                    tbody.innerHTML=codeB;
                    tabla.appendChild(tbody);
                    resultados.appendChild(tabla);
                } catch (ex) {
                    document.getElementById("resultados").innerHTML = "Error al cargar parsear el JSON: " + ex.message;
                }
            } else {
                resultados.innerHTML='No hay datos de la busqueda';
            }
        } else {
            // Se ha recibido un código status distinto de 200
            document.getElementById("resultados").innerHTML ="Error al cargar los datos";
        }
    } else {
        document.getElementById("resultados").innerHTML = "Cargando...";
    }
}
function cargarDatosAlbum(e) {
    if (conexion1.readyState == 4) {
        if (conexion1.status==200) {
            let datos = JSON.parse(conexion1.responseText)
            let resultados = document.getElementById('resultados');
            resultados.innerHTML='';

            if ((datos.content).length!==0) {
                try {
                    let tabla =document.createElement('table');
                    tabla.setAttribute('class','table table-bordered table-striped w-75 table-hover');
                    
                    let thead = document.createElement('thead');
                    let codeH = '<tr><th>Tipo</th><th>Nombre</th><th>Autor</th><th>Total Canciones</th><th>Fecha de publicación</th><th>Enlace</th><th>Popularidad</th></tr>';
                    thead.innerHTML=codeH;
                    tabla.appendChild(thead);

                    let tbody=document.createElement('tbody');
                    let codeB='';
                    for (const element of datos.content) {
                        codeB+=`<tr>
                        <td>${element.albumType}</td>
                        <td>${element.name}</td><td>`;
                        for (const element2 of element.artists) {
                            codeB+=`${element2.name} <br>`;
                        }
                        codeB+=`</td>
                        <td>${element.totalTracks}</td>
                        <td>${element.releaseDate}</td>
                        <td><a target='_blank' href=${element.href}>${element.href}</a></td>
                        <td>${element.popularity}</td>
                        </tr>`;
        
                    }
                    tbody.innerHTML=codeB;
                    tabla.appendChild(tbody);
                    resultados.appendChild(tabla);
                } catch (ex) {
                    document.getElementById("resultados").innerHTML = "Error al cargar parsear el JSON: " + ex.message;
                }
            } else {
                resultados.innerHTML='No hay datos de la busqueda';
            }
        } else {
            // Se ha recibido un código status distinto de 200
            document.getElementById("resultados").innerHTML ="Error al cargar los datos";
        }
    } else {
        document.getElementById("resultados").innerHTML = "Cargando...";
    }
}
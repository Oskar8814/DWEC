// Escribe aquí tu código
addEventListener("load", inicializarEventos, false);

function inicializarEventos() {
    cargarCategorias();
}

let conexion1;
function cargarCategorias() {
    conexion1 = new XMLHttpRequest() //Crea el obj ajax
    conexion1.open("GET", "cargar_categorias_xml.php", true);
    conexion1.timeout = 3000;//Tiempo de espera a la api
    conexion1.addEventListener("readystatechange", cargarDatosCategorias ); //Añadir el callback
    conexion1.addEventListener("timeout", tiempoVencido);  //El evento ontimeout se dispara cuando se ha superado el tiempo de espera
    conexion1.send();
}

function tiempoVencido() {
    document.getElementById("inputProductos").innerHTML = "Tiempo de espera vencido";
}

function cargarDatosCategorias() {
    
    if (conexion1.readyState==4) {
        if (conexion1.status == 200) {
            // let resultados = document.getElementById('inputCategorias');
            // resultados.innerHTML='';
            try {
                let xmlDoc = conexion1.responseXML; // En la propiedad responseXML se almacena el XML (tiene una estructura similar al DOM)
                // Obtener todos los elementos <categoria> dentro del XML
                let categorias = xmlDoc.getElementsByTagName("categoria");
                // console.log(categorias)

                let myDiv = document.getElementById('inputCategorias')
                // let div = document.createElement('div');
                let codeB ='';

                for (let i = 0; i < categorias.length; i++) {
                    let id = categorias[i].getElementsByTagName('id')[0].textContent;
                    let nombre= categorias[i].getElementsByTagName('nombre')[0].textContent;
                    
                    codeB+=`<div class="col"><button onclick=cargarProductos(${id}) class="btn btn-info">${nombre}</button></div>`;
                }
                myDiv.innerHTML=codeB;
                

            } catch (ex) {
                document.getElementById("inputProductos").innerHTML = "Error al cargar extraer del XML: " + ex.message;
            }
        } else {
            // Se ha recibido un código status distinto de 200
            document.getElementById("inputProductos").innerHTML = "Error al cargar los datos";
        }
    }else{
        document.getElementById("inputProductos").innerHTML = "Cargando...";
    }
}

function cargarProductos(id) {
    console.log(id);
    conexion1 = new XMLHttpRequest() //Crea el obj ajax
    conexion1.open("GET", `cargar_productos_json.php?id_categoria=${id}`, true);
    conexion1.timeout = 3000;//Tiempo de espera a la api
    conexion1.addEventListener("readystatechange", cargarDatosProductos ); //Añadir el callback
    conexion1.addEventListener("timeout", tiempoVencido);  //El evento ontimeout se dispara cuando se ha superado el tiempo de espera
    conexion1.send();
}

function cargarDatosProductos() {
    if (conexion1.readyState==4) {
        if (conexion1.status == 200) {
            let myDiv = document.getElementById('inputProductos');
            // let resultados = document.getElementById('resultados').innerHTML='';
            try {
                // Con JSON.parse se convierte el texto JSON en un objeto JavaScript
                let datos = JSON.parse(conexion1.responseText); // Los datos JSON se recuperan al igual que el texto plano                
                
                //Poblamos el div productos
                var Code2 = "";
                
                for (const element of datos) {
                    Code2+= `<div class="card col m-2" style="width: 18rem;">
                            <img src="images/${element.imagen}" class="card-img-top" alt="">
                            <div class="card-body">
                                <h3 class="card-title">${element.nombre}</h3>
                                <h4 class="card-text">${element.precio} €</h4>
                                <a onclick="cargarDetalles(${element.id})" class="btn btn-primary">Detalles</a>
                            </div>
                            </div>
                            `;
                }

                myDiv.innerHTML=Code2;
            } catch (ex) {
                document.getElementById("inputProductos").innerHTML = "Error al cargar extraer del Json: " + ex.message;
            }
        } else {
            // Se ha recibido un código status distinto de 200
            document.getElementById("inputProductos").innerHTML = "Error al cargar los datos";
        }
    }else{
        document.getElementById("inputProductos").innerHTML = "Cargando...";
    }
}

function cargarDetalles(id) {
    let descripcion = document.getElementById('inputDescripcion');
    let detalles ='';
    let datos2 = JSON.parse(conexion1.responseText);
    for (const element2 of datos2) {
        if (element2.id==id) {
            detalles = element2.descripcion
        }
    }
    descripcion.innerHTML=detalles;
}
function definirAtributo() {
    let tabla = document.getElementById("tabla1");
    tabla.setAttribute("style",`border: solid 5px black`);
}

function borrarAtributo() {
    let tabla = document.getElementById("tabla1");
    tabla.removeAttribute("style")
}

function modificarEnlace() {
    let enlace1 = document.getElementById("enlace1");
    let enlace2 = document.getElementById("enlace2");
    
    let attEnlace1 = enlace1.getAttribute("href");
    enlace2.setAttribute("href", attEnlace1);
}

function mover() {
    let divTextos = document.getElementById("textos");
    let divTextosNuevo=document.getElementById("textosNuevo");

    // let divClone = divTextos.cloneNode(true); Con este copiaria el de arriba y lo pegaria abajo
    divTextosNuevo.appendChild(divTextos);
}

function añadirValores() {
    const dias=['lunes','martes','miércoles','jueves','viernes','sábado','domingo'];
    let li = ""
    let ol = document.getElementById("listaOrdenada");

    //Crea la cadena con todos los li (Cada dia será un li)
    for (const dia of dias) {
        li += `<li>${dia}</li>`
    }

    //Añade la cadena de li al html en el ol
    ol.innerHTML = li;
}

function agregarPunto() {
    let referencia = document.getElementById("lista1");
    let li1 = referencia.firstElementChild;
    //li1.innerText = "Opción A."; // Para añadir solo al primer li
    
    //Si hubiera que añadir punto a todos los li
    while (li1 != null) {
        li1.innerText = li1.innerText + ".";
        li1 = li1.nextElementSibling;
    }

}

function cambiaEstiloLista() {
    let lista = document.getElementById("lista");
    let estilo = document.getElementById("estiloLista").value;
    lista.style.listStyleType = estilo;
}

function creaInput() {
    let cantidad = parseInt(document.getElementById("valores").value);
    let inp ="";
    let form = document.getElementById("form");

    for (let i = 0; i < cantidad; i++) {
        inp+= "<input type='text' name='' id=''>"
    }

    form.innerHTML = inp;
}
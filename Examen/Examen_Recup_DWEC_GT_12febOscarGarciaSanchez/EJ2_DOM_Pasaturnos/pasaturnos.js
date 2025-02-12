// Escribe aquí tu código

let boton = document.getElementById('crear-pasaturnos');
boton.addEventListener('click',creaturno);

function creaturno(){
    let mydiv = document.getElementById('pasaturnos');

    // let div = document.createElement('div');
    // let table = document.createElement('table');
    // let tbody = document.createElement('tbody');
    let inpText = document.getElementById('input-texto');
    let texto = inpText.value;
    let inpNum = document.getElementById('input-valor-inicial');
    let numero = inpNum.value;
    if (numero>20) {
        numero=0;
    }
    let inpColorFondo = document.getElementById('input-color-fondo');
    let colorFondo = inpColorFondo.value;
    let inpColorText = document.getElementById('input-color-texto');
    let colorText = inpColorText.value;
    console.log(colorFondo);

    
    let code =`<div id="pasaturnos0" class="forma" style="color:${colorText}; background-color:${colorFondo};">
            <table>
                <tr><td colspan="3">${texto}</td></tr>
                <tr><td id="contador" colspan="3" style="font-size: 6rem; align-self: center;">${numero}</td></tr>
                <tr><td> <input type="button" onclick=disminuir(this) value="-"></td><td> <input type="button" onclick=aumentar(this) value="+"></td><td> </td></tr>
                <tr><td colspan="3"><input type="button" onclick=eliminar(this) value="Eliminar"></td></tr>  
            </table>`;
    // mydiv.innerHTML=code;
    mydiv.insertAdjacentHTML("beforeend",code);
}

function eliminar(elto) {
    let eliminar = elto.parentElement.parentElement.parentElement.parentElement.parentElement
    console.log(eliminar);
    eliminar.remove();
}

function disminuir(elto) {
    // let contador = document.getElementById('contador');
    let contador =elto.parentElement.parentElement
    let cont = contador.previousElementSibling;
    console.log(cont)
    let numero = cont.textContent;
    console.log(numero);
    if (numero>0) {
        numero-=1;
    }else{
        numero=0;
    }
    cont.innerHTML=`<tr><td id="contador" colspan="3" style="font-size: 6rem; align-self: center;">${numero}</td></tr>`;
}

function aumentar(elto) {
    let contador =elto.parentElement.parentElement;
    let cont = contador.previousElementSibling;
    let  numero = parseInt(cont.textContent) ;

    console.log(numero);
    if (numero<20) {
        numero+=1
    }else{
        numero=0;
    }
    cont.innerHTML=`<tr><td id="contador" colspan="3" style="font-size: 6rem; align-self: center;">${numero}</td></tr>`;
}
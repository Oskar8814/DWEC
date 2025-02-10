// Requisitos:
//     Números de tarjeta con 16 dígitos en grupos de 4, separados por - o espacio ( ):

function comprobarCorreo(credStr){
    let patron = /^(?:\d{4}[-\s]?){3}\d{4}|\d{15}$/
;

    if (patron.test(credStr)) {
        return true;
    }else{
        return false;
    }
}
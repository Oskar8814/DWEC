// Requisitos:
//     Debe contener un nombre de usuario con letras, números, puntos, guiones o guiones bajos.
//     Debe incluir el símbolo @.
//     Debe tener un dominio válido compuesto por letras y opcionalmente un punto seguido de una extensión (como .com o .org).
//     No debe contener espacios ni caracteres especiales fuera de los permitidos.

function comprobarCorreo(correoStr){
    let patron = /^[\w.-]+@[\w.-]+\.(com|org)$/i
;

    if (patron.test(correoStr)) {
        return true;
    }else{
        return false;
    }
}
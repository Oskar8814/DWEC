// Crea una función llamada terminaVocalAcentuada que valide si una palabra termina en vocal acentuada, 
// sin distinguir mayúsculas de minúsculas. 
// Haz un testeo de la función

function terminaVocalAcentuada(palabra) {
    let patronPalabra = /\w[áéíóú]$/i;
    return patronPalabra.test(palabra);
}

// Crea una función llamada validaDNI que tendrá como argumento el DNI que se desea validar. 
// Un DNI tiene una estructura correcta si consta de 8 dígitos, un guión opcional y 
// una de las siguientes letras: trwagmyfpdxbnjzsqvhlcke (la letra podrá estar en minúsculas o mayúsculas).
//  Haz un testeo de la función.

function validaDNI(dni) {
    let patronDNI = /^\d{8}-?[trwagmyfpdxbnjzsqvhlcke]$/i
    return patronDNI.test(dni);
}

// Crea una función llamada validaNumeroEntero que valide si un string que representa un número entero es correcto. 
// Dicho número podrá estar precedido opcionalmente por los caracteres + o - 
// (por ejemplo se consideran válidos: “123”, “-25”, “+4882”).  Haz un testeo de la función.

function validaNumeroEntero(stringNum) {
    let patronNum = /^[+-]?\d+$/;
    return patronNum.test(stringNum);
}

// Crea una función llamada validaNumeroDecimal que valide 
// si un string que representa un número entero o decimal es correcto. 
// Dicho número podrá estar precedido opcionalmente por los caracteres
//  + o - y se usará la coma como separador decimal
//  (por ejemplo se consideran válidos: “123”, “-25,09”, “+0,23”).  Haz un testeo de la función.

function validaNumeroDecimal(stringNum) {
    let patronNumDec = /^[+-]?\d+,\d+$/;
    return patronNumDec.test(stringNum);
}

// Crea una función llamada validaHora que valide si un string 
// que representa una hora con el formato hh:mm:ss usando la representación de 24 horas.  
// Haz un testeo de la función.

function validaHora(stringHora) {
    let patronHora = /^((0[0-9])|(1[0-9])|(2[0123])):(([0-5]\d)):(([0-5]\d))$/;
    return patronHora.test(stringHora);
}

// Crea una función llamada extraerPosicionesEmails que tenga como argumento de entrada un texto 
// (dato string) y devuelva un vector con todas las posiciones en que se haya encontrado 
// un emails en el texto de entrada.
// Para validar un email utiliza la siguiente expresión regular:


// function extraerPosicionesEmails(texto) {
//     let patronEmail = /\b\w+@([a-zA-Z_]+\.)+[a-zA-Z]{2,6}\b/;
//     let posiciones = [];
//     let emailsEncontrados = texto.match(patronEmail);


//     return posiciones;
// }

// let texto = "Atención al cliente: soporte@ejemplo.com Recursos humanos: rrhh@empresa.com Ventas internacionales: sales@globaltrading.com";

// Crea una función llamada validaDireccionIP que valide si un string que representa una dirección IP tiene un formato correcto. 
// La función debe devolver true o false.  Haz un testeo de la función. Realiza un testeo con Jasmine de al menos 5 direcciones 
// IPs válidas y otras 5 que no lo sean (Ej: “192.168.16.20”  => Son cuatro bytes en formato decimal (0-255) separados por un punto)

function validaDireccionIP(direccionIP) {
    
    let patronIP = /^([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/;

    if (!patronIP.test(direccionIP)) {
        return false;
    }

    // Obtener cada parte de la IP para comprobar si se encuentra entre 0 y 255
    let partes = direccionIP.split(".");

    for (let i = 0; i < partes.length; i++) {
        let numero = parseInt(partes[i], 10);
        if (numero < 0 || numero > 255) {
            return false;
        }
    }

    return true;
}


// Crea una función llamada validaNumerosSeparados(dato) que tenga un argumento de entrada de tipo string 
// y valide si dicho dato tiene el formato de tres números del 0 al 9 separados por un guión “-” o por un punto “.”
//  Aunque el separador entre los número puede ser el guión o el punto debe usarse el mismo 
//  (por ejemplo, serían válidos “3-8-5” y “3.8.5” pero no sería válido “3.8-5” o “3-8.5” porque se ha mezclado el tipo de separador).

function validaNumerosSeparados(dato) {
    let patron = /^\d(,|.)\d\1\d$/;
    return patron.test(dato);
}

// Crea una función llamada extraeExpresionesMatemáticas que use como argumento de entrada un string 
// que contendrá entre llaves expresiones matemáticas. 
// La función debe devolver un array que contenga las expresiones matemáticas.

function extraeExpresionesMatemáticas(texto) {
    let patron = /{.+?}/g;
    let expresiones = [];

    expresiones = texto.match(patron);

    return expresiones;
}
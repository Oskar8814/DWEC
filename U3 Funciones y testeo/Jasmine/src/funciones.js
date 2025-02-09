//1.Crea una función llamada comprobarEsPar que tendrá un parámetro de entrada que será un número. 
//La salida de la función será un booleano (true si el número pasado como argumento es par o false en caso contrario).  
//Recuerda seguir las pautas vistas en el tema para que nuestro código sea reutilizable.

function comprobarEsPar (numero){
    //if (numero != parseInt(numero)) throw new Error("Se esperaba un número entero");
    if (Math.trunc(numero)!= numero) throw new Error("Se esperaba un número entero")
    if (numero % 2 == 0) {
        return true;
    } else {
        return false;
    }
}



//2.Crea una función llamada verCalificacion que tenga un parámetro de entrada, que será una nota entera entre 0 y 10. 
//La función debe usar internamente una estructura de tipo Switch y debe devolver un string que se corresponda con la nota que se le ha pasado como argumento:
// 0-4 (devuelve “INSUFICIENTE”), 5 (devuelve “SUFICIENTE”), 6 (devuelve “BIEN”), 7-8 (devuelve “NOTABLE”), 9-10 (devuelve “SOBRESALIENTE”). 
//Si el valor está fuera del rango 0-10 debe devolver “VALOR INCORRECTO”.

function verCalificacion (calificacion){
    switch (calificacion) {
        case 0: 
        case 1:
        case 2: 
        case 3:
        case 4:
            return "INSUFICIENTE";
            break;
        case 5:
            return "SUFICIENTE";
            break;
        case 6: 
            return "BIEN";
            break;
        case 7:
        case 8:
            return "NOTABLE";
            break;
        case 9:
        case 10:
            return "SOBRESALIENTE";
            break
        default:
            return "VALOR INCORRECTO"
            break;
    }
}

//Crea una función llamada verCalificacionDecimal que tenga un parámetro de entrada, que será una nota decimal entre 0 y 10 (por ejemplo 5.2). 
//La función debe devolver un string que se corresponda con la nota que se le ha pasado como argumento: 
//menor que 5 (devuelve “INSUFICIENTE”), entre 5 y menor que 6 (devuelve “SUFICIENTE”), entre 6  y menor que 7 (devuelve “BIEN”), entre 7 y menor que 9 (devuelve “NOTABLE”), entre 9 y 10 (devuelve “SOBRESALIENTE”). 
//Si el valor está fuera del rango 0-10 debe devolver “VALOR INCORRECTO”.


function verCalificacionDecimal (nota){
    if(nota >= 0 && nota< 5){
        return "INSUFICIENTE";
    }else if (nota>=5 && nota < 6){
        return "SUFICIENTE";
    }else if (nota >= 6 && nota < 7){
        return "BIEN";
    }else if (nota >= 7 && nota < 9){
        return "NOTABLE";
    }else if (nota >= 9 && nota <= 10){
        return "SOBRESALIENTE";
    }else{
        return "VALOR INCORRECTO";
    }
}

// Crea una función llamada parametrosCircunferencia que tenga como parámetro de entrada el radio de una circunferencia. 
// La función debe devolver el perímetro y el área de la circunferencia (debes buscar la fórmula para realizar los respectivos cálculos). 
// Redondea los cálculos (el del perímetro y el área a dos decimales).
// Observación: debes encapsular tanto el perímetro como el área en una sola estructura para poder devolverla en un solo return.
// Perímetro = 2(pi) por radio. Área = pi por radio al cuadrado.

function parametrosCircunferencia (radio){
    let perimetro = 2*Math.PI * radio;
    let area = Math.PI * Math.pow(radio,2);

    return {perimetro: redondearDecimales(perimetro,2), area: redondearDecimales(area,2)};
}

function redondearDecimales(numero,decimales){
    return  Math.round(numero * Math.pow(10,decimales)) / Math.pow(10,decimales);
}

// Crea una función llamada esBisiesto que tenga como parámetro de entrada un número, 
// que se corresponderá con un año. La función devolverá true si el año es bisiesto y false en caso contrario.
// Cada año que sea divisible por 4 es año bisiesto, excepto para aquellos años que sean divisibles por 100, 
// pero si un año, además de divisible por 100 también lo por 400 también sí será bisiesto. Por ejemplo, los años 1700, 1800, y 1900 no son bisiestos, 
// pero el año 1600 y 2000 sí lo son.

function esBisiesto (numero){
    if (numero % 4 === 0 && (numero % 100 !== 0 || numero % 400 === 0)){
        return true;
    }else{
        return false;
    }
}

//Realiza un conversor de hexadecimal a decimal.  La función se llamará hexa2decimal y recibirá como entrada un número expresado en hexadecimal (por ejemplo “FA8”) 
// y devolverá un dato de tipo number, que se corresponderá con la conversión a decimal (para la entrada “FA8” debe devolver 4008). 
// Además, la función debe funcionar para valores hexadecimales con letras tanto minúsculas como mayúsculas (por ejemplo, podremos pasarle “FA8” o “fa8”).
// Utiliza una función auxiliar llamada digitoHexa2Dec a la que le pases un sólo dígito hexadecimal (del “0” al “9” y de la “A” a la “F”) 
// y devuelva el equivalente decimal (un número del 0 al 15). Si se le pasa a esta función un dígito hexadecimal incorrecto (por ejemplo “X”) 
// deberá lanzar un error con el texto “Dígito hexadecimal no válido” (investiga cómo lanzar errores en JavaScript).

function hexa2decimal(hexadecimal) {
    let decimal = 0;
    const hexDigits = hexadecimal.toUpperCase();  

    for (let i = 0; i < hexDigits.length; i++) {
        const digito = hexDigits[i];
        decimal = decimal * 16 + digitoHexa2Dec(digito);
    }

    return decimal;
}


function digitoHexa2Dec(digito){
    digito = digito.toUpperCase();
    switch (digito) {
        case "0":
            return 0;
            break;
        case "1":
            return 1;
            break;
        case "2":
            return 2;
            break;
        case "3":
            return 3;
            break;
        case "4":
            return 4;
            break;
        case "5":
            return 5;
            break;
        case "6":
            return 6;
            break;
        case "7":
            return 7;
            break;
        case "8":
            return 8;
            break;
        case "9":
            return 9;
            break;
        case "A":
            return 10;
            break;
        case "B":
            return 11;
            break;
        case "C":
            return 12;
            break;
        case "D":
            return 13;
            break;
        case "E":
            return 14;
            break;
        case "F":
            return 15;
            break;
        default:
            throw new Error("Dígito hexadecimal no válido");
            return Error;
            break;
    }
}
function bonoloto(){
    const arrayNum = [];
    while (arrayNum.length < 6) {
        let num = Math.floor(Math.random() * 49) + 1;
        
        if (!arrayNum.includes(num)) {
            arrayNum.push(num);
        }
    }
    arrayNum.sort(function(a, b){return a - b});
    
    return arrayNum;
}

function hasDuplicates(arr) {
    return arr.some(x => arr.indexOf(x) !== arr.lastIndexOf(x));
}

// Crea una funcion llamada promedio() que tenga como parámetro un array de números (que puede ser disperso). 
// La función calculará la media arimética de los elementos del array y devolverá un number. 
// La función no realizará ningún tipo de redondeo. La función debe comprobar que el argumento es un array, y en caso contrario lanzará un error. 
// Además comprobará que todos los elementos del array (descontando los posible elementos dispersos) son de tipo number y en caso contrario lanzará un error.

function promedio(array){
    if (Array.isArray(array)) {
        
        media = 0;
        sumatotal= 0;
        arrayfiltrado = [];
        //Comprobacion de que los elementos del array sean tipo number y filtrar el array quitando los elementos dispersos.
        array.forEach(element => {
            if (typeof element === "number") {
                arrayfiltrado.push(element);
            }else{
                throw new Error("El elemento del Array no es de tipo Number.");
            }
        });

        //Datos para calcular el promedio (suma de todos los datos)
        arrayfiltrado.forEach(element=>{
            sumatotal+=element;
        })

        //Calcular la media aritmetica
        media = sumatotal/arrayfiltrado.length;
        return Number(media);
    }else{
        throw new Error("El parámetro no es un Array.");
    }
    
}
// console.log(comprobarEsPar(2));
// console.log(verCalificacion(7));
// console.log(verCalificacionDecimal(9.4));
// console.log(parametrosCircunferencia(9));
// console.log(esBisiesto(1900));
// console.log(hexa2decimal("FX8"));


// Función auxiliar para convertir un dígito hexadecimal a decimal
// function digitoHexa2Dec(digito) {
//     const digitosValidos = "0123456789ABCDEF";
//     const valor = digitosValidos.indexOf(digito.toUpperCase()); // Paso 

//     if (valor === -1) {
//         throw new Error("Dígito hexadecimal no válido");
//     }

//     return valor;
// }
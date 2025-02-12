// Escribe aquí tu código

let inpNombre = document.getElementById('inputNombre');
inpNombre.setAttribute("required","required");

let inpApellido = document.getElementById('inputApellido1');
inpApellido.setAttribute("required","required");

let inpApellido2 = document.getElementById('inputApellido2');
inpApellido2.setAttribute("required","required");

let inpfechaNac = document.getElementById('inputFechaNacimiento');
inpfechaNac.setAttribute("required","required");

let inputTipoVehiculo = document.getElementById('inputTipoVehiculo');
inputTipoVehiculo.setAttribute("required","required");

// Validacion para la fecha

const inputFechaCita = document.getElementById("inputFechaCita");
const errorFechaCita = document.createElement("span"); // Crear un span para mostrar el error
errorFechaCita.style.color = "red"; // Estilo del error
inputFechaCita.insertAdjacentElement("afterend", errorFechaCita); // Insertar el span después del input

function validarFechaCita() {
    const fechaSeleccionada = new Date(inputFechaCita.value);
    const diaSemana = fechaSeleccionada.getDay(); // Obtiene el día de la semana (0 = domingo, 1 = lunes, etc.)

    // Validar si el día está entre lunes (1) y viernes (5)
    if (diaSemana >= 1 && diaSemana <= 5) {
        errorFechaCita.textContent = ""; // Borrar el mensaje de error
        inputFechaCita.setCustomValidity(""); // Validación correcta
    } else {
        errorFechaCita.textContent = "El día de la cita sólo puede ser de lunes a viernes.";
        inputFechaCita.setCustomValidity("Invalid"); // Marcar el campo como inválido
    }
}

// Escuchar cambios en el campo de fecha
inputFechaCita.addEventListener("input", validarFechaCita);

// VALIDACION PARA LA HORA

const inputHoraCita = document.getElementById("inputHoraCita");
const errorHoraCita = document.createElement("span"); 
inputHoraCita.insertAdjacentElement("afterend",errorHoraCita);
// Estilizar los mensajes de error
errorHoraCita.style.color = "red";


// Función para validar la hora
function validarHoraCita() {
    const fechaSeleccionada = new Date(inputFechaCita.value);
    const diaSemana = fechaSeleccionada.getDay();
    const horaSeleccionada = inputHoraCita.value;

    if (!horaSeleccionada) {
        errorHoraCita.textContent = "La hora de la cita es obligatoria.";
        inputHoraCita.setCustomValidity("Invalid");
        return;
    }

    const hora = parseInt(horaSeleccionada.split(":")[0], 10); // Obtener la hora (parte antes del ":")
    const minuto = parseInt(horaSeleccionada.split(":")[1], 10); // Obtener los minutos (parte después del ":")
    const horaEnMinutos = hora * 60 + minuto; // Convertir la hora a minutos para comparaciones más fáciles

    if (diaSemana >= 1 && diaSemana <=5 ) { // Lunes a viernes
        if (horaEnMinutos >= 480 && horaEnMinutos <= 870 || horaEnMinutos >= 975 && horaEnMinutos <= 1170) { // Entre 8:00 y 14:30 o 16:15 y 19:30
            errorHoraCita.textContent = ""; // Borrar mensaje de error
            inputHoraCita.setCustomValidity(""); // Validación correcta
        } else {
            errorHoraCita.textContent = "La hora debe estar entre las 8:00 y las 14:15 o entre 16:15 y 19:30.";
            inputHoraCita.setCustomValidity("Invalid"); // Marcar el campo como inválido
        }
    } else {
        errorHoraCita.textContent = ""; // Limpiar mensaje si día no es válido aún
        inputHoraCita.setCustomValidity("");
    }
}

// Escuchar cambios en la hora
inputHoraCita.addEventListener("input", validarHoraCita);

// Validacion para el tipo de vehiculo con edad 

inpfechaNac.addEventListener('input', obtenerEdad)

function diferenciaDeDias(fecha1, fecha2){
    
    let diff1 = fecha1.getTime();
    let diff2 = fecha2.getTime();
    let msgDiff=diff1-diff2;
    let dias = msgDiff/1000/60/60/24;
    
    return dias;
}
function obtenerEdad() {
    let fechaSeleccionada = new Date(inpfechaNac.value);
    let diaActual = new Date();
    
    let dias = diferenciaDeDias(fechaSeleccionada, diaActual)
    let años = dias/365;
    console.log(fechaSeleccionada);
    console.log(diaActual);
    return años;
}

let edad = obtenerEdad();
console.log(edad);

const fieldset = document.getElementsByTagName('fieldset');
if (edad>16) {
    fieldset[0].disabled =false;
}
if (edad>18) {
    fieldset[1].disabled=false;
}

const inputMotocicletaMatricula = document.getElementById('inputMotocicletaMatricula');
const errorMatriculaMoto = document.createElement("span"); 
inputMotocicletaMatricula.insertAdjacentElement("afterend",errorHoraCita);
// inputMotocicletaMatricula.setAttribute("pattern","^([0-9]{4})-([A-Z]{3})$");
let matricula = inputMotocicletaMatricula.value;
let patron =/^([0-9]{4})-([A-Z]{3})$/;
if (patron.test(matricula)) {
    errorMatriculaMoto.textContent = ""; // Borrar mensaje de error
    inputMotocicletaMatricula.setCustomValidity(""); // Validación correcta
} else {
    errorMatriculaMoto.textContent = "Matricula no correcta"; //  mensaje de error
    inputMotocicletaMatricula.setCustomValidity("Invalid"); // Validación incorrecta
}





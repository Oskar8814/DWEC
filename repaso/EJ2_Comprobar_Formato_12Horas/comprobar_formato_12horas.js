// Formato h:mm am|pm (ej. 8:12 pm, 12:15 am)
function comprobarHora(fechaHoraStr){
    let patron = /^(0?[1-9]|1[012]):([0-5]\d)\s(am|pm)$/;
    let patron2 = /^(0?[1-9]|1[0-2]):[0-5][0-9]\s(am|pm)$/i;

    if (patron.test(fechaHoraStr)) {
        return true;
    }else{
        return false;
    }
}


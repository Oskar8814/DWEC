function areaPiramide(lado,altura){
    let area = 0;
    if (lado < 0 || altura < 0 ) {
        throw new Error("Los parámetros de entrada deben tener valores positivos");
        
    }else{
        area = lado*(lado + Math.sqrt(4 * Math.pow(altura,2)+Math.pow(lado,2)));
        return redondearDecimales(area,5);
    }
}

function redondearDecimales(numero,decimales){
    return  Math.round(numero * Math.pow(10,decimales)) / Math.pow(10,decimales);
}
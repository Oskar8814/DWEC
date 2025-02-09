function numeroDiasFechas (fechaDesde, fechaHasta){
    eltDesde = fechaDesde.split("/");
    eltHasta = fechaHasta.split("/");

    //Parsear a tipo number ambos arrays
    eltDesde[0] = parseInt(eltDesde[0], 10);  // Día
    eltDesde[1] = parseInt(eltDesde[1], 10);  // Mes
    eltDesde[2] = parseInt(eltDesde[2], 10);  // Año
    
    eltHasta[0] = parseInt(eltHasta[0], 10);  // Día
    eltHasta[1] = parseInt(eltHasta[1], 10);  // Mes
    eltHasta[2] = parseInt(eltHasta[2], 10);  // Año

    if (eltDesde[0] < 0 || eltHasta[0] < 0 || eltDesde[0]>31 || eltHasta[0]>31) {
        throw new Error("Alguna(s) de las fechas de entrada es incorrecta");
    };
    if (eltDesde[1] <= 0 || eltHasta[1] <= 0 || eltDesde[1]>12 || eltHasta[1]>12) {
        throw new Error("Alguna(s) de las fechas de entrada es incorrecta");
    };
    if (eltDesde[2] <= 0 || eltHasta[2] <= 0) {
        throw new Error("Alguna(s) de las fechas de entrada es incorrecta");
    };

    let fecha1 = new Date(eltDesde[2],eltDesde[1]-1,eltDesde[0]); //Recordar el -1 ya que los meses indexan en 0 (Enero) 1(Feb)....
    let fecha2 = new Date(eltHasta[2],eltHasta[1]-1,eltHasta[0]); //Recordar el -1 ya que los meses indexan en 0 

    // if (fecha1.getDate != eltDesde[0]) {
    //     throw new Error("Alguna(s) de las fechas de entrada es incorrecta");
    // }
    // if (fecha1.getMonth != eltDesde[1]-1) {
    //     throw new Error("Alguna(s) de las fechas de entrada es incorrecta");
    // }
    // if (fecha1.getFullYear != eltDesde[2]) {
    //     throw new Error("Alguna(s) de las fechas de entrada es incorrecta");
    // }
    


    let diff1=fecha1.getTime();
    let diff2=fecha2.getTime();

    //const MSG_UN_DIA = 24*60*60*1000;
    //let dias2 = Math.round((fecha2-fecha1)/MSG_UN_DIA);

    let diffMsg = Math.abs(diff2-diff1);
    let dias = diffMsg/1000/60/60/24;
    
    return dias; //Aplicar el Math.round()
} 

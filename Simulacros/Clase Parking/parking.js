class Parking {
    static ERROR_PLAZA_SIN_VEHICULO = "No hay ningún vehículo en esa plaza";

    // Escribe tu código aquí

    //constructor
    constructor(plazas,costeMinuto){
        this._estacionamiento = Array(plazas).fill(null);
        this._costeMinuto = costeMinuto;
        this._registroEntrada = {};
    }

    //Metodos
    // Implementa un método llamado entradaVehiculo que permita 
    // indicar la matrícula del vehículo, el número de plaza que va
    //  a ocupar y la fecha y hora en la que entra. Por ejemplo, 
    //  para un vehículo con matrícula "8025JHH", que va ocupar la plaza 
    // 7 y que entra a las 14:30 del 5/11/2023 se indicará mediante:
    

    entradaVehiculo(matricula,numPlaza,fechaHoraEntrada) {
        if (this._estacionamiento[numPlaza - 1] != null) {
            throw new Error("La plaza ya esta ocupada");
        }else{
            this._estacionamiento[numPlaza - 1] = matricula; 
        }

        let fecha = this.convertirFecha(fechaHoraEntrada.trim());
        this._registroEntrada[matricula] = fecha;
    }

    //Funcion aux para formatear la fecha
    convertirFecha(fecha) {
        const [fechaPart, horaPart] = fecha.split(" ");
        const [dia, mes, anio] = fechaPart.split("/");
        const [horas, minutos] = horaPart.split(":");
        return new Date(anio, mes - 1, dia, horas, minutos);
    }

    // Implementa dos propiedades getter llamadas plazasLibres y plazasOcupadas
    // que devuelvan el número de plazas libres y ocupadas del parking respectivamente.

    //Getters

    get plazasLibres(){
        let cantidadLibre = 0;
        for (let i = 0; i < this._estacionamiento.length; i++) {
            if (this._estacionamiento[i]===null) {
                cantidadLibre++;
            }
            
        }
        return cantidadLibre;
    }

    get plazasOcupadas(){
        let cantidadOcupadas = 0;
        for (const plaza of this._estacionamiento) {
            if (plaza!== null) {
                cantidadOcupadas++;
            }
        }
        return cantidadOcupadas;
    }


    // Implementa un método salidaVehiculo al cuál podamos indicarle 
    // el número de plaza y la fecha y hora en la que sale el vehículo. 
    // Este método debe devolver un objeto literal que contenga la matrícula 
    // de coche que sale, el tiempo que ha estado estacionado y el coste del 
    // estacionamiento.

    salidaVehiculo(numPlaza,fechaHoraSalida){
        if (this._estacionamiento[numPlaza -1] === null) {
            throw new Error(Parking.ERROR_PLAZA_SIN_VEHICULO);
        }

        let fechaSalida = this.convertirFecha(fechaHoraSalida);
        let fechaEntrada = this._registroEntrada[this._estacionamiento[numPlaza - 1]];

        let tiempoTranscurrido = fechaSalida - fechaEntrada;
        let tiempoTranscurridoMin =tiempoTranscurrido/1000/60;

        let precio = this._costeMinuto * tiempoTranscurridoMin;

        let vehículoSalida = {
            matricula: this._estacionamiento[numPlaza-1],
            minutosEstacionamiento: tiempoTranscurridoMin,
            costeEstacionamiento: precio,
        };

        this._estacionamiento[numPlaza - 1] = null;
        
        return vehículoSalida;

    }

}

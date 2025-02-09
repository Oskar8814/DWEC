class Reserva {
    //Constructor
    constructor(nombre, dni, fechaEntrada, fechaSalida) {
        this._nombre = nombre;
        this._dni = dni;
        //Error para evitar que se creen instancias con fecha de salida antes que fecha de entrada
        if (this.parsearFecha(fechaEntrada)>this.parsearFecha(fechaSalida)) {
            throw new Error("Fecha de salida debe ser posterior a la de entrada");
        }
        this._fechaEntrada = fechaEntrada;
        this._fechaSalida = fechaSalida
    }

    //Metodo para pasar una fecha de string a tipo Date.(Usado para el error.) Seria util para usar en los metodos/fun de abajo.dddd
    parsearFecha(fecha){
        let eltFecha = fecha.split("/");
        let fechaDate = new Date(eltFecha[2],eltFecha[1]-1,eltFecha[0]);
        return fechaDate;
    }

    //Getter y Setter
    get nombre (){
        return this._nombre;
    }
    set nombre(nuevoNombre){
        this._nombre = nuevoNombre;
    }
    get dni (){
        return this._dni;
    }
    set dni (newDni){
        this._dni = newDni;
    }
    get fechaEntrada (){
        return this._fechaEntrada;
    }
    set fechaEntrada(newFechaEntrada){
        this._fechaEntrada = newFechaEntrada;
    }
    get fechaSalida (){
        return this._fechaSalida;
    }
    set fechaSalida(newFechaSalida){
        this._fechaSalida = newFechaSalida;
    }
    // Implementa una propiedad getter llamada codigoCliente que devuelva el código del cliente, 
    // el cual estará formado por la primera inicial del nombre de pila más el primer apellido más los tres últimos dígitos del DNI (y todo en mayúsculas). 
    // Por ejemplo, con los datos del supuesto debería devolver "LFRANCO629" "Apellido1;Apellido2; Nombre de Pila"

    get codigoCliente(){
        let nombre = this._nombre;
        let dni = this._dni;

        let eltNombre = nombre.split(";");
        let inicial = eltNombre[2].charAt(0);
        let Apellido1 = eltNombre[0];
        let cifraDni = dni.substring(dni.length-1, 5);
        let cifraDni2 = dni.substr(dni.length-4,3);//Otra forma de coger las cifras deseadas.
        
        let codigoCliente = inicial.concat(Apellido1,cifraDni);
        codigoCliente = codigoCliente.toUpperCase();
        return codigoCliente;
    }

    get numeroDiasEstancia (){
        let fechaEntrada = this._fechaEntrada;
        let fechaSalida =this._fechaSalida;

        let eltfechaEntrada = fechaEntrada.split("/");
        let eltfechaSalida = fechaSalida.split("/");

        //Pasar las fechas de string a date
        let fechaEntradaDate = new Date(eltfechaEntrada[2],eltfechaEntrada[1]-1,eltfechaEntrada[0]);
        let fechaSalidaDate = new Date(eltfechaSalida[2],eltfechaSalida[1]-1,eltfechaSalida[0]);

        let diffEntrada = fechaEntradaDate.getTime();
        let diffSalida = fechaSalidaDate.getTime();

        let msgDiff = diffSalida-diffEntrada;
        let dias = msgDiff/1000/60/60/24;
        return dias;
    }

    //Metodo de instancia
    modificarFechas(newFechaEntrada,newFechaSalida){
        
        let eltfechaEntrada = newFechaEntrada.split("/");
        let eltfechaSalida = newFechaSalida.split("/");

        //Pasar las fechas de string a date
        let fechaEntradaDate = new Date(eltfechaEntrada[2],eltfechaEntrada[1]-1,eltfechaEntrada[0]);
        let fechaSalidaDate = new Date(eltfechaSalida[2],eltfechaSalida[1]-1,eltfechaSalida[0]);

        let diffEntrada = fechaEntradaDate.getTime();
        let diffSalida = fechaSalidaDate.getTime();

        let msgDiff = diffSalida-diffEntrada;
        let dias = msgDiff/1000/60/60/24;

        if (dias < 0) {
            throw new Error("Fecha de salida debe ser posterior a la de entrada");
        }
        if (dias==0) {
            throw new Error("Estancia mínima debe ser de un día");
        }
        if (dias>=1) {
            this._fechaEntrada = newFechaEntrada;
            this._fechaSalida = newFechaSalida;
        }
    }

    // Implementa un método de instancia llamado costeEstancia() que devuelva el coste de la estancia, 
    // teniendo en cuenta que el coste diario de lunes a viernes son 24€, los sábados 36€ y los domingos 43€.
    costeEstancia(){
        let coste = 0;
        const precios = [39, 20, 20, 20, 20, 20, 32]; 

        //Calcular la cantidad de dias de estancia
        let fechaEntrada = this._fechaEntrada;
        let fechaSalida =this._fechaSalida;

        let eltfechaEntrada = fechaEntrada.split("/");
        let eltfechaSalida = fechaSalida.split("/");

        //Pasar las fechas de string a date
        let fechaEntradaDate = new Date(eltfechaEntrada[2],eltfechaEntrada[1]-1,eltfechaEntrada[0]);
        let fechaSalidaDate = new Date(eltfechaSalida[2],eltfechaSalida[1]-1,eltfechaSalida[0]);

        let diffEntrada = fechaEntradaDate.getTime();
        let diffSalida = fechaSalidaDate.getTime();

        let msgDiff = diffSalida-diffEntrada;
        let dias = Math.ceil(msgDiff/1000/60/60/24); // redondea un número redondeado al entero más próximo.

        
        //Ir sumando el coste de cada dia al coste total de la estancia segun el precio de cada dia.
        for (let i = 0; i < dias ; i++) {
            let fechaAux = fechaEntradaDate;
            fechaAux.setDate(fechaAux.getDate() + 1); //Aumentamos i dias a la fecha de entrada. Para que vayan pasando los dias.
            let diaSemana = fechaAux.getDay(); //Obtenemos el dia de la semana en el que nos encontramos. De 0 a 6;
            coste += precios[diaSemana]; // Segun el dia que sea se incrementara el coste total Por ejemplo si es domingo se sumara 43E
            
        }
        
        // let fechaAux = new Date(eltfechaEntrada[2],eltfechaEntrada[1]-1,eltfechaEntrada[0]);
        // while (fechaAux < fechaSalidaDate) {
        //     let dia = fechaAux.getDay();
        //     switch (dia) {
        //         case 0:
        //             coste += 39;
        //             break;
        //         case 6:
        //             coste += 32;
        //             break;
        //         default:
        //             coste += 20;
        //     }
        //     fechaAux.setDate(fechaAux.getDate() + 1); //Incrementa un dia en la fecha
        // }

        return coste;
    }

}
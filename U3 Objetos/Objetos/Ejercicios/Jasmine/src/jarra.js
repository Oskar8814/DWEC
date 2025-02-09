class Jarra{
    constructor(capacidad, cantidad){
        this._capacidad = capacidad;
        this._cantidad = cantidad;
    }

    //Getter y Setter
    get cantidad(){
        return this._cantidad;
    }

    set cantidad(nuevaCantidad){
        if (nuevaCantidad < 0) {
            throw new Error("La cantidad debe ser un número positivo");
        }else{
            if (nuevaCantidad > this._capacidad){
                this._cantidad = this._capacidad;
            }else{
                this._cantidad = nuevaCantidad;
            }
        }
    }

    get capacidad(){
        return this._capacidad;
    }

    set capacidad(nuevaCapacidad){
        if (nuevaCapacidad>=0) {
            this._capacidad = nuevaCapacidad;
        } else {
            throw new Error ("La capacidad debe ser mayor o igual a 0.");
        }
    }

    //Metodos
    llenar(){
        this._cantidad = this._capacidad;
    }
    
    vaciar(){
        this._cantidad = 0;
    }

    llenarDesde(jarra2){
        let falta = this._capacidad - this._cantidad;
        if (jarra2.cantidad <= falta) {
            this._cantidad = this._cantidad + jarra2.cantidad;
            jarra2.cantidad(0);
        }

        if (jarra2.cantidad > falta) {
            this.cantidad = this._capacidad;
            jarra2.cantidad = jarra2.cantidad - falta;
        }
    }

    jarrasConMasCantidad(...jarras){
        let jarrasMayores = [];
        for (let i = 0; i < jarras.length; i++) {
            if (this._cantidad < jarras[i].cantidad) {
                jarrasMayores.push(jarras[i]);
            }
        }
        return jarrasMayores;
    }

    toString(){
        return `Capacidad: ${this._capacidad} -- Cantidad: ${this._capacidad}`;
    }

    //método de clase
    static comparar(jarra,jarra2){
        if (jarra.cantidad>jarra2.cantidad) {
            return jarra;
        }else{
            return jarra2;
        }
    }

}
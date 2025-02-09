class Persona{
    constructor(nombre, edad, ){
        this._nombre = nombre;
        this._edad = edad; 
    }

    
    //Getter y setter
    
    toString(){
        return `Nombre: ${this._nombre} -- Edad: ${this._edad} años `;
    }
}

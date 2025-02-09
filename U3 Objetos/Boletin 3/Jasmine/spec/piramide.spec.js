describe('Testeo del Boletin 3 -- Area Pirámide', () => {
    
    describe('Testeo de la funcion areaPiramide()', () => {
        const datos = [
            {entrada:{lado: 6.8, altura: 9}, salidaEsperada : 177.083},
            {entrada:{lado: 7.1, altura: 9.4}, salidaEsperada : 193.092},
            {entrada:{lado: 7.4, altura: 9.8}, salidaEsperada : 209.793},

        ];

        for (let i = 0; i < datos.length; i++) {
            it('El lado deberia ser ' + datos[i].entrada.lado + " y la altura deberia ser " + datos[i].entrada.altura + " y deberiamos obtener un Area: " + datos[i].salidaEsperada, () => {
                expect(redondearDecimales(areaPiramide(datos[i].entrada.lado,datos[i].entrada.altura),3)).toEqual(datos[i].salidaEsperada);
                //expect(areaPiramide(datos[i].entrada.lado,datos[i].entrada.altura)).toBeCloseTo(datos[i].salidaEsperada,3); Otra forma de hacerlo.
            });
        }

        it('Deberia lanzar un error cuando usamos un argumento Lado negativo', () => {
            expect(()=>{ areaPiramide(-1,2)}).toThrowError("Los parámetros de entrada deben tener valores positivos");
        });

        it('Deberia lanzar un error cuando usamos un argumento Altura negativo', () => {
            expect(()=>{ areaPiramide(1,-2)}).toThrowError("Los parámetros de entrada deben tener valores positivos");
        });

        it('La funcion deberia devolver un dato tipo Number', () => {
            expect(areaPiramide(1,2)).toBeInstanceOf(Number);
            //expect(typeof(areaPiramide(1,2)).toEqual('number')); Otra forma de hacerlo

        });
        
    });

    function redondearDecimales(numero,decimales){
        return  Math.round(numero * Math.pow(10,decimales)) / Math.pow(10,decimales);
    }
    
});
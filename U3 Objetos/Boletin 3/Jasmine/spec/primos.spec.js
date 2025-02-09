describe('Testeo del Boletin 3 -- Filtrar Primos', () => {
    
    describe('Testeo de la funcion filtrarPrimosMayoresOnce()', () => {
        let datos = [
            { entrada: [6, 11, 18, 43, 8, 5, 45, 53, 9, 7, 24, 23], salida: [23, 43, 53] },
            { entrada: [6, 5, 24, 47, 8, 11, 18, 41, 9, 2, 35, 19], salida: [19, 41, 47] },
            { entrada: [4, 5, 45, 47, 6, 7, 27, 43, 10, 11, 35, 23], salida: [23, 43, 47] },
            { entrada: [9, 11, 20, 23, 6, 3, 24, 17, 8, 5, 14, 47], salida: [17, 23, 47] },
            { entrada: [9, 2, 45, 29, 8, 7, 18, 19, 6, 5, 12, 13], salida: [13, 19, 29] }
        ];
    

        for (let i = 0; i < datos.length; i++) {
            it('Para el array de números' + datos[i].entrada + " deberiamos obtener un array con los primos: " + datos[i].salida, () => {
                expect(filtrarPrimosMayoresOnce(datos[i].entrada)).toEqual(datos[i].salida);
            });
        }



        it('La funcion deberia devolver un dato tipo Array', () => {
            expect(filtrarPrimosMayoresOnce(datos[0].entrada)).toBeInstanceOf(Array);
        });
        
    });

    
});
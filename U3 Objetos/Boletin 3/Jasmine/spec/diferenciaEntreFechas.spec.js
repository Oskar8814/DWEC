describe('Testeo del Boletin 3 -- Calcular dias entre Fechas', () => {
    
    describe('Testeo de la funcion numeroDiasFechas()', () => {
        const datos = [
            {entrada:{fechaDesde: "9/11/2021", fechaHasta: "9/11/2021"}, salidaEsperada : 0},
            {entrada:{fechaDesde: "28/02/2020", fechaHasta: "1/3/2020"}, salidaEsperada : 2},
            {entrada:{fechaDesde: "28/02/2021", fechaHasta: "1/3/2021"}, salidaEsperada : 1},
            {entrada:{fechaDesde: "17/04/1973", fechaHasta: "14/11/1979"}, salidaEsperada : 2402},
        ];
    
        for (let i = 0; i < datos.length; i++) {
            it('Desde la fecha: ' + datos[i].entrada.fechaDesde + " hasta la fecha: "+ datos[i].entrada.fechaHasta +" deberiamos obtener : " + datos[i].salidaEsperada +" dias.", () => {
                expect(numeroDiasFechas(datos[i].entrada.fechaDesde, datos[i].entrada.fechaHasta)).toEqual(datos[i].salidaEsperada);
            });
        }

        it('La funcion deberia devolver un dato tipo Number', () => {
            expect(numeroDiasFechas(datos[0].entrada.fechaDesde, datos[0].entrada.fechaHasta)).toBeInstanceOf(Number);
        });

        it('Deberia lanzar un error cuando usamos un formato de fecha incorrecto.', () => {
            expect(()=>{ numeroDiasFechas("32/05/1998", datos[0].entrada.fechaHasta)}).toThrowError("Alguna(s) de las fechas de entrada es incorrecta");
        });
        
    });
    
});
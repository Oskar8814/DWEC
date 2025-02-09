describe('Testeo del Boletin de Expresiones Regulares', () => {
    
    describe('Testeo de la funcion terminaVocalAcentuada()', () => {
        const datos = [
            {entrada:"café", salidaEsperada : true},
            {entrada:"camión", salidaEsperada : false},
            {entrada:"volvió", salidaEsperada : true},
            {entrada:"hola", salidaEsperada : false},
        ];

        for (let i = 0; i < datos.length; i++) {
            it('La palabra ' + datos[i].entrada + " deberia terminar con una vocal acentuada " + (datos[i].salidaEsperada?"si":"no"), () => {
                expect(terminaVocalAcentuada(datos[i].entrada)).toEqual(datos[i].salidaEsperada);
            });
        }

    });

    describe('Testeo de la funcion validaDNI()', () => {
        const datos2 = [
            {entrada:"12345678a", salidaEsperada : true},
            {entrada:"1234567a", salidaEsperada : false},
            {entrada:"123456789a", salidaEsperada : false},
            {entrada:"12345678-a", salidaEsperada : true},
            {entrada:"12345678Z", salidaEsperada : true},
            {entrada:"1234-5678a", salidaEsperada : false},
            {entrada:"12345678!", salidaEsperada : false},
        ];

        for (let i = 0; i < datos2.length; i++) {
            it('El dni ' + datos2[i].entrada + " deberia estar " + (datos2[i].salidaEsperada?"bien formado":"mal formado"), () => {
                expect(validaDNI(datos2[i].entrada)).toEqual(datos2[i].salidaEsperada);
            });
            
        }
    });

    describe('Testeo de la funcion validaNumeroEntero()', () => {
        const datos3 = [
            {entrada:"123", salidaEsperada : true},
            {entrada:"123+4567", salidaEsperada : false},
            {entrada:"123+", salidaEsperada : false},
            {entrada:"-1241245", salidaEsperada : true},
            {entrada:"+214124", salidaEsperada : true},
            {entrada:"1234-5678a", salidaEsperada : false},
            {entrada:"12345!678", salidaEsperada : false},
        ];
        for (let i = 0; i < datos3.length; i++) {
            it('El numero entero ' + datos3[i].entrada + " deberia estar " + (datos3[i].salidaEsperada?"bien formado":"mal formado"), () => {
                expect(validaNumeroEntero(datos3[i].entrada)).toEqual(datos3[i].salidaEsperada);
            });
            
        }
    });

    describe('Testeo de la funcion validaNumeroDecimal()', () => {
        const datos4 = [
            {entrada:"123", salidaEsperada : false},
            {entrada:"123+45", salidaEsperada : false},
            {entrada:"123+", salidaEsperada : false},
            {entrada:"-124,1245", salidaEsperada : true},
            {entrada:"+21412,4", salidaEsperada : true},
            {entrada:"1234-5678a", salidaEsperada : false},
            {entrada:"12345!678", salidaEsperada : false},
        ];

        for (let i = 0; i < datos4.length; i++) {
            it('El numero decimal' + datos4[i].entrada + " deberia estar " + (datos4[i].salidaEsperada?"bien formado":"mal formado"), () => {
                expect(validaNumeroDecimal(datos4[i].entrada)).toEqual(datos4[i].salidaEsperada);
            });
            
        }
    });

    describe('Testeo de la función validaHora()', () => {
        const datos5 = [
            {entrada:"12:12:12", salidaEsperada : true},
            {entrada:"54:12:13", salidaEsperada : false},
            {entrada:"12-12-12", salidaEsperada : false},
            {entrada:"23:31:54", salidaEsperada : true},
            {entrada:"03:03:03", salidaEsperada : true},
            {entrada:"12:61:12", salidaEsperada : false},
            {entrada:"12:123:72", salidaEsperada : false},
        ];
        for (let i = 0; i < datos5.length; i++) {
            it('La hora ' + datos5[i].entrada + " deberia estar " + (datos5[i].salidaEsperada?"bien formada":"mal formada"), () => {
                expect(validaHora(datos5[i].entrada)).toEqual(datos5[i].salidaEsperada);
            });
            
        }
    });

    describe('Testeo de la funcion validaDireccionIP()', () => {
        const datos6 = [
            {entrada:"192.168.110.254", salidaEsperada : true},
            {entrada:"192:122:133.299", salidaEsperada : false},
            {entrada:"222-0-12-123", salidaEsperada : false},
            {entrada:"192.166.54.12", salidaEsperada : true},
            {entrada:"12.61.12", salidaEsperada : false},
            {entrada:"12:123:72-123", salidaEsperada : false},
        ];
        for (let i = 0; i < datos6.length; i++) {
            it('La ip ' + datos6[i].entrada + " deberia estar " + (datos6[i].salidaEsperada?"bien formada":"mal formada"), () => {
                expect(validaDireccionIP(datos6[i].entrada)).toEqual(datos6[i].salidaEsperada);
            });
            
        }
    });

    describe('Testeo de la funcion validaNumerosSeparados()', () => {
        const datos7 = [
            {entrada: "3-8-5", salidaEsperada: true},
            {entrada: "3.8-5", salidaEsperada: false},
            {entrada: "3.8.5", salidaEsperada: true},
            {entrada: "3-8.5", salidaEsperada: false},
        ];
        for (let i = 0; i < datos7.length; i++) {
            it('La forma del numero ' + datos7[i].entrada + " deberia estar " + (datos7[i].salidaEsperada?"bien formada":"mal formada"), () => {
                expect(validaNumerosSeparados(datos7[i].entrada)).toEqual(datos7[i].salidaEsperada);
            });
        }
    });

    describe('Testeo de la funcion extraeExpresionesMatematicas()', () => {
        it('La funcion deberia devolver un array', () => {
            let texto = "La ecuación de una recta es {y=a*x + b}, la de un círculo {x^2+y^2 = r} y la de la parábola {y = x^2}"
            let matematicas = extraeExpresionesMatemáticas(texto);
            expect(Array.isArray(matematicas)).toBe(true);
        });
        
        it('La funcion deberia devolver un array', () => {
            let texto = "La ecuación de una recta es {y=a*x + b}, la de un círculo {x^2+y^2 = r} y la de la parábola {y = x^2}"
            expect(extraeExpresionesMatemáticas(texto)).toBeInstanceOf(Array);
        });
    });
});
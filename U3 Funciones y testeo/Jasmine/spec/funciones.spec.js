describe('Testeo del Boletin de Funciones', () => {
    
    describe('Testeo de la funcion comprobarEsPar()', () => {
        const datos = [
            {entrada:0, salidaEsperada : true},
            {entrada:3, salidaEsperada : false},
            {entrada:4, salidaEsperada : true},
            {entrada:7, salidaEsperada : false},
            {entrada:11, salidaEsperada : false},
        ];

        for (let i = 0; i < datos.length; i++) {
            it('El numero ' + datos[i].entrada + ' deberia ser ' + (datos[i].salidaEsperada?"par":"impar"), () => {
                expect(comprobarEsPar(datos[i].entrada)).toEqual(datos[i].salidaEsperada);
            });
            
        }

        it('Deberia lanzar un error cuando usamos nº decimal', () => {
            expect(()=>{ comprobarEsPar(2.2) }).toThrowError("Se esperaba un número entero");
        });
        
    });

    describe('Testeo de la funcion verCalificacion()', () => {
        const datos2 = [
            {entrada:0, salidaEsperada : "INSUFICIENTE"},
            {entrada:3, salidaEsperada : "INSUFICIENTE"},
            {entrada:4, salidaEsperada : "INSUFICIENTE"},
            {entrada:7, salidaEsperada : "NOTABLE"},
            {entrada:11, salidaEsperada : "VALOR INCORRECTO"},
        ];

        for (let i = 0; i < datos2.length; i++) {
            it('La calificación ' + datos2[i].entrada + ' deberia ser ' + datos2[i].salidaEsperada, () => {
                expect(verCalificacion(datos2[i].entrada)).toEqual(datos2[i].salidaEsperada);
            });
            
        }
    });

    describe('Testeo de la funcion verCalificacionDecimal()', () => {
        const datos3 = [
            {entrada:0, salidaEsperada : "INSUFICIENTE"},
            {entrada:3.2, salidaEsperada : "INSUFICIENTE"},
            {entrada:4.4, salidaEsperada : "INSUFICIENTE"},
            {entrada:7.5, salidaEsperada : "NOTABLE"},
            {entrada:11, salidaEsperada : "VALOR INCORRECTO"},
        ];
        for (let i = 0; i < datos3.length; i++) {
            it('La calificación ' + datos3[i].entrada + ' deberia ser ' + datos3[i].salidaEsperada, () => {
                expect(verCalificacionDecimal(datos3[i].entrada)).toEqual(datos3[i].salidaEsperada);
            });
            
        }
    });

    describe('Testeo de la funcion parametrosCircunferencia()', () => {
        const datos4 = [
            {entrada:0, salidaEsperada :{perimetro: 0, area: 0} },
            {entrada:5, salidaEsperada : {perimetro: 31.42, area: 78.54}},
            {entrada:14.2, salidaEsperada : {perimetro: 89.22, area: 633.47}},
            {entrada:4, salidaEsperada : {perimetro: 25.13, area: 50.27}},
            {entrada:7.8, salidaEsperada : {perimetro: 49.01, area: 191.13}},
        ];

        for (let i = 0; i < datos4.length; i++) {
            it('El perimetro y área de radio ' + datos4[i].entrada + " deberia ser Perímetro: " + datos4[i].salidaEsperada.perimetro + " Área: " + datos4[i].salidaEsperada.area , () => {
                //expect(parametrosCircunferencia(datos4[i].entrada)).toEqual(datos4[i].salidaEsperada);
                expect(parametrosCircunferencia(datos4[i].entrada).perimetro).toEqual(datos4[i].salidaEsperada.perimetro);
                expect(parametrosCircunferencia(datos4[i].entrada).area).toEqual(datos4[i].salidaEsperada.area);
            });
            
        }
    });

    describe('Testeo de la función esBisiesto()', () => {
        const datos5 = [
            {entrada: 1900, salidaEsperada: false},
            {entrada: 1896, salidaEsperada: true},
            {entrada: 1905, salidaEsperada: false},
            {entrada: 2024, salidaEsperada: true},
            {entrada: 2028, salidaEsperada: true},
            {entrada: 1977, salidaEsperada: false},
            {entrada: 1200, salidaEsperada: true},
        ];
        for (let i = 0; i < datos5.length; i++) {
            it('El año ' + datos5[i].entrada + " deberia ser " + (datos5[i].salidaEsperada?"bisiesto":"no bisiesto"), () => {
                expect(esBisiesto(datos5[i].entrada)).toEqual(datos5[i].salidaEsperada);
            });
        }
    });

    describe('Testeo de la funcion digitoHexa2Dec()', () => {
        const datos6 = [
            {entrada: "A", salidaEsperada: 10},
            {entrada: "1", salidaEsperada: 1},
            {entrada: "B", salidaEsperada: 11},
            {entrada: "4", salidaEsperada: 4},
            {entrada: "C", salidaEsperada: 12},
            {entrada: "d", salidaEsperada: 13},
        ];
        for (let i = 0; i < datos6.length; i++) {
            it('El dígito ' + datos6[i].entrada + " deberia tener un valor de " + datos6[i].salidaEsperada, () => {
                expect(digitoHexa2Dec(datos6[i].entrada)).toEqual(datos6[i].salidaEsperada);
            });
            
        }
        it('Deberia lanzar un error cuando usamos un dígito no Hexadecimal', () => {
            expect(()=>{ digitoHexa2Dec("16") }).toThrowError("Dígito hexadecimal no válido");
        });
    });

    describe('Testeo de la funcion hexa2decimal()', () => {
        const datos7 = [
            {entrada: "1A", salidaEsperada: 26},
            {entrada: "3F", salidaEsperada: 63},
            {entrada: "7B", salidaEsperada: 123},
            {entrada: "A4", salidaEsperada: 164},
            {entrada: "FF", salidaEsperada: 255},
            {entrada: "10E", salidaEsperada: 270},
        ];
        for (let i = 0; i < datos7.length; i++) {
            it('El valor hexadecimal ' + datos7[i].entrada + " deberia tener una valor " + datos7[i].salidaEsperada + " en decimal.", () => {
                expect(hexa2decimal(datos7[i].entrada)).toEqual(datos7[i].salidaEsperada);
            });
        }
    });

    describe('Testeo de la funcion bonoloto()', () => {
        it('La funcion deberia devolver un array', () => {
            let numeros = bonoloto();
            expect(Array.isArray(numeros)).toBe(true);
        });

        it('La funcion deberia devolver un array', () => {
            expect(bonoloto()).toBeInstanceOf(Array);
        });

        it('La funcion deberia devolver un array con 6 elementos', () => {
            expect(bonoloto()).toHaveSize(6);
        });

        it('Los elementos del array deberian ser números', () => {
            let array = bonoloto();
            for (let i = 0; i < array.length; i++) {
                expect(array[i]).toBeInstanceOf(Number);
            }
        });
        it('Los elemetos del array deberian estar ordenados', () => {
            for (let i = 0; i < 1000; i++) {
                let bono = bonoloto();
                for (let j = 0; j < bono.length-1; j++) {
                    expect(bono[j]).toBeLessThanOrEqual(bono[j+1]);
                    
                }
                
            }
        });
        it('Los elementos del array deberian estar comprendidos entre 1-49', () => {
            for (let i = 0; i < 1000; i++) {
                let resultado = bonoloto()
                for (let j = 0; j < resultado.length; j++) {
                    expect(resultado[j]).toBeLessThanOrEqual(49);
                    expect(resultado[j]).toBeGreaterThanOrEqual(1);
                    
                }
            }
        });

        it('Que los eltos del array no deberian estar repetidos', () => {
            for (let i = 0; i < 1000; i++) {
                let boleto = bonoloto();
                expect(hasDuplicates(boleto)).toBeFalse();
            }
        });

        it('Que tras 1000 llamadas a la función han salido todos los números entre el 1 y el 49.', () => {
            let total = []; 
            for (let i = 0; i < 1000; i++) {
                let res = bonoloto();//Crea una bonoloto de 6 numeros
                
                res.forEach(element => { //Añade cada elemento de la bonoloto generada en el array con todos los numeros de las bonolotos anteriors
                    total.push(element);
                });
            }
            
            //Comprobar que contine el 1 al 49.
            for (let j = 0; j < total.length; j++) {
                for (let x = 1; x <= 49; x++) {
                    expect(total.includes(x)).toBeTrue();
                }
            }
        });
    });
    describe('Testeo de la funcion promedio()', () => {
        const datos8 = [
            {entrada: [7.2, 4.3, 9.1], salidaEsperada: 6.9},
            {entrada: [3.2, , , 5.3, 9.7], salidaEsperada: 6.1},
            {entrada: [4.6, 7.2, 2.7, 3.1, 5.7], salidaEsperada: 4.7},
            {entrada: [8.18, , ], salidaEsperada: 8.2},
        ];

        for (let i = 0; i < datos8.length; i++) {
            it('El array ' + datos8[i].entrada + " deberia tener un promedio de " + datos8[i].salidaEsperada, () => {
                expect(redondearDecimales(promedio(datos8[i].entrada),1)).toEqual(datos8[i].salidaEsperada);
            });
        }

        //Usada para redondear el resultado en el test ya que la funcion promedio() se pide que sea sin redondeos
        function redondearDecimales(numero,decimales){
            return  Math.round(numero * Math.pow(10,decimales)) / Math.pow(10,decimales);
        }

        it('Que la funcion deberia devolver un tipo number', () => {
            expect(promedio([7.2, 4.3, 9.1])).toBeInstanceOf(Number);
        });

        it('Que la función invocada con un array disperso como parametro no deberia devolver un tipo NaN', () => {
            expect(promedio([4, , 6, 5])).not.toBeNaN();
        });

        it('Que la función invocada con un parametro que no es tipo Array deberia lanzar un error ', () => {
            expect(()=>{ promedio(1) }).toThrowError("El parámetro no es un Array.")
        });

        it('Que la función invocada con un parametro tipo Array y algun elemento no sea tipo Number deberia lanzar un error', () => {
            expect(()=>{ promedio([7, "hola", 3]) }).toThrowError("El elemento del Array no es de tipo Number.")
        });
    });
});
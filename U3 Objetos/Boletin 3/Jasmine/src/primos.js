function filtrarPrimosMayoresOnce(arrayNum){
    const primos = arrayNum.filter(filtrado);
    //Filtra los primos mayor 11
    function filtrado(numero) {
        if (numero > 11) {
            for(i=2; i < numero; i++){
                if (numero % i == 0 ) {
                    return 0; //No es primo
                }
            }
            return numero;
        }
    }
    
    //ordenarlos
    primos.sort(function(a,b){
        if(a > b){
            return 1;
        }
        if (a < b) {
            return -1; 
        }
        return 0;
    });
    
    return primos;
}

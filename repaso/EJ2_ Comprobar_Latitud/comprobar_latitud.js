function comprobarLatitud(latitudStr){
    let patron = /^(0?\d|[1-8]\d)º\s(0?\d|[1-5]\d)'\s(0?\d|[1-5]\d)''\s(N|S)$/;

    if (patron.test(latitudStr)) {
        return true;
    }else{
        return false;
    }
}
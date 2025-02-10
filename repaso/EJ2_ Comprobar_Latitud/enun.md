Debes implementar una función llamada comprobarLatitud() que tendrá un parámetro de entrada con un dato alfanumérico que representa una latitud, en la cual se indica mediante tres números enteros los grados, minutos y segundos, y mediante una letra si es norte(N) o sur(S), por ejemplo: 37º 12' 8'' N

De manera genérica la podemos expresar como:

 gº m' s'' (N o S)

Donde:
g: son los grados. Se trata de un número entero entre 0 y 90 (para los valores comprendidos entre 0 y 9 se puede usar uno o dos dígitos)
m: son los minutos. Se trata de un número entero entre 0 y 59 (para los valores entre 0 y 9 se puede usar uno o dos dígitos)
s: son los segundos. Se trata de un número entero entre 0 y 59 (para los valores comprendidos entre 0 y 9 se puede usar uno o dos dígitos)
Letra: puede ser N (indica el Norte) o S (indica el Sur)

Debe existir un espacio separando cada uno de los grupos.

Veamos ejemplos de latitudes correctas:
"8º 12' 56'' N"
"08º 52' 6'' S"
"89º 2' 05'' N"
"89º 02' 12'' N"
"9º 22' 52'' S"

Ejemplo de uso de la función:

comprobarLatitud("89º 2' 12'' N") è Devolverá true

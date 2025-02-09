77. Expresiones regulares
78. Expresiones regulares: (^ principio $ fin) de cadena
79. Expresiones regulares: [] conjunto de caracteres posibles
80. Expresiones regulares: cuantificadores o repeticiones {x} {x,y} {x,}
81. Expresiones regulares: metacaracteres de cuantificadores alternativos * ? +
82. Expresiones regulares abreviadas: \d \w \s \D \W
83. Expresiones regulares: alternancia |  (¡Ojo! hay una errata: para la alternancia hay que usar paréntesis () no corchetes)
84. Expresiones regulares: metacarácter punto
85. Expresiones regulares: agrupación en subpatrones ()
86. Expresiones regulares: métodos test y exec del objeto RegExp
87. Expresiones regulares: modificadores i (insensitive) g (global) m (multiline)
88. Expresiones regulares: métodos search, replace, split, match del objeto String.

80.Validar que se ingrese un número de 3 dígitos enteros, el carácter punto y 2 dígitos decimales.
/^\d{3}(\.\d{2})?$/gm

80.Solicitar el ingreso de la coordenada de un punto. El formato a ingresar por teclado es:
(999,999)Los números pueden tener entre 1 y 3 dígitos. 
/^\d{3}\,\d{3}$/gm

82.Validar si un string contiene 4 números de 3 dígitos cada uno separados por coma.
/^\d{3}\,\d{3},\d{3},\d{3}$/gm

83.Confeccionar una expresión regular que valide el ingreso del nombre de un día de la semana, un espacio y un número de 1 o 2 dígitos. 
/^(lunes|martes|miercoles|jueves|viernes|sabado|domingo)\s((0\d)|(1\d)|(2\d)|(3[01]))$/i

85.Validar el ingreso de una hora con el formato hh:mm:ss o hh:mm 
/^((0[0-9])|(1[0-9])|(2[0123]))$/gm hora
^((0\d)|(1\d)|(2\d)|(3\d)|(4\d)|(5\d))$ minutos 
^((0\d)|(1\d)|(2\d)|(3\d)|(4\d)|(5\d))$ seg

Unido
/^((0[0-9])|(1[0-9])|(2[0123])):((0\d)|(1\d)|(2\d)|(3\d)|(4\d)|(5\d))(:((0\d)|(1\d)|(2\d)|(3\d)|(4\d)|(5\d)))?$/gm

Mas simple
/^((0[0-9])|(1[0-9])|(2[0123])):(([0-5]\d))(:(([0-5]\d)))?$/
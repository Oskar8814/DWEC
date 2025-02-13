<?php
require_once 'config.php'; // Incluir el archivo de configuración
require_once 'Comunidad.php'; // Incluir el archivo de la clase Comunidad


// sleep(2);

try {
    // Crear una nueva conexión PDO usando las variables del archivo de configuración
    $conexion = new PDO("mysql:host=$db_host;dbname=$db_nombre;charset=$db_charset", $db_usuario, $db_contraseña);
    // Configurar el modo de error de PDO
    $conexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die ("Error en la conexión: " . $e->getMessage());
}

$vec=[]; // Array en el que se almacenarán los objetos Comunidad

$consulta = $conexion->query("SELECT id, nombre FROM comunidades_autonomas");
while ($reg = $consulta->fetchObject()) {
  $vec[] = new Comunidad($reg->id,$reg->nombre);
}

// $vec contiene un array de objetos Comunidad

//var_dump($vec);die();
// print_r($vec);
// Añadimos la cabecera de tipo JSON
header('Content-Type: application/json; charset=utf-8');
print json_encode($vec);  // json_encode convierte un array en formato JSON

?>
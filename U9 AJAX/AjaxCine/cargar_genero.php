<?php
require_once 'config.php'; // Incluir el archivo de configuración

try {
    // Crear una nueva conexión PDO usando las variables del archivo de configuración
    $conexion = new PDO("mysql:host=$db_host;dbname=$db_nombre;charset=$db_charset", $db_usuario, $db_contraseña);
    // Configurar el modo de error de PDO
    $conexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die ("Error en la conexión: " . $e->getMessage());
}

$vec=[]; // Array en el que se almacenarán los objetos

$seleccion = "SELECT DISTINCT genero FROM peliculas";
$consulta = $conexion->query($seleccion);

while ($registro = $consulta->fetchObject()) {
    $vec []=["genero"=>$registro->genero];
}

header('Content-Type: application/json; charset=utf-8');
print json_encode($vec);
?>
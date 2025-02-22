<?php
require_once 'config.php'; // Incluir el archivo de configuración
require_once 'Lluvias.php';

try {
    // Crear una nueva conexión PDO usando las variables del archivo de configuración
    $conexion = new PDO("mysql:host=$db_host;dbname=$db_nombre;charset=$db_charset", $db_usuario, $db_contraseña);
    // Configurar el modo de error de PDO
    $conexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die ("Error en la conexión: " . $e->getMessage());
}

$vec=[]; // Array en el que se almacenarán los objetos Lluvia

if (isset($_REQUEST['ciudad'])&& isset($_REQUEST['anio'])) {
    $anio = $_REQUEST['anio'];
    $ciudad = $_REQUEST['ciudad'];
    $seleccion = "SELECT * FROM lluvias WHERE año='$anio' && ubicacion_id='$ciudad'";
    $consulta = $conexion->query($seleccion);

    while ($registro=$consulta->fetchObject()) {
        $vec[]=new Lluvias($registro->id,$registro->año,$registro->mes,$registro->precipitacion_mm,$registro->ubicacion_id);
    }
    
}

header('Content-Type: application/json; charset=utf-8');
print json_encode($vec);
?>
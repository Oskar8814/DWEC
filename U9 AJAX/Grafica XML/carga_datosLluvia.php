<?php
include_once 'config.php';
include_once 'Lluvias.php';

try {
    // Crear una nueva conexión PDO usando las variables del archivo de configuración
    $conexion = new PDO("mysql:host=$db_host;dbname=$db_nombre;charset=$db_charset", $db_usuario, $db_contraseña);
    // Configurar el modo de error de PDO
    $conexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die ("Error en la conexión: " . $e->getMessage());
}

$vec= [];

if (isset($_REQUEST['anio'])&&isset($_REQUEST['ubicacion'])) {
    
    $anio = $_REQUEST['anio'];
    $ubi = $_REQUEST['ubicacion'];
    $seleccion = "SELECT * FROM lluvias WHERE ubicacion_id ='$ubi' AND año='$anio'";

    $consulta = $conexion->query($seleccion);

    while ($registro= $consulta->fetchObject()) {
        $vec[]= new Lluvias($registro->id, $registro->año,$registro->mes,$registro->precipitacion_mm,$registro->ubicacion_id);
    }    
}

//Crear la estructura XML usando SimpleXMLElement
$xmlstr = "<?xml version='1.0' encoding='UTF-8'?>\n"."<lluvias></lluvias>";
$xml = new SimpleXMLElement($xmlstr);

foreach ($vec as $lluvia) {
    $item = $xml ->addChild('lluvia');
    $item ->addChild('id',$lluvia->id);
    $item ->addChild('año',$lluvia->año);
    $item ->addChild('mes',$lluvia->mes);
    $item ->addChild('precipitacion_mm',$lluvia->precipitacion);
    $item ->addChild('ubicacion_id',$lluvia->ubicacion_id);
}

// Configurar el encabezado para XML
header('Content-Type: application/xml; charset=utf-8');
// Imprimir el XML generado
print $xml->asXML();
?>
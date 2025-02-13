<?php
require_once 'config.php'; // Incluir el archivo de configuración
require_once 'Provincia.php'; // Incluir el archivo de la clase Provincia

try {
    // Crear una nueva conexión PDO usando las variables del archivo de configuración
    $conexion = new PDO("mysql:host=$db_host;dbname=$db_nombre;charset=$db_charset", $db_usuario, $db_contraseña);
    // Configurar el modo de error de PDO
    $conexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die ("Error en la conexión: " . $e->getMessage());
}

$codigoComunidad = $_REQUEST['comunidad'];

$vec = []; 

$consulta = $conexion->query("SELECT id, nombre, comunidad FROM provincias WHERE comunidad='$codigoComunidad'");

while ($reg = $consulta->fetchObject()) {
    $vec[]=new Provincia($reg->id,$reg->nombre,$reg->comunidad);
}

// Crear la estructura XML usando SimpleXMLElement
$xmlstr = "<?xml version='1.0' encoding='UTF-8'?>\n".
            "<provicias></provicias>";
$xml = new SimpleXMLElement($xmlstr);
$aux=1;
foreach ($vec as $provincia) {
    $item = $xml->addChild('provincia');
    $item->addChild('id', $aux );
    $item->addChild('nombre', $provincia->nombre);
    $aux++;
}

// Configurar el encabezado para XML
header('Content-Type: application/xml; charset=utf-8');
// Imprimir el XML generado
print $xml->asXML();
?>
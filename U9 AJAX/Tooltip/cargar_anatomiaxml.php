<?php
require_once 'config.php';
require_once 'Anatomia.php';

try {
    // Crear una nueva conexión PDO usando las variables del archivo de configuración
    $conexion = new PDO("mysql:host=$db_host;dbname=$db_nombre;charset=$db_charset", $db_usuario, $db_contraseña);
    // Configurar el modo de error de PDO
    $conexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die ("Error en la conexión: " . $e->getMessage());
}

$codigo = $_REQUEST['codigo'];

$vec = [];

$consulta = $conexion->query("SELECT id, descripcion FROM anatomia WHERE id='$codigo'");

while ($reg = $consulta->fetchObject()) {
    $vec []= new Anatomia($reg->id,$reg->descripcion);
}

// Crear la estructura XML usando SimpleXMLElement
$xmlstr = "<?xml version='1.0' encoding='UTF-8'?>\n".
            "<anatomias></anatomias>";
$xml = new SimpleXMLElement($xmlstr);

foreach ($vec as $anatomia) {
    $item = $xml->addChild('anatomia');
    $item->addChild('id',$anatomia->id);
    $item->addChild('descripcion',$anatomia->descripcion);

}

// Configurar el encabezado para XML
header('Content-Type: application/xml; charset=utf-8');
// Imprimir el XML generado
print $xml->asXML();
?>
<?php
require_once 'config.php'; // Incluir el archivo de configuración
require_once 'Pelicula.php'; 

try {
    // Crear una nueva conexión PDO usando las variables del archivo de configuración
    $conexion = new PDO("mysql:host=$db_host;dbname=$db_nombre;charset=$db_charset", $db_usuario, $db_contraseña);
    // Configurar el modo de error de PDO
    $conexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die ("Error en la conexión: " . $e->getMessage());
}

$vec=[]; // Array en el que se almacenarán los objetos

if (isset($_REQUEST['genero'])) {
    $genero = $_REQUEST['genero'];
    $seleccion = "SELECT * FROM peliculas WHERE genero='$genero'";
    $consulta = $conexion->query($seleccion);

    while ($registro= $consulta->fetchObject()) {
        $vec[]= new Pelicula($registro->id,$registro->titulo,$registro->genero, $registro->anio,$registro->duracion,$registro->director,$registro->actores,$registro->sinopsis,$registro->poster);
    }
}else {
    $seleccion = "SELECT * FROM peliculas ";
    $consulta = $conexion->query($seleccion);

    while ($registro= $consulta->fetchObject()) {
        $vec[]= new Pelicula($registro->id,$registro->titulo,$registro->genero, $registro->anio,$registro->duracion,$registro->director,$registro->actores,$registro->sinopsis,$registro->poster);
    }
}

// Crear la estructura XML usando SimpleXMLElement
$xmlstr = "<?xml version='1.0' encoding='UTF-8'?>\n"."<peliculas></peliculas>";
$xml = new SimpleXMLElement($xmlstr);

foreach ($vec as $pelicula) {
    $item = $xml->addChild('pelicula');
    $item ->addChild('id', $pelicula->getId());
    $item ->addChild('titulo', $pelicula->getTitulo());
    $item ->addChild('genero', $pelicula->getGenero());
    $item ->addChild('anio', $pelicula->getAnio());
    $item ->addChild('sinopsis', $pelicula->getSinopsis());
    $item ->addChild('poster', $pelicula->getPoster());
}

// Configurar el encabezado para XML
header('Content-Type: application/xml; charset=utf-8');
// Imprimir el XML generado
print $xml->asXML();
?>
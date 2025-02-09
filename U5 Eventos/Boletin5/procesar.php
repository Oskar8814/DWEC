<?php
// Rescatamos los datos del formulario
$nombre = $_POST['nombre'] ?? 'No proporcionado';
$sexo = $_POST['sexo'] ?? 'No especificado';
$altura = $_POST['altura'] ?? 'No proporcionada';
$fechaNacimiento = $_POST['fechaNacimiento'] ?? 'No proporcionada';
$semanaPreferente = $_POST['semanaPreferente'] ?? 'No especificada';
$fumador = isset($_POST['fumador']) ? 'Sí' : 'No';
$cigarrillos = $_POST['cigarrillos'] ?? 'No aplica';
$observaciones = $_POST['observaciones'] ?? 'Sin observaciones';

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Resumen de Alta</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
        }
        .container {
            max-width: 600px;
            margin: auto;
            padding: 20px;
            border: 1px solid #ccc;
            border-radius: 10px;
            box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
        }
        h1 {
            text-align: center;
        }
        p {
            line-height: 1.5;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Resumen del Paciente</h1>
        <p><strong>Nombre:</strong> <?= htmlspecialchars($nombre) ?></p>
        <p><strong>Sexo:</strong> <?= htmlspecialchars($sexo) ?></p>
        <p><strong>Altura:</strong> <?= htmlspecialchars($altura) ?> cm</p>
        <p><strong>Fecha de Nacimiento:</strong> <?= htmlspecialchars($fechaNacimiento) ?></p>
        <p><strong>Semana Preferente:</strong> <?= htmlspecialchars($semanaPreferente) ?></p>
        <p><strong>¿Es fumador?:</strong> <?= htmlspecialchars($fumador) ?></p>
        <?php if ($fumador === 'Sí') : ?>
            <p><strong>Número de cigarrillos:</strong> <?= htmlspecialchars($cigarrillos) ?></p>
        <?php endif; ?>
        <p><strong>Observaciones:</strong></p>
        <p><?= nl2br(htmlspecialchars($observaciones)) ?></p>
        <p><a href="javascript:history.back()">Volver al formulario</a></p>
    </div>
</body>
</html>

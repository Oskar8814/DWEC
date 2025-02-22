<?php
class Lluvias{

    public int $id;
    public int $año;
    public string $mes;
    public $precipitacion;
    public $ubicacion_id;

    function __construct($id,$año,$mes,$precipitacion,$ubicacion_id)
    {
        $this->id=$id;
        $this->año=$año;
        $this->mes=$mes;
        $this->precipitacion=$precipitacion;
        $this->ubicacion_id=$ubicacion_id;
    }

    public function getId()
    {
        return $this->id;
    }

    public function getAño()
    {
        return $this->año;
    }

    public function getMes()
    {
        return $this->mes;
    }

    public function getPrecipitacion()
    {
        return $this->precipitacion;
    }

    public function getUbicacion_id()
    {
        return $this->ubicacion_id;
    }
}
?>
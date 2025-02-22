<?php
class Ciudad{
    public int $id;
    public string $nombre;
    public $latitud;
    public $longitud;

    function __construct($id,$nombre,$longitud,$latitud)
    {
        $this->id=$id;
        $this->nombre=$nombre;
        $this->longitud=$longitud;
        $this->latitud=$latitud;
    }
    

    public function getId()
    {
        return $this->id;
    }

    public function getNombre()
    {
        return $this->nombre;
    }


    public function getLatitud()
    {
        return $this->latitud;
    }

    public function getLongitud()
    {
        return $this->longitud;
    }
}
?>
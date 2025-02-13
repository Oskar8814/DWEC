<?php
class Anatomia {
    public int $id;
    public string $descripcion;

    function __construct($id,$descripcion)
    {
        $this->id=$id;
        $this->descripcion=$descripcion;
    }
    
    public function getId()
    {
        return $this->id;
    }

    public function getDescripcion()
    {
        return $this->descripcion;
    }
}

?>
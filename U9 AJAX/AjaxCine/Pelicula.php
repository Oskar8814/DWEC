<?php
class Pelicula
{
    private $id;
    private $titulo;
    private $genero;
    private $anio;
    private $duracion;
    private $director;
    private $actores;
    private $sinopsis;
    private $poster;

    function __construct($id, $titulo, $genero, $anio,$duracion, $director, $actores, $sinopsis,$poster)
    {
        $this->id=$id;
        $this->titulo=$titulo;
        $this->genero=$genero;
        $this->anio=$anio;
        $this->duracion=$duracion;
        $this->director=$director;
        $this->actores=$actores;
        $this->sinopsis=$sinopsis;
        $this->poster=$poster;
    }

    /**
     * Get the value of id
     */ 
    public function getId()
    {
        return $this->id;
    }

    /**
     * Get the value of titulo
     */ 
    public function getTitulo()
    {
        return $this->titulo;
    }

    /**
     * Get the value of genero
     */ 
    public function getGenero()
    {
        return $this->genero;
    }

    /**
     * Get the value of anio
     */ 
    public function getAnio()
    {
        return $this->anio;
    }

    /**
     * Get the value of duracion
     */ 
    public function getDuracion()
    {
        return $this->duracion;
    }

    /**
     * Get the value of director
     */ 
    public function getDirector()
    {
        return $this->director;
    }

    /**
     * Get the value of actores
     */ 
    public function getActores()
    {
        return $this->actores;
    }

    /**
     * Get the value of sinopsis
     */ 
    public function getSinopsis()
    {
        return $this->sinopsis;
    }

    /**
     * Get the value of poster
     */ 
    public function getPoster()
    {
        return $this->poster;
    }
}

?>
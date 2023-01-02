<?php
namespace addons\qubit_wang_editor\controller;

use ESA\Addons;

class Index extends Addons
{
    protected $ESA_TYPE     = "INDEX";
    protected $EXPOSURE     = ["*"];
    
    public function index()
    {
        return $this->fetch();
    }
}
<?php
namespace addons\qubit_wang_editor;

use esa\AddonsHook;

class Hooks extends AddonsHook
{
    public function jsBehaviorRequire(){
        return ["/static/addons/qubit_wang_editor/main.js"];
    }
}
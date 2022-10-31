<?php
namespace addons\qubit_wang_editor;

use ESA\AddonsHook;

class Hook extends AddonsHook
{
    public function esaJsBehaviorRequire(){
        return ["/static/addons/qubit_wang_editor/main.js"];
    }
}
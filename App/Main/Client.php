<?php
    namespace App\Main;

    use App\Classes\Models\Model;

    abstract class Client extends Model{
        //abstract public function formatResult(); //for xml

        abstract public function getCurrentType();
    }
?>
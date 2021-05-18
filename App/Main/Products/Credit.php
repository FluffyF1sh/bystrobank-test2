<?php
    namespace App\Logic\Products;

    use App\Logic\Product;

    class Credit extends Product{
        public $fields = ['bet', 'sum'];

        protected $fillable = ['bet', 'sum'];

        public function __construct(){
            $this->$fields = array_merge($this->$fields, parent::$fields);
            $this->$fillable = array_merge($this->$fillable, parent::$fillable);
        }
    }   
?>
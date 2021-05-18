  
<?php
    namespace App\Main;
    
    use App\Main\Client;
    use App\Models\HasOne;

    abstract class Product {

        public $fields = ['date_open', 'date_close', 'time', 'client', 'client_type'];

        protected $fillable = ['date_open', 'date_close', 'time'];

        public function client($data) {
            $client = $this->hasOne(Client::class, 'client', $data);
        }
    }
?>
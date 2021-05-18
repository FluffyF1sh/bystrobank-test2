<?php
    namespace App\Main\Clients;

    use App\Main\Client;
    use App\Main\OrganizationInfo;
    use App\Main\IndividualInfo;

    class Organization extends Client {
        public $fields = [
            'individualInfo', 'organizationInfo'
        ];

        public $rules = [
            'individualInfo' => 'required',
            'organizationInfo' => 'required'
        ];

        public function fill($data) {
            if (isset($data['individualInfo'])) {
                $this->individualInfo($data['individualInfo']);
            }
            if (isset($data['organizationInfo'])) {
                $this->organizationInfo($data['organizationInfo']);
            }
        }

        public function individualInfo($data = null) {
            $this->hasOne(IndividualInfo::class, 'individualInfo', $data);
        }

        public function organizationInfo($data = null) {
            $this->hasOne(OrganizationInfo::class, 'organizationInfo', $data);
        }
    }
?>
<?php
header('Content-Type: application/json');

echo json_encode([
    "locations" => [
        [
            "id" => 0,
            "name" => "Acme Fresh Start Housing",
            "city" => "Chicago",
            "state" => "IL",
            "photo" => "https://angular.io/assets/images/tutorials/faa/bernard-hermant-CLKGGwIBTaY-unsplash.jpg",
            "availableUnits" => 4,
            "wifi" => true,
            "laundry" => true
        ]
    ]
]);
?>

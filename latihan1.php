<?php

// $mahasiswa = [
//     [
//         "nama" => "Frans Sebastian",
//         "nrp" => "0852115113",
//         "email" => "franssebastian@gmail.com"
//     ],
//     [
//         "nama" => "Hendry Petrus Hizkia",
//         "nrp" => "042525113",
//         "email" => "petrushizkia@gmail.com"
//     ],
// ];


$dbh = new PDO('mysql:host=localhost;dbname=phpdasar', 'root', '');
$db = $dbh->prepare('SELECT * FROM mafia');
$db->execute();
$mafia = $db->fetchAll(PDO::FETCH_ASSOC);



$data = json_encode($mafia);
echo $data;

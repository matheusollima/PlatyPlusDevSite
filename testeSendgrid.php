<?php 
$ch = curl_init("https://api.sendgrid.com/");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$res = curl_exec($ch);
$err = curl_error($ch);
curl_close($ch);

if ($err) {
    echo "Erro cURL: $err";
} else {
    echo "Conexão OK!";
}

?>
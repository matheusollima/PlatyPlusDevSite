<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

require 'vendor/autoload.php';

$email = new \SendGrid\Mail\Mail();
$email->setFrom("platyplusdev@gmail.com", "PlatyPlus Dev");
$email->setSubject("Teste simples Locaweb");
$email->addTo("contato@platyplus.com.br", "PlatyPlus");
$email->addContent("text/plain", "Funcionou no servidor Locaweb!");

$apiKey = "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"; // coloque a chave aqui diretamente
$sendgrid = new \SendGrid($apiKey);

try {
    $response = $sendgrid->send($email);
    echo "Status Code: " . $response->statusCode() . "<br>";
    echo "Body: " . $response->body() . "<br>";
    echo "Headers: " . json_encode($response->headers()) . "<br>";
} catch (Exception $e) {
    echo 'Erro capturado: '. $e->getMessage();
}

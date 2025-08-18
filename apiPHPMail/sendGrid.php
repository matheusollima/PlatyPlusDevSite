<?php
require __DIR__ . '/../vendor/autoload.php';



$dotenv = Dotenv\Dotenv::createImmutable(__DIR__ . '/../');
$dotenv->load();

$apiKey = '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';



$nome = $_POST['Nome'];
$email = $_POST['Email'];
$mensagem = $_POST['msgContato'];

// Cria o e-mail
$emailSend = new \SendGrid\Mail\Mail();
$emailSend->setFrom("platyplusdev@gmail.com", "PlatyPlus Dev");
$emailSend->setSubject("Nova mensagem do site");
$emailSend->addTo("contato@platyplus.com.br", "PlatyPlus");
$emailSend->addContent(
    "text/html", 
    "<h1>Nova Mensagem do site</h1>
     <p>Nome: $nome</p>
     <p>Email: $email</p>
     <p>Mensagem: $mensagem</p>"
);

// Envia

$sendgrid = new \SendGrid($apiKey);

try {
    $response = $sendgrid->send($emailSend);
    if ($response->statusCode() == 202) {
        echo "Mensagem enviada com sucesso !";
    } else {
        echo "Erro ao enviar. Status: " . $response->statusCode();
    }
} catch (Exception $e) {
    echo 'Erro: ' . $e->getMessage();
}

<?php 

require __DIR__ . "/../vendor/autoload.php";


$dotenv = Dotenv\Dotenv::createImmutable(__DIR__ . '/../');
$dotenv->load();

$apiKey = $_ENV['SENDRESEND_API_KEY'];

$resend = Resend::client($apiKey);

$nome = $_POST['Nome'];
$email = $_POST['Email'];
$mensagem = $_POST['msgContato'];
try {
    $resend->emails->send([
        'from' => 'contato@platyplus.com.br', // use seu domínio verificado
        'to' => 'contato@platyplus.com.br',    // destinatário
        'subject' => 'Nova mensagem do site',
        'html' => "<strong><h1>Nova mensagem do site</h1></strong><br>
                   <p>Nome: $nome</p><br>
                   <p>Email: $email</p><br>
                   <p>Mensagem: $mensagem</p><br>
                   "
    ]);
    echo "Mensagem Enviada com sucesso !!";
} catch (Exception $e) {
    echo 'Erro: ' . $e->getMessage();
}


?>
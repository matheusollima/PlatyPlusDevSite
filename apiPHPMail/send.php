<?php 

require __DIR__  . "/../vendor/autoload.php";

// Ativa exibição completa de erros
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use Dotenv\Dotenv;

// --- DEBUG: verifica caminho do .env ---
$envPath = realpath(__DIR__ . '/..');
echo "Tentando carregar .env em: $envPath<br>";

// --- Tenta carregar o .env ---
try {
    $dotenv = Dotenv::createImmutable(__DIR__ . '/..');
    $dotenv->load();
    echo ".env carregado com sucesso!<br>";
} catch (\Dotenv\Exception\InvalidPathException $e) {
    die("Erro ao carregar .env: " . $e->getMessage());
}

// --- DEBUG: verifica variáveis do .env ---
$vars = ['SMTP_HOST','SMTP_PORT','SMTP_USERNAME','SMTP_PASSWORD','MAIL_FROM','MAIL_FROM_NAME','MAIL_TO'];
foreach($vars as $var){
    if(!isset($_ENV[$var]) || empty($_ENV[$var])){
        echo "Atenção: variável $var não definida no .env<br>";
    } else {
        echo "$var = " . $_ENV[$var] . "<br>";
    }
}

// --- DEBUG: verifica dados do POST ---
echo "<pre>Dados POST recebidos:\n";
var_dump($_POST);
echo "</pre>";

// --- Prepara valores do email ---
$nome = $_POST['Nome'] ?? 'Teste Nome';
$email = $_POST['Email'] ?? 'teste@teste.com';
$mensagem = $_POST['msgContato'] ?? 'Mensagem de teste';

// --- Inicia envio com PHPMailer ---
$mail = new PHPMailer(true);

try {
    $mail->isSMTP();
    $mail->Host = $_ENV['SMTP_HOST'];
    $mail->SMTPAuth = true;
    $mail->Username = $_ENV['SMTP_USERNAME'];
    $mail->Password = $_ENV['SMTP_PASSWORD'];
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port = $_ENV['SMTP_PORT'];

    $mail->setFrom($_ENV['MAIL_FROM'], $_ENV['MAIL_FROM_NAME']);
    $mail->addAddress($_ENV['MAIL_TO']);
    $mail->isHTML(true);
    $mail->Subject = 'Nova Mensagem do formulário';

    $mailBody = "<h1>Nova Mensagem</h1>
        <p>Nome: $nome</p>
        <p>Email: $email</p>
        <p>Mensagem: $mensagem</p>";
    echo "Corpo do email que será enviado:<br>$mailBody<br>";

    $mail->Body = $mailBody;
    $mail->CharSet = 'UTF-8';
    $mail->Encoding = 'base64';

    $mail->send();
    echo "<br>Mensagem enviada com sucesso!";
} catch (Exception $e) {
    echo "<br>ERRO AO ENVIAR A MENSAGEM: {$mail->ErrorInfo}";
}

?>

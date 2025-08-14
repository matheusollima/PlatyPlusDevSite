<?php 

require __DIR__  . "/../vendor/autoload.php";

// Ativa exibição completa de erros
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use Dotenv\Dotenv;

// --- DEBUG 1: Verifica caminho do .env ---
$envPath = realpath(__DIR__ . '/..');
echo "Tentando carregar .env em: $envPath <br>";

// --- Tenta carregar o .env ---
try {
    $dotenv = Dotenv::createImmutable(__DIR__ . '/..');
    $dotenv->load();
    echo ".env carregado com sucesso!<br>";
} catch (\Dotenv\Exception\InvalidPathException $e) {
    die("Erro ao carregar .env: " . $e->getMessage());
}

// --- DEBUG 2: Verifica se as variáveis do .env existem ---
$vars = ['SMTP_HOST','SMTP_PORT','SMTP_USERNAME','SMTP_PASSWORD','MAIL_FROM','MAIL_FROM_NAME','MAIL_TO'];
foreach($vars as $var){
    if(!isset($_ENV[$var]) || empty($_ENV[$var])){
        echo "Atenção: variável $var não definida no .env<br>";
    } else {
        echo "$var = " . $_ENV[$var] . "<br>";
    }
}

// --- DEBUG 3: Verifica dados do POST ---
echo "<pre>Dados POST recebidos:\n";
var_dump($_POST);
echo "</pre>";

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

    // --- DEBUG 4: conteúdo do corpo do email ---
    $mailBody = "<h1>Nova Mensagem</h1>
        <p>Nome: {$_POST['Nome']}</p>
        <p>Email: {$_POST['Email']}</p>
        <p>Mensagem: {$_POST['msgContato']}</p>";
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

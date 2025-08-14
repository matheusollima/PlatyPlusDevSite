<?php 

require __DIR__  . "/../vendor/autoload.php";

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use Dotenv\Dotenv;


$dotenv = Dotenv::createImmutable(__DIR__ . '/..');
$dotenv->load();

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
 $mail->Body = "<h1>Nova Mensagem</h1>
 
 ";
 $mail->CharSet = 'UTF-8';
$mail->Encoding = 'base64';
 $mail->send();
 echo "Mensagem Enviada com sucesso";
} catch (Exception $e) {
  echo "ERRO AO ENVIAR A MENSAGEM: {$mail->ErrorInfo}";
}


?>
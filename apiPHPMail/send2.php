<?php
// Ativa exibição de erros para debug
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// Recebe os dados do formulário via POST
$nome = isset($_POST['Nome']) ? $_POST['Nome'] : '';
$email = isset($_POST['Email']) ? $_POST['Email'] : '';
$mensagem = isset($_POST['msgContato']) ? $_POST['msgContato'] : '';

// Define o destinatário (seu email do domínio)
$destinatario = 'contato@platyplus.com.br';

// Assunto do email
$assunto = 'Nova mensagem do formulário';

// Corpo da mensagem em HTML
$corpo = "
<h2>Nova Mensagem Recebida</h2>
<p><strong>Nome:</strong> {$nome}</p>
<p><strong>Email:</strong> {$email}</p>
<p><strong>Mensagem:</strong><br>{$mensagem}</p>
";

// Cabeçalhos obrigatórios
$headers = "MIME-Version: 1.1\r\n";
$headers .= "Content-type: text/html; charset=utf-8\r\n";
$headers .= "From: {$email}\r\n"; // remetente é quem preencheu o formulário
$headers .= "Return-Path: contato@platyplus.com.br\r\n"; // email do domínio
$headers .= "Reply-To: {$email}\r\n";

// Envia o email
if(mail($destinatario, $assunto, $corpo, $headers, "-rcontato@platyplus.com.br")) {
    echo "Mensagem enviada com sucesso!";
} else {
    echo "Erro ao enviar a mensagem.";
}
?>

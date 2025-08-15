<?php
// Exibe erros (apenas para testes)
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// Dados do formulário via POST
$nome = isset($_POST['Nome']) ? $_POST['Nome'] : '';
$email = isset($_POST['Email']) ? $_POST['Email'] : '';
$mensagem = isset($_POST['msgContato']) ? $_POST['msgContato'] : '';

// Configurações do envio
$emaildestinatario = "contato@platyplus.com.br"; // Substitua pelo seu e-mail do domínio
$emailsender = "contato@platyplus.com.br";       // Deve ser do mesmo domínio
$assunto = "Nova mensagem do formulário";

// Quebra de linha para Linux
$quebra_linha = "\n";

// Cabeçalhos
$headers = "MIME-Version: 1.1".$quebra_linha;
$headers .= "Content-type: text/html; charset=UTF-8".$quebra_linha;
$headers .= "From: ".$emailsender.$quebra_linha;
$headers .= "Return-Path: ".$emailsender.$quebra_linha;

// Corpo da mensagem
$mensagemHTML = "<h1>Nova mensagem do formulário</h1>";
$mensagemHTML .= "<p><strong>Nome:</strong> ".$nome."</p>";
$mensagemHTML .= "<p><strong>Email:</strong> ".$email."</p>";
$mensagemHTML .= "<p><strong>Mensagem:</strong><br>".$mensagem."</p>";

// Envio usando Postfix (-r define o remetente)
if(!mail($emaildestinatario, $assunto, $mensagemHTML, $headers, "-r".$emailsender)) {
    echo "Erro ao enviar a mensagem. Verifique se o e-mail remetente pertence ao seu domínio e se a função mail() está habilitada.";
} else {
    echo "Mensagem enviada com sucesso!";
}
?>

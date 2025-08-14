<?php
// Ativa exibição de erros
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// Verifica o caminho relativo do .env
$envPath = realpath(__DIR__ . '/..'); // sobe uma pasta
if ($envPath) {
    echo ".env esperado em: $envPath/.env";
} else {
    echo "Não foi possível encontrar a pasta acima de send.php";
}
?>

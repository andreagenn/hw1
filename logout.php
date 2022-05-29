<?php
session_start();

//tolgo tutti i dati salvati
$_SESSION = array();

session_destroy();

//Andiamo alla pagina di accesso
header('Location: login.php');
exit;

?>
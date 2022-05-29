<?php

    $error=false;

    if(!empty($_POST['username']) && 
        !empty($_POST['password']) && 
        !empty($_POST['email']) && 
        !empty($_POST['nome']) && 
        !empty($_POST['cognome'])){

            $errore = array();
            
            $conn =mysqli_connect('localhost','root','','palestra') or die('Errore:'.mysqli_connect_error());

            //controllo username
            if(!preg_match('/^[0-9A-Za-z_]{1,15}$/', $_POST["username"])){
                $errore[]="Attenzione! Username non valido";
            } else {
                $username = mysqli_real_escape_string($conn, $_POST["username"]);
                $query1="SELECT username FROM utenti WHERE username = '$username'";
                $res = mysqli_query($conn, $query1);
                if(mysqli_num_rows($res) > 0) {
                    $errore[]="Attenzione! Username già in uso!";
                }
            }

            //controllo password
            if (strlen($_POST["password"])<5 || strlen($_POST["password"])>15){
                $errore[]="Attenzione! La password deve contenere tra i 5 e i 15 caratteri.";
            }

            //controllo email
            if(!filter_var($_POST["email"], FILTER_VALIDATE_EMAIL)){
                $errore[]="Attenzione! Email non valida!";
            }else{
                $email = mysqli_real_escape_string($conn, $_POST["email"]);
                $query2="SELECT email FROM utenti WHERE email = '$email'";
                $res = mysqli_query($conn, $query2);
                if(mysqli_num_rows($res) > 0) {
                    $errore[]="Attenzione! Email già in uso!";
                }
            }

            //controllo nome e cognome
            if(!preg_match('/^[a-zA-z]{1,15}$/', $_POST["nome"])){
                $errore[]="Attenzione! Inserisci un nome valido";
            }
            if(!preg_match('/^[a-zA-z]{1,15}$/', $_POST["cognome"])){
                $errore[]="Attenzione! Inserisci un cognome valido";
            }

            if(count($errore)==0){
                $username = mysqli_real_escape_string($conn, $_POST["username"]);
                $password=mysqli_real_escape_string($conn,$_POST['password']);
                $email=mysqli_real_escape_string($conn,$_POST['email']);
                $nome=mysqli_real_escape_string($conn,$_POST['nome']);
                $cognome=mysqli_real_escape_string($conn,$_POST['cognome']);

                $query3="INSERT INTO utenti(username, password, email, nome, cognome)
                        VALUES('$username','$password','$email','$nome','$cognome')";
            
                $res=mysqli_query($conn,$query3);
                if(!$res){
                    $error=true;
                }else{
                    header("location: login.php");
                }

                mysqli_close($conn);
            }
    } else if (isset($_POST["username"])) {
        $errore = array("Riempi tutti i campi");
    }
?>

<html>
    <head>
        <title>Power Gym - Iscriviti!</title>
        <meta charset='utf-8'>
        <link rel='stylesheet' href='stili/signup.css?ts=<?=time()?>&quot'>
        <meta name='viewport' content='width=device-width, initial-scale=1.0'>
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Varela+Round&display=swap" rel="stylesheet">
        <script src="script/signup.js" defer></script>
    </head>
    <body>
        <article>
            <section id='logo'>
                <img src='stili/images/logo2.png'>
                <h1>Benvenuto in Power Gym!</h1>
            </section>
            <p>Completa il modulo qui sotto per iscriverti!</p>
            <?php
                // Verifica la presenza di errori
                if (isset($errore)) {
                    //per convertire un array in una stringa
                    $string=implode(" ", $errore);
                    echo "<span class='errore_php'>$string</span>";
                }
            ?>
            <span class='hidden' id='errore1'>La password deve contenere tra i 5 e i 15 caratteri!</span>
            <span class='hidden' id='errore2'>Bisogna compilare tutti i campi!</span>
            <span class='hidden' id='errore3'>Username già in uso!</span>
            <span class='hidden' id='errore4'>Email già in uso!</span>
            <span class='hidden' id='errore5'>Ops qualcosa è andato storto, riprova più tardi!</span>
            <span class='hidden' id='errore6'>Username non valido!</span>
            <span class='hidden' id='errore7'>Formato email non valido!</span>
            <span class='hidden' id='errore8'>Inserisci un nome valido!</span>
            <span class='hidden' id='errore9'>Inserisci un cognome valido!</span>

            <section id='subscribe-form'>
                <form name='signup' method='post' action='signup.php' id='form_subscribe'>

                    <label>Username:<input type='text' name='username' id='nome_u' <?php if(isset($_POST["username"])){echo "value=".$_POST["username"];} ?>></label>
                    <label>Password:<input type='password' name='password' id='pw'<?php if(isset($_POST["password"])){echo "value=".$_POST["password"];} ?>></label>
                    <label>Email:<input type='text' name='email' id='email'<?php if(isset($_POST["email"])){echo "value=".$_POST["email"];} ?>></label>
                    <label>Nome:<input type='text' name='nome' id='nome'<?php if(isset($_POST["nome"])){echo "value=".$_POST["nome"];} ?>></label>
                    <label>Cognome:<input type='text' name='cognome' id='cognome'<?php if(isset($_POST["cognome"])){echo "value=".$_POST["cognome"];} ?>></label>

                    <label>&nbsp<input type='submit' value='Registrati'></label>

                </form>
            </section>

            <p class='footer'>Sei già iscritto? <a id='link' href='login.php'>Accedi qui!</a></p>

        </article>
    </body>
</html>

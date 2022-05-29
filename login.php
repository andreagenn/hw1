<?php

    if(!empty($_POST['username']) && 
    !empty($_POST['password'])){

        $conn=mysqli_connect('localhost','root','','palestra') or die('Errore:'.mysqli_connect_error());
        $username=mysqli_real_escape_string($conn,$_POST['username']);
        $password=mysqli_real_escape_string($conn,$_POST['password']);

        $query="SELECT username, password FROM utenti WHERE username='$username'";
        $res=mysqli_query($conn, $query);
        if(mysqli_num_rows($res) >0) {
            $row=mysqli_fetch_assoc($res);
            if($password == $row['password']){
                session_start();
                
                $_SESSION['loggato']=true;
                $_SESSION['username']=$row['username'];

                header("location: account.php");
                mysqli_close($conn);
            }
        }

        $errore = "Username e/o password errati!";
        
    } else if (isset($_POST["username"]) || isset($_POST["password"])) {
        // Se solo uno dei due è impostato
        $errore = "Inserisci username e password!";
    }
?>

<html>
    <head>
        <title>Power Gym - Accedi!</title>
        <meta charset='utf-8'>
        <link rel='stylesheet' href='stili/login.css?ts=<?=time()?>&quot'>
        <meta name='viewport' content='width=device-width, initial-scale=1.0'>
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Varela+Round&display=swap" rel="stylesheet">
        <script src="script/login.js" defer></script>
    </head>
    <body>
        <article>
            <section id='logo'>
                <img src='stili/images/logo2.png'>
                <h1>Benvenuto in Power Gym!</h1>
            </section>
            <p>Effettua l'accesso!</p>

            <?php
                // Verifica la presenza di errori
                if (isset($errore)) {
                    echo "<span class='errore_php'>$errore</span>";
                }
            ?>
            <span class='hidden' id='errore_login'>Inserisci username e password!</span>
            <span class='hidden' id='cred_sbagliate'>Username e/o password errati!</span>

            <section id='login-form'>
                <form name='login' method='post' action='login.php' id='form_login'>
                    <label>Username:<input type='text' name='username' id='nome_utente'></label>
                    <label>Password:<input type='password' name='password' id='password'></label>
                    <label>&nbsp<input type='submit' value='Accedi' id='button'></label>
                </form>
            </section>

            <p class='footer'>Non hai ancora un account? <a id='link' href='signup.php'>Registrati qui!</a>

        </article>
    </body>
</html>

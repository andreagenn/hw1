<?php
    session_start();

    if(!isset($_SESSION['loggato']) || $_SESSION['loggato']!==true){
      header("location: login.php");
      exit;
    }

    $conn=mysqli_connect('localhost','root','','palestra');
    $username=$_SESSION['username'];
    $query="SELECT * FROM utenti Where username='$username'";
    $res= mysqli_query($conn,$query);
    $row=mysqli_fetch_assoc($res);
    $nome=$row["nome"];
    $cognome=$row["cognome"];
    $email=$row["email"];
    $abbonamento=$row["abbonamento"];
?>


<html>
  <head>
    <meta charset="utf-8">
    <title>Power Gym - Il tuo Account</title>
    <link rel="stylesheet" href="stili/account.css?ts=<?=time()?>&quot">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Varela+Round&display=swap" rel="stylesheet">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
  </head>
  <body>

    <header>
      <nav>
        <div id="links">
          <a href='homepage.php' id="home">Home</a>
          <a href='account.php'>Account</a>
          <a href='scheda.php'>Scheda</a>
          <a href='ricerca_scheda.php'>Ricerca</a>
          <a href='calorie.php'>Calorie</a>
        </div>
        <div id="menu">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </nav>
      <h1>ACCOUNT</h1>
      <div id="overlay"></div>
    </header>

    <article>

        <section>
            <div class="account">
                <em>Il tuo account</em>
                <p>Username: <?php echo "$username" ?></p> 
                <p>Nome: <?php echo "$nome" ?></p>
                <p>Cognome: <?php echo "$cognome" ?></p>
                <p>Email: <?php echo "$email" ?></p>
                <p>Abbonamento: <?php echo "$abbonamento" ?></p>
            </div>
        </section>

        <a id='logout' href='logout.php'>Effettua il logout!</a>
    </article>

    <footer>
        <p>
            Powered by Andrea Gennuso O46002118
        </p>
    </footer>

    </body>

   

</html>
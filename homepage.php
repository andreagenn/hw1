<?php
    session_start();

    if(!isset($_SESSION['loggato']) || $_SESSION['loggato']!==true){
      header("location: login.php");
      exit;
    }

?>


<html>
  <head>
    <meta charset="utf-8">
    <title>Power Gym - Homepage</title>
    <link rel="stylesheet" href="stili/homepage.css?ts=<?=time()?>&quot">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Varela+Round&display=swap" rel="stylesheet">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="script/homepage.js" defer></script>
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
      <h1>HOME</h1>
      <div id="overlay"></div>
    </header>

    <article>
        <section>
            <div class="abbonamenti">
                <em>I nostri abbonamenti:</em>
                <span class='hidden' id='abb_sel'></span>
            </div>
        </section>

    </article>

    <footer>
        <p>
            Powered by Andrea Gennuso O46002118
        </p>
    </footer>

    </body>

   

</html>
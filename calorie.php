<?php
  session_start();

  if(!isset($_SESSION['loggato']) || $_SESSION['loggato']!==true){
    header("location: login.php");
    exit;
  }

  if(isset($_GET['alimento'])) {
    $alimento=$_GET['alimento'];

    $curl = curl_init();

    curl_setopt_array($curl, [
      CURLOPT_URL => "https://food-calorie-data-search.p.rapidapi.com/api/search?keyword=".$alimento,
      CURLOPT_RETURNTRANSFER => true,
      
      
      CURLOPT_MAXREDIRS => 100,
      
      CURLOPT_HTTPHEADER => [
        "x-rapidapi-host: food-calorie-data-search.p.rapidapi.com",
        "x-rapidapi-key: 26754f21bamshaa28ca2e54f8ea1p132e17jsnab333c16b5c4"
      ],
    ]);
    
    
    $risultato=curl_exec($curl);
    $json= json_decode($risultato,true);
    $calorie=$json[0]['energ_kcal'];
    
    
    
    
    
    curl_close($curl);}

?>


<html>
  <head>
    <meta charset="utf-8">
    <title>Power Gym - Kcal Counter</title>
    <link rel="stylesheet" href="stili/calorie.css?ts=<?=time()?>&quot">
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
      <h1>CONTA CALORIE</h1>
      <div id="overlay"></div>
    </header>

    <article>

        <section>
            <div class="calorie">
              <em>Ricordati di contare le calorie che assumi giornalmente!</em>
              <form name='alimenti' action='calorie.php' method='get' id='get_kcal'>
                <span id='descrizione'>Inserisci un alimento (in inglese):</span>
                <input id='barra' type="text" name='alimento' <?php if(isset($_GET["alimento"])){echo "value=".$_GET["alimento"];} ?>>
                <input id='button' type="submit" value="Cerca">
              </form>
              <span class='searchResult'><?php if(isset($calorie)) echo "Il peso calorico di $alimento è: $calorie kcal" ?></span>
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
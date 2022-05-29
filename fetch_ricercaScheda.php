<?php

$input = json_decode(file_get_contents('php://input'), true);
if(isset($input['username']))
{

    
    $conn=mysqli_connect('localhost','root','','palestra');
    $username=mysqli_real_escape_string($conn,$input['username']);
    $query="SELECT esercizio FROM schede Where username='$username'";
    $res= mysqli_query($conn,$query);
    while($row=mysqli_fetch_assoc($res)){
        $risultato[]=$row;
    }

    $risultato[]='utente non trovato o scheda vuota';

    if($risultato){
        echo json_encode($risultato);
    }

    mysqli_close($conn);

}


?>
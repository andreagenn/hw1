<?php 

session_start();

$username=$_SESSION['username'];

$input = json_decode(file_get_contents('php://input'), true);
if(isset($input['esercizio']))
{
    $conn=mysqli_connect('localhost','root','','palestra');
    $esercizio=mysqli_real_escape_string($conn,$input['esercizio']);

    $query="DELETE FROM schede WHERE username='$username' AND esercizio='$esercizio'";

    $res=mysqli_query($conn, $query);
     
    if (!$res) {echo 'errore';} else echo 'ok';
  
    mysqli_close($conn);

}
?>
<?php
session_start();

$username=$_SESSION['username'];

$conn=mysqli_connect('localhost','root','','palestra');
$query="SELECT esercizio FROM schede Where username='$username'";
$res= mysqli_query($conn,$query);

while($row=mysqli_fetch_assoc($res)){

    $esercizi[]=$row;

}

if($esercizi){
    echo json_encode($esercizi);
}

mysqli_close($conn);
    
?>
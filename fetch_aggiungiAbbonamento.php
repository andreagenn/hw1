<?php
    session_start();
    $input = json_decode(file_get_contents('php://input'), true);
    if(isset($input['abbonamento']))
    {
        $conn=mysqli_connect('localhost','root','','palestra');
        $abbonamento=mysqli_real_escape_string($conn,$input['abbonamento']);
        $username=$_SESSION['username'];

        $query="UPDATE utenti SET abbonamento='$abbonamento' where username='$username'";
         
        $res=mysqli_query($conn, $query);
         
        if (!$res) {
            echo 'errore';
        } else echo 'ok';
       
        mysqli_close($conn);
    }
?>
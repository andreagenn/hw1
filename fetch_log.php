<?php

    $input = json_decode(file_get_contents('php://input'), true);
    if(isset($input['username'])&& isset($input['password'])) {

        // Verifichiamo le credenziali tramite query
        $conn=mysqli_connect('localhost','root','','palestra');
        $username=mysqli_real_escape_string($conn,$input['username']);
        $password=mysqli_real_escape_string($conn,$input['password']);
        $query="SELECT username,password FROM utenti Where username='$username' And password= '$password'";
        $res= mysqli_query($conn,$query);

        if(mysqli_num_rows($res) >0) {
            $row=mysqli_fetch_assoc($res);
            
            session_start();
                
            $_SESSION['loggato']=true;
            $_SESSION['username']=$row['username'];

            echo 'OK';                
    
        } else {
            echo 'NOK';
        }

        mysqli_close($conn);
    }
?>
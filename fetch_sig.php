<?php

    $input = json_decode(file_get_contents('php://input'), true); 
     
    if(isset($input['username'])&& 
        isset($input['password'])&&
        isset($input['email'])&&
        isset($input['nome'])&&
        isset($input['cognome'])) {

            $conn=mysqli_connect('localhost','root','','palestra');

            $username=mysqli_real_escape_string($conn,$input['username']);
            $password=mysqli_real_escape_string($conn,$input['password']);
            $email=mysqli_real_escape_string($conn,$input['email']);
            $nome=mysqli_real_escape_string($conn,$input['nome']);
            $cognome=mysqli_real_escape_string($conn,$input['cognome']);

            $query1 = "SELECT username FROM utenti WHERE username='$username'";
            $res1=mysqli_query($conn, $query1);
            $query2 = "SELECT email FROM utenti WHERE email='$email'";
            $res2=mysqli_query($conn, $query2);

            if(mysqli_num_rows($res1)>0){
                echo 'username_utilizzato';
            }else if(mysqli_num_rows($res2)>0){
                echo 'email_utilizzata';
            } else {
                $query3="INSERT INTO utenti(username, password, email, nome, cognome)
                    VALUES('$username','$password','$email','$nome','$cognome')";

                    $res3=mysqli_query($conn, $query3);
                    if(!$res3) {
                        echo 'errore';
                    } else {
                        echo 'ok';
                    }

            }

            mysqli_close($conn);
    }




?>
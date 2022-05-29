<?php

//file dove sono contenuti i dati da inviare tramite API REST alla pagina degli esercizi

    $files=array(
        array(
            "titolo"=>"Chest Press",
            "immagine"=>"stili/images/panca_piana.jpg"
        ),
        array(
            "titolo"=>"Leg Press",
            "immagine"=>"stili/images/pressa.jpg"
        ),
        array(
            "titolo"=>"Push Up",
            "immagine"=>"stili/images/pushups.jpg"
        ),
        array(
            "titolo"=>"Squat",
            "immagine"=>"stili/images/squat.jpg"
        ),
        array(
            "titolo"=>"Biceps Curl",
            "immagine"=>"stili/images/curl_bilanciere.jpg"
        ),
        array(
            "titolo"=>"Dumbbell Press",
            "immagine"=>"stili/images/distensioni_manubri.jpg"
        ),
        array(
            "titolo"=>"Leg Curl",
            "immagine"=>"stili/images/leg_curl.jpg"
        ),
        array(
            "titolo"=>"Leg Extension",
            "immagine"=>"stili/images/leg_extension.jpg"
        ),
        array(
            "titolo"=>"Crosses",
            "immagine"=>"stili/images/croci_manubri_pancainclinata.jpg"
        ),
    );

    echo json_encode($files);
?>
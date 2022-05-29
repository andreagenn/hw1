
//fetch per caricare i contenuti dal file lista_esercizi.php
fetch("http://localhost/hw1/lista_esercizi.php").then(onResponse, onError).then(displayEsercizi);

function onResponse(response) {
    if(!response.ok) {
        console.log('Problema con la risposta');
        return null;
    }
    return response.json();
}

function onError(error) {
    console.log('Errore: '+ error);
}

//funzione per stampare a schermo gli esercizi
function displayEsercizi(json){
    if(!json) {
        console.log('Nessun json ritornato');
        return;
    }
    console.log(json);


    const choicegrid=document.querySelector(".choice-grid");

    //1 esercizio
    const es1=document.createElement('div');
    es1.classList.add('risposta');
    const img1=document.createElement('img');
    img1.src=json[0].immagine;
    const titolo1= document.createElement('span');
    titolo1.textContent=json[0].titolo;
    es1.appendChild(img1);
    es1.appendChild(titolo1);
    choicegrid.appendChild(es1);

    //2 esercizio
    const es2=document.createElement('div');
    es2.classList.add('risposta');
    const img2=document.createElement('img');
    img2.src=json[1].immagine;
    const titolo2= document.createElement('span');
    titolo2.textContent=json[1].titolo;
    es2.appendChild(img2);
    es2.appendChild(titolo2);
    choicegrid.appendChild(es2);

    //3 esercizio
    const es3=document.createElement('div');
    es3.classList.add('risposta');
    const img3=document.createElement('img');
    img3.src=json[2].immagine;
    const titolo3= document.createElement('span');
    titolo3.textContent=json[2].titolo;
    es3.appendChild(img3);
    es3.appendChild(titolo3);
    choicegrid.appendChild(es3);

    //4 esercizio
    const es4=document.createElement('div');
    es4.classList.add('risposta');
    const img4=document.createElement('img');
    img4.src=json[3].immagine;
    const titolo4= document.createElement('span');
    titolo4.textContent=json[3].titolo;
    es4.appendChild(img4);
    es4.appendChild(titolo4);
    choicegrid.appendChild(es4);

    //5 esercizio
    const es5=document.createElement('div');
    es5.classList.add('risposta');
    const img5=document.createElement('img');
    img5.src=json[4].immagine;
    const titolo5= document.createElement('span');
    titolo5.textContent=json[4].titolo;
    es5.appendChild(img5);
    es5.appendChild(titolo5);
    choicegrid.appendChild(es5);

    //6 esercizio
    const es6=document.createElement('div');
    es6.classList.add('risposta');
    const img6=document.createElement('img');
    img6.src=json[5].immagine;
    const titolo6= document.createElement('span');
    titolo6.textContent=json[5].titolo;
    es6.appendChild(img6);
    es6.appendChild(titolo6);
    choicegrid.appendChild(es6);

    //7 esercizio
    const es7=document.createElement('div');
    es7.classList.add('risposta');
    const img7=document.createElement('img');
    img7.src=json[6].immagine;
    const titolo7= document.createElement('span');
    titolo7.textContent=json[6].titolo;
    es7.appendChild(img7);
    es7.appendChild(titolo7);
    choicegrid.appendChild(es7);

    //8 esercizio
    const es8=document.createElement('div');
    es8.classList.add('risposta');
    const img8=document.createElement('img');
    img8.src=json[7].immagine;
    const titolo8= document.createElement('span');
    titolo8.textContent=json[7].titolo;
    es8.appendChild(img8);
    es8.appendChild(titolo8);
    choicegrid.appendChild(es8);

    //9 esercizio
    const es9=document.createElement('div');
    es9.classList.add('risposta');
    const img9=document.createElement('img');
    img9.src=json[8].immagine;
    const titolo9= document.createElement('span');
    titolo9.textContent=json[8].titolo;
    es9.appendChild(img9);
    es9.appendChild(titolo9);
    choicegrid.appendChild(es9);

    //funzione di controllo per vedere se ci sono gia esercizi selezionati nel database

    function inizialize() {

        fetch('http://localhost/hw1/fetch_inizialize.php', {
            method: 'POST',
            headers: {
    
                'Content-Type': 'application/json'
            }
        }).then(handler).then(controllo)
    
        function handler(response) {
            if (!response) { console.log('Nessuna risposta') }
    
            return response.json();
    
        }
    
        function controllo(ritorno) {
            if (!ritorno) {
                console.log('Nessun json ritornato');
                return;
            }
            const esercizi=ritorno;
            const lenght = Object.keys(esercizi).length;
            for (let j = 0; j < lenght; j++) {
                if (ritorno[j].esercizio == 'Chest Press') {
                    es1.classList.add('rispostaSelezionata');
                    es1.removeEventListener('click', ae1);
                    es1.addEventListener('click', re1);
                }
                if (ritorno[j].esercizio == 'Leg Press') {
                    es2.classList.add('rispostaSelezionata');
                    es2.removeEventListener('click', ae2);
                    es2.addEventListener('click', re2);
                }
                if (ritorno[j].esercizio == 'Push Up') {
                    es3.classList.add('rispostaSelezionata');
                    es3.removeEventListener('click', ae3);
                    es3.addEventListener('click', re3);
                }
                if (ritorno[j].esercizio == 'Squat') {
                    es4.classList.add('rispostaSelezionata');
                    es4.removeEventListener('click', ae4);
                    es4.addEventListener('click', re4);
                }
                if (ritorno[j].esercizio == 'Biceps Curl') {
                    es5.classList.add('rispostaSelezionata');
                    es5.removeEventListener('click', ae5);
                    es5.addEventListener('click', re5);
                }
                if (ritorno[j].esercizio == 'Dumbbell Press') {
                    es6.classList.add('rispostaSelezionata');
                    es6.removeEventListener('click', ae6);
                    es6.addEventListener('click', re6);
                }
                if (ritorno[j].esercizio == 'Leg Curl') {
                    es7.classList.add('rispostaSelezionata');
                    es7.removeEventListener('click', ae7);
                    es7.addEventListener('click', re7);
                }
                if (ritorno[j].esercizio == 'Leg Extension') {
                    es8.classList.add('rispostaSelezionata');
                    es8.removeEventListener('click', ae8);
                    es8.addEventListener('click', re8);
                }
                if (ritorno[j].esercizio == 'Crosses') {
                    es9.classList.add('rispostaSelezionata');
                    es9.removeEventListener('click', ae9);
                    es9.addEventListener('click', re9);
                }

            }
        }
    
    }

    inizialize();

    //aggiunta e rimozione esercizio 1
    es1.addEventListener('click', ae1);
    function ae1(){
        es1.classList.add('rispostaSelezionata');
        const parametri = {
            'esercizio': 'Chest Press'
        }

        fetch('http://localhost/hw1/fetch_aggiungiEsercizio.php', {
        method: 'POST',
        headers: {

            'Content-Type': 'application/json'
        },
        body: JSON.stringify(parametri)
        }).then(handler).then(inserimentodb)

        function handler(response) {
            const ritorno = response.text();
            return ritorno;
        }

        function inserimentodb(ritorno) {
            const a = ritorno;
            console.log(a);
            es1.removeEventListener('click', ae1);
            es1.addEventListener('click', re1);
        }
    }

    function re1(){
        es1.classList.remove('rispostaSelezionata');
        const parametri={
            'esercizio': 'Chest Press'
        }
        fetch('http://localhost/hw1/fetch_rimuoviEsercizio.php', {
        method: 'POST',
        headers: {

            'Content-Type': 'application/json'
        },
        body: JSON.stringify(parametri)
        }).then(handler).then(rimozionedb)

        function handler(response) {
            const ritorno = response.text();
            return ritorno;
        }

        function rimozionedb(ritorno) {
            const a = ritorno;
            console.log(a);
            es1.removeEventListener('click', re1);
            es1.addEventListener('click', ae1);
        }
    }

    //aggiunta e rimozione esercizio 2
    es2.addEventListener('click', ae2);
    function ae2(){
        es2.classList.add('rispostaSelezionata');
        const parametri = {
            'esercizio': 'Leg Press'
        }

        fetch('http://localhost/hw1/fetch_aggiungiEsercizio.php', {
        method: 'POST',
        headers: {

            'Content-Type': 'application/json'
        },
        body: JSON.stringify(parametri)
        }).then(handler).then(inserimentodb)

        function handler(response) {
            const ritorno = response.text();
            return ritorno;
        }

        function inserimentodb(ritorno) {
            const a = ritorno;
            console.log(a);
            es2.removeEventListener('click', ae2);
            es2.addEventListener('click', re2);
        }
    }

    function re2(){
        es2.classList.remove('rispostaSelezionata');
        const parametri={
            'esercizio': 'Leg Press'
        }
        fetch('http://localhost/hw1/fetch_rimuoviEsercizio.php', {
        method: 'POST',
        headers: {

            'Content-Type': 'application/json'
        },
        body: JSON.stringify(parametri)
        }).then(handler).then(rimozionedb)

        function handler(response) {
            const ritorno = response.text();
            return ritorno;
        }

        function rimozionedb(ritorno) {
            const a = ritorno;
            console.log(a);
            es2.removeEventListener('click', re2);
            es2.addEventListener('click', ae2);
        }
    }

    //aggiunta e rimozione esercizio 3
    es3.addEventListener('click', ae3);
    function ae3(){
        es3.classList.add('rispostaSelezionata');
        const parametri = {
            'esercizio': 'Push Up'
        }

        fetch('http://localhost/hw1/fetch_aggiungiEsercizio.php', {
        method: 'POST',
        headers: {

            'Content-Type': 'application/json'
        },
        body: JSON.stringify(parametri)
        }).then(handler).then(inserimentodb)

        function handler(response) {
            const ritorno = response.text();
            return ritorno;
        }

        function inserimentodb(ritorno) {
            const a = ritorno;
            console.log(a);
            es3.removeEventListener('click', ae3);
            es3.addEventListener('click', re3);
        }
    }

    function re3(){
        es3.classList.remove('rispostaSelezionata');
        const parametri={
            'esercizio': 'Push Up'
        }
        fetch('http://localhost/hw1/fetch_rimuoviEsercizio.php', {
        method: 'POST',
        headers: {

            'Content-Type': 'application/json'
        },
        body: JSON.stringify(parametri)
        }).then(handler).then(rimozionedb)

        function handler(response) {
            const ritorno = response.text();
            return ritorno;
        }

        function rimozionedb(ritorno) {
            const a = ritorno;
            console.log(a);
            es3.removeEventListener('click', re3);
            es3.addEventListener('click', ae3);
        }
    }

    //aggiunta e rimozione esercizio 4
    es4.addEventListener('click', ae4);
    function ae4(){
        es4.classList.add('rispostaSelezionata');
        const parametri = {
            'esercizio': 'Squat'
        }

        fetch('http://localhost/hw1/fetch_aggiungiEsercizio.php', {
        method: 'POST',
        headers: {

            'Content-Type': 'application/json'
        },
        body: JSON.stringify(parametri)
        }).then(handler).then(inserimentodb)

        function handler(response) {
            const ritorno = response.text();
            return ritorno;
        }

        function inserimentodb(ritorno) {
            const a = ritorno;
            console.log(a);
            es4.removeEventListener('click', ae4);
            es4.addEventListener('click', re4);
        }
    }

    function re4(){
        es4.classList.remove('rispostaSelezionata');
        const parametri={
            'esercizio': 'Squat'
        }
        fetch('http://localhost/hw1/fetch_rimuoviEsercizio.php', {
        method: 'POST',
        headers: {

            'Content-Type': 'application/json'
        },
        body: JSON.stringify(parametri)
        }).then(handler).then(rimozionedb)

        function handler(response) {
            const ritorno = response.text();
            return ritorno;
        }

        function rimozionedb(ritorno) {
            const a = ritorno;
            console.log(a);
            es4.removeEventListener('click', re4);
            es4.addEventListener('click', ae4);
        }
    }

    //aggiunta e rimozione esercizio 5
    es5.addEventListener('click', ae5);
    function ae5(){
        es5.classList.add('rispostaSelezionata');
        const parametri = {
            'esercizio': 'Biceps Curl'
        }

        fetch('http://localhost/hw1/fetch_aggiungiEsercizio.php', {
        method: 'POST',
        headers: {

            'Content-Type': 'application/json'
        },
        body: JSON.stringify(parametri)
        }).then(handler).then(inserimentodb)

        function handler(response) {
            const ritorno = response.text();
            return ritorno;
        }

        function inserimentodb(ritorno) {
            const a = ritorno;
            console.log(a);
            es5.removeEventListener('click', ae5);
            es5.addEventListener('click', re5);
        }
    }

    function re5(){
        es5.classList.remove('rispostaSelezionata');
        const parametri={
            'esercizio': 'Biceps Curl'
        }
        fetch('http://localhost/hw1/fetch_rimuoviEsercizio.php', {
        method: 'POST',
        headers: {

            'Content-Type': 'application/json'
        },
        body: JSON.stringify(parametri)
        }).then(handler).then(rimozionedb)

        function handler(response) {
            const ritorno = response.text();
            return ritorno;
        }

        function rimozionedb(ritorno) {
            const a = ritorno;
            console.log(a);
            es5.removeEventListener('click', re5);
            es5.addEventListener('click', ae5);
        }
    }

    //aggiunta e rimozione esercizio 6
    es6.addEventListener('click', ae6);
    function ae6(){
        es6.classList.add('rispostaSelezionata');
        const parametri = {
            'esercizio': 'Dumbbell Press'
        }

        fetch('http://localhost/hw1/fetch_aggiungiEsercizio.php', {
        method: 'POST',
        headers: {

            'Content-Type': 'application/json'
        },
        body: JSON.stringify(parametri)
        }).then(handler).then(inserimentodb)

        function handler(response) {
            const ritorno = response.text();
            return ritorno;
        }

        function inserimentodb(ritorno) {
            const a = ritorno;
            console.log(a);
            es6.removeEventListener('click', ae6);
            es6.addEventListener('click', re6);
        }
    }

    function re6(){
        es6.classList.remove('rispostaSelezionata');
        const parametri={
            'esercizio': 'Dumbbell Press'
        }
        fetch('http://localhost/hw1/fetch_rimuoviEsercizio.php', {
        method: 'POST',
        headers: {

            'Content-Type': 'application/json'
        },
        body: JSON.stringify(parametri)
        }).then(handler).then(rimozionedb)

        function handler(response) {
            const ritorno = response.text();
            return ritorno;
        }

        function rimozionedb(ritorno) {
            const a = ritorno;
            console.log(a);
            es6.removeEventListener('click', re6);
            es6.addEventListener('click', ae6);
        }
    }

    //aggiunta e rimozione esercizio 7
    es7.addEventListener('click', ae7);
    function ae7(){
        es7.classList.add('rispostaSelezionata');
        const parametri = {
            'esercizio': 'Leg Curl'
        }

        fetch('http://localhost/hw1/fetch_aggiungiEsercizio.php', {
        method: 'POST',
        headers: {

            'Content-Type': 'application/json'
        },
        body: JSON.stringify(parametri)
        }).then(handler).then(inserimentodb)

        function handler(response) {
            const ritorno = response.text();
            return ritorno;
        }

        function inserimentodb(ritorno) {
            const a = ritorno;
            console.log(a);
            es7.removeEventListener('click', ae7);
            es7.addEventListener('click', re7);
        }
    }

    function re7(){
        es7.classList.remove('rispostaSelezionata');
        const parametri={
            'esercizio': 'Leg Curl'
        }
        fetch('http://localhost/hw1/fetch_rimuoviEsercizio.php', {
        method: 'POST',
        headers: {

            'Content-Type': 'application/json'
        },
        body: JSON.stringify(parametri)
        }).then(handler).then(rimozionedb)

        function handler(response) {
            const ritorno = response.text();
            return ritorno;
        }

        function rimozionedb(ritorno) {
            const a = ritorno;
            console.log(a);
            es7.removeEventListener('click', re7);
            es7.addEventListener('click', ae7);
        }
    }

    //aggiunta e rimozione esercizio 8
    es8.addEventListener('click', ae8);
    function ae8(){
        es8.classList.add('rispostaSelezionata');
        const parametri = {
            'esercizio': 'Leg Extension'
        }

        fetch('http://localhost/hw1/fetch_aggiungiEsercizio.php', {
        method: 'POST',
        headers: {

            'Content-Type': 'application/json'
        },
        body: JSON.stringify(parametri)
        }).then(handler).then(inserimentodb)

        function handler(response) {
            const ritorno = response.text();
            return ritorno;
        }

        function inserimentodb(ritorno) {
            const a = ritorno;
            console.log(a);
            es8.removeEventListener('click', ae8);
            es8.addEventListener('click', re8);
        }
    }

    function re8(){
        es8.classList.remove('rispostaSelezionata');
        const parametri={
            'esercizio': 'Leg Extension'
        }
        fetch('http://localhost/hw1/fetch_rimuoviEsercizio.php', {
        method: 'POST',
        headers: {

            'Content-Type': 'application/json'
        },
        body: JSON.stringify(parametri)
        }).then(handler).then(rimozionedb)

        function handler(response) {
            const ritorno = response.text();
            return ritorno;
        }

        function rimozionedb(ritorno) {
            const a = ritorno;
            console.log(a);
            es8.removeEventListener('click', re8);
            es8.addEventListener('click', ae8);
        }
    }

    //aggiunta e rimozione esercizio 9
    es9.addEventListener('click', ae9);
    function ae9(){
        es9.classList.add('rispostaSelezionata');
        const parametri = {
            'esercizio': 'Crosses'
        }

        fetch('http://localhost/hw1/fetch_aggiungiEsercizio.php', {
        method: 'POST',
        headers: {

            'Content-Type': 'application/json'
        },
        body: JSON.stringify(parametri)
        }).then(handler).then(inserimentodb)

        function handler(response) {
            const ritorno = response.text();
            return ritorno;
        }

        function inserimentodb(ritorno) {
            const a = ritorno;
            console.log(a);
            es9.removeEventListener('click', ae9);
            es9.addEventListener('click', re9);
        }
    }

    function re9(){
        es9.classList.remove('rispostaSelezionata');
        const parametri={
            'esercizio': 'Crosses'
        }
        fetch('http://localhost/hw1/fetch_rimuoviEsercizio.php', {
        method: 'POST',
        headers: {

            'Content-Type': 'application/json'
        },
        body: JSON.stringify(parametri)
        }).then(handler).then(rimozionedb)

        function handler(response) {
            const ritorno = response.text();
            return ritorno;
        }

        function rimozionedb(ritorno) {
            const a = ritorno;
            console.log(a);
            es9.removeEventListener('click', re9);
            es9.addEventListener('click', ae9);
        }
    }







}



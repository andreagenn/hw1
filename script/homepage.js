//fetch per caricare i contenuti dal file abbonamenti.php

fetch("http://localhost/hw1/abbonamenti.php").then(onResponse, onError).then(displayAbbonamenti);

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

function displayAbbonamenti(json){
    if(!json) {
        console.log('Nessun json ritornato');
        return;
    }
    console.log(json);


    const flexAbbonamenti = document.querySelector('.abbonamenti');

    //abbonamento standard
    const month1=document.createElement('div');
    month1.classList.add('month');

    const img1=document.createElement('img');
    img1.src=json[0].immagine;

    const titolo1= document.createElement('span');
    titolo1.textContent=json[0].titolo;

    month1.appendChild(img1);
    month1.appendChild(titolo1);

    flexAbbonamenti.appendChild(month1);

    

    //abbonamento da 3 mesi
    const month2=document.createElement('div');
    month2.classList.add('month');

    const img2=document.createElement('img');
    img2.src=json[1].immagine;

    const titolo2= document.createElement('span');
    titolo2.textContent=json[1].titolo;
    
    month2.appendChild(img2);
    month2.appendChild(titolo2);

    flexAbbonamenti.appendChild(month2);



    //abbonamento da 6 mesi
    const month3=document.createElement('div');
    month3.classList.add('month');

    const img3=document.createElement('img');
    img3.src=json[2].immagine;

    const titolo3= document.createElement('span');
    titolo3.textContent=json[2].titolo;
    
    month3.appendChild(img3);
    month3.appendChild(titolo3);

    flexAbbonamenti.appendChild(month3);

    //nascondo la scritta di default (abbonamento selezionato)
    const abb_sel=document.querySelector("#abb_sel");
    abb_sel.classList.add('hidden');

    //chiamata delle funzioni per aggiungere gli abbonamenti al database
    //abbonamento standard
    titolo1.addEventListener('click', aggiungiAbbonamento1);
    function aggiungiAbbonamento1(){

        const abbonamento = {
            'abbonamento': '1 mese'
        }
    
        fetch('http://localhost/hw1/fetch_aggiungiAbbonamento.php', {
            method: 'POST',
            headers: {
    
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(abbonamento)}).then(handler).then(inserimentodb)
    
        function handler(response) {
            const ritorno = response.text();
            return ritorno;
        }
    
        function inserimentodb(ritorno) {
            const a = ritorno;
            console.log(a);

            abb_sel.classList.remove('hidden');
            abb_sel.textContent='ABBONAMENTO STANDARD SELEZIONATO';

            titolo1.removeEventListener('click', aggiungiAbbonamento1);
            titolo2.addEventListener('click', aggiungiAbbonamento2);
            titolo3.addEventListener('click', aggiungiAbbonamento3);

        }
   
    }

    //abbonamento da 3 mesi
    titolo2.addEventListener('click', aggiungiAbbonamento2);
    function aggiungiAbbonamento2(){

        const abbonamento = {
            'abbonamento': '3 mesi'
        }
    
        fetch('http://localhost/hw1/fetch_aggiungiAbbonamento.php', {
            method: 'POST',
            headers: {
    
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(abbonamento)}).then(handler).then(inserimentodb)
    
        function handler(response) {
            const ritorno = response.text();
            return ritorno;
        }
    
        function inserimentodb(ritorno) {
            const a = ritorno;
            console.log(a);
            
            abb_sel.classList.remove('hidden');
            abb_sel.textContent='ABBONAMENTO DA 3 MESI SELEZIONATO';

            titolo1.addEventListener('click', aggiungiAbbonamento1);
            titolo2.removeEventListener('click', aggiungiAbbonamento2);
            titolo3.addEventListener('click', aggiungiAbbonamento3);
            
        }

        
    }

    //abbonamento da 6 mesi
    titolo3.addEventListener('click', aggiungiAbbonamento3);
    function aggiungiAbbonamento3(){

        const abbonamento = {
            'abbonamento': '6 mesi'
        }
    
        fetch('http://localhost/hw1/fetch_aggiungiAbbonamento.php', {
            method: 'POST',
            headers: {
    
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(abbonamento)}).then(handler).then(inserimentodb)
    
        function handler(response) {
            const ritorno = response.text();
            return ritorno;
        }
    
        function inserimentodb(ritorno) {
            const a = ritorno;
            console.log(a);

            abb_sel.classList.remove('hidden');
            abb_sel.textContent='ABBONAMENTO DA 6 MESI SELEZIONATO';

            titolo1.addEventListener('click', aggiungiAbbonamento1);
            titolo2.addEventListener('click', aggiungiAbbonamento2);
            titolo3.removeEventListener('click', aggiungiAbbonamento3);
        }

        
    }

}


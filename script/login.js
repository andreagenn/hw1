const form=document.forms['login'];

const errore_login = document.querySelector('#errore_login');
const errore_credenziali = document.querySelector("#cred_sbagliate");

form.addEventListener('submit', validazione_login);

function validazione_login(event) {
    event.preventDefault();

    let parametri={
        'username': form.username.value,
        'password': form.password.value
    };

    if (form.username.value.length == 0 || form.password.value.length == 0) {
        event.preventDefault();
        errore_login.classList.remove('hidden');
        errore_credenziali.classList.add("hidden");

    } else {

        fetch('http://localhost/hw1/fetch_log.php', {
            method: 'POST',
            headers: {

                'Content-Type': 'application/json'
            },
            body: JSON.stringify(parametri)
        }).then(handler).then(controllo_credenziali)

    }
}

function handler(response) {
    const ritorno = response.text();
    return ritorno;
}

function controllo_credenziali(ritorno) {
    if (ritorno == 'OK') { 
        window.location = "http://localhost/hw1/account.php"; 
    }
    if (ritorno == 'NOK') {
        errore_credenziali.classList.remove('hidden'); 
        errore_login.classList.add('hidden');
    }
}
  
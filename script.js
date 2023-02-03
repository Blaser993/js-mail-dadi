console.log("Mail");

// Mail
// Creaun array con una lista di email (stringhe)
// Chiedi all'utente la sua email (con il prompt), controlla che sia nella lista di email,
// stampa un messaggio appropriato sull’esito del controllo.


const mails = ["corrado_depinto@virgilio.it" , "corradodepinto.design@gmail.com", "blaser@hotmail.it" , "ibradado93@live.it" , "example@dominio.eu"];
console.log(mails);


let yourMail = prompt("Inserisci la tua mail");


let mailConfirmed = false

for (let i = 0; i < mails.length  ; i++) {  
    let mailRegistered = mails[i]

    if (mailRegistered === yourMail) {
        mailConfirmed = true;   
    } 

}

if (mailConfirmed == true) {
    console.log("la tua mail è valida");
    
} else {
    console.log("La mail inserita non è valida, riprovare")
    alert("La mail inserita non è valida, riprovare")
    prompt("Inserisci la tua mail");
}
     

// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.
// Prima di partire a scrivere codice poniamoci qualche domanda: Che ci sia un array da qualche parte? Se dobbiamo confrontare qualcosa che “cosa” ci serve?

console.log("DADI")

const dado = ["1" , "2" , "3" , "4" , "5" , "6"];
console.log(dado);

let playerDado

let computerDado

const resultPlayer = Math.floor(Math.random(dado) * dado.length);
const resultComputer = Math.floor(Math.random(dado) * dado.length);


playerDado = resultPlayer
console.log(playerDado);

computerDado = resultComputer
console.log(computerDado);




// Consigli del giorno:
// scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
// javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
// si ma noi cosa vogliamo fare?
// torniamo a scrivere in italiano
// proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo 'a mano'


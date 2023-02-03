console.log("Mail");

// Mail
// Creaun array con una lista di email (stringhe)
// Chiedi all'utente la sua email (con il prompt), controlla che sia nella lista di email,
// stampa un messaggio appropriato sull’esito del controllo.


const mails = ["corrado_depinto@virgilio.it" , "corradodepinto.design@gmail.com", "blaser@hotmail.it" , "ibradado93@live.it" , "example@dominio.eu"];
console.log(mails);

let yourMail = prompt("Inserisci la tua mail");
console.log(yourMail)

for (let i = 0; i < mails.length; i++) {


    let mailRegistered = i
    console.log(mails[mailRegistered]);


}

// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.
// Prima di partire a scrivere codice poniamoci qualche domanda: Che ci sia un array da qualche parte? Se dobbiamo confrontare qualcosa che “cosa” ci serve?

// Consigli del giorno:
// scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
// javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
// si ma noi cosa vogliamo fare?
// torniamo a scrivere in italiano
// proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo 'a mano'


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


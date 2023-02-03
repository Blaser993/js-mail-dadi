// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.
// Prima di partire a scrivere codice poniamoci qualche domanda: Che ci sia un array da qualche parte? Se dobbiamo confrontare qualcosa che “cosa” ci serve?

console.log("DADI")

const dado = ["1" , "2" , "3" , "4" , "5" , "6"];
console.log(dado);

let playerDado

let computerDado

const resultPlayer = Math.floor(Math.random(dado) * (dado.length) +1);
const resultComputer = Math.floor(Math.random(dado) * (dado.length) +1);


playerDado = resultPlayer
console.log("il tuo numero è " + playerDado);

computerDado = resultComputer
console.log("il numero del computer è " + computerDado);

if(playerDado > computerDado){
    console.log("hai vinto")

} else if (playerDado < computerDado) {
    console.log("hai perso")

}   else console.log("pareggio")

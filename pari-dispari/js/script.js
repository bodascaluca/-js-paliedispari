
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
const evenOrOdd = prompt(`Pari o dispari?`);
console.log(evenOrOdd);

const randomUserNumber = parseInt(prompt(`Dimmi un numero tra 1 e 5`));
console.log(randomUserNumber);

// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
const randomPcNUmber = randomNumber();  
console.log(randomPcNUmber);

// Sommiamo i due numeri
const sumNumber = (randomUserNumbe +  randomPcNUmbe );
console.log("La somma è",sumNumber);



//Funzione randomNumber
function randomNumber(){
    const result = Math.floor(Math.random() * 5) + 1;
    // console.log(result);
    return result;
}
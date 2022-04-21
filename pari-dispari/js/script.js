
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
const askEvenOrOdd = prompt(`Pari o dispari?`);
console.log(askEvenOrOdd);

const randomUserNumber = parseInt(prompt(`Dimmi un numero tra 1 e 5`));
console.log(randomUserNumber);

// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
const randomPcNUmber = randomNumber();  
console.log(randomPcNUmber);

// Sommiamo i due numeri
const sumNumber = randomUserNumber + randomPcNUmber;
console.log("La somma è",sumNumber);

// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
const resultEvenOrOdd = evenOrOdd(sumNumber);
console.log("La somma è" ,resultEvenOrOdd);

// Dichiariamo chi ha vinto.
let  endResult = "Hai perso";
if (askEvenOrOdd === resultEvenOrOdd){
    endResult = "Hai vinto"
} 
console.log("Quindi",endResult);









//Funzione randomNumber
function randomNumber(){
    const result = Math.floor(Math.random() * 5) + 1;
    // console.log(result);
    return result;
}

//Funzione evenOrOdd
function evenOrOdd (sumNumber){
    if (sumNumber % 2 === 0){
        result = "pari"; 
        console.log(result);
    }else if (sumNumber % 2 === 1){
        result = "dispari";
        console.log(result);
    }
    return result;
}

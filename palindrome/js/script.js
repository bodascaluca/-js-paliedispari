//Chiedere all’utente di inserire una parola
//Creare una funzione per capire se la parola inserita è palindroma




function checkpalindrome(takeWord){

    const re = /[\W_]/g;

    const toLowerName = takeWord.toLowerCase().replace(re,"");
    console.log(toLowerName);

    const splitTheName = toLowerName.split(``);
    console.log(splitTheName);

    const reverseTheName = splitTheName.reverse();
    console.log(reverseTheName);

    const joinTheName = reverseTheName.join(``);
    console.log(joinTheName);

    if (toLowerName === joinTheName){
        console.log(`La parola è palindroma`);
    } else {
        console.log(`La parola non è palindroma`)
    }
}




//Chiedere all’utente di inserire una parola
const takeWord = prompt(`Scrivi una paola palindroma: `);
checkpalindrome(takeWord);

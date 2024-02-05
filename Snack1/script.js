// Crea un array vuoto e chiedi all’utente un numero da inserire nell’array. Continua a chiedere 
// i numeri all’utente e a inserirli nell’array fino a quando la somma degli elementi è minore di 50.

let numberList = [];
let contatore = 0;
let sum = 0

while (sum<50) {
    const numberUser = +prompt("Inserisci un valore (valore totale massimo 50): ");

    if( typeof numberUser === "number") {

        
        numberList.push(numberUser);
        console.log(numberUser);
        sum += numberUser;

    } else {
        alert("Il valore inserito non è valido");
    
    }
}

console.log(sum);
document.querySelector("div").innerText = "Hai superato 50!"
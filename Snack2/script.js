// Genera un numero casuale tra 1 e 100 e poi chiedi all'utente di indovinare il numero. 
// Il programma poi deve far comparire un messaggio "il numero è troppo alto" oppure 
// "il numero è troppo basso" nel momento in cui il numero detto dall'utente 
// non è perfettamente uguale al numero estratto in modo casuale.
// Quando l'utente trova il numero, fateglielo sapere!

const randomNumber = Math.floor(Math.random()*100) + 1;

console.log(randomNumber);

let tentativo = 0;

let userNumber = +prompt("Indovina il valore scelto dal computer (compreso tra 1 e 100): ");


do {

    if (!Number.isNaN(userNumber) && userNumber > 0) {

        tentativo++;

        if (userNumber > randomNumber) {

            alert("Valore inserito troppo alto, riprova!");
            userNumber = Number(prompt("Nuovo tentativo (compreso tra 1 e 100): "));
        
        } else if (userNumber < randomNumber) {

            alert("Valore inserito troppo basso, riprova!");
            userNumber = Number(prompt("Nuovo tentativo (compreso tra 1 e 100): "));

        }


    } else {

        alert("Il valore inserito non è valido");
        userNumber = Number(prompt("Nuovo tentativo (compreso tra 1 e 100): "));
    
    }

} while (userNumber !== randomNumber);

console.log(tentativo);

if (tentativo !== 1) {
    document.querySelector("div").innerText = `Hai indovinato il valore ${randomNumber} scelto dal computer, impiegando un totale di ${tentativo} tentativi.`

} else {
    document.querySelector("div").innerText = `Con una probanilità dell'1% hai indovinato il valore ${randomNumber} scelto dal computer al primo tentativo! WOW!`
}

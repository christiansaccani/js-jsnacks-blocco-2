let more = true;
let userAnswer;


while (more === true) {

    const userNumber = +prompt("Inserisci un numero: ");

    if (!Number.isNaN(userNumber) && userNumber > 0) {

        if (userNumber % 2 == 0) {

            document.querySelector("div").append(`${userNumber} `);
        
        } else {

            let newElement = userNumber + 1;
            document.querySelector("div").append(`${newElement} `);

        }

    } else {

        alert("Il valore inserito non è valido, riprova!");
    }

    userAnswer = prompt("Vuoi continuare a giocare? Digita \"no\" per interrompere il gioco");
    
    if (userAnswer == "no") {
        more = false;
    }
}

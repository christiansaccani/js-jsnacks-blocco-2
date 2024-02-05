const firstList = [];
const secondList = [];

let firstCounter = 0;
let secondCounter = 0;
let diffCounter;

firstList.length = prompt("Indica la lunghezza della prima lista: ");
secondList.length = prompt("Indica la lunghezza della seconda lista: ");

while (firstCounter < firstList.length) {
    const newValue = Math.floor(Math.random()*50) + 1;
    firstList[firstCounter] = newValue;

    firstCounter++;
    }

    while (secondCounter < secondList.length) {
        const newValue = Math.floor(Math.random()*50) + 1;
        secondList[secondCounter] = newValue;
    
        secondCounter++;
        }

if (firstList.length > secondList.length) {

    document.querySelector("div").append(`La prima stringa è ${firstList}.`);
    document.querySelector("div").append(document.createElement('br'));
    document.querySelector("div").append(`La seconda stringa è ${secondList}.`);
    document.querySelector("div").append(document.createElement('br'));

    diffCounter = firstList.length - secondList.length;

    document.querySelector("div").append(`Aggiungendo la differenza di ${diffCounter} elementi la stringa più corta diventa: `);

    while (diffCounter > 0) {
        const newValue = Math.floor(Math.random()*50) + 51;
        secondList[secondCounter] = newValue;
    
        secondCounter++;
        diffCounter--;
    }

    document.querySelector("div").append(secondList);

} else if (firstList.length < secondList.length) {

    document.querySelector("div").append(`La prima stringa è ${firstList}.`);
    document.querySelector("div").append(document.createElement('br'));
    document.querySelector("div").append(`La seconda stringa è ${secondList}.`);
    document.querySelector("div").append(document.createElement('br'));

    diffCounter = secondList.length - firstList.length;

    document.querySelector("div").append(`Aggiungendo la differenza di ${diffCounter} elementi la stringa più corta diventa: `);

    while (diffCounter > 0) {
        const newValue = Math.floor(Math.random()*50) + 51;
        firstList[firstCounter] = newValue;
    
        firstCounter++;
        diffCounter--;
    }

    document.querySelector("div").append(firstList);

} else {
    document.querySelector("div").append(`La prima stringa è ${firstList}.`);
    document.querySelector("div").append(document.createElement('br'));
    document.querySelector("div").append(`La seconda stringa è ${secondList}.`);
    document.querySelector("div").append(document.createElement('br'));

}

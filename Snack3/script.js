const firstList = [];
const secondList = [];

let firstCounter = 0;
let secondCounter = 0;
let diffCounter;

firstList.length = prompt("Indica la lunghezza della prima lista: ");
secondList.length = prompt("Indica la lunghezza della seconda lista: ");

if (firstList.length > secondList.length) {

    while (firstCounter < firstList.length) {
    const newValue = Math.floor(Math.random()*50) + 1;
    firstList[firstCounter] = newValue;

    firstCounter++;
    }

    console.log(firstList);

    while (secondCounter < secondList.length) {
        const newValue = Math.floor(Math.random()*50) + 1;
        secondList[secondCounter] = newValue;
    
        secondCounter++;
        }
    
    console.log(secondList);

    diffCounter = firstList.length - secondList.length;
    console.log(diffCounter);

    while (diffCounter > 0) {
        const newValue = Math.floor(Math.random()*50) + 51;
        secondList[secondCounter] = newValue;
    
        secondCounter++;
        diffCounter--;
    }

    console.log(secondList);

}

// Troque todos os elementos pares e diferentes de zero de um array pelo número O.
// SE o array for vazio, retorne -1.

let array = [1,3,4,6,80,33,23,90]

function substituiElementos(array) {
    if(!array.length) return -1;
    if(!array) return -2;

    for(let i = 0; i < array.length; i++) {
        if(array[i] === 0 ) {
            console.log("Array ja é zero")

        } else if (array[i] % 2 === 0) {
            console.log(`Substituindo ${array[i]} por 0...`)
            array[i] = 0;
        }
    }
    return array;
}

console.log(substituiElementos([]));

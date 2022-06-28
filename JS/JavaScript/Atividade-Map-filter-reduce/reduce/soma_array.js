// Some todos os numeros de um array

function somaNumeros (array) {
    return array.reduce(function(prev, current) { // utilizando reduce passamos a função de callback, valor anterior e valor atual.
        console.log({prev}); // mostra quem é prev
        console.log({current}); //mostra quem é current
        return prev + current; //retorna soma do anterior com o atual
    });
}

const array = [1, 2];  

console.log(somaNumeros(array));
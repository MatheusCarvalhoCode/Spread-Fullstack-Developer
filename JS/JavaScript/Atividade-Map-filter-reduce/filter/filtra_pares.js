//Filtre e retorne todos os números pares de um array


function filterNums(array) {
    return array.filter (function callback(numArray){  //filtra pela função de callback que retorna valor do array % 2 === 0 (par)
        return (numArray % 2 === 0)
    }
    )
}

const nums = [0, 2, 3, 5, 6, 8, 9, 12, 14, 20]


console.log(`Numeros pares`, filterNums(nums));

const meuArray = [30, 30, 40, 5, 223, 2049, 3034, 5];

function valoresUnicos(array) {
    const mySet = new Set(array);

    return [...mySet]; //utilizando Rest para retornar um array
}

console.log(valoresUnicos(meuArray));
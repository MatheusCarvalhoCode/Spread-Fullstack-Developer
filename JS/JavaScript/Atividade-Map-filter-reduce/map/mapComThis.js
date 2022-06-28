// Pratique a sintaxe de multiplicação de números, uma vez utilizando o parametro this
// de um objeto criado por voce e depois sem ele

const carro = {
    value: 4,
}

const aviao = {
    value: 5,
}

function mapComThis(array, thisArg) { //funcao mapComThis recebe um array e o objeto (carro ou aviao)
   return array.map (function (numArray){ // retorna array.map(function(numArray))
    return numArray * this.value}, thisArg) //retorna multiplicacao entre numArray com o valor do this (4 ou 5), thisArg (carro ou aviao)
}

const nums = [10, 20];

console.log(`this = carro`, mapComThis(nums, carro)); // quando this é carro, funcao multiplica 10*4 e mostra 40

console.log(`this = aviao`, mapComThis(nums, carro));

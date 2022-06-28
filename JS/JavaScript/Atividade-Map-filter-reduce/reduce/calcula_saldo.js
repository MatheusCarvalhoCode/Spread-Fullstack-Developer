// Crie uma função que recebe uma lista de preços e um número representando o saldo disponivel
// Calcule qual será o saldo final após subtrair todos os preços da lista enviada.

const lista = [
    {
        name: "Batatas Fritas",
        preco: 20
    },
    {
        name: "Pão Pullman",
        preco: 6
    },
    {
        name: "Chocolate",
        preco: 10
    }
]
const saldoDisponivel = 0;

function debitaSaldo (saldoDisponivel,array) {
    return array.reduce(function(prev, current, index){
     return prev - current.preco;
    }, saldoDisponivel);
}

console.log(debitaSaldo(1000,lista))
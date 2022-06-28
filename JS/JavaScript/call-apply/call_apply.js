function calculaIdade(anos) {
    return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos} anos de idade.`;
}

const pessoa1 = {
    nome: "Matheus",
    idade: 23
}

const pessoa2 = {
    nome: "Kamily",
    idade: 18
}

//console.log(calculaIdade.call(pessoa2, 10)); //call
console.log(calculaIdade.apply(pessoa2, [10])); //apply
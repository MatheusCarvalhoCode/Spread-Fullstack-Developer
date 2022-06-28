/*
Crie a classe ContaBancaria, que possui os parâmetros agencia, numero, tipo e saldo; OK
Dentro de ContaBancaria, construa o getter e o setter de saldo; OK
Dentro de ContaBancaria, crie os métodos sacar e depositar; OK
Crie uma classe-filha chamada ContaCorrente que herda todos esses parâmetros e ainda possua o parâmetro cartaoCredito; OK
Ainda em ContaCorrente, construa o getter e o setter de cartaoCredito; OK
Ainda em ContaCorrente, faça com que o tipo seja 'conta corrente' por padrão; OK
Crie uma classe-filha chamada ContaPoupanca que herda todos os parâmetros de ContaBancaria; OK
Crie uma classe-filha chamada ContaUniversitaria que herda todos os parâmetros de ContaBancaria; OK
Faça com que o método saque de ContaUniversitaria apenas seja capaz de sacar valores menores que 500 reais. OK
*/

//Cria a classe ContaBancaria com parâmetros agencia, numero, tipo e saldo;
  class ContaBancaria {
  constructor(agencia,numero,tipo) {
    this.agencia = agencia;
    this.numero = numero;
    this.tipo = tipo;
    this._saldo = 0; //ao declarar getter setter, colocar "_" para dizer que a funcao get set tenha nome saldo mas a prop não
  }
//Constroi getter e setter de saldo
  get saldo() {
    return this._saldo;
  }
  set saldo(valor) {
    this._saldo = valor;
  }
//Cria os métodos sacar e depositar;
  sacar(valor) {
  if(valor > this._saldo) {
    console.log("Não é possivel sacar valores maiores do que o saldo em conta")
    return "Operação negada"
  }
    this._saldo = this._saldo - valor;
    return this._saldo;
  }
  depositar(valor) {
    if(valor <= 0) {
      console.log("Operação negada, valor precisa ser maior que 0")
      return "Operação negada"
    }
      this._saldo = this._saldo + valor;
      return this._saldo;
    }
}
//Cria uma classe-filha chamada ContaCorrente que herda todos esses parâmetros e ainda possua o parâmetro cartaoCredito
  class ContaCorrente extends ContaBancaria {
  constructor(agencia,numero,cartaoCredito) {  //herdar agencia, numero, saldo
    super(agencia,numero); //apontar para objeto pai "contaBancaria"
    this.tipo = "Corrente" //Dizer que o tipo'conta corrente' é o padrão
    this._cartaoCredito = cartaoCredito
  }
//Constroi o getter e o setter de cartaoCredito;
  get cartaoCredito() {
    return this._cartaoCredito;
  }
  set cartaoCredito(credito) {
    if(!credito) {
      return "Cartao de Credito não possui credito suficiente para a transação"
    }
      this._cartaoCredito = credito;
  }
}
//Cria uma classe-filha chamada ContaPoupanca que herda todos os parâmetros de ContaBancaria;
  class ContaPoupanca extends ContaBancaria {
    constructor(agencia,numero) {
      super(agencia,numero);
      this.tipo = 'Poupança';
    }
  }
//Cria uma classe-filha chamada ContaUniversitaria que herda todos os parâmetros de ContaBancaria;
  class ContaUniversitaria extends ContaBancaria {
    constructor(agencia,numero) {
      super(agencia,numero);
      this.tipo = 'Universitária';
    }
//Cria método saque de ContaUniversitaria que seja apenas capaz de sacar valores menores que 500 reais.
    sacar(valor) {
      if(valor > 500) {
        return "Saques devem ser de até R$500,00"
      }
      this._saldo = this._saldo - valor
    }
  }

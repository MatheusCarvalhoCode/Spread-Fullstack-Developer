//Crie uma função que recebe um array e um número OK
// Realize as seguintes validações:
// Se parametros nao forem enviados > erro ReferenceError OK
// Se array nao for do tipo object > erro TypeError OK
// Se numero não for do tipo number, lance um erro do tipo TypeError OK
// Se tamanho do array for diferente do número enviado como parametro > erro RangeError OK
// utilize try...catch e filtre chamadas catch utilizando operador instaceof OK

function recebeArray (array,numero) {
  try { // quando ocorre o erro

    if(!array && !num) throw new ReferenceError("Envie os parâmetros");

    if(typeof array !== 'object') throw new TypeError("Array precisa ser do tipo Object");

    if(typeof numero !== 'number') throw new TypeError("Array precisa ser do tipo Number");

    if (array.length !== num) throw new RangeError("Tamanho Inválido");

    return array;
  }

  catch(e) { //tratamento do erro

    if(e instanceof ReferenceError) { //se o erro é um tipo de ReferenceError
      console.log("Este erro é um ReferenceError!"); //mostra
      //console.log(e.name) //mostra nome do erro
      //console.log(e.stack) //mostra linha do erro
      throw (e);
      console.log(e.message); //mostra mensagem de erro
    }
    else if(e instanceof TypeError) {
      console.log("Este erro é um TypeError!"); //mostra
      //console.log(e.name) //mostra nome do erro
      //console.log(e.stack) //mostra linha do erro
      throw (e);
      console.log(e.message); //mostra mensagem de erro
    }
    else if (e instanceof RangeError) {
      console.log("Este erro é um RangeError!"); //mostra
      //console.log(e.name) //mostra nome do erro
      //console.log(e.stack) //mostra linha do erro
      throw (e);
      console.log(e.message); //mostra mensagem de erro
    }
    else {
      console.log("Tipo de erro não esperado" + e);
    }
    

    }
  }

  console.log(recebeArray([1,2,4,5]))

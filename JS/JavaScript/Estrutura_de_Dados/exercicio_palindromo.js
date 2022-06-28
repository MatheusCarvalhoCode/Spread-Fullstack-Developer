// Verificando o Palindromo / palavra: ROMA ME TEM AMOR 

//solução 1

function verificaPalindromo(string) {
    if(!string) return "string inexistente"; // verifica se tem string

    return string.split("").reverse("").join("") === string;
     // split para separar a frase formando um array // utilizando o .reverse para colocar ao contrario // juntando elementos com o .join
     //verifica se a string reversa é igual a string que recebeu

}

// ROMA ME TEM AMOR
function verificaPalindromo2(string) {
    if(!string) return "string inexistente";

    for (let i = 0; i < string.length / 2; i++) {
    if(string[i] !== string[string.length - 1 - i]) {
        return false;
    }

return true;

}
}

console.log(verificaPalindromo2("ROMA ME TEM AMOR"))

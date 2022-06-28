// Crie uma estrutura de projeto front-end(HTML,CSS e JS)
// Copie o HTML e o CSS deste repositório
// Crie um arquivo script na sua pasta assets
// Selecione os elementos h1,button,footer e body
// SE os elementos possuirem a classe dark-mode, modifique seus estilos
// Caso contrário, volte os estilos para o original


// As mudanças ocorridas ao clicar no botão estão na classe dark-mode que está no css

// Cria as constantes para capturar os elementos que serão alterados no HTML
const darkModeButton = document.getElementById("buttonMode");
const darkModeBody = document.querySelector('body');
const darkModeImg = document.getElementById('sunmoon');
const darkModeGitImg = document.getElementById('git-img');
const darkModeDevelop = document.querySelector('h3')

// Aguarda o evento de click no botão para executar a função changeMode
darkModeButton.addEventListener("click", changeMode);

// Coloca nos elementos a classe dark-mode
function changeClasses(){
    darkModeButton.classList.toggle('dark-mode');
    darkModeBody.classList.toggle('dark-mode');
    darkModeDevelop.classList.toggle('dark-mode');
}

// Altera o texto do botão
function changeText(){
    if(darkModeBody.classList.contains('dark-mode')){
        darkModeButton.innerHTML = 'Light Mode';
        return; // Retorna para poder sair da função
    }
    darkModeButton.innerHTML = 'Dark mode'; // Caso não faça nada mantém o estado inicial que é Dark Mode
}

// Muda o atributo src trocando o caminho da imagem no HTML
function changeImgs(){
    if(darkModeBody.classList.contains('dark-mode')){
        darkModeImg.setAttribute('src', 'moon.png');
        darkModeGitImg.setAttribute('src', 'github.png');
        return;
    }
    darkModeImg.setAttribute('src', 'sun.png');
    darkModeGitImg.setAttribute('src', 'placa-do-github.png');   
}

// Chama as duas funções para executar a alterações assim que o botão é clicado
function changeMode(){
    changeClasses();
    changeText();
    changeImgs();
}
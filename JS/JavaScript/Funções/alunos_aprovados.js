const alunos = [
    {
        nome:'Matheus',
        nota:10,
        turma:'3C',
    },
    {
        nome:'Kamily',
        nota:10,
        turma:'2B',
    },
    {
        nome:'Pedro',
        nota:'1',
        turma:'1A',
    },
];

function alunosAprovados(array, media) {
    let aprovados = [];

    for (let i = 0; i < array.length; i++) {
       const {nota,nome} = array[i]; //Object Destructuring

     if(nota >= media) {
        aprovados.push(nome)
     }
    }

    return aprovados;
}
console.log(alunosAprovados(alunos,5));
//Crie uma função getAdmins que recebe um Map
//Crie um map e popule-o com nomes de usuários e seus papéis no sistema
// Dentro de getAdmins, utilize o loop for...of para retornar uma lista com os nomes de usuários que são administradores

function getAdmins(map) {
    let admins = [];
    for([key, value] of map) // [chave, valor]
    if(value === 'Admin') {
        admins.push(key)
    }
    return admins;
}

const users = new Map();

users.set('Matheus', 'Admin'); //(chave, valor)
users.set('Kamily', 'Admin');
users.set('Julia', 'User');

console.log(getAdmins(users));
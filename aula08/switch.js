/**
 * exemplos de switch
 */
console.log('menu de opcoes');
console.log('cadastro');
console.log('consulta');
console.log('alteracao');
console.log('exclusao');
let op = 6;
// usando o switch 
switch(op) {
    case 1: console.log('escolheu cadastro'); break;
    case 2: console.log('escolheu consulta'); break;
    case 3: console.log('escolheu alteracao'); break;
    case 4: console.log('escolheu exclusao'); break;
    default: console.log('escolheu uma invalida');
}

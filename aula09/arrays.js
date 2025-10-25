//definindo um array
const vetor = [];
vetor.push('item 1')
vetor.push('item 2')
vetor.push('item 3')
console.log(vetor);
vetor.push(1234); //Adiciona
console.log(vetor);
console.log(vetor.pop()); //remove o ultimo elemento
console.log(vetor);
vetor.splice(1, 1);
console.log(vetor);
//percorrendo o vetor com for (1 opcao)
for (let i=0; i<vetor.length; i++) {
    console.log(vetor[i]);
}
console.log('listando vetor com primeria opcao');
//percorrendo com for (segunda opcao)
for (let it of vetor) {
    console.log(it);
}
console.log('listando vetor com segunda opcao');
//percorrendo o vetor com forEach
vetor.forEach(it => console.log(it));
console.log('listando vetor com terceira opcao');

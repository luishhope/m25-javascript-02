/**
 * aqui iremos ver como trabalhar com conjunto em js
 */
let nomes = ['andre', 'amarildo', 'joaquim', 'zaqueu'];
console.log(nomes[2]);
//listando usando o for
for (let i=0; i<nomes.length; i++) {
    console.log(nomes [i]);
}
console.log('fim do for (1a opcao)');
console.log('=+'.repeat(20));
//2a opcao
for (const it of nomes) {
    console.log(it);
}
console.log('fim do for (2a opcao)');
console.log('=+'.repeat(20));
//while
 let i=0;
 while(i<nomes.length) {
    console.log(nomes[i++]);
 }
 console.log('fim do while');
function fatorial(numero) {
    let ret = 1;
    //aqui abaixo sera um laco decrescente 
    for (i=numero; i>1; i--) {
        ret*=i;
    }
    return ret; 
}
console.log('o fatorial de 5 eh ' + fatorial(5));
//arrow fatorial 
const fatorial_arrow = (numero) => {
let ret = 1;
for (i=numero; i>1; i--) {
    ret*=i;
}   
return ret;
}   
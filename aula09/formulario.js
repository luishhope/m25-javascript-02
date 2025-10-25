const validarEnvio = () => {
    const cmpNome = document.querySelector('#nome');
    if (cmpNome.value != "") {
        console.log('tem conteudo!!', cmpNome.value);
        return true;
    } else {
        console.log('nao te conteudo!!', cmpNome.value);
        return false;
    }
}
//adicionando o evento d submit ao formulario
const form = document.querySelector('#form');
form.addEventListener('submit', function(e) {
    console.log('evento form!');
    console.log(validarEnvio());
    e.preventDefault();
    return validarEnvio();
})
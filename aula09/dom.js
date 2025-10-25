/**
 * manipulando objetos do html com js
 */
const incluir = () => {
    const li = document.createElement('li');
    const txtCmp = document.getElementById('texto');
    //sconst txtCmp = document.querySelector('#texto');
    //colocando o conteudo do texto no li
    li.textContent = txtCmp.value;
    //colocando o li no ol
    const ol = document.getElementById('lista'); //(posso usar o outro modo tb)
    ol.appendChild(li);
}
const remover = () => {
    const lis = document.querySelectorAll('li');
    const txtCmp = document.querySelector('#texto');
    const ol = document.querySelector('#lista');
    //percorrendo os lis
    lis.forEach(it => {
        if (it.textContent == txtCmp.value) {
            ol.removeChild(it);
        }
    });
}
//evento no "incluir"
const btnadicionar = document.querySelector('#adicionar')
const btnremover = document.querySelector('#remover')
btnadicionar.addEventListener('click', incluir);
btnremover.addEventListener('click', remover);
//evento no "remover"

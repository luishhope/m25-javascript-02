//java responsavel pelo cadastro
const maior_id = () => {
//const axios = require('axios').default;
return axios.get('http://localhost:3000/Produtos').then((ret)=> {
    return ret.data.reduce((a, b) => (a > b?.id ? a : b?.id), 0);
})
}
const gravar = () => {
    //const axios = require('axios').default;
    //buscando os dados do formlario
    const id = document.querySelector('#id').value;

    const descricao = document.querySelector('#iddesc').value;

    const saldo = document.querySelector('#idsaldo').value;

    const preco = document.querySelector('#idpreco').value;

//montando o json para gravar
maior_id().then((ret)=> {
    const dados = {
        'id': (id == 'null' ? ret+1 : id),
        'descricao': descricao,
        'saldo': saldo,
        'preco': preco
        }
    if (id=='null') {
        axios.post('http://localhost:3000/Produtos/', dados)
        .then((ret)=>console.log('produto gravado com sucesso!'));
    } else {
        axios.put('httplocalhost:3000/Produtos/'+id, dados);
        then((ret)=> {
            console.log('produto gravado com suceso!');
        })
    }
})
}
const form = document.querySelector('form');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    //chamando a gravaçao do registro
    gravar();
    setTimeout(()=> {
        window.location.href = 'index.html';
    }, 3000);
})

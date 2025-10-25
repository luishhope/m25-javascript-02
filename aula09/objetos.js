//nesse codigo iremos ver objetos em js
const meuObjeto = {
    'nome': 'luis',
    'endereço': 'rua da pavuna',
    'numero': '18',
    'ehfumante': false,
    'ola': () => {
        console.log('ola mundo!');
    },
    'telefones':{
        'residencial': '14 123456789',
        'comercial': '14 987654321'
    }
}
meuObjeto.ola();
console.log(meuObjeto);
//transformando objeto json em texto
console.log(JSON.stringify(meuObjeto));
//transformando um teto em JSON
const txtObjeto = '{"codigo": 1234, "preco": 15.32' + ', "descricao": "teste"}';
const obj = JSON.parse(txtObjeto);
console.log(obj);
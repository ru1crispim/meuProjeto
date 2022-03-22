let cadastroClientes ={
    nome:"Silvia",
    idade: 20,
    cidade: "São Paulo",
}

let conversaoStringfy = JSON.stringify(cadastroClientes);
console.log(conversaoStringfy);

let stringDeCadastroDeClientes = '{"nome":"Silvia","idade":20,"cidade":"São Paulo"}'
let conversaoParse = JSON.parse(stringDeCadastroDeClientes);
console.log(conversaoParse);
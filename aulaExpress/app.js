const express = require('express'); // importar modulo express no arquivo entry point ("App.js")
const app = express(); //Para executar todos os metodos disponiveis na biblioteca express e os recursos ficam dentro da variavel app
console.log(app); //mostrará as funcoes disponiveis no modulo express
const path = require('path');

//Levantando um servidor

//definindo rota

app.get('/', (req, res)=>res.send('Olá Mundo!'))
app.get('/contato',(req,res)=>res.send('tel: 11 - 96809-5834'));

//utilizando post

let produto = {
    tipoProduto: 'living',
    preco: 1245,
    quantidade: 300 
}

app.post('/produto',(req,res)=>res.send(produto));

// criando servidor

app.listen(3000, () => {
    console.log('Servidor rodando');//Retornar mensagem quando o servidor estiver rodando
})

//Respondendo com um arquivo

app.get('/arquivo',(req,res)=>{
    res.sendFile(path.join(__dirname,'/img/logoDH.png'));

});


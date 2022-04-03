const http = require("http");
const { hostname } = require("os");

http.createServer((req,res)=>{

    res.writeHead(200,{"Content-type":"text/plain"}); //Cabecalho informando o tipo de mensagem que iremos retornar

    switch(req.url){ //Switch para personalizar as respostas para o client
        case "/":
            res.end("Você está na pagina home!");
            break;
        case "/contato":
            res.end("Você está na pagina contato!");
            break;
        default:
            res.end("Você está no nosso servidor");
            break;

    }
    // res.end('Meu primeiro servidor'); // conteudo que sera visualizado como retorno

    req.url


}).listen(3000);


//Routing - Mandando respostas diferentes utilizando um if ou switch



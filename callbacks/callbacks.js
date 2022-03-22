
// Callbacks

// const somar = (numeroA,numeroB)=> numeroA + numeroB;
// const subtrair = (numeroA,numeroB)=> numeroA - numeroB;
// const dividir = (numeroA,numeroB)=> numeroA / numeroB;
// const multiplicar = (numeroA,numeroB)=> numeroA * numeroB;

// const calculadora = (numeroA,numeroB,operacao) => operacao(numeroA,numeroB);

// console.log(calculadora(10,20,somar));
// console.log(calculadora(10,20,subtrair));

// Exercicio 1

// const dobro = (num) => num*2;
// const triplo = (num) => num*3;
// const aplicar = (num,callback) => callback(num);
// console.log(aplicar(3,dobro));

// function dobro(num){
//     return num*2;
// }


// function triplo(num){
//     return num*3;
// }


// function aplicar(num,callback){
//     return callback(num);
// }

// console.log(aplicar(5,dobro));


// // Exercicio 2 - Calculadora

function somar(numeroA,numeroB){

return numeroA + numeroB;

} 

function subtrair(numeroA,numeroB){

return numeroA - numeroB;

}

function multiplicar(numeroA,numeroB){

return numeroA * numeroB;

}

function dividir(numeroA,numeroB){

return numeroA / numeroB;

}

function calculadora(numeroA,numeroB,operacao){
    return operacao(numeroA,numeroB);
}

console.log(calculadora(10,10,subtrair));


// // Exercicio 3 - HTTP
// let listaCompleta =[]
// function adicionarHttp(url){
//     return "http://"+url;

// }

// function processar(listaSites,concatenar){
    
//     for (let i =0;i<listaSites.length;i++){
//     concatenar(listaSites[i])
//     listaCompleta.push(concatenar(listaSites[i]))
//     }
// return listaCompleta

// }
// console.log(processar(['www.google.com','www.yahoo.com'],adicionarHttp));

// Exercicio extra para fixar - Agrupamento de frutas, legumes e verduras

// let catalogoOutros =[]
// let catalogoFrutas =[]
// let catalogoLegumes =[]
// let catalogoVerduras =[]


// function agrupar(listaParaCadastrar){

//     for(let i = 0;i<listaParaCadastrar.length;i++){

//     switch(listaParaCadastrar[i].categoria){
//         case "fruta":
//             catalogoFrutas.push(listaParaCadastrar[i]);
//             break
            

//         case "legume":
//             catalogoLegumes.push(listaParaCadastrar[i]);
//             break

//         case "verdura":
//             catalogoVerduras.push(listaParaCadastrar[i]);
//             break
            

//     default:
//         catalogoOutros.push(listaParaCadastrar[i]);   

//     }
// }

// }

// function organizarProdutos(novosProdutos,classificar){
//     return classificar(novosProdutos);
// }

// organizarProdutos([
//     {
//     nome:"Banana",
//     categoria:"fruta",
//     quantidade:18,
// },

// {
//     nome:"Alface",
//     categoria:"verdura",
//     quantidade:23,
// },

// {
//     nome:"Batata",
//     categoria:"legume",
//     quantidade:15,
// },
// {
//     nome:"Cenoura",
//     categoria:"legume",
//     quantidade:15,
// },
// {
//     nome:"Ovo",
//     categoria:"Outros",
//     quantidade:50,
// }],agrupar);



// console.log('Catalogo de frutas: ',catalogoFrutas);
// console.log('Catalogo de verduras: ',catalogoVerduras);
// console.log('Catalogo de legumes: ',catalogoLegumes);
// console.log('Catalogo de outros: ',catalogoOutros);



// Exercicio extra para fixar - cadastro de usuario

let bancoDeDados=[{nome:'Teresa',sobrenome:'Cristina',idade:31,cpf:31235362512},{nome:'Mario',sobrenome:'Antunes',idade:48,cpf:58874125863}];
let resultadoBusca=null;


// Exercicio extra para fixar - pesquisar e cadastrar usuario

    // Pesquisar

function pesquisar(cpfCadastro){
    for(let i =0;i<bancoDeDados.length;i++){
                
        if(bancoDeDados[i].dadosUsuario!==cpfCadastro){
            continue
        }else{
            resultadoBusca='Usuário localizado no banco de dados!';
        }
    // resultadoBusca = (bancoDeDados[i].cpf===cpfCadastro)? console.log("Usuario já cadastrado!"):"-"; //Melhorar codigo em caso negativo(não aparecer nada!)
        }
    }

    // Cadastrar

    function cadastrar(usuario){

        bancoDeDados.push(usuario);
        
        }


    //Função principal   

function realizarManutencaoBd(dadosUsuario,executar){

return executar(dadosUsuario);

}

console.log(realizarManutencaoBd({nome:'Jovanildo',sobrenome:'Santos',idade:31,cpf:34676589066},cadastrar));

console.log(bancoDeDados);
// // Catalogo com filmes

let catalogo = [{
    codigo:1,
    titulo:'Titanic',
    duracao: 2,
    atores:['Leonardo di Caprio', 'Kate Winslet'],
    anoDeLancamento:1998,
    emCartaz:false,
},
{
    codigo:2,
    titulo:'O diabo veste Prada',
    duracao: 1,
    atores:['Meryl Streep', 'Anne Hathaway'],
    anoDeLancamento:2006,
    emCartaz:true,
}];



// let catalogo= require('./database/catalogo.json'); //Importando as informações do arquivo catalogo.json

// // Listar todos os filmes 

// function listarTodosOsFilmes(){
// for(let i =0;i<catalogo.length;i++){
//     console.log("Codigo do filme: ",catalogo[i].codigo);
//     console.log("Titulo do filme: ",catalogo[i].titulo);
//     console.log("Duração: ",catalogo[i].duracao,"hora(s)");
//     console.log("Elenco principal: ",catalogo[i].atores);
//     console.log("Ano de lançamento: ",catalogo[i].anoDeLancamento);
//     console.log(catalogo[i].emCartaz==true?"Em cartaz":"Indisponivel");
//     console.log(" ");
// }
// }
// listarTodosOsFilmes();

// // Listar filmes em cartaz

// function listarFilmesEmCartaz(){
//     let resultado=null;
//     for(let i =0;i<catalogo.length;i++){
//         if(catalogo[i].emCartaz===true){
//         console.log("Codigo do filme: ",catalogo[i].codigo);
//         console.log("Titulo do filme: ",catalogo[i].titulo);
//         console.log("Duração: ",catalogo[i].duracao,"hora(s)");
//         console.log("Elenco principal: ",catalogo[i].atores);
//         console.log("Ano de lançamento: ",catalogo[i].anoDeLancamento);
//         console.log(catalogo[i].emCartaz==true?"Em cartaz":"Indisponivel");
//         console.log(" ");
//         resultado++;
//         } 
//     }
//     console.log("Foram encontrados: ",resultado," filmes.")
// }
// listarFilmesEmCartaz();


// // função alterar status em cartaz - IF TERNARIO

//     function alterarFilmesEmCartaz(codFilme){
        
//         for(let i =0;i<catalogo.length;i++){
//             (catalogo[i].codigo===codFilme && catalogo[i].emCartaz===true)?catalogo[i].emCartaz=false:catalogo[i].emCartaz=true;
//         }
//         return catalogo;
//     }
// console.log(alterarFilmesEmCartaz(2));

// // Função adicionar Filme

function adicionarFilme(valorCodigo,valorTitulo,valorDuracao,valorAtores,valorAnoLancamento,valorEmCartaz){
    let filmeNovo={codigo:valorCodigo,titulo:valorTitulo,duracao:valorDuracao,atores:valorAtores,anoDeLancamento:valorAnoLancamento,emCartaz:valorEmCartaz};
    catalogo.push(filmeNovo);
    return catalogo;
}

adicionarFilme(3,'Beethoven',2,['Amelie K','João de Barro'],1990,false);
console.log(catalogo);


// // função buscar Filme

function buscarFilme(x){
    const achou = null;
    for(let i=0;i<catalogo.length;i++){
        if(catalogo[i].codigo==x){
           achou=catalogo[i];
           break
    }
    }
    return achou
}

console.log(buscarFilme(2));

// //função alterar status em cartaz

function alterarStatusEmCartaz(x){
    for(let i=0;i<catalogo.length;i++){
        if(catalogo[i].codigo==x && catalogo[i].emCartaz==false){
            console.log(catalogo[i].emCartaz=true);
    }else{
            console.log(catalogo[i].emCartaz=false);
    }
    }
}

alterarStatusEmCartaz(2);
console.log(catalogo);


// const somar = (numero, numeroB) => {

// console.log('Recebi um numero: ' + numero+" e "+ numeroB)

// }

// Utilizando o conceito de destrutuação + arrow functions

// somar(10,20);

let listaDeNomes =['João','Maria','Carla','Pedro']; //Criei um array com nomes
let [nome1,nome2,nome3,nome4]=listaDeNomes; //utilizei o conceito destruturação para armazenar cada elemento da array em uma variavel isolada.

let listaConvidados = (nomeA,nomeB,nomeC,nomeD)=>{ //Criei uma função arrow com quatro parametros para armazenar os nomes das variaveis isoladas

    console.log('Os convidados são: ',nomeA,nomeA,nomeB,nomeC,nomeD);
}

listaConvidados(nome1,nome2,nome3,nome4); // Executei a função para verificação


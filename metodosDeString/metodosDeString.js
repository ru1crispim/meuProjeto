// // Metodos de string

 

// // .length - Informa a quantidade de caracteres

 

// // .indexOf - Busca uma informação dentro de uma string (Caso a informação não é localizada, o metodo retorna -1

 

// // .slice(dois parametros) - Informamos o indice inicial e o final para captura do dado desejado.

// // .trim() - Remove os espaços das extremidades de uma string

// // .replace() - Substitui um dado de uma string, recebendo dois parametros)

// // . split() - Transforma uma string em uma array, infromando um delimitador como parametro

 

// let frase = 'sou programador js';

// console.log(frase.length);

// console.log(frase.indexOf("js"));

// console.log(frase.slice(0,2)); // Não altera a frase original




//  // .trim() - Retira os espaços das extremidades de um texto ou palavra;

//  // . split(""); - Transfroma uma string em uma array, informando um delimitador como parametro

//  // .replace(""); - Substitui um texto dentro de uma string, informando 2 parametros.... o primeiro seria o texto procurado e o segundo o novo texto.

 

//  let frutas = "banana maçã cebola cenoura alface";

//  console.log(frutas.split(" "));

 

//  //Objetos literais - Sintaxe

 

//  let casa={

//      portas:3,

//      janelas:2,

//      cor:"Amarela",

//  }

 

//  //Para acessar uma propriedade de um objeto, utilizamos a DOT NOTATION (objeto.propriedade).

 

// //  exemplo:

 

// let pais = {

//     nome:"Brasil",

//     capital: "Brasilia",

//     nacionalidade: function(){

//         return "Sou do "+ this.nome; // Utilizamos para referenciar uma propriedade dentro do objeto

//     }

// };

 

// console.log(pais.nacionalidade()); // Sempre colocar parenteses para executar a função.

 

// metodos dos objetos




//  funcão para criar objetos - Funções construtoras

 

function Carro(valorMarca,valorModelo){ //Aqui, a funcao é criada com letra maiuscula para o objeto

    this.marca = valorMarca;

    this.modelo= valorModelo;//Com o this, definimos a propriedada do objeto e pra onde os valores dos parametros da funcoes serão alocados.

}

 

// instanciando objetos

 

let meuCarro = new Carro('Ford','Fusion');

let seuCarro = new Carro('Fiat','Uno');

console.log(meuCarro);
console.log(seuCarro);

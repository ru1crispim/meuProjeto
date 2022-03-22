// let pessoa = ['Vinicius',22, 1.80, true,['Musica','Café']];
// console.log(pessoa.length);

// let alunos = ["João", "Pedro", "Jorge", "Francisco"]
// let indiceJoao=alunos.indexOf("João");
// let indiceFrancisco=alunos.indexOf("Francisco");
// console.log(indiceJoao);
// console.log(indiceFrancisco);

// Metodos de arrays
let listaDeAlunos=['João','Maria','Pedro','Maria','Henrique'];

// Metodo push() - Incluir elemento na arrray
listaDeAlunos.push('Bruno');
console.log(listaDeAlunos);

// Metodo pop() - Excluir ultimo elemento da array
let ultimoAluno= listaDeAlunos.pop();
console.log(ultimoAluno);

// Metodo unshift() - Inclui elemento no index 0 da array
listaDeAlunos.unshift(ultimoAluno);
console.log(listaDeAlunos);

// Metodo shift() - Exclui elemento no index 0 da array

listaDeAlunos.shift();
console.log(listaDeAlunos);

// Metodo indexOf() - Informa indice de algum elemento numa array

console.log('O nome Maria foi encontrado na posição ',listaDeAlunos.indexOf('Maria'));

// Metodo lastIndexOf() - Faz a busca de um elemento dentro de uma array começando pelo ultimo indice

console.log('Mas também foi encontrado na posição ',listaDeAlunos.lastIndexOf('Maria'),'quando utilizado o metodo lastIndexOf()');


// Metodo length - Informa o tamanho de uma array

console.log(listaDeAlunos.length);

// Metodo unshift() - Mostra lista da array delimitado por alguma informação

console.log(listaDeAlunos.join('/'));


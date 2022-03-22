
// Metodo - map() - Esse metodo percorre a array e faz a modificação em cada indice.

let numeros=[2,4,6];

let dobroArray=numeros.map(function(num){ // 1) A variavel dobroArray armazena os resultados de cada modificação. 2) A array numeros recebe o metodo map - 3) o metodo recebe uma função anonima com um parametro para executar a alteração necessaria
    return num*2;// o parametro num se refere a cada item da arrray
})

console.log(dobroArray);


//Metodo - find()

let frutas = ['banana','melao','alface','uva'];

let naoEfruta=frutas.find(function(item){
    return item=='alface';
})

console.log(naoEfruta);

//Metodo - filter() - Percorre a array trazendo os resultados filtrados conforme a sua condição.

let arrayDeNumeros = [1,2,3,4,5,6,7,8,9];
let filtroNumeros = arrayDeNumeros.filter(function(index){
    return index >= 5;
})

console.log(filtroNumeros);

//Metodo - reduce() - Retorna apenas um numero, percorrendo por toda array... Este metodo recebe um callback de dois parametros sendo o primeiro um acumulador e o segundo o indice da aaray

let quantidadeBananas = [2,3,4,7,8];

let totalBananas = quantidadeBananas.reduce(function(acumulador,index){
    
    return acumulador+index;

})

console.log(totalBananas);


// Metodo - forEach() - Este metodo não retorna nada, ele apenas percorre a array.

let paises =['Brasil','Argentina','Peru','Colombia'];

paises.forEach(function(pais){
    console.log(pais);
})


// Exercicios Playground

let numerosii = [12, 34, 22, 46, 18, 29, 44, 43, 39];
let maiores = numerosii.filter(function(num){
    return num > 18;
})
console.log(maiores);



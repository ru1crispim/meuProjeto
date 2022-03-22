// var pessoa = {nome:"Rui",idade:31,cpf:37812059839};

// function acelerar(velocidade){
//     console.log('Estou acelerando para ', velocidade);
    
// }


// var carro = {ano: 2021, modelo:"Sedan",marca:"Fiat",velocidade:0, acelerar};

// carro.acelerar(150);

//JSON - Metodos

let objetoJson = '{"nome":"Rui","idade":31,"idadeFilhos":[7,9],"marido":{"apelido":"Juninho"}}'

console.log(objetoJson);

let objetoLiteral = JSON.parse(objetoJson);

console.log("O tipo de dado é: ",typeof objetoLiteral);

let tipoString = JSON.stringify(objetoLiteral);
console.log("O tipo de dado é: ", typeof tipoString);

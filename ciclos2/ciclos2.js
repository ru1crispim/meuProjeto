// Exercicio 1 - For in

let bart = {
    mae: "Marge",
    pai: "Homer",
    hobbie: "Skate",
    corCamiseta: "Laranja"
}
for(let prop in bart){
    console.log(bart[prop]);
}

// Exercicio 2 - For of

let frase = "Essa semana vou no colearning";
for(let valor of frase){
    console.log(valor);
}
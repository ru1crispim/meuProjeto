let paises = ['Alemanha','Brasil','Noruega','Japão'];

let usuario = {nome:'João',cidade:'São Paulo',cpf:37812049529,idade:18};

for(let index of paises){
    console.log(index);
}

for(let prop in usuario){
    console.log(prop,usuario[prop]); //Para imprimir apenas o nome da propriedade, utilizamos a variavel prop. Agora, para imprimir o seu valor, pegamos o nome do objeto literal e a variavel prop em[]
}
let catalogo= require('./database/catalogo.json'); //Importando as informações do arquivo catalogo.json
const fs=require('fs');

let filme=  {
    codigo:3,
    titulo:"De volta para o futuro",
    duracao: 2,
    atores:["Michael J Fox", "Chistopher Lloyd"],
    anoDeLancamento:1985,
    emCartaz:true
}
let novoFilmeJSON =JSON.stringify(filme);

fs.writeFile('./database/catalogo.json',novoFilmeJSON,'utf-8',(error,result)=> {

    if (error){
        console.error(error);
    }
}
)

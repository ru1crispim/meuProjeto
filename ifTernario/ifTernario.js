
// // IF ternario

// let dia = "terca";
// let resultado = dia=="domingo"?"Dormir":"Acordar"; //Utilizado apenas para situações simples
// console.log(resultado);

// switch(dia){
//     case "sexta":
//         console.log("Trabalhar");
//         break;
        
//     case "domingo":
//         console.log("Dormir até tarde");
//         break;
    
//         default:
//         console.log("Nenhum resultado encontrado")
// }


let dia = "sabado";

function fimDeSemana(dia){
	switch(dia){
		case "segunda":
		case "quarta":
		case "sexta":
		console.log("você tem aulas!");
		break
	default:
		console.log("você não tem aulas")
	}
}

fimDeSemana(dia)
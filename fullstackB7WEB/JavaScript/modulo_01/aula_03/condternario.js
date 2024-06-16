// Condicional Ternário 
let age = 37;

let isAdult = ((age >= 18)? 'Sim' : 'Não');

console.log(isAdult);

// Switch

let profession = "atleta";

console.log("Profissão: " + profession)

switch(profession) {
    case 'fiscal':
        console.log("Sua camisa será VERDE!")
        break;
    case 'bombeiro':
        console.log("Sua camisa será AMARELO!")
         break
    case 'policial':
         console.log("Sua camisa será AZUL!")
         break;
    default:
        console.log("Sua camisa será PRETA")
        break;
}
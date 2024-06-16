let nome = "Anderson"
let sobrenome = "Moreira"

// template string
let nomeCompleto = `${nome} ${sobrenome}`

console.log("Nome: " + nomeCompleto)

let age = 2024-1987
let ageString = `${age} Anos`

console.log(ageString)

// Condicional

let idade = 37

if (age > 17){
    console.log("Você é maior de Idade!")
}   else {
    console.log("Você é MENOR de idade!")
}

// MultiCondicionais

// Modelo 01
// if (idade >= 18) {
//     if (idade <= 60) {
//         console.log("Você é Adulto!")
//     }
// }

// Modelo 02
if (idade >= 18 && idade <= 60) {
    console.log("Você é Adulto!")
}
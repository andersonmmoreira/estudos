// Função
function gravidade(){
    console.log('A gravidade do planeta é:')
    console.log('9.8')
}
console.log('Opa, tudo bem?')
gravidade();

// Nova função !

function somar(n1, n2){
    let resultado = n1+n2;
    console.log('Resultado:' + resultado)
}
somar(10, 15);

function nomeCompleto(nome, sobrenome) {
    console.log(`${nome} ${sobrenome}`)
}
nomeCompleto("Anderson", "Moreira")
nomeCompleto("Wade", "Wilson")

// Return

function maiorDeIdade(idade) {
    if (idade >=18) {
        return true;
    } else {
        return false;
    }
    
}
let verificacao = maiorDeIdade(18);
console.log(verificacao);
if (verificacao) {
    console.log('É maior de Idade');
}   else {
    console.log('É Menor de Idade')
}
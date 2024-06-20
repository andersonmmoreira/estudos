/*
Calcule a porcentagm entre 2 numeros.
Exenplo: 25% de 40 é 10
Formula da porcentagem: (y / x) *100
uso da função:

let x = 40
let y = 10
let pct = calcPct(x,y);
console.log(`${pct}% de ${x} é ${y}`);
*/

function calcPct(n1, n2){
    return (n2 / n1) * 100;
}

let x = 40;
let y = 10;
let pct = calcPct (x, y);
console.log(`${pct}% de ${x} é ${y}`);


/* Calcule o preço do imóvel
- m2 = 30000
- se tiver 1 quarto, m2 é 1x
- se tover 2 qiartos, m2 é 1.2x
- se tiver 3 quartos, m2 é 1.5x
uso da função:

let metragem = 123;
let quartos = 3;
let preco = calcularImovel(metragem, quartos);
console.log(`A casa custa R$ ${Preco}`);
*/

let metragem = 123;
let quartos = 3;
let preco = calcularImovel(metragem, quartos);
console.log(`A casa custa R$ ${preco}`);

function calcularImovel(metragem, quartos) {
    let m2 = 3000;
    let preco = 0;
    
    switch (quartos) {
        case 1:
            default:
                preco = metragem * m2;
                break;
        case 2:
                preco = metragem * (m2 * 1.2);
            break;
        case 3:
                preco = metragem * (m2 * 1.5);
            break;        
    }
    return preco;
}


/* Crie uma função que valide usuário e senha.
Usuário correto : pedro
senha correta : 123
*/

// Uso da função:

function validar (usuario, senha) {
    if (usuario === 'pedro' && senha === '123') {
        return true;
    } else {
        return false;
    }
}


let usuario = 'pedro';
let senha = '123';
let validacao = validar (usuario, senha);
if (validacao) {
    console.log(`Acesso consedido.`);
}   else {
    console.log(`Acesso NEGADO!`)
}
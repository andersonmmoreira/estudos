// Array List

let ingredientes = [
    'agua',
    'farinha',
    'ovo',
    'corante',
    'sal'
];
ingredientes.pop(); // remove ultimo iten
ingredientes.shift(); // remove o primeiro item
console.log(ingredientes);
ingredientes[5] = 'fermento'
console.log(`Total de ingredientes: ${ingredientes.length}`)

// exercicio arrays

// 1. No Array abaixo, qual o número que pega a Ferrari?
let carros = ['BMW', 'Ferrari', 'Mercedes'];
let x = [1]
console.log('1 ' + carros[x]);

// 2. Troque a Ferrari por Audi
carros [1] = 'Audi'
console.log('2. Lista com Audi');
console.log(carros);

// 3. Adicione o Volvo a lista
carros.push('Volvo');
console.log('3. Lista com Volvo.');
console.log(carros);


// 4. Exiba quantos itens tem no array

console.log('4. itens no array:');
console.log(`Temos um total de: ${carros.length}`);


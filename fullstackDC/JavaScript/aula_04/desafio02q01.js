function verificarMaiorNumero() {
    var num1 = prompt("Digite o primeiro número:");
    var num2 = prompt("Digite o segundo número:");

    // Convertendo os valores para números
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    // Verificando se os valores são números válidos
    if (isNaN(num1) || isNaN(num2)) {
        alert("Por favor, insira números válidos.");
        return;
    }

    // Comparando os números e exibindo o maior
    if (num1 > num2) {
        alert("O maior número é: " + num1);
    } else if (num2 > num1) {
        alert("O maior número é: " + num2);
    } else {
        alert("Ambos os números são iguais.");
    }
}

// Chamar a função para executar o código
verificarMaiorNumero();

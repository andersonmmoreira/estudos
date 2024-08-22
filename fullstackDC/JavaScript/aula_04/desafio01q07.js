function calcularIdadeEmDias() {
    var anos = prompt("Digite sua idade em anos:");
    var meses = prompt("Digite quantos meses adicionais além dos anos completos:");
    var dias = prompt("Digite quantos dias adicionais além dos anos e meses completos:");

    // Convertendo as entradas para números inteiros
    anos = parseInt(anos);
    meses = parseInt(meses);
    dias = parseInt(dias);

    // Validando as entradas
    if (isNaN(anos) || isNaN(meses) || isNaN(dias)) {
        alert("Por favor, insira valores numéricos válidos.");
        return;
    }

    // Convertendo idade para dias
    var totalDias = (anos * 365) + (meses * 30) + dias;

    // Exibindo o resultado
    alert("Sua idade em dias é: " + totalDias);
}

// Chamar a função para executar o código
calcularIdadeEmDias();

document.addEventListener('DOMContentLoaded', (event) => {
    const visor = document.getElementById('visorInfo');
    let calculadoraLigada = false;

    function ligarCalculadora() {
        calculadoraLigada = true;
        visor.textContent = '0';
    }

    function apagaUltimoDigito() {
        if (calculadoraLigada) {
            visor.textContent = visor.textContent.slice(0, -1) || '0';
        }
    }

    function calcular() {
        if (calculadoraLigada) {
            try {
                visor.textContent = eval(visor.textContent.replace('x', '*').replace('÷', '/'));
            } catch (e) {
                visor.textContent = 'Erro';
            }
        }
    }

    document.querySelectorAll('.button').forEach(button => {
        button.addEventListener('click', () => {
            if (calculadoraLigada) {
                if (visor.textContent === '0') {
                    visor.textContent = button.value;
                } else {
                    visor.textContent += button.value;
                }
            }
        });
    });

    document.querySelectorAll('.operadores').forEach(button => {
        button.addEventListener('click', () => {
            if (calculadoraLigada) {
                visor.textContent += button.value;
            }
        });
    });

    // Expondo funções globalmente para serem acessíveis no HTML
    window.ligarCalculadora = ligarCalculadora;
    window.apagaUltimoDigito = apagaUltimoDigito;
    window.calcular = calcular;
});
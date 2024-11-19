function calcularNovoSalario() {
    // Obtém o salário atual inserido pelo usuário
    const salarioAtual = parseFloat(document.getElementById('salario').value);

    // Valida se o salário inserido é um número válido
    if (isNaN(salarioAtual) || salarioAtual <= 0) {
        alert('Por favor, insira um valor válido para o salário.');
        return;
    }

    // Calcula o aumento de 17% e o reajuste de 215 reais
    const aumentoPercentual = 0.17;
    const reajusteAnual = 215;

    const aumento = salarioAtual * aumentoPercentual;
    const novoSalario = salarioAtual + aumento + reajusteAnual;

    // Exibe o novo salário calculado
    document.getElementById('resultado').innerHTML = `Novo Salário: R$ ${novoSalario.toFixed(2)}`;
}

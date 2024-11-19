// script.js

class ContaBancaria {
    constructor(nome, idade, salario, sexo, agencia, conta, numeroConta) {
      this.nome = nome;
      this.idade = idade;
      this.salario = salario;
      this.sexo = sexo;
      this.agencia = agencia;
      this.conta = conta;
      this.numeroConta = numeroConta;
    }
  
    contaPoupanca() {
      // Taxa de 1,5% ao mês
      const desconto = this.salario * 0.015;
      return this.salario - desconto;
    }
  
    contaCorrente() {
      // Taxa de 3,6% ao mês
      const desconto = this.salario * 0.036;
      return this.salario - desconto;
    }
  
    contaEstudante() {
      // Taxa de 1,2% ao mês
      const desconto = this.salario * 0.012;
      return this.salario - desconto;
    }
  }
  
  function simularContas() {
    // Criando objetos para cada tipo de conta
    const contaPoupanca = new ContaBancaria("João Silva", 30, 3000, "Masculino", "1234", "Poupança", "00001");
    const contaCorrente = new ContaBancaria("Maria Oliveira", 25, 2500, "Feminino", "5678", "Corrente", "00002");
    const contaEstudante = new ContaBancaria("Carlos Souza", 20, 1500, "Masculino", "9101", "Estudante", "00003");
  
    // Obtendo os resultados dos novos salários
    const resultadoPoupanca = contaPoupanca.contaPoupanca();
    const resultadoCorrente = contaCorrente.contaCorrente();
    const resultadoEstudante = contaEstudante.contaEstudante();
  
    // Exibindo os resultados no HTML
    const resultadosDiv = document.getElementById('resultados');
    resultadosDiv.innerHTML = `
      <h3>Conta Poupança - ${contaPoupanca.nome}</h3>
      <p>Idade: ${contaPoupanca.idade} | Sexo: ${contaPoupanca.sexo}</p>
      <p>Agência: ${contaPoupanca.agencia} | Conta: ${contaPoupanca.conta} | Número da Conta: ${contaPoupanca.numeroConta}</p>
      <p>Salário inicial: R$${contaPoupanca.salario.toFixed(2)} | Novo salário com desconto: R$${resultadoPoupanca.toFixed(2)}</p>
      <hr>
  
      <h3>Conta Corrente - ${contaCorrente.nome}</h3>
      <p>Idade: ${contaCorrente.idade} | Sexo: ${contaCorrente.sexo}</p>
      <p>Agência: ${contaCorrente.agencia} | Conta: ${contaCorrente.conta} | Número da Conta: ${contaCorrente.numeroConta}</p>
      <p>Salário inicial: R$${contaCorrente.salario.toFixed(2)} | Novo salário com desconto: R$${resultadoCorrente.toFixed(2)}</p>
      <hr>
  
      <h3>Conta Estudante - ${contaEstudante.nome}</h3>
      <p>Idade: ${contaEstudante.idade} | Sexo: ${contaEstudante.sexo}</p>
      <p>Agência: ${contaEstudante.agencia} | Conta: ${contaEstudante.conta} | Número da Conta: ${contaEstudante.numeroConta}</p>
      <p>Salário inicial: R$${contaEstudante.salario.toFixed(2)} | Novo salário com desconto: R$${resultadoEstudante.toFixed(2)}</p>
    `;
  }
  
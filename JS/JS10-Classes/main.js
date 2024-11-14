class Aluno{
    constructor(nome, idade, altura, isCracha, isCamisa, cor){
        this.nome = nome;
        this.idade = idade;
        this.altura = altura;
        this.isCracha = isCracha;
        this.isCamisa = isCamisa;
        this.cor = cor;
    }
}


retornaIdade(){
    
}

// instancia == copias
let aluno1 = Aluno( "Manasses", 1997, 1.90, true, true, "Black" )

let aluno2 = Aluno( "Jef", 2005, 0.90, true, true, "AllWhite" )

console.log(`Primeiro aluno ${aluno1} \n segundo aluno ${aluno2}`)





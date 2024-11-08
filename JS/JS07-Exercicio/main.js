
// Crie um Arrays de Objetos chamado aluno com as informações abaixo:

let aluno = [
    {
        nome: 'Ana',
        idade: 17,
        nota: 8,
        ano: '2B'
    },
    {
        nome: 'Bruno',
        idade: 12,
        nota: 6,
        ano: '2C'
    },
    {
        nome: 'Veronica',
        idade: 16,
        nota: 9,
        ano: '2C',
    },
    {
        nome: 'Marta',
        idade: 15,
        nota: 5,
        ano: '3C',
    },
    {
        nome: 'Brenno',
        idade: 19,
        nota: 6,
        ano: '3C',
    },
    {
        nome: 'Maria',
        idade: 14,
        nota: 4,
        ano: '1F',
    }
]

console.log(aluno) // Retorne todo o array de objetos
console.log("Aluno Brunno" , aluno[1])// Retorne todas as informações do aluno Brunno
console.log('Nota de Maria: ' , aluno[5].nota ) 
// Retorne apenas a nota da Maria

console.log("---JSON---" + JSON.stringify(aluno)) // Retorno todo o array de objeto em formato JSON
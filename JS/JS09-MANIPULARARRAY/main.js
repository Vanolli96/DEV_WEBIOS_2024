// SuperSimpleDev

//ARRAY
// let frutas = [ "Manga", "Tomate", "Açai", "Pessego", "Limao", "Melancia", "Goiaba", "Abacaxi" ]

// for( i=0; i <= frutas.length ; i++){
//     console.log(frutas[i]); // conteudo da posição 
//     console.log(i) // numero da posição 0...7
// }

frutas.forEach(Percorrer)
///                conteudo, indice  
// function Percorrer(indice, valor){
//     console.log(valor); 
//     console.log(indice)
// }







// nsole.log(aluno)
//console.log(aluno[1])
//console.log(aluno[5].nota)

//let JsonAluno = JSON.stringfy(aluno)
//console.log()



// array de valores aleatorios com 06 posições > numeros 

let numeros = [2 , 6, 8, 28, 33, 63]

// trazer um novo array atualizado com raiz quadrada de cada numero do array

numeros.map(Math.sqrt())

// Trazer um novo array atualizado com a raiz quadrado de cada numero do array 

let numeroDois = numeros.map(Math.sqrt)
let maiorNumero = numeros.map(Math.max)
let menorNumero = Math.min.apply(Math, numeros)

console.log(numeros)
console.log(numerosDois)
console.log(menorNumero)

let filtraNumero = numeros.filter((valor) => {
    return valor >=

})

console.log(filtraNumero)

console.clear()

let tarefa = [
    {
        tarefa: "Mimir"
        isFeita: true
    }
    {
        tarefa: "Limpar"
        isFeita: false
    }
    {
        tarefa: "Torcer"
        isFeita: true
    }
]

// console.log(tarefa.find((item) =>{
//     return item.isFeita == true

// }))

let retornaTrue = tarefa.find((item) => {
    return item.isFeira == true
}
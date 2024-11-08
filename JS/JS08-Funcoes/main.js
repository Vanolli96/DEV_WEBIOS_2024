// variaveis >>>>> var nome;
// funcoes   >>>>> function NomeAluno () {}

// FUNÇÕES

// function Contador(  ){ 
//     // criar verificação! Se o numero digitado é par/impar. 
//     // IMPAR >>>>> Mostrar todos os numeros impares de 1 a 50
//     let imparPar = 7;


//     // PAR   >>>>> Mostrar todos os numeros pares de 1 a 50
//     if(imparPar % 2 == 1){
//         console.log(" Esse numero é impar ")
//         for(numero; numero <=50; numero++){
//             if(numero % 2 ===1){
//                 console.log(numero)
//             }
//         }
//     }else if(imparPar %2 == 0){
//         console.log(" Esse numero é par ")
        
//     }
//  }

//  console.log(Contador())

//  console.clear()


 //ARROW FUNCTION

//  let BoasVindas = () => {
//     return 'Welcome Sofrendo com FRONT-END e com o TCC'
//  }

//  console.log(BoasVindas())

//  // Os parentese servem para trazer valores que estão fora da função para dentro dela assim conseguindo trabalhar com varios tipos de valores informados pelo usuario 

// //  let soma = ( num1 = 2, num2 = 10 ) => {
// //     return num1 + num2;
// //  }
// //  console.log(soma())


// let soma = ( num1,num2 ) => {
//         return num1 + num2;
//      }
//      console.log(soma(8,6))


function Clique(){
    let cliques = 0;

    return clique++;

}

console.log(Clique())

let ChamaPopUp = ( ) =>{
    alert('Parabens DESCOMPENSADO!')
}
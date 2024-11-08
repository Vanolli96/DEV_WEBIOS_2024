// let media, faltas;
// media = 10
// faltas = 4
// // 6.5
// if (media >= 7 && faltas <= 5){
//     console.log(`Aluno Aprovado.`);
// } else if (media >= 6.5 && faltas <= 5) {
//     console.log(`Aluno Ap. Conselho.`);
// } else {
//     console.log(`Aluno Reprovado.`);
// }
// console.log(`Fim


let imc, peso, altura;

peso = 700;

altura = 1.90;

imc = peso / (altura * altura);

if (imc < 18.5) {
    console.log(`Seu IMC é: ${imc.toFixed(2)} e você está abaixo do peso.`);
} else if (imc >= 18.5 && imc < 25) {
    console.log(`Seu IMC é: ${imc.toFixed(1)} e seu peso está normal`);
} else {
    console.log(`Seu IMC é: ${imc.toFixed(1)} e você está acima do peso.`);
}
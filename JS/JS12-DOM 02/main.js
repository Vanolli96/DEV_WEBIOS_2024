/// Vamos desenvolver uma tabuada
// Pegando uma informação no HTML utilizando o ID
let valor = document.getElementById('recebeValor')
// Pega o elemento utilizando o atributo name
let resultado = document.getElementsByName('resultado')

const tabuada = () => {
    
    
    gitado dentro da variavel
    let guardaValor = valor.value;
    for (i = 0; i <= 10; i++){
        let resultadoTabuada =guardaValor * i;
        console.log(guardaValor, 'x', i, '=', resultadoTabuada)
        // console.log(`O valor de ${guardaValor} x ${i} é igual a ${guardaValor*i}`);
        resultado.innerHTML += ${guardaValor} x ${i} = $ {guardaValor = i} <br/>
        // resultado.innerHTML += guardaValor, 'x', i, '=', resultadoTabuada;    }
    

}
//  let grupoAlunos = ['Nicolas', 'As', 'Nilas', 'Nico']
//      // inicia
//  for (let contador = 0; contador <= 5 ; contador++) {
//     console.log(`valor: ${contador}`)
//  }

function fibonacci(){
    var termo = parseInt(document.getElementById('numero').value);
    var resposta = document.getElementById('resposta');
    var penultimo=0, ultimo=1;
    var numero;
  
    if(termo<=2)
     numero = termo-1;
    else
     for(var count=3 ; count<=termo ; count++){
      numero = ultimo + penultimo;
      penultimo = ultimo;
      ultimo = numero;
     }
  
    resposta.innerHTML=numero;
  }
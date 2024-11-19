let url = 'https://dog.ceo/api/breeds/image/random'

const DogApi = =>{
    // Faça a consulta na API e retorno o JSON na variavel RESP
    let resp = await fetch(URL)
    // retorno em JSON → OBJETO 
    console.log(resp) 

    resp.json();
    console.log(resp)
}

console.log(DogApi())
function criptografar() {
    //let i = 1;
    let frase = document.querySelector('input').value;
    let resultado = frase.replace(/e/g, 'enter')
    .replace(/i/g, 'imes')
    .replace(/a/g, 'ai')
    .replace(/o/g, 'ober')
    .replace(/u/g, 'ufat');
    
    let resultadoDiv = document.getElementById('resultado');
    resultadoDiv.textContent = resultado;
    console.log(resultado);
}

// function copiaTexto() {
//     let criptografia = document.getElementById('resultado').innerText;
//     let frase = document.querySelector('input');
//     frase.value = '';
//     console.log(criptografia);
// }

function copiaTexto() {
    let criptografia = document.getElementById('resultado').innerText;
    navigator.clipboard.writeText(criptografia);
    let frase = document.querySelector('input');
    frase.value = '';
   // console.log(criptografia);
}

function colaTexto() {
    let frase = document.querySelector('input');
    navigator.clipboard.readText();
    let criptografia = document.getElementById('resultado').innerText;
    frase.value = criptografia;
    console.log(criptografia);
    
}
//////////// Função limparTexto com erro, pois, não está limpando o campo Resultado, somente o campo Digite seu texto
function limparTexto() {
    let frase = document.querySelector('input');
    frase.value = '';
    let criptografia = document.querySelector('input');
    criptografia = '';
    console.log(criptografia);
    let resultadoDiv = document.getElementById('resultado');
    resultadoDiv.textContent = '';
   
}
//////////
function descriptar() {
    let frase = document.querySelector('input').value;
    let resultado = frase.replace(/enter/g, 'e')
    .replace(/imes/g, 'i')
    .replace(/ai/g, 'a')
    .replace(/ober/g, 'o')
    .replace(/ufat/g, 'u');;
    

    let resultadoDiv = document.getElementById('resultado');
    resultadoDiv.textContent = resultado;
    console.log(resultado);
}



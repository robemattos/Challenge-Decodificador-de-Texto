document.querySelector('input').addEventListener('input', function() {
    // Converte o texto digitado para minúsculas
    this.value = this.value.toLowerCase();
});

function criptografar() {
    // let frase = document.querySelector('.container__input').value;
    //let i = 1;
    let frase = document.querySelector('input').value;
    responsiveVoice.speak(frase, 'Brazilian Portuguese Female', {rate: 1.2});

    let resultado = frase.replace(/e/g, 'enter')
    .replace(/i/g, 'imes')
    .replace(/a/g, 'ai')
    .replace(/o/g, 'ober')
    .replace(/u/g, 'ufat');
    let resultadoDiv = document.getElementById('resultado');
    resultadoDiv.textContent = resultado.toLowerCase();
    console.log(resultado);
}

//////////// Copia o texto encriptado para a área de transferência e limpa o campo "Digite seu texto"
function copiaTexto() {
    let criptografia = document.getElementById('resultado').innerText;
    navigator.clipboard.writeText(criptografia);
    let frase = document.querySelector('input');
    frase.value = '';
}

//////////// Cola o texto encriptado no campo "Digite seu texto"
function colaTexto() {
    let frase = document.querySelector('input');
    navigator.clipboard.readText();
    let criptografia = document.getElementById('resultado').innerText;
    frase.value = criptografia;
    responsiveVoice.speak(criptografia, 'Brazilian Portuguese Female', {rate: 1.2});
}
//////////// Limpa os campos "Digite seu texto" e "Resultado"
function limparTexto() {
    let frase = document.querySelector('input');
    frase.value = '';
    let criptografia = document.querySelector('input');
    criptografia = '';
    console.log(criptografia);
    let resultadoDiv = document.getElementById('resultado');
    resultadoDiv.textContent = '';
}

function descriptar() {
    let frase = document.querySelector('input').value;
    let resultado = frase.replace(/enter/g, 'e')
    .replace(/imes/g, 'i')
    .replace(/ai/g, 'a')
    .replace(/ober/g, 'o')
    .replace(/ufat/g, 'u');;
    

    let resultadoDiv = document.getElementById('resultado');
    resultadoDiv.textContent = resultado;
    responsiveVoice.speak(resultado, 'Brazilian Portuguese Female', {rate: 1.2});
}



function copiarTexto() {
var text = document.querySelector(".campo-resultado").value;
var textoCriptografado = document.createElement("textarea");
textoCriptografado.value = text;
document.body.appendChild(textoCriptografado);
textoCriptografado.select();
document.execCommand("copy");
document.body.removeChild(textoCriptografado);

var mensagemCopiar = document.getElementById("mensagem-copiar");
mensagemCopiar.innerHTML = "Texto copiado com sucesso";
mensagemCopiar.style.opacity = 1;

setTimeout(function() {
  mensagemCopiar.style.opacity = 0;
}, 1000);
};

function removerAcentos(texto) {
  return texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

function criptografar(texto) {
  let criptografado = texto
    .replaceAll("e", "enter")
    .replaceAll("i", "imes")
    .replaceAll("a", "ai")
    .replaceAll("o", "ober")
    .replaceAll("u", "ufat");
  return criptografado;
}

function descriptografar(texto) {
  let descriptografado = texto
    .replaceAll("enter", "e")
    .replaceAll("imes", "i")
    .replaceAll("ai", "a")
    .replaceAll("ober", "o")
    .replaceAll("ufat", "u");
  return descriptografado;
}

let botaoCriptografar = document.querySelector("#botao-criptografar");
let botaoDescriptografar = document.querySelector("#botao-descriptografar");
let botaoLimpar = document.querySelector("#botao-limpar");
let botaoTrocarFuncao = document.querySelector("#botao-trocar-funcao");

botaoCriptografar.addEventListener("click", () => {
  let textoEntrada = document.querySelector(".campo-entrada").value.toLowerCase();
  let textoSemAcentos = removerAcentos(textoEntrada);
  let resultado = criptografar(textoSemAcentos);
  document.querySelector(".campo-resultado").innerHTML = resultado.replaceAll("\n", "<br>");
});

botaoDescriptografar.addEventListener("click", () => {
  let textoEntrada = document.querySelector(".campo-entrada").value.toLowerCase();
  let textoSemAcentos = removerAcentos(textoEntrada);
  let resultado = descriptografar(textoSemAcentos);
  document.querySelector(".campo-resultado").innerHTML = resultado.replaceAll("\n", "<br>");
});

botaoLimpar.addEventListener("click", () => {
  document.querySelector(".campo-entrada").value = "";
  document.querySelector(".campo-resultado").textContent = "";
});

botaoTrocarFuncao.addEventListener("click", () => {
  let textoEntrada = document.querySelector(".campo-entrada").value.toLowerCase();
  let textoResultado = document.querySelector(".campo-resultado").textContent.toLowerCase();

  if (botaoCriptografar.classList.contains("esconder")) {
    botaoCriptografar.classList.remove("esconder");
    botaoDescriptografar.classList.add("esconder");
  } else {
    botaoDescriptografar.classList.remove("esconder");
    botaoCriptografar.classList.add("esconder");
  }});
  
const toggleButton = document.getElementById('botao-alternar-tema');
const body = document.querySelector('body');
toggleButton.addEventListener('click', function() {
  body.classList.toggle('escuro');
});


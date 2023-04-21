/* Funcao ctrl + c */
function copiarTexto() {
   var text = document.getElementById("area-resultado").innerText;
        var textoCriptografado = document.createElement("input");
        textoCriptografado.value = text;
        document.body.appendChild(textoCriptografado);
        textoCriptografado.select();
        document.execCommand("copy");
        document.body.removeChild(textoCriptografado);
};

/* Funcoes de criptografia */
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

/* Essa parte remove os acentos, a parte do codigo onde tem os botoes remove o caps lock */
function removerAcentos(texto) {
  return texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

/* Define valores para alguns botoes */
let botaoCriptografar = document.querySelector("#botao-criptografar");
let botaoDescriptografar = document.querySelector("#botao-descriptografar");
let botaoLimpar = document.querySelector("#botao-limpar");
let botaoTrocarFuncao = document.querySelector("#botao-trocar-funcao");

/* Parte do codigo onde a interacao da criptografia sera aplicada aos botoes */
botaoCriptografar.addEventListener("click", () => {
  let textoEntrada = document.querySelector("#area-entrada").value.toLowerCase();
  let textoSemAcentos = removerAcentos(textoEntrada);
  let resultado = criptografar(textoSemAcentos);
  document.querySelector("#area-resultado").innerHTML = resultado.replaceAll("\n", "<br>");
});

botaoDescriptografar.addEventListener("click", () => {
  let textoEntrada = document.querySelector("#area-entrada").value.toLowerCase();
  let textoSemAcentos = removerAcentos(textoEntrada);
  let resultado = descriptografar(textoSemAcentos);
  document.querySelector("#area-resultado").innerHTML = resultado.replaceAll("\n", "<br>");
});

/* Parte do codigo onde funcoes de utilidade sera aplicada aos botoes */
const areaResultado = document.getElementById("area-resultado");
const placeholder = areaResultado.getAttribute("data-placeholder");
areaResultado.innerHTML = placeholder;

botaoLimpar.addEventListener("click", () => {
  document.querySelector("#area-entrada").value = "";
  document.querySelector("#area-resultado").textContent = "";
  areaResultado.innerHTML = placeholder;
});

botaoTrocarFuncao.addEventListener("click", () => {
  let textoEntrada = document.querySelector("#area-entrada").value.toLowerCase();
  let textoResultado = document.querySelector("#area-resultado").textContent.toLowerCase();

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


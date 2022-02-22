// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  let altura = Number(prompt("Digite a altura do retângulo:"));
  let largura = Number(prompt("Digite a largura do retângulo"));

  console.log(altura * largura)

}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  let anoAtual = Number(prompt("Digite a ano atual:"));
  let anoNascimento = Number(prompt("Digite o seu ano de nascimento;"));

  console.log(anoAtual - anoNascimento)

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  return peso / (altura * altura);

}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  let nome = prompt("Digite seu nome:");
  let idade = Number(prompt("Digite a sua idade:"));
  let email = prompt("Digite seu email: ");

  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`);

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  let cor1 = prompt("Digite sua 1ª cor favoritas:");
  let cor2 = prompt("Digite sua 1ª cor favoritas:");
  let cor3 = prompt("Digite sua 1ª cor favoritas:");

  let array = [];
  array.push(cor1, cor2, cor3);

  console.log(array);

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  return string.toUpperCase();

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  return custo / valorIngresso;

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  return string1.length === string2.length

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  return array[0];

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  return array[array.length - 1];

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  let inicio = array.shift();
  let fim = array.pop();

  array.unshift(fim), array.push(inicio);

  return array;

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  return string1.toUpperCase() === string2.toUpperCase();

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  let anoAtual = Number(prompt("Digite o ano atual:"));
  let anoNascimento = Number(prompt("Digite o ano do seu nascimento:"));
  let anoEmissaoRG = Number(prompt("Digite o ano da emissão do seu RG:"));

  let idade = anoAtual - anoNascimento;
  let anoRenovacao = anoAtual - anoEmissaoRG;

  let condicao1 = idade <= 20 && anoRenovacao === 5;
  let condicao2 = (idade >= 20 && idade <= 50) && anoRenovacao >= 10;
  let condicao3 = idade > 50 && anoRenovacao >= 15;

  console.log(condicao1 || condicao2 || condicao3)

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
  return ((ano % 400 == 0) || (ano % 4 == 0) && (ano % 100 !== 0))
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
  let idade = prompt("Você tem mais de 18 anos?");
  let ensinoMedio = prompt("Você possui ensino médio completo");
  let disponibilidade = prompt("Você possui disponibilidade exclusiva durante os horarios do curso.");

  let condicao = idade === "sim" && ensinoMedio === "sim" && disponibilidade === "sim";

  console.log(condicao);

}
// Exercícios de interpretação de código


// 1. Será impresso 10 que é o valor inicial de b. Depois 10, 5

// 2. Será impresso 10,10,10

// 3. Poderia ser horasTrabalhadasDia e valorDiarioRecebido



// Exercícios de escrita de código

// 1.
let nome;
let idade;

console.log(typeof nome, typeof idade);

// o typeof deu undefined pois nenhum valor foi atribuido as variáveis

nome = prompt("Digite seu nome: ");
idade = Number(prompt("Digite a sua idade: "));

console.log(typeof nome, typeof idade);

// o typeof deu string e number os valores atribuidos as variáveis

console.log("Olá,", nome, "você tem", idade, "anos");

// 2. 
let pergunta1 = "Você gosta de ler?";
let pergunta2 = "Você tem pets?";
let pergunta3 = "Você sabe dirigir?";

let resp1 = "SIM";
let resp2 = "SIM";
let resp3 = "NÃO";

console.log(pergunta1, "-", resp1);
console.log(pergunta2, "-", resp2);
console.log(pergunta3, "-", resp3);

// 3.
let a = 10
let b = 25

let c = b
b = a
a = c

// Depois de trocados, teremos o seguinte resultado:
console.log("O novo valor de a é", a) // O novo valor de a é 25
console.log("O novo valor de b é", b) // O novo valor de b é 10


// DESAFIOS
/*1. Faça um programa que receba dois números do usuário e faça as seguintes operações, imprimindo os resultados no console da seguinte forma:*/

let numeroUm = Number(prompt("Informe o 1º número:"));
let numeroDois = Number(prompt("Informe o 2º número:"));

let soma = numeroUm + numeroDois;
let multplicacao = numeroUm * numeroDois;

console.log("O primeiro número somado ao segundo número resulta em:", soma);
console.log("O primeiro número multiplicado pelo segundo número resulta em:", multplicacao);
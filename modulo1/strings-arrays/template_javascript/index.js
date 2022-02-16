// Exercícios de interpretação de código

// 1.  Indique todas as mensagens impressas no console.

let array
console.log('a. ', array)
// a. undefined

array = null
console.log('b. ', array)
// b. null

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length)
// c. 11

let i = 0
console.log('d. ', array[i])
// d. 3

array[i + 1] = 19
console.log('e. ', array)
// e. [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]

const valor = array[i + 6]
console.log('f. ', valor)
// f. 9

// 2. Leia o código abaixo com atenção.

const frase = prompt("Digite uma frase")

console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)

// Qual será o valor impresso no console se a entrada do usuário for: "Subi num ônibus em Marrocos".

// SUBI NUM ÔNIBUS EM MIRRACOS 27


// Exercícios de escrita de código

// 1. 1. Faça um programa que pergunte ao usuário seu nome e seu e-mail. Em seguida, Imprima no console a seguinte mensagem:
//  O e-mail `emailDoUsuario` foi cadastrado com sucesso. Seja bem-vinda(o), `nomeDoUsuario`!

const nomeDoUsuario = prompt("Informe o seu nome: ");
const emailDoUsuario = prompt("Informe o seu email: ");

console.log(`O e-mail ${emailDoUsuario} foi cadastrado com sucesso. Seja bem-vinda(o), ${nomeDoUsuario}!`);

// 2. Faça um programa que contenha um array com 5 das suas comidas preferidas, armazenado em uma variável. Em seguida, siga os passos:
//a) Imprima no console o array completo
//b) Imprima no console a mensagem "Essas são as minhas comidas preferidas: ", seguida por cada uma das comidas, **uma embaixo da outra**.
//c) Aqui vai um desafio: pergunte ao usuário uma comida preferida. Troque a segunda comida da sua lista pela inserida pelo usuário. Imprima no consolea nova lista

const comidasPreferidas = ["Sopa", "Strogonoff", "Yakisoba", "Sushi", "Peixe"];

console.log(comidasPreferidas);

console.log(`Essas são as minhas comidas preferidas:
${comidasPreferidas[0]}
${comidasPreferidas[1]}
${comidasPreferidas[2]}
${comidasPreferidas[3]}
${comidasPreferidas[4]}`);

const comidaUsuario = prompt("Qual a sua comida preferida");

comidasPreferidas.splice(1, 1, comidaUsuario)

console.log(comidasPreferidas);


// 3. Faça um programa, seguindo os passos:
//a) Crie um array vazio e guarde-o em uma variável, chamada `listaDeTarefas`
//b) Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as, uma por uma, no array
//c) Imprima o array no console
//d) Peça ao usuário que digite o **índice** de uma tarefa que ele já realizou: 0, 1 ou 2
//e) Remova da lista o item de índice que o usuário escolheu.
//f) Imprima o array no console

const arr = [];

const contemArr = arr;

const tarefa1 = prompt("Digite a primeira tarefa que você precisa fazer: ");
const tarefa2 = prompt("Digite a primeira tarefa que você precisa fazer: ");
const tarefa3 = prompt("Digite a primeira tarefa que você precisa fazer: ");

arr.push(tarefa1);
arr.push(tarefa2);
arr.push(tarefa3);

console.log(contemArr);

const indice = Number(prompt("Digite um número de uma tarefa que você : "));

arr.splice(indice - 1, 1)

console.log(contemArr);


// DESAFIO 
// 1. Receba uma frase e retorne um array onde cada elemento é uma das palavras da frase, ignorando os espaços.

var string = "Estou amando fazer esse curso, aprendendo bastante";
var splits = string.split(' ');

console.log(splits);

//2. Dado o array ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"], faça um programa que acha o índice da palavra Abacaxi e imprime tanto o índice quanto o tamanho do array.

const arrayFrutas = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]

console.log(arrayFrutas.indexOf("Abacaxi"));
console.log(arrayFrutas.length);

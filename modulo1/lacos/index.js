// Exercícios de interpretação de código

// 1. O que o código abaixo está fazendo? Qual o resultado impresso no console?

let valor = 0
for (let i = 0; i < 5; i++) {
   valor += i
}
console.log(valor)

// o código está somando o valor a cada interação. O resultado será 10.

// 2. Leia o código abaixo:

const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (let numero of lista) {
   if (numero > 18) {
      console.log(numero)
   }
}

// a) O que vai ser impresso no console?
// Será impresso os números maiores que 18.
// 19, 21, 23, 25, 27, 30.

// b) Se eu quisesse acessar o **índice** de cada elemento dessa lista, o `for...of...` é suficiente? Se sim, o que poderia ser usado para fazer isso?
// Sim é possivel só usar o indexOf()

// const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
// for (let numero of lista) {
//    console.log(lista.indexOf(numero)) // achar o indice de cada elemento da lista.
// }

// 3. Qual seria o resultado impresso no console, se o usuário digitasse o número 4 ?

const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
let quantidadeAtual = 0
while (quantidadeAtual < quantidadeTotal) {
   let linha = ""
   for (let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++) {
      linha += "*"
   }
   console.log(linha)
   quantidadeAtual++
}

// Será impresso:
// *
// **
// ***
// ****


// Exercícios de escrita de código

// 1. Pergunte ao usuário quantos bichinhos de estimação ele tem e guarde esse dado em uma variável.

// a) Se a quantidade for 0, imprima no console "Que pena! Você pode adotar um pet!"
// b) Se a quantidade for maior que 0, solicite que o usuário digite os nomes deles, um por um, e guarde esses nomes em um array
// c) Por fim, imprima o array com os nomes dos bichinhos no console

let qtdPets = Number(prompt("Quantos animais de estimação você tem? "));
let nomes = [];

if (qtdPets === 0) {
   console.log("Que pena! Você pode adotar um pet!");
} else {
   for (let i = 0; i < qtdPets; i++) {
      let nomesPets = prompt("Quais os nomes do(s) seu(s) pet(s)");
      nomes.push(nomesPets);
   }
   console.log(nomes);
}


// 2. Considere que você tenha acesso a um `array`  (chamado de 'array original') que é composto somente de números. Baseando-se nisso, crie uma função para cada um dos itens abaixo, realizando as operações pedidas:

let arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55];

// a) Escreva um programa que **imprime** cada um dos valores do array original.

function imprimirValores(array) {
   for (let i = 0; i < array.length; i++) {
      console.log(array[i])
   }
}

imprimirValores(arrayOriginal)

// b) Escreva um programa que **imprime** cada um dos valores do array original divididos por 10

function dividirPorDez(array) {
   for (let i = 0; i < array.length; i++) {
      console.log(array[i] / 10);
   }
}

dividirPorDez(arrayOriginal)

// c) Escreva um programa que **crie** um novo array contendo, somente, os números pares do array original e **imprima** esse novo array

let novoArray = [];
function numerosPares() {
   for (let item of arrayOriginal) {
      if (item % 2 == 0) {
         novoArray.push(item)
      }
   }
   console.log(novoArray);
}

numerosPares(arrayOriginal)

// d) Escreva um programa que **crie** um novo array contendo strings, da seguinte forma: "O elemento do índex `i` é: `numero`". Depois, **imprima** este novo array.

let mensagem = []

function imprimirString(array) {
   for (let i = 0; i < array.length; i++) {
      mensagem.push(`O elemento do índex ${i} é: ${array[i]} `);
   }
   console.log(mensagem)
}

imprimirString(arrayOriginal)

// e) Escreva um programa que imprima no console o maior e o menor números contidos no array original

function imprimarMaiorEMenorNumeros(array) {
   let numMaior = 0;
   let numMenor = array[0];

   for (let i = 0; i < array.length; i++) {

      if (array[i] > numMaior) {
         numMaior = array[i];
      } else if (array[i] < numMenor) {
         numMenor = array[i];
      }
   }
   console.log(`O maior número é ${numMaior} e o menor é ${numMenor}`)
}

imprimarMaiorEMenorNumeros(arrayOriginal)

// function imprimarMaiorEMenorNumeros(array) {
//    let min = 0;
//    let max = 0;

//    for (let i = 0; i < array.length; i++) {
//       min = Math.min(...array);
//       max = Math.max(...array);

//    }
//    return `O maior número é ${max} e o menor é ${min}`
// }

// console.log(imprimarMaiorEMenorNumeros(arrayOriginal))



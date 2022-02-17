// EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO

// 1. Leia o código abaixo

function minhaFuncao(variavel) {
   return variavel * 5
}

console.log(minhaFuncao(2));
console.log(minhaFuncao(10));

//a) O que vai ser impresso no console Será impresso 10 e 50;

// b) O que aconteceria se retirasse os dois `console.log` e simplesmente invocasse a função `minhaFuncao(2)` e `minhaFuncao(10)`? O que apareceria no console?
// Não ira aparecer nada no console pois a função está sendo invocada mas não teria a opção de imprimir.


// 2. Leia o código abaixo

let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function (texto) {
   return texto.toLowerCase().includes("cenoura");
}

const resposta = outraFuncao(textoDoUsuario);
console.log(resposta);


// a. Explique o que essa função faz e qual é sua utilidade.
// A função pega um texto inserido pelo usuario e trnasforma em letras mminúscula e confere se nesse texto contém a palavra "cenoura" nafrase e retorna um booleano.

// b. Determine qual será a saída no console para cada uma das 3 entradas do usuário:
// i.   `Eu gosto de cenoura`
// True
// ii.  `CENOURA é bom pra vista`
// True
// iii. `Cenouras crescem na terra`
// True


// EXERCÍCIOS DE ESCRITS DE CÓDIGO

// 1. Escreva as funções explicadas abaixo:

// a) A função não deve receber nenhum parâmetro e deve imprimir uma mensagem falando algumas informações sobre você, como:

// ```
// "Eu sou Caio, tenho 23 anos, moro em São Paulo e sou estudante."
// ```

// Troque o nome, idade, cidade e se é estudante ou não por informações sobre você. Lembrando que a função não possui entradas, apenas imprime essa mensagem.

function mensagem() {
   const nome = "Elie";
   const idade = 32;
   const cidade = "Olinda";
   const profissao = "Estudante";

   console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}.`);
}

mensagem();


// b)  Agora escreva uma função que receba 4 parâmetros que correspondem às informações de uma pessoa: o nome (`string`), a idade (`number`), a cidade (`string`) e uma profissão (`string`). Ela deve retornar uma `string` que unifique todas as informações da pessoa em uma só mensagem com o template:

// Eu sou [NOME], tenho [IDADE] anos, moro em [ENDEREÇO] e sou [PROFISSÃO].

function informacoesPessoais(nome, idade, cidade, profissao) {
   return `Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}.`
}

console.log(informacoesPessoais("Elisabete", 32, "Olinda", "Estudante"));


// 2. Escreva as funções explicadas abaixo:
//a) Escreva uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma das duas entradas e retorne o resultado. Invoque a função e imprima no console o resultado.

function somar(num1, num2) {
   return num1 + num2;
}
console.log(somar(4, 8));

//b) Faça uma função que recebe 2 números e retorne um booleano que informa se o primeiro número é **maior ou igual** ao segundo.

function maiorQue(num1, num2) {
   const result = num1 >= num2;
   return result;
}
console.log(maiorQue(12, 8));

//c) Escreva uma função que receba um número e devolva um booleano indicando se ele é par ou não.

function numeroPar(num1) {
   const result = num1 % 2 === 0;
   return result;
}
console.log(numeroPar(24));

//d) Faça uma função que recebe uma mensagem (`string`) como parâmetro e imprima o tamanho dessa mensagem, juntamente com uma versão dela em letras maiúsculas.

const textoUsuario = "Ame-se ao ponto de ser você a sua pessoa."

function mensagem(texto) {
   console.log(texto.toUpperCase());
   console.log(texto.length);
}

mensagem(textoUsuario);

// 3. Crie uma função para cada uma das operações básicas (soma, subtração, multiplicação e divisão). Em seguida, peça para o usuário inserir dois números e chame essas 4 funções com esses valores inputados pelo usuário sendo o argumento. Por fim, mostre no console o resultado das operações:

let numero1 = Number(prompt("Digite o primeiro número: "));
let numero2 = Number(prompt("Digite o segundo número: "));

function somar(num1, num2) {
   return num1 + num2;
}

function subtrair(num1, num2) {
   return num1 - num2;
}

function multiplicar(num1, num2) {
   return num1 * num2;
}

function dividir(num1, num2) {
   return num1 / num2;
}

console.log(somar(numero1, numero2));
console.log(subtrair(numero1, numero2));
console.log(multiplicar(numero1, numero2));
console.log(dividir(numero1, numero2));

// DESAFIOS

// 1. Funções são trechos de códigos como quaisquer outros mas que podemos acessá-los mais de uma vez ao longo do código através de invocações/chamadas. Então, funções podem chamar/invocar outras funções também. Sua tarefa é escrever duas funções

//a) Escreva uma *arrow function* que recebe um parâmetro e imprime no console esse parâmetro

const funcaoCall = (valor) => {
   return valor;
}

//b) Escreva outra *arrow function* que recebe dois valores como parâmetros mas **nenhum retorno.** Faça a soma entre esses valores e chame a sua primeira função mandando este resultado da soma como entrada para imprimi-lo.

function somarValores(num1, num2) {
   const soma = num1 + num2;
   console.log(soma);
}

funcaoCall(somarValores(5, 7));

// 2. Faça uma função que execute o teorema de Pitágoras, recebendo dois catetos e calculando o valor da hipotenusa. Retorne este valor, invoque a função e imprima o resultado no console. 

function teoremaPitagoras(a, b) {
   const hip = Math.sqrt((a * a) + (b * b))

   return hip;
}

console.log(teoremaPitagoras(12, 10));
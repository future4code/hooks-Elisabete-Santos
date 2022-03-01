// Exercícios de interpretação de código

//1. Leia o código abaixo:

const respostaDoUsuario = prompt("Digite o número que você quer testar")
const numero = Number(respostaDoUsuario)

if (numero % 2 === 0) {
   console.log("Passou no teste.")
} else {
   console.log("Não passou no teste.")
}

//a) Explique o que o código faz. Qual o teste que ele realiza?
// O código testa se o número inserido pelo usuário é par, ele faz uma condição e retoena uma frase se o número for par e outra se não for.

// b) Para que tipos de números ele imprime no console "Passou no teste"?
// Para números pares

// c) Para que tipos de números a mensagem é "Não passou no teste"?
// Para números impares (não passarm no teste)


// 2. O código abaixo foi feito por uma pessoa desenvolvedora, contratada para automatizar algumas tarefas de um supermercado:

let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
   case "Laranja":
      preco = 3.5
      break;
   case "Maçã":
      preco = 2.25
      break;
   case "Uva":
      preco = 0.30
      break;
   case "Pêra":
      preco = 5.5
   //break; // BREAK PARA O ITEM c.
   default:
      preco = 5
      break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

// a) Para que serve o código acima?
// Para informar o preço de uma fruta escolhida pelo usuário.

// b) Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`?
// O preço da fruta  Maçã  é  R$  2.25

// c) Considere que um usuário queira comprar uma `Pêra`, qual seria a mensagem impressa no console se retirássemos o `break` que está logo acima do `default` (o `break` indicado pelo comentário "BREAK PARA O ITEM c.")?
// O preço da fruta  Pêra  é  R$  5.5
// Se tirar o break ele ira imprimir a condição default. O preço da fruta  Pêra  é  R$  5


// 3. Leia o código abaixo:

const numero = Number(prompt("Digite o primeiro número."))

if (numero > 0) {
   console.log("Esse número passou no teste")
   let mensagem = "Essa mensagem é secreta!!!"
}

console.log(mensagem)

// a) O que a primeira linha está fazendo?
//Está pedindo ao usuário que entre com um número

// b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?
// 10 - Esse número passou no teste
// -10 - Não mostara nada no console

// c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.
// Sim, pois a variável "let mensagem" está dentro de um bloco ela é uma variável local(bloco) e não uma variável de escorpo(global).


// Exercícios de escrita de código

//1. Faça um programa que pergunta ao usuário qual a idade dele e imprima no console se ele/ela pode dirigir (apenas maiores de idade).

//a) Faça um `prompt` para receber a idade do usuário e guarde em uma variável.
//b) Garanta que essa variável é do tipo `Number`, você deve usar o cast para number para isso.
//c) Agora veja se essa idade do usuário corresponde à idade mínima que permite dirigir. Se sim, imprima no console `"Você pode dirigir"`, caso contrário, imprima `"Você não pode dirigir."`

let idade = Number(prompt("Digite a sua idade:"));

if (idade >= 18) {
   console.log("Você pode dirigir");
} else {
   console.log("Você não pode dirigir");
}

// 2. Agora faça um programa que verifica que turno do dia um aluno estuda. Peça para digitar M (matutino) ou V (Vespertino) ou N (Noturno). Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!". Utilize o bloco if/else.

let turnoDia = prompt("Qual o turno que você estuda: M (Matutino), V (Vespetino) ou N (Noturno).");

if (turnoDia.toUpperCase() === "M") {
   console.log("Bom dia");
} else if (turnoDia.toUpperCase() === "V") {
   console.log("Boa tarde");
} else {
   console.log("Boa noite");
}

// 3. Repita o exercício anterior, mas utilizando a estrutura de switch case agora.

let turnoDia = prompt("Qual o turno que você estuda: M (Matutino), V (Vespetino) ou N (Noturno).");

switch (turnoDia) {
   case "M":
      console.log("Bom dias")
      break;
   case "V":
      console.log("Boa tarde")
      break;
   default:
      console.log("Boa noite")
      break;
}

// 4. Considere a situação: você vai ao cinema com um amigo ou amiga, porém ele/ela só assistirá a um filme com você se ele for do gênero fantasia e se o ingresso está abaixo de 15 reais. Faça um código que pergunta ao usuário qual o gênero de filme que vão assistir e outra pergunta sobre o preço do ingresso, então verifique se seu amigo ou amiga vai topar assistir o filme. Caso positivo, imprima no console a mensagem: "Bom filme!", caso contrário, imprima "Escolha outro filme :("

let genero = prompt("Digite o gênero do filme escolhido:");
let preco = Number(prompt("Digite o valor do ingresso:"));

if (genero === "fantasia" && preco < 15) {
   console.log("Bom filme!")
} else {
   console.log("Escolha outro filme :(")
}


//Desafios

// 1. Modifique o código do exercício 4 de escrita de código para, antes de imprimir a mensagem `"Bom filme!"`, pergunte ao usuário, pelo `prompt` qual lanchinho ele vai comprar (pipoca, chocolate, doces, etc) e imprima no console as mensagens `"Bom filme!"` e `"Aproveite o seu [LANCHINHO]"`, trocando [LANCHINHO] pelo que o usuário colocou no input.

let genero = prompt("Digite o gênero do filme escolhido:");
let preco = Number(prompt("Digite o valor do ingresso:"));

if (genero === "fantasia" && preco < 15) {
   let lanche = prompt("Qual snack que você quer comprar? (pipoca, chocolate, doces, etc)")
   console.log("Bom filme!")
   console.log(`Aproveite o seu ${lanche}`)
} else {
   console.log("Escolha outro filme :(")
}


//2. Você foi contratado para criar um sistema de vendas de ingressos de jogos de um estádio de futebol. Para esta compra, o usuário deve fornecer algumas informações:
//  - Nome completo;
//  - Tipo de jogo: IN indica internacional; e DO indica doméstico;
//  - Etapa do jogo: SF indica semi-final; DT indica decisão de terceiro lugar; e FI indica final
//  - Categoria: pode ser as opções 1, 2, 3 ou 4;
//  - Quantidade de ingressos

// O seu sistema deve solicitar estas informações ao usuário, através do `prompt` . Além disso, ele deve imprimir tudo isso, junto com o valor de cada ingresso e o valor total que o usuário tem que pagar (ou seja, o valor unitário do ingresso multiplicado pela quantidade). Abaixo, há a tabela com os valores de cada ingresso e exemplos de execução do programa. Lembrando que o valor de jogos internacionais é o mesmo de jogos domésticos, mas seus preços devem ser multiplicados pelo valor do dólar (considerar o dólar = R$4,10)

let nome = prompt("Digite seu nome completo: ");
let publico = prompt("Digite qual o tipo do jogo Nacional ou Internacional");
let etapaJogo = prompt("Digite a etapa do jogo Semi-final, Decisão(3º lugar) ou Final");
let categoria = Number(prompt("Digite o tipo de categoria 1, 2 , 3 ou 4"));
let qtdIngresso = Number(prompt("Digite a quantidade de ingresso desejado: "));

let dolar = 4.10
let valorfinal
let valorIngresso

console.log(`
---Dados da compra--- 
Nome do cliente:  ${nome}
Tipo do jogo:  ${publico} 
Etapa do jogo:  ${etapaJogo} 
Categoria: ${categoria}
Quantidade de Ingressos:  ${qtdIngresso} 
`)

if (publico === "Nacional" && etapaJogo === "Semi-final" && categoria === 1) {
   valorIngresso = 1320
   valorFinal = valorIngresso * qtdIngresso
   console.log(`
   ---Valores--- 
   Valor do ingresso:  R$ ${valorIngresso}
   Valor total:  R$ ${valorFinal}
   `)
} if (publico == "Nacional" && etapaJogo == "Semi-final" && categoria === 2) {
   valorIngresso = 880
   valorFinal = valorIngresso * qtdIngresso
   console.log(`
   ---Valores--- 
   Valor do ingresso:  R$ ${valorIngresso}
   Valor total:  R$ ${valorFinal}
   `)
} else if (publico == "Nacional" && etapaJogo == "Semi-final" && categoria === 3) {
   valorIngresso = 555
   valorFinal = valorIngresso * qtdIngresso
   console.log(`
   ---Valores--- 
   Valor do ingresso:  R$ ${valorIngresso}
   Valor total:  R$ ${valorFinal}
   `)
} else if (publico == "Nacional" && etapaJogo == "Semi-final" && categoria === 4) {
   valorIngresso = 220
   valorFinal = valorIngresso * qtdIngresso
   console.log(`
   ---Valores--- 
   Valor do ingresso:  R$ ${valorIngresso}
   Valor total:  R$ ${valorFinal}
   `)
}

if (publico === "Nacional" && etapaJogo === "Decisão" && categoria === 1) {
   valorIngresso = 660
   valorFinal = valorIngresso * qtdIngresso
   console.log(`
   ---Valores--- 
   Valor do ingresso:  R$ ${valorIngresso}
   Valor total:  R$ ${valorFinal}
   `)
} if (publico == "Nacional" && etapaJogo == "Decisão" && categoria === 2) {
   valorIngresso = 440
   valorFinal = valorIngresso * qtdIngresso
   console.log(`
   ---Valores--- 
   Valor do ingresso:  R$ ${valorIngresso}
   Valor total:  R$ ${valorFinal}
   `)
} else if (publico == "Nacional" && etapaJogo == "Decisão" && categoria === 3) {
   valorIngresso = 330
   valorFinal = valorIngresso * qtdIngresso
   console.log(`
   ---Valores--- 
   Valor do ingresso:  R$ ${valorIngresso}
   Valor total:  R$ ${valorFinal}
   `)
} else if (publico == "Nacional" && etapaJogo == "Decisão" && categoria === 4) {
   valorIngresso = 170
   valorFinal = valorIngresso * qtdIngresso
   console.log(`
   ---Valores--- 
   Valor do ingresso:  R$ ${valorIngresso}
   Valor total:  R$ ${valorFinal}
   `)
}

if (publico === "Nacional" && etapaJogo === "Final" && categoria === 1) {
   valorIngresso = 1980
   valorFinal = valorIngresso * qtdIngresso
   console.log(`
   ---Valores--- 
   Valor do ingresso:  R$ ${valorIngresso}
   Valor total:  R$ ${valorFinal}
   `)
} if (publico == "Nacional" && etapaJogo == "Final" && categoria === 2) {
   valorIngresso = 1320
   valorFinal = valorIngresso * qtdIngresso
   console.log(`
   ---Valores--- 
   Valor do ingresso:  R$ ${valorIngresso}
   Valor total:  R$ ${valorFinal}
   `)
} else if (publico == "Nacional" && etapaJogo == "Final" && categoria === 3) {
   valorIngresso = 880
   valorFinal = valorIngresso * qtdIngresso
   console.log(`
   ---Valores--- 
   Valor do ingresso:  R$ ${valorIngresso}
   Valor total:  R$ ${valorFinal}
   `)
} else if (publico == "Nacional" && etapaJogo == "Final" && categoria === 4) {
   valorIngresso = 330
   valorFinal = valorIngresso * qtdIngresso
   console.log(`
   ---Valores--- 
   Valor do ingresso:  R$ ${valorIngresso}
   Valor total:  R$ ${valorFinal}
   `)
}


if (publico === "Internacional" && etapaJogo === "Semi-final" && categoria === 1) {
   valorIngresso = 1320 * dolar
   valorFinal = valorIngresso * qtdIngresso
   console.log(`
   ---Valores--- 
   Valor do ingresso:  U$ ${valorIngresso}
   Valor total:  U$ ${valorFinal}
   `)
} if (publico == "Internacional" && etapaJogo == "Semi-final" && categoria === 2) {
   valorIngresso = 880 * dolar
   valorFinal = valorIngresso * qtdIngresso
   console.log(`
   ---Valores--- 
   Valor do ingresso:  U$ ${valorIngresso}
   Valor total:  U$ ${valorFinal}
   `)
} else if (publico == "Internacional" && etapaJogo == "Semi-final" && categoria === 3) {
   valorIngresso = 550 * dolar
   valorFinal = valorIngresso * qtdIngresso
   console.log(`
   ---Valores--- 
   Valor do ingresso:  U$ ${valorIngresso}
   Valor total:  U$ ${valorFinal}
   `)
} else if (publico == "Internacional" && etapaJogo == "Semi-final" && categoria === 4) {
   valorIngresso = 220 * dolar
   valorFinal = valorIngresso * qtdIngresso
   console.log(`
   ---Valores--- 
   Valor do ingresso:  U$ ${valorIngresso}
   Valor total:  U$ ${valorFinal}
   `)
}


if (publico === "Internacional" && etapaJogo === "Decisão" && categoria === 1) {
   valorIngresso = 660 * dolar
   valorFinal = valorIngresso * qtdIngresso
   console.log(`
   ---Valores--- 
   Valor do ingresso:  U$ ${valorIngresso}
   Valor total:  U$ ${valorFinal}
   `)
} if (publico == "Internacional" && etapaJogo == "Decisão" && categoria === 2) {
   valorIngresso = 440 * dolar
   valorFinal = valorIngresso * qtdIngresso
   console.log(`
   ---Valores--- 
   Valor do ingresso:  U$ ${valorIngresso}
   Valor total:  U$ ${valorFinal}
   `)
} else if (publico == "Internacional" && etapaJogo == "Decisão" && categoria === 3) {
   valorIngresso = 330 * dolar
   valorFinal = valorIngresso * qtdIngresso
   console.log(`
   ---Valores--- 
   Valor do ingresso:  U$ ${valorIngresso}
   Valor total:  U$ ${valorFinal}
   `)
} else if (publico == "Internacional" && etapaJogo == "Decisão" && categoria === 4) {
   valorIngresso = 170 * dolar
   valorFinal = valorIngresso * qtdIngresso
   console.log(`
   ---Valores--- 
   Valor do ingresso:  U$ ${valorIngresso}
   Valor total:  U$ ${valorFinal}
   `)
}

if (publico === "Internacional" && etapaJogo === "Final" && categoria === 1) {
   valorIngresso = 1980 * dolar
   valorFinal = valorIngresso * qtdIngresso
   console.log(`
   ---Valores--- 
   Valor do ingresso:  U$ ${valorIngresso}
   Valor total:  U$ ${valorFinal}
   `)
} if (publico == "Internacional" && etapaJogo == "Final" && categoria === 2) {
   valorIngresso = 1320 * dolar
   valorFinal = valorIngresso * qtdIngresso
   console.log(`
   ---Valores--- 
   Valor do ingresso:  U$ ${valorIngresso}
   Valor total:  U$ ${valorFinal}
   `)
} else if (publico == "Internacional" && etapaJogo == "Final" && categoria === 3) {
   valorIngresso = 880 * dolar
   valorFinal = valorIngresso * qtdIngresso
   console.log(`
   ---Valores--- 
   Valor do ingresso:  U$ ${valorIngresso}
   Valor total:  U$ ${valorFinal}
   `)
} else if (publico == "Internacional" && etapaJogo == "Final" && categoria === 4) {
   valorIngresso = 330 * dolar
   valorFinal = valorIngresso * qtdIngresso
   console.log(`
   ---Valores--- 
   Valor do ingresso:  U$ ${valorIngresso}
   Valor total:  U$ ${valorFinal}
   `)
}

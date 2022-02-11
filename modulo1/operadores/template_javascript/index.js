// Exercícios de interpretação de código

// 1. Leia o código abaixo. Indique todas as mensagens impressas no console.

const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado) // a. false

resultado = bool1 && bool2 && bool3
console.log("b. ", resultado) // b. false

resultado = !resultado && (bool1 || bool2)
console.log("c. ", resultado) // c. True

console.log("d. ", typeof resultado) // D. Boolean


/* 2. Seu colega se aproxima de você falando que o código dele não funciona como devia.  Vamos ajudá-lo:
consegue perceber algum problema? O que será impresso no console?*/

// let primeiroNumero = prompt("Digite um numero!")
// let segundoNumero = prompt("Digite outro numero!")

// const soma = primeiroNumero + segundoNumero

// console.log(soma)
/* O problera é que os valores pedidos aos usuários estão como string e não como
number que seria o correto, então no console no resultado da variável soma irá concatenar
e não realizar a operação desejada se somar.*/

// 3. Para o exercício anterior, sugira ao seu colega uma solução para que o valor impresso no console seja, de fato, a soma dos dois números.

let primeiroNumero = Number(prompt("Digite um numero!"))
let segundoNumero = Number(prompt("Digite outro numero!"))

const soma = primeiroNumero + segundoNumero

console.log(soma)
// para resolver o problema é so converter string em number.



//Exercícios de escrita de código

/* 1. 1. Faça um programa que:
   a) Pergunte a idade do usuário; 
   b) Pergunte a idade do seu melhor amigo ou da sua melhor amiga;
   c) **Imprima na console** a seguinte mensagem: "Sua idade é maior do que a do seu melhor amigo?", seguido pela resposta (`true` ou `false`);
   d) **Imprima na console** a diferença de idade (não tem problema se sair um número negativo). */

let idade = Number(prompt("Digite a sua idade:"));
let idadeSeuAmigo = Number(prompt("Digite a sua idade do seu melhor amigo:"));

let maiorOuMenor = idade > idadeSeuAmigo;
let diferenca = idade - idadeSeuAmigo;

console.log("Sua idade é maior do que a do seu melhor amigo?", maiorOuMenor);
console.log("Adiferença de idade entre vocês é:", diferenca);


/* 2. 2. Faça um programa que:
   a) Peça ao usuário que insira um número **par**;
   b) Imprima na console **o resto da divisão** desse número por 2; 
   c) Teste o programa com diversos números pares. Você notou um padrão? Escreva em um comentário de código;
   d) O que acontece se o usuário inserir um número ímpar? Escreva em um comentário de código. */

let numPar = Number(prompt("Digite um número par:"));

let restoDivisao = numPar % 2;

console.log("O resto da divisão é:", restoDivisao);
//o resto sempre será 0 pois os números pares são divisiveis por 2.
//Se colocar um número impar o resultado será diferemte de 0 pois os números impares quando divididos por dois sempre terá um resto diferente de 0. 

/* 3. Faça um programa que pergunte ao usuário sua idade em anos. Depois, imprima no console 
   a) A idade do usuário em meses; 
   b) A idade do usuário em dias; 
   c) A idade do usuário em horas.*/

let suaIdade = Number(prompt("Digite sua idade em anos: "));

let meses = suaIdade * 12;
let dias = suaIdade * 365;
let horas = dias * 24;

console.log(" A sua idade em meses é:", meses);
console.log(" A sua idade em dias é:", dias);
console.log(" A sua idade em horas é:", horas);

/* 4. Faça um programa que pergunte ao usuário dois números. Em seguida, faça as operações e imprima no console as seguintes mensagens seguidas pelo true ou false. */

let num1 = Number(prompt("Digite o primeiro número:"));
let num2 = Number(prompt("Digite o segundoo número:"));

let operacao1 = num1 > num2;
let operacao2 = num1 === num2;
let operacao3 = (num1 % num2) === 0;
let operacao4 = (num2 % num1) === 0;

console.log("O primeiro numero é maior que segundo?", operacao1);
console.log("O primeiro numero é igual ao segundo?", operacao2);
console.log("O primeiro numero é divisível pelo segundo?", operacao3);
console.log("O segundo numero é divisível pelo primeiro?", operacao4);



// DESAFIO 

/* 1. 1. Para este exercício, será necessário o conhecimento das fórmulas para mudar a unidade de temperatura entre Graus Celsius(°C),  Graus Fahrenheit(°F) e Kelvin(K). Abaixo estão duas delas:
   - Graus Fahrenheit(°F) para Kelvin(K)  
   ```
   (KELVIN) = (GRAUS_FAHRENHEIT - 32)*(5/9) + 273.15
   ```  
   - Graus Celsius(°C) para Graus Fahrenheit (°C)
   ```
   (GRAUS_FAHRENHEIT) = (GRAUS_CELSIUS)*(9/5) + 32
   ```*/

// a) Calcule e mostre o valor de 77°F em  K, mostrando a unidade no console também.
let GRAUS_FAHRENHEIT = 77;
let k = (77 - 32) * (5 / 9) + 273.5;

console.log("A temperatura de 77°F em Celsius é", k, "°C");

// b) Calcule e mostre o valor de 80°C em °F, mostrando a unidade no console também
let celsius = 80;
let f = 80 * (9 / 5) + 32;

console.log("A temperatura de 80°C em fahrenheit é", f, "°F");

// c) Calcule e mostre o valor de 30°C em °F e K, mostrando as unidades no console também
celsius = 30;
f = 30 * (9 / 5) + 32;
console.log("A temperatura de 30°C em fahrenheit é", f, "°F");

k = 30 + 273;
console.log("A temperatura de 30°C em fahrenheit é", k, "°K");

// d) Altere o último item para que o usuário insira o valor em graus Celsius que ele deseja converter
celsius = Number(prompt("Digite um número em graus Celsius"));
f = celsius * (9 / 5) + 32;
console.log("A temperatura de", celsius, "°C em fahrenheit é", f, "°F");

k = celsius + 273;
console.log("A temperatura de", celsius, "°C em fahrenheit é", k, "°K");


/* 2. 2. Quilowatt-hora é uma unidade de energia; e é muito utilizada para se determinar o consumo de energia elétrica em residências. Sabe-se que o quilowatt-hora de energia custa R$0.05. Faça um programa que receba a quantidade de quilowatts consumida por uma residência.
   a) Calcule e mostre o valor a ser pago por uma residência que consuma 280 quilowatt-hora 
   b) Altere o programa para receber mais um valor: a porcentagem de desconto. Calcule e mostre o valor a ser pago pela mesma residência acima considerando 15% de desconto */

let wHoras = 280;
let valorASerPago = wHoras * 0.05;
console.log("O valor a ser pago é", valorASerPago);

let porcentagem = valorASerPago * 0.15;
let valorComDesc = valorASerPago - porcentagem;
console.log("Valor a ser pago com desconto", valorComDesc);


/* 3. Um grande problema que o mundo tem atualmente é a quantidade de unidades que existem para representar a mesma coisa. Por exemplo, para representar a Massa de um corpo, podemos usar quilograma (kg), onça (oz) e até libra (lb). Para representar Distâncias, existem metro (m), pés (ft), milha (mi). Até para volumes, há várias opções: litro (l), galão (gal),  xícaras (xic). Dada essa introdução, faça o que se pede:*/

/*a) Procure uma forma de converter libra (lb) para quilograma (kg) e escreva um programa que converta 20lb para kg. Imprima  a resposta no console da seguinte forma:*/
let lb = 20;
let kg = lb / 2.2046;
console.log("20lb equivalem a", kg, "kg");

/*b) Procure uma forma de converter onça (oz) para quilograma (kg) e escreva um programa que converta 10.5oz para kg. Imprima  a resposta no console da seguinte forma:*/
let oz = 10.5;
kg = oz / 35.274;
console.log("10.5oz equivalem", kg, "kg");

/*c) Procure uma forma de converter milha (mi) para metro (m) e escreva um programa que converta 100mi para m. Imprima  a resposta no console da seguinte forma:*/
let mi = 100;
let m = mi * 1609
console.log("100mi equivalem a", m, "m");

/*d) Procure uma forma de converter pés (ft) para metro (m) e escreva um programa que converta 50ft para m. Imprima  a resposta no console da seguinte forma:*/
let ft = 50;
m = ft / 3.2808;
console.log("50ft equivalem", m, "m");

/*e) Procure uma forma de converter galão (gal) para litro (l) e escreva um programa que converta 103.56gal para litro. Imprima  a resposta no console da seguinte forma:*/
let gal = 103.56;
let l = gal * 3.7854;
console.log("103.56gal equivalem a", l, "l");

/*f) Procure uma forma de converter xícara (xic) para litro (l) e escreva um programa que converta 450xic para litro. Imprima  a resposta no console da seguinte forma:*/
let xic = 450;
l = xic * 0.24;
console.log("450 xic equivalem a", l, "l");

/*g) Escolha ao menos **um** dos itens anteriores e modifique o programa para que ele peça ao usuário o valor da unidade original antes de converter*/

lb = Number(prompt("Digite um valor em libra:"));
kg = lb / 2.2046;
console.log(lb, "lb equivalem a", kg, "kg");


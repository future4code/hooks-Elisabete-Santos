// b) Crie um programa que receba seu nome e sua idade. Após receber estes valores, imprima no console uma mensagem que siga a seguinte estrutura:

const nome = process.argv[2]
const idade = process.argv[3]
console.log("Olá,", nome, "! Você tem ", idade, "anos.")

// c) Altere o programa acima para que mostre também a sua idade daqui a sete anos.

const valor1 = process.argv[2]
const valor2 = Number(process.argv[3])
console.log("Olá,", valor1, "! Você tem ", valor2, "anos. Em sete anos você terá", valor2 + 7)
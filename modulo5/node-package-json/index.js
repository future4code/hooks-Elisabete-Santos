//1. a. como fazemos para acessar os parâmetros passados na linha de comando para o Node?
// Usando o process.argv[2]

// b) Crie um programa que receba seu nome e sua idade. Após receber estes valores, imprima no console uma mensagem que siga a seguinte estrutura:

// const nome = process.argv[2]
// const idade = process.argv[3]
// console.log("Olá,", nome, "! Você tem ", idade, "anos.")

// c) Altere o programa acima para que mostre também a sua idade daqui a sete anos.

// const valor1 = process.argv[2]
// const valor2 = Number(process.argv[3])
// console.log("Olá,", valor1,"! Você tem ", valor2, "anos. Em sete anos você terá", valor2 + 7 )

//2. Crie uma aplicação Node que recebe uma string representando uma operação matemática e dois valores numéricos. O retorno deverá ser o resultado da operação selecionada utilizando os 2 valores fornecidos.

// const operacao = process.argv[2]
// const valor1 = Number(process.argv[3])
// const valor2 = Number(process.argv[4])

// switch (operacao) {
//    case "add":
//       console.log(valor1 + valor2)
//       break;
//    case "sub":
//       console.log(valor1 - valor2)
//       break;
//    case "mult":
//       console.log(valor1 * valor2)
//       break;
//    case "div":
//       console.log(valor1 / valor2)
//       break;
// }

// 3. Crie uma aplicação Node que receba uma string representando uma tarefa. O programa deve adicionar a nova tarefa em uma variável que represente uma lista de tarefas. A lista de tarefas pode estar criada antes da execução do código. Após adicionar o item à lista, exiba a lista atualizada.

// const tarefas = ["Estudar", "Ler um livro", "Ir no mercado", "Lavar roupa", "Limpar a casa"]
// const addTarefa = tarefas.push(process.argv[2]);
// const listaTarefas = tarefas.map((tarefa) => {
//   return console.log(tarefa)
// })
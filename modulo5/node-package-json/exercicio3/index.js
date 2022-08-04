// 3. Crie uma aplicação Node que receba uma string representando uma tarefa. O programa deve adicionar a nova tarefa em uma variável que represente uma lista de tarefas. A lista de tarefas pode estar criada antes da execução do código. Após adicionar o item à lista, exiba a lista atualizada.

const tarefas = ["Estudar", "Ler um livro", "Ir no mercado", "Lavar roupa", "Limpar a casa"]
const addTarefa = tarefas.push(process.argv[2]);
const listaTarefas = tarefas.map((tarefa) => {
   return console.log(tarefa)
})
🏋🏽‍♀️ Treino de JavaScript

Enunciado
Temos um array de tarefas, onde cada tarefa é um objeto com as propriedades: titulo, status e tempo. O status tem três valores possíveis: todo (tarefa não iniciada), doing (tarefa em progresso) e done (tarefa terminada).

Crie um novo array que tenha apenas o nome das atividades terminadas

Observação: não altere o array de tarefas! Apenas o utilize para criar seu novo array utilizando as funnções filter e map.

```
function filtraTarefas() {
  const tarefas = [
    { titulo: "Fazer Remember", status: "done", tempo: 30 },
    { titulo: "Fazer Challange", status: "todo", tempo: 30 },
    { titulo: "Assistir Aula", status: "done", tempo: 120 },
    { titulo: "Fazer almoço nutritivo", status: "done", tempo: 60 },
    { titulo: "Ler atentamente exercícios do dia", status: "doing", tempo: 20 },
    { titulo: "Fazer exercício do dia", status: "doing", tempo: 180 },
    { titulo: "Fazer desafio", status: "doing", tempo: 60 },
    { titulo: "Ir para o Stand Up", status: "todo", tempo: 30 },
    { titulo: "Enviar Feedback", status: "todo", tempo: 15 },
    { titulo: "Enviar Exercício", status: "todo", tempo: 15 },
    { titulo: "Jogar Videogame", status: "todo", tempo: 120 },
    { titulo: "Assistir Novela", status: "todo", tempo: 90 }
 ]

 const taskDone = tarefas.filter(item => item.status === "done")
 const taskName = taskDone.map(item => item.titulo)

 return taskName
}
```

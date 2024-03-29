// Exercício 9
    
// Escreva uma função que valida se uma pessoa pode ser estudante da Labenu. Para isso a função deve receber como parâmetro as respostas dessas 4 perguntas:

// - Qual a sua idade?
// - Você possui ensino médio completo?
// - Quantas horas você tem disponível na semana para o curso?
// - O seu curso será o “integral” ou “noturno”?

// A função deve retornar um booleano (true ou false) que indica se a inscrição para o curso é válida, ou seja, se o usuário pode ou não fazer o curso da Labenu. A inscrição é válida quando todos os seguintes requisitos forem atendidos:
   
//  - A pessoa possui mais de 18 anos;
//  - Possui ensino médio completo;
//  - Possui pelo menos 40 horas livres na semana para o curso integral e 20 horas para o curso noturno.

function estudanteLabenu(idade: number, ensinoMedio: boolean, horasDisponivel: number, curso:string):boolean {
   if(idade >= 18 && ensinoMedio && curso.toLowerCase() === "nortuno"){
      return horasDisponivel >= 20 ? true : false
   }else if(idade >= 18 && ensinoMedio && curso.toLowerCase() === "integral"){
      return horasDisponivel >= 40 ? true : false
   }else{
      return false
   }
}

console.log(estudanteLabenu(20, true, 50, "noturno"))
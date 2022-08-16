// Exercício 1
    
// Crie um função que receba uma `string` com o nome e outra `string` com uma data de nascimento (ex.: “24/04/1993”). A função deve separar o dia, o mês e ano e retornar uma `string` no seguinte formato:

// "Olá me chamo {NOME}, nasci no dia {DIA} do mês de {MÊS} do ano de {ANO}"


const mostrarfrase = (string:string, data:string) : string => {
   const dataSeparada:string[] = data.split("-")
   const frase: string = `Olá me chamo ${string}, nasci no dia ${dataSeparada[0]} do mês de ${dataSeparada[1]} do ano de ${dataSeparada[2]}`
   return (frase)

} 

console.log(mostrarfrase("Elisabete","08-12-1989"))







// function mostrarfrase(nome: string, dataNasc: string): string {

//    return `Olá, me chamo ${nome}, nasci no dia ${dataNasc.slice(0,2)} do mês de ${dataNasc.slice(3,5)} do ano de ${dataNasc.slice(6)}`
//  }
 
//  console.log(mostrarfrase("Elisabete", "08/12/1989"))
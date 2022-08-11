// Exercício 2
    // Observe a função a seguir, escrita em JavaScript:
   
//  ```jsx
//  function obterEstatisticas(numeros) {
   
//      const numerosOrdenados = numeros.sort(
//          (a, b) => a - b
//      )
   
//      let soma = 0
   
//      for (let num of numeros) {
//          soma += num
//      }
   
//      const estatisticas = {
//          maior: numerosOrdenados[numeros.length - 1],
//          menor: numerosOrdenados[0],
//          media: soma / numeros.length
//      }
   
//      return estatisticas
//  }
//  ```
    
//  a) Quais são as entradas e saídas dessa função? Copie a função para um arquivo .ts e faça a tipagem desses parâmetros
    
// b) Quais outras variáveis compõem essa função? Explicite a tipagem de todas elas 
    
// c) Crie um *type* chamado **amostra** de dados, isto é, um objeto com as propriedades **numeros** e **obterEstatisticas**. Abaixo, temos um exemplo de objeto desse tipo, declarado em JavaScript:

// const amostraDeIdades = {

//    numeros: [21, 18, 65, 44, 15, 18],
//    obterEstatisticas: (numeros) => {...}
// }


function obterEstatisticas(numeros: number[]): object {

   const numerosOrdenados:number[] = numeros.sort(
       (a, b) => a - b
   )
   //A função numerosOrdeados é um array de numeros, pois a mesma é atribuida ao parametro que recebemos nessa função.

   let soma:number = 0
   //Uma variavel do typo number.

   for (let num of numeros){
       soma += num
   }
   //Uma função que recebe numeros também.

   const estatisticas:object = {
       maior: numerosOrdenados[numeros.length - 1],
       menor: numerosOrdenados[0],
       media: soma / numeros.length
   }
   //Um objeto de numeros.

   return estatisticas
}

console.log(obterEstatisticas([21, 18, 65, 44, 15, 18]))

type amostraDeDados = {
   numeros: number[],
   obterEstatisticas: () => {
     obterEstatisticas(numeros: number[]): object
   }
 }
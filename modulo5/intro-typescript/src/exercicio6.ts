// Exercício 6
    
// Faça uma função que receba dois números como parâmetros e imprima no terminal, as seguintes informações:

// a) A soma desses números
// b) A subtração desses números
// c) A multiplicação desses números
// d) Qual deles é o maior

function pegaDoisNumeros(a: number, b: number): void {
   console.log("soma:", a + b)
   console.log("subtração:", a - b)
   console.log("multiplicação:", a * b)
   if(a > b){
     console.log("maior:", a)
   } else {
     console.log("maior:", b)
   }
 }
 
 pegaDoisNumeros(6,3)
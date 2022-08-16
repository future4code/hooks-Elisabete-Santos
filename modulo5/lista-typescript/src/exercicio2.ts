// Exercício 2 

// Crie uma função que receba um parâmetro qualquer e que imprima no console o tipo da variável. 

const imprimeTipo = (variavel: any): void => {
   const tipo = typeof variavel
   console.log(tipo);
}

imprimeTipo(100)
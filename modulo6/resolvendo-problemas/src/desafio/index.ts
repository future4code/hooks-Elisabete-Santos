Exercício 3
    
Uma Matriz é uma estrutura bidimensional que pode possuir elementos em linhas e colunas. Como mostrado abaixo:
    
```tsx
 1 2 3
 4 5 6
 7 8 9
```
    
Nesse caso, o elemento da linha 3 e coluna 2 é o 8; o elemento da linha 2 e coluna 3 é o 6 e assim por diante. Sobre isso, responda as perguntas abaixo:
    
a. Como podemos representar uma Matriz em Typescript?
    
Podemos representar como um array de arrays de número. O exemplo dado poderia ser representado como:

[[1, 2, 3], 
[4,5,6],
[7,8,9]]

Simplificando:

[[1,2,3],[4,5,6],[7,8,9]]

b. Escreva uma função que receba uma Matriz, o índice da linha, o índice da coluna e um valor. Essa função deve alterar o elemento das linha e coluna em questão pelo valor passado. (Caso não tenha nenhum valor nos índices passados, retorne um erro: Fora do intervalo da matriz)

export const replaceMatrixValue = (
   matrix: number[][],
   rowIndex: number,
   columnIndex: number,
   value: number
): void => {
   if (
     matrix[rowIndex] === undefined ||
     matrix[rowIndex][columnIndex] === undefined
   ) {
     throw new Error("Fora do intervalo da matriz");
   }
 
   matrix[rowIndex][columnIndex] = value;
};


- Exercício 4
    
Agora, vamos implementar algumas operações envolvendo matrizes. Para isso, estamos indicando algumas referências que podem ajudá-los a entender como essas operações são feitas "no papel".
    
a. Implemente uma função que receba uma matriz e imprima, no console, todos os seus elementos

const printMatrix = (m: number[][]): void => {
   for (const row of m) {
     for (const element of row) {
       console.log(element);
     }
   }
 };
    
b. Implemente uma função que receba duas matrizes e devolva a soma delas

export const sumMatrix = (
   matrixA: number[][],
   matrixB: number[][]
 ): number[][] => {
   const newMatrix: number[][] = [];
   if (
     matrixA.length !== matrixB.length ||
     matrixA[0].length !== matrixB[0].length
   ) {
     throw new Error("As dimensões das matrizes devem ser iguais");
   }
   const rowSize = matrixA[0].length;
   const columnSize = matrixB[0].length;
 
   for (let i = 0; i < rowSize; i++) {
     let newMatrixRow = [];
     for (let j = 0; j < columnSize; j++) {
       newMatrixRow.push(matrixA[i][j] + matrixB[i][j]);
     }
     newMatrix.push(newMatrixRow);
   }
   return newMatrix;
};

c. Implemente uma função que receba uma matriz e devolva a sua matriz transposta

const transposeMatrix = (m: number[][]): number[][] => {
   const transposed: number[][] = [];
   if (!m.length) {
     throw new Error("Matriz inválida");
   }
   for (let j = 0; j < m[0].length; j++) {
     let row = [];
     for (let i = 0; i < m.length; i++) {
       row.push(m[i][j]);
     }
     transposed.push(row);
   }
   return transposed;
};

d. Implemente uma função que receba duas matrizes e devolva a multiplicação delas

export const multiplyMatrix = (
   matrixA: number[][],
   matrixB: number[][]
 ): number[][] => {
   const result: number[][] = [];
   if (matrixA[0].length !== matrixB.length) {
     throw new Error("Matrizes inválidas");
   }
   for (let i = 0; i < matrixA.length; i++) {
     let rowResult: number[] = [];
     for (let j = 0; j < matrixB[0].length; j++) {
       let sumResult = 0;
       for (let k = 0; k < matrixA[0].length; k++) {
         sumResult += matrixA[i][k] * matrixB[k][j];
       }
       rowResult.push(sumResult);
     }
     result.push(rowResult);
   }
   return result;
};

- Exercício 5
    
[Amazon] Considere que você tenha uma matriz de números cujas linhas e colunas estejam ordenadas da menor para a maior. Determine a quantidade de números negativos que há dentro da matriz.

- Exemplos
    
A seguinte matriz está ordenada (em relação às linhas e as colunas). A quantidade de números negativos é 4
    
```tsx
[
   [-3, -2, -1, 1],
   [-2, 2, 3, 4],
   [4, 5, 7, 8]
]
```

Solução mais otimizada:

export const findNegativeNumbersInMatrix = (m: number[][]): number => {
   let count = 0;
   let row = 0;
   let column = m[0].length - 1;
   while (row < m.length && column >= 0) {
     if (m[row][column] < 0) {
       count += column + 1;
       row++;
     } else {
       column--;
     }
   }
   return count;
 }
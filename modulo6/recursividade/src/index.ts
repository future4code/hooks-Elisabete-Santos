// Exercício 1

// Escreva uma função recursiva que:

// a. Receba um número e imprima todos os inteiros de 0 até esse número no console em ordem crescente.

const printNumbers = (number: number, counter?:number) => {
  if (typeof(counter) === "undefined"){
    counter = 0
  }

  if (counter === number) {
    console.log(counter);
    return;
  } else {
    console.log(counter);
  }

  counter += 1;
  printNumbers(number, counter);
};

printNumbers(10);
printNumbers(5);
printNumbers(100);


// b. Receba um número e imprima todos os inteiros desse número até 0 em ordem decrescente.

const printAllNumbers = (number: number, counter?: number) => {
  if (typeof counter === "undefined") {
    counter = 0;
  }

  if (number === counter) {
    console.log(number - counter);
    return;
  }

  console.log(number - counter);
  counter += 1;
  printAllNumbers(number, counter);
};

printAllNumbers(10);
printAllNumbers(5);


// Exercício 2
    
// Escreva uma função recursiva que calcule a soma dos números inteiros de 0 a **n**.

const calculateSum = (number: number, counter: number = 0): number => {
  if (number === 0) {
    return counter;
  }
  counter += number;
  console.log("number", number);
  console.log("counter", counter);
  return calculateSum(number - 1, counter);
};

console.log(calculateSum(6));


// Exercício 3
    
// Transforme a função desenvolvida no Exercício 2 em **iterativa** (ou seja, não use recursividade).

const calculateSum2 = (number: number): number => {
     let sum: number = 0;
     for (let i = 0; i <= number; i++) {
       sum += i;
     }
     return sum;
   };
   
console.log(calculateSum(1));
console.log(calculateSum(2));
console.log(calculateSum(3));
console.log(calculateSum(6));


// Exercício 4
    
// Escreva uma função recursiva que consiga imprimir todos os elementos de um array.

const printArrayElements = (array: any[], index: number = 0) => {
   if (typeof index === "undefined") {
     index = 0;
   }
 
   console.log(array[index]);
   
   if (index === array.length - 1) {
     return;
   }
   printArrayElements(array, index + 1);
};
 
printArrayElements(["oi", "tudo", "bem"])


// 🏅 Desafios
// Exercício 5
     
// Escreva uma função recursiva que determine a quantidade de digitos de um número.

export const getNumDigits = (num: number, acc: number = 1): number => {
   if (num < 10) {
     return acc;
   }
   return getNumDigits(num / 10, acc + 1);
 };
 
console.log(getNumDigits(0));
console.log(getNumDigits(10));
console.log(getNumDigits(2746));


// Exercício 6
    
// Escreva uma função recursiva que determine o maior valor de um array que contenha somente números positivos.

export const getArrayMaximum = (
   arr: number[],
   i: number = 0,
   largest: number = 0
): number => {
   let largestAux = largest;
   if (arr[i] > largest) {
     largestAux = arr[i];
   }
   if (i === arr.length - 1) {
     return largestAux;
   }
 
   return getArrayMaximum(arr, i + 1, largestAux);
};

console.log(getArrayMaximum([2, 10, 8, 5, 4]));


// Exercício 7
    
// Escreva uma função recursiva que determine o primeiro caractere maiúsculo de uma string.

export const findFirstCapitalLetter = (
   s: string,
   char: string = ""
 ): string => {
   if (char && char.toUpperCase() === char) {
     return char;
   }
   return findFirstCapitalLetter(s.substring(1), s[0]);
};

console.log(findFirstCapitalLetter("lizzBeth"));


// Exercício 8
    
// Calcule a complexidade do seguinte algoritmo.

function power(a: number, b: number): number {
   if (b < 0) {
     return 0; // Erro
   } else if (b === 0) {
     return a;
   } else {
     return a * power(a, b - 1);
   }
}

// Resposta: O(b)


// Exercício 9
    
// Calcule a complexidade do seguinte código.

function allFib(n: number): void {
   for (let i = 0; i < n; i++) {
     console.log(`i: ${fib(i)}`)
   }
}
 
function fib(n: number) : number {
   if(n <= 0){
     return 0
   } else if( n === 1) {
     return 1
   }
   return fib(n - 1) + fib(n - 2)
}

// Resposta: O(n²)
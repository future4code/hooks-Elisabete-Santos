// Determine a complexidade dos seguintes algoritmos

// Exercício 1

// const findFirstRecurringCharacter = (input) => {
//   const charHashMap = {};
//   for (const char of input) {
//     if (charHashMap[char] === true) {
//       return char;
//     }
//     charHashMap[char] = true;
//   }
//   return null;
// };

//Resposta: O(n)


//-----------------------------------------------------------------------

// Exercício 2

export const func = (
  source: string,
  comparison: string
): boolean => {
  if (
    comparison.length > source.length + 1 ||
    comparison.length < source.length - 1
  ) {
    return false;
  }
  let commonCharQuantity = 0;

  for (const char of comparison) {
    if (source !== comparison) {
      commonCharQuantity++;
    }
  }
  return (
    commonCharQuantity <= source.length + 1 &&
    commonCharQuantity >= source.length - 1
  );
};

//Resposta: O(n)


//-----------------------------------------------------------------------

// Exercício 3

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

//Resposta: O(1)


//-----------------------------------------------------------------------

// Exercício 4

function verifyIfExistRepeatedNumbers(listOfNumbers: number[]): boolean {
  for (let i = 0; i < listOfNumbers.length; i++) {
    if (listOfNumbers.indexOf(listOfNumbers[i]) !== i) {
      return true;
    }
  }
  return false;
}

//Resposta: O(n²)


//-----------------------------------------------------------------------

// Exercício 5

//Resposta: 3 → 1 = 2 → 4

//-----------------------------------------------------------------------

// Exercício 6
    
function product(a: number, b: number): number {
   let sum = 0;
      for (let i = 0; i < b; i++) {
        sum += a;
      }
   return sum
}
    
// Respostas: O(b)

// Exercício 7

function mod(a: number, b: number): number {
   if (b <= a) {
     return -1;
   }
   let div = a / b;
   return a - div * b;
}

// Respostas: O(1)

// Exercício 8
    
function copyArray(array: number[]): number[] {
   let copy: number[] = [];
   for (const value of array) {
     copy = appendToNew(copy, value);
   }
   return copy;
 }
 
 function appendToNew(array: number[], value: number) {
   const newArray = [];
   for (let i = 0; i < array.length; i++) {
     newArray.push(array[i]);
   }
   newArray.push(value);
   return newArray;
}

// Respostas: Sendo n o tamanho do array, a complexidade de appendToNew é O(n)

// Sendo n o tamanho do array, a complexidade de copyArray é O(n²)
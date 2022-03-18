// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   return array.length;
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
   return array.reverse();
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
   return array.sort((a, b) => a - b);
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
   let numPares = array.filter(pares => (pares % 2) === 0)
   return numPares;
}

// *********** EXERCÍCIO 04 DESAFIO SEM USAR O FILTER ********
function retornaNumerosPares(array) {
   let numPares = [];
   for (let item of array) {
      if (item % 2 === 0) {
         numPares.push(item)
      }
   }
   return numPares;
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
   let numParesElevadoADois = [];
   for (let item of array) {
      if (item % 2 === 0) {
         numParesElevadoADois.push(item ** 2)
      }
   }
   return numParesElevadoADois;
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
   let max = 0;

   max = Math.max(...array);
   return max;
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
   let numMaior;
   let numMenor;

   if (num1 > num2) {
      numMaior = num1;
      numMenor = num2;
   } else {
      numMaior = num2;
      numMenor = num1;
   }

   let numMaiorDivideMenor = numMaior % numMenor === 0;
   let diferencaEntreNum = numMaior - numMenor;

   return {
      maiorNumero: numMaior,
      maiorDivisivelPorMenor: numMaiorDivideMenor,
      diferenca: diferencaEntreNum
   }
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   let numerosPares = [];
   for (let i = 0; numerosPares.length < n; i += 2) { //ao invés de verificar se o resto é igual a 0, fui incrementando i de 2 em 2.
      numerosPares.push(i);
   }
   return numerosPares;
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
   let qualificarTringulo = '';
   if (ladoA === ladoB && ladoA === ladoC) {
      qualificarTringulo = 'Equilátero'
   } else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
      qualificarTringulo = 'Isósceles'
   } else if (ladoA != ladoB && ladoB != ladoC && ladoC != ladoA) {
      qualificarTringulo = 'Escaleno'
   }

   return qualificarTringulo;
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {

}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {

}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {

}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {

}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {

}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {

}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {

}
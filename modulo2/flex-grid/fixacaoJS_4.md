Enunciado
Crie uma função que recebe um array de números e um número escolhido. A função deve retornar quantas vezes este número aparece no array.

Ex: se o array for [1, 4, 8, 2, 5, 4, 10, 1, 2, 4, 7, 5] e o número escolhido for 4, sua função deve dizer: O número 4 aparece 3x

Para o mesmo array, se o número escolhido for 3, sua função deve retornar: Número não encontrado

```
function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
  let cont = 0;
  for (let i of arrayDeNumeros){
    if(i == numeroEscolhido){
      cont = cont + 1;
    }
  }
  if ( cont > 0){
       return `O número ${numeroEscolhido} aparece ${cont}x`
  } else{
     return `Número não encontrado`
  }
}

```

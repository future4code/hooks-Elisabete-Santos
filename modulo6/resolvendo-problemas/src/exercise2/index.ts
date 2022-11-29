// Implemente um método que performe uma compressão de string usando a contagem dos caracteres repetidos em sequência. Caso o resultado final tenha um tamanho maior do que a string inicial, seu programa deve retornar a string inicial

// Exemplos

```JSX
Para o input `aabbb` o resultado deve ser `a2b3`

Para o input `aabcccccaaa` o resultado deve ser `a2b1c5a3`

Para o input `accurate` o resultado deve ser `accurate` (já que inicialmente o código retornaria `a1c2u1r1a1t1e1` que possui o tamanho maior do que `accurate`)

Para o input `escola` o resultado deve ser `escola` (já que inicialmente o código retornaria `e1s1c1o1l1a1` que possui o tamanho maior do que `escola`)

Para o input `accuraaaaaaaaaate`, o resultado deve ser `a1c2u1r1a10t1e1`

```

const compression = (input:any)=>{

   const compString = []
   let lastChar = input[0]
   let charCount = 0 

   for(const char of input){
       if(char !== lastChar){
           compString.push(lastChar + charCount)
           lastChar = char
           charCount = 0
       }
       charCount++
   }

   compString.push(lastChar + charCount)
   let result = ""
   for(const key of compString){
       result += key
   }
   return result.length > input.length ? input: result
}


console.log(compression("aabbb"))
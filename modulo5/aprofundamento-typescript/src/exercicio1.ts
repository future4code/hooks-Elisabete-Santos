// Exercício 1
// O Typescript é uma linguagem um pouco mais criteriosa que o Javascript, então vamos conhecer um pouco desses critérios.
    
// a) Crie uma variável **minhaString** do tipo `string` e atribua um valor a ela. Tente atribuir um número a esta variável. O que acontece?

//const minhaString: string = 10
// Se atribuimos um valor de number  essa variavel, não aceita por declaramos o tipo dela com string
    
// b) Crie uma variável **meuNumero** do tipo `number` e atribua um valor numérico. Como fazer para que essa variável também aceite strings? Ou seja, como criamos no typescript uma variável que aceite mais de um tipo de valor?

type stringAndNumber = number | string
const meuNumero: stringAndNumber = 10

// c) Agora crie um novo objeto. Este objeto é uma pessoa, e deve possuir três propriedades:
    
// `nome`, que é uma string;
// `idade`, que é um número;
// `corFavorita`, que é uma string.
    
// Crie mais três objetos, que também precisam ter apenas os campos definidos acima. Crie um **tipo** `Pessoa` para garantir que todos os objetos tenham os mesmos campos.
    
// d) Modifique a propriedade `corFavorita` para que apenas seja possível escolher entre as cores do arco-íris. Utilize um `enum` para isso.

enum CoresArcoIris {
   VERMELHO = "Vermelho",
   LARANJA ="Laranja",
   AMARELO = "Amarelo",
   VERDE = "Verde",
   AZUL = "Azul",
   ANIL= "Anil",
   VIOLETA = "Violeta"
}

type Pessoa = {
   nome: string,
   idade: number,
   corFav: CoresArcoIris
}

const pessoa1: Pessoa = {
nome:"Luna",
idade: 16,
corFav: CoresArcoIris.LARANJA
}

const pessoa2: Pessoa = {
   nome:"Felipe",
   idade: 25,
   corFav: CoresArcoIris.VIOLETA
}

const pessoa3: Pessoa = {
   nome:"Alex",
   idade: 38,
   corFav: CoresArcoIris.AMARELO
}

console.log(pessoa1.nome, pessoa1.idade, pessoa1.corFav);
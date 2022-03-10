// Exercícios de interpretação de código

// 1. Leia o código abaixo

const usuarios = [
   { nome: "Amanda Rangel", apelido: "Mandi" },
   { nome: "Laís Petra", apelido: "Laura" },
   { nome: "Letícia Chijo", apelido: "Chijo" }
]

const novoArrayA = usuarios.map((item, index, array) => {
   console.log(item, index, array)
})

// a) O que vai ser impresso no console?
// Será impresso os intem do array, ou seja, cada objeto. Também o indice de cada elemento(objeto) do array e por ultimo será impreso o array por inteiro.

// 2. Leia o código abaixo:

const usuarios1 = [
   { nome: "Amanda Rangel", apelido: "Mandi" },
   { nome: "Laís Petra", apelido: "Laura" },
   { nome: "Letícia Chijo", apelido: "Chijo" },
]

const novoArrayB = usuarios.map((item, index, array) => {
   return item.nome
})

// console.log(novoArrayB)

// a) O que vai ser impresso no console?
// Será impresso um novo array com os nomes de cada objeto que esta dentro do array usuarios.


// 3. Leia o código abaixo:

const usuarios2 = [
   { nome: "Amanda Rangel", apelido: "Mandi" },
   { nome: "Laís Petra", apelido: "Laura" },
   { nome: "Letícia Chijo", apelido: "Chijo" },
]

const novoArrayC = usuarios.filter((item, index, array) => {
   return item.apelido !== "Chijo"
})

console.log(novoArrayC)

// a) O que vai ser impresso no console?
// Será impresso um novo array com os objetos cujo apelidos sejá diferente de chijo.


// Exercícios de escrita de código

// 1. Dado o seguinte array de cachorrinhos que são clientes de um pet shop, realize as operações pedidas nos itens abaixo utilizando as funções de array map e filter:

const pets = [
   { nome: "Lupin", raca: "Salsicha" },
   { nome: "Polly", raca: "Lhasa Apso" },
   { nome: "Madame", raca: "Poodle" },
   { nome: "Quentinho", raca: "Salsicha" },
   { nome: "Fluffy", raca: "Poodle" },
   { nome: "Caramelo", raca: "Vira-lata" },
]

//a) Crie um novo array que contenha apenas o nome dos doguinhos

const nomeCachorros = pets.map(item => item.nome)
console.log(nomeCachorros)

//b) Crie um novo array apenas com os cachorros salsicha

const petSalsicha = pets.filter(item => item.raca === "Salsicha")
console.log(petSalsicha)

//c) Crie um novo array que possuirá mensagens para enviar para todos os clientes que são poodles. A mensagem deve ser: "Você ganhou um cupom de desconto de 10% para tosar o/a [NOME]!"

const petPoodle = pets.filter(item => item.raca === "Poodle")

const descontos = petPoodle.map((item) => {
   return `Você ganhou um cupom de desconto de 10% para tosar o/a ${item.nome}!`
})

console.log(descontos);

// 2. Dado o seguinte array de produtos, realize as operações pedidas nos itens abaixo utilizando as funções de array map e filter:

const produtos = [
   { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
   { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
   { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
   { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
   { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
   { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
   { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
   { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
   { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
   { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
]

//a) Crie um novo array que contenha apenas o nome de cada item

const nome = produtos.map(item => item.nome);
console.log(nome);

//b) Crie um novo array que contenha um objeto com o nome e o preço de cada item, aplicando 5% de desconto em todos eles

const desconto = produtos.map((item) => {
   let desconto = item.preco - (item.preco * (5 / 100))
   return { nome: item.nome, preço: desconto.toFixed(2) }
})

console.log(desconto);

//c) Crie um novo array que contenha apenas os objetos da categoria Bebidas

const bebidas = produtos.filter(item => item.categoria === "Bebidas")
console.log(bebidas);

//d) Crie um novo array que contenha apenas os objetos cujo nome contenha a palavra "Ypê"

const objYpe = produtos.filter(item => item.nome.includes("Ypê"))
console.log(objYpe);

// e) Crie um novo array onde cada item é uma frase "Compre [NOME] por [PREÇO]". Esse array deve conter frases apenas dos itens cujo nome contenha a palavra "Ypê".

const objYpeDesc = produtos.filter(item => item.nome.includes("Ypê"))

const fraseInfo = objYpeDesc.map(item => {
   return `Compre ${item.nome} por ${item.preco}`
})

console.log(fraseInfo)


// Desafios
// 1. Dado o seguinte array de pokémons, realize as operações pedidas nos itens abaixo:

const pokemons = [
   { nome: "Bulbasaur", tipo: "grama" },
   { nome: "Bellsprout", tipo: "grama" },
   { nome: "Charmander", tipo: "fogo" },
   { nome: "Vulpix", tipo: "fogo" },
   { nome: "Squirtle", tipo: "água" },
   { nome: "Psyduck", tipo: "água" },
]


//a) Crie um novo array que contenha apenas o nome dos pokémons em ordem alfabética

const ordemAlfabetica = pokemons.map(item => {
   return item.nome
})
console.log(ordemAlfabetica.sort())

//b) Crie um novo array apenas com os tipos dos pokémons, sem repetição


let unicoTipo = []
for (let item of pokemons) {
   unicoTipo.includes(item.tipo) ? '' : unicoTipo.push(item.tipo)
}
console.log(unicoTipo)






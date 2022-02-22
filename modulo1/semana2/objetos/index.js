// Exercícios de interpretação de código

// 1. Leia o código abaixo

const filme = {
   nome: "Auto da Compadecida",
   ano: 2000,
   elenco: [
      "Matheus Nachtergaele", "Selton Mello", "Denise Fraga",
      "Virginia Cavendish"
   ],
   transmissoesHoje: [
      { canal: "Telecine", horario: "21h" },
      { canal: "Canal Brasil", horario: "19h" },
      { canal: "Globo", horario: "14h" }
   ]
}

console.log(filme.elenco[0])
console.log(filme.elenco[filme.elenco.length - 1])
console.log(filme.transmissoesHoje[2])

// a) O que vai ser impresso no console?

// Matheus Nachtergaele
// Virginia Cavendish
// { canal: "Globo", horario: "14h" }


// 2. Leia o código abaixo

const cachorro = {
   nome: "Juca",
   idade: 3,
   raca: "SRD"
}

const gato = { ...cachorro, nome: "Juba" }

const tartaruga = { ...gato, nome: gato.nome.replaceAll("a", "o") }

console.log(cachorro)
console.log(gato)
console.log(tartaruga)

// a) O que vai ser impresso no console?

// {nome: 'Juca', idade: 3, raca: 'SRD'}
// {nome: 'Juba', idade: 3, raca: 'SRD'}
// {nome: 'Jubo', idade: 3, raca: 'SRD'}

// b) O que faz a sintaxe dos três pontos antes do nome de um objeto?

// Copia todo o objeto para dentro de outro objeto(espelha o objeto), espelha todas as propriedades e valores de um objeto.


// 3. Leia o código abaixo

function minhaFuncao(objeto, propriedade) {
   return objeto[propriedade]
}

const pessoa = {
   nome: "Caio",
   idade: 23,
   backender: false
}

console.log(minhaFuncao(pessoa, "backender"))
console.log(minhaFuncao(pessoa, "altura"))

// a) O que vai ser impresso no console?

// false
// undefined

// b) Explique o valor impresso no console. Você sabe por que isso aconteceu?

// No primeiro ele imprimiu o valor da çpeopriedade backender já nosegundo deu undefined porque não existe a propriedade altura dentro do objeto.


// Exercícios de escrita de código

//1. Resolva os passos a seguir:

// a) Crie um objeto. Ele deve conter duas propriedades: nome (string) e apelidos (um array que sempre terá exatamente **três apelidos**). Depois, escreva uma função que recebe como entrada um objeto e imprime uma mensagem no modelo abaixo:

const pessoa = {
   nome: "Elisabeth",
   apelidos: ["Eli", "Lizz", "Beth"]
}

function infoPessoa(objeto) {
   console.log(`Eu sou ${objeto.nome}, mas pode me chamar de: ${objeto.apelidos[0]}, ${objeto.apelidos[1]} ou ${objeto.apelidos[2]}`)
}

infoPessoa(pessoa)

// b) Agora, usando **o operador spread**, crie um novo objeto mantendo o valor da propriedade nome, mas com uma nova lista de três apelidos. Depois, chame a função feita no item anterior passando como argumento o novo objeto.


const novaPessoa = {
   ...pessoa,
   apelidos: ["Elisa", "Lisa", "Lizzbeth"]
}

infoPessoa(novaPessoa)


// 2. Resolva os passos a seguir:

//a) Crie dois objetos diferentes com as seguintes propriedades: nome, idade e profissão.

const pessoaUm = {
   nome: "Lucia",
   idade: 34,
   profissao: "Psicologa"
}

const pessoaDois = {
   nome: "Fernando",
   idade: 45,
   profissao: "Engenheiro"
}

//b) Escreva uma função que receba esses objetos e retorne um array com as seguintes informações:
//  1. O valor de `nome`
//  2. O numero de caracteres do valor `nome`
//  3. O valor de `idade`
//  4. O valor de `profissão`
//  5. O numero de caracteres do valor `profissão`

function pessoasInfo(objeto1, objeto2) {

   const array1 = [objeto1.nome, objeto1.nome.length, objeto1.idade, objeto1.profissao, objeto1.profissao.length]
   const array2 = [objeto2.nome, objeto2.nome.length, objeto2.idade, objeto2.profissao, objeto2.profissao.length]

   return console.log(array1) + console.log(array2)
}

pessoasInfo(pessoaUm, pessoaDois)


// 3. Resolva os passos a seguir:

// a) Crie uma variável de escopo global que guarde um `array` vazio chamada `carrinho`

// b) Crie três novos objetos que representem frutas de um sacolão. Eles devem ter as seguintes propriedades: nome (`string`) e disponibilidade (`boolean` - devem começar como `true`)

// c) Crie uma função que **receba** um objeto fruta por **parâmetro** e coloque-a dentro do array de `carrinho`. Invoque essa função passando os três objetos criados.

// d) Imprima a variável carrinho e garanta que ela agora seja um array preenchido com três objetos.


const carrinho = []

const frutaUm = {
   nome: "Melancia",
   disponibilidade: true
}
const frutaDois = {
   nome: "Uva",
   disponibilidade: true
}
const frutaTres = {
   nome: "Pinha",
   disponibilidade: true
}

function sacolao(fruta) {
   return fruta
}

carrinho.push(sacolao(frutaUm))
carrinho.push(sacolao(frutaDois))
carrinho.push(sacolao(frutaTres))

console.log(sacolao(frutaUm))
console.log(sacolao(frutaDois))
console.log(sacolao(frutaTres))

console.log(carrinho)


// DESAFIOS

// 1. Crie uma função que pergunte ao usuário seu nome, sua idade e sua profissão e depois imprima no console um objeto com essas propriedades. Depois de imprimir o novo objeto, imprima também o **tipo** dele para garantir que é um **objeto.**

function usuario() {
   const nome = prompt("Digite seu nome: ");
   const idade = Number(prompt("Digite a sua idade"));
   const profissao = prompt("Digite a sua profissao");

   const obj = {
      nome: nome,
      idade: idade,
      profissao: profissao
   }

   console.log(obj)
   console.log(typeof obj)
}

usuario()

// 2. Crie uma função que receba dois objetos que representam filmes. Eles devem ter as propriedades: ano de lançamento e nome. A função deve retornar uma mensagem no seguinte modelo:
//O primeiro filme foi lançado antes do segundo? false
//O primeiro filme foi lançado no mesmo ano do segundo? true

const filme1 = {
   nome: "jogos mortais",
   anoLancamento: 2004
}

const filme2 = {
   nome: "Harry Potter eo prisioneiro de Azkaban",
   anoLancamento: 2004
}

function filmes(obj1, obj2) {
   const condicao1 = obj1.anoLancamento < obj2.anoLancamento
   const condicao2 = obj1.anoLancamento === obj2.anoLancamento

   return `O primeiro filme foi lançado antes do segundo? ${condicao1}
   O primeiro filme foi lançado no mesmo ano do segundo? ${condicao2}`
}

console.log(filmes(filme1, filme2))


// 3. Crie uma função a mais pro exercício 3 de escrita de código. Essa função vai auxiliar o controle de estoque do sacolão: ela deve receber por parâmetro uma das frutas e retornar esse mesmo objeto com a propriedade disponibilidade com o valor invertido. 


const frutaUm = {
   nome: "Melancia",
   disponibilidade: true
}
const frutaDois = {
   nome: "Uva",
   disponibilidade: true
}
const frutaTres = {
   nome: "Pinha",
   disponibilidade: true
}

function fruta(obj) {
   return obj.disponibilidade = false
}

console.log(fruta(frutaTres))
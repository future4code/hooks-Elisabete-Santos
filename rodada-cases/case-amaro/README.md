<h1 align="center">
    <br>

[![Typing SVG](https://readme-typing-svg.herokuapp.com/?color=ffffff&size=38&center=true&vCenter=true&width=500&lines=👗+Case+Amaro+👔+!!!;)](https://git.io/typing-svg)

</h1>
<br>

<br>

## 🧠 Contexto

<br>

O projeto é uma criação de API para cadastro e consulta de produtos

<br>

- 📌 Requesitos
- 📚 Aprendizado
- 🛠️ Tecnologias Utilizadas
- 📦 Pacotes Utilizados
- ⚙️ Como rodar o projeto localmente
- 🔃 Rotas
- ✨ O que funciona
- ❌ O Que Não Funciona
- 👨‍💻 Desenvolvedor(a)

<br>

## 📌 Requisitos Mínimos

**End-point para inserção de dados**

- O cliente poderá enviá-los em arquivos json ou xml e a API deverá inserir no banco de dados.
- Escolha o banco de dados que achar melhor.

**End-point para consulta destes produtos**

- Pode ser consultado por: id, nome ou tags. Caso a consulta seja por uma tag ou nome, deverá listar todos os produtos com aquela respectiva busca, poderá ser feito em um ou mais end-points.

**Requisitos Obrigatórios**

- Ter uma cobertura de teste relativamente boa, a maior que você conseguir.
- Criar um cache para consulta.

<br>

## 📚 Aprendizado

<br>

> ⚠️ O projeto final consiste em uma API fundamentada no CRUD. O CRUD é um acrônimo para Create(CRIAR), Read(LER-CONSULTAR), Update(ATUALIZAR) e Delete(DELETAR).

<br>

## 🛠️ Tecnologias utilizadas nesse projeto

<br>

Para a construção do projeto, as seguintes tecnologias foram utilizadas:

- [TypeScript](https://www.typescriptlang.org/)
- [Git/Github](https://github.com/)
- [Node.js](https://nodejs.org/en/)
- [Postman](https://www.postman.com/)
- [Vscode](https://code.visualstudio.com/)
- [Programação Orientada à Objetos](https://www.devmedia.com.br/os-4-pilares-da-programacao-orientada-a-objetos/9264)
- [MySQL](https://www.mysql.com/)

## 📦 Pacotes Utilizados

- [Express](https://expressjs.com/pt-br/)
- [cors](https://www.npmjs.com/package/cors)
- [Knex](https://knexjs.org/)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [bcryptjs](https://www.npmjs.com/package/bcryptjs)
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
- [Uuid](https://www.uuidgenerator.net/)

<br>

## ⚙️ Como rodar o projeto localmente

Siga os passos e inclua as informações abaixo:

| Passo                     | Comando/informação        |
| ------------------------- | ------------------------- |
| Faça o fork               | `botão de forkar`         |
| Faça o clone              | `git clone`               |
| Instale as dependências   | `npm i`                   |
| Adicionar as inf. no .env | `Dados do banco de dados` |

Criar um arquivo .env com os seguintes dados sensíveis:

- DB_HOST
- DB_USER
- DB_PASS
- DB_SCHEMA
- DB_PORT
- JWT_KEY
- ACCESS_TOKEN_EXPIRES_IN

Banco de dados utilizado: **MySQL WorkBench**

### `Divirta-se :)`

<br>

## 🔃 Rotas USER:

| Método HTTP | Endpoint       | Descrição                |
| ----------- | -------------- | ------------------------ |
| POST        | `/user/signup` | Cria/cadastra um usuário |
| POST        | `/user/login`  | Login do usuário         |

<br>

## 🔃 Rotas PRODUCTS:

| Método HTTP | Endpoint          | Descrição                |
| ----------- | ----------------- | ------------------------ |
| POST        | `/product/insert` | Cria/cadastra um produto |
| GET         | `/product/:id`    | Buscar um produto por ID |
| GET         | `/product/getAll` | Buscar todos os produtos |

<br>

## ✨ O que funciona

- Signup do usuário;
- Login do usuário;
- Adcionar produto no catalogo --> apenas admin;
- Pegar lista de todos os produto;
- Pegar um produto especifico pelo ID;

<br>

## ❌ O Que Não Funciona

- Filtrat os produtos por tags.

<h1>
    <br>
    <p style=" font-weight: bold;">👨‍💻 Desenvolvedores</p>
</h1>

<table>

_Caso queira contribuir com o projeto, será totalmente bem-vindx!!!_

_Qualquer dúvida ou sugestão, chama no contatinho!_

  <tr>     
   <td align="center"><a href="https://github.com/elisabetealves"><img style="border-radius: 50%;" src="https://unavatar.now.sh/github/elisabetealves" width="100px;" alt=""/><br /><sub><b>Elisabete Alves</b></sub></a><br /><a href="https://www.linkedin.com/in/elisabete-a-santos/"> <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" /></a> </td> 
  </tr>

</table>

<br>

### Feito com 💕 e muita dedicação

<br>

<h2>
  <a href='#top'>🔝 Voltar para o topo.</a>
</h2>

<br>

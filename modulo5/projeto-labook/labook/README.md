<h1 align="center">
    <br>
    <p align="center"> 🚀 Projeto LaBook<p>
</h1>
<br>

## 🧠 Contexto (Requisitos)

<br>

O LaBook será uma rede social com o objetivo de promover a conexão e interação entre seus mais diversos usuários. Os usuários podem criar posts de dois tipos ("evento" ou "normal"), comentá-los e curti-los também.

- 📌 Funcionalidades
- 🎯 Requesitos Mínimos
- 📚 Aprendizado
- 🛠️ Tecnologias Utilizadas
- 📦 Pacotes Utilizados
- ⚙️ Como rodar o projeto localmente
- 🔃 Rotas
- ✨ O que funciona
- ❌ O que não funciona
- 👨‍💻 Desenvolvedor(a)

<br>

## 📌 Funcionalidades

<br>

**Endpoints a se organizar:**

1. Cadastrar
   Para o cadastro nessa rede social, o usuário deve fornecer seu nome, seu e-mail e uma senha.
2. Criar post
   O post deve ser criado, passando-se as informações de: foto, descrição, data de criação e tipo ("normal" ou "evento").
3. Buscar um post por id
   Ao passar o id de um post, você deve obter as informações a respeito daquele post

**Endpoints a se criar:**

4. Fazer amizade
   Criar uma amizade é simples: basta receber o Id do usuário com o qual se deseja fazer amizade.
   Uma amizade é uma "relação mútua": quando um usuário vira amigo de outro, esse outro "já é amigo" desse primeiro usuário (ou seja, o segundo usuário não precisa virar amigo do outro depois)
   **Não há a necessidade de "aceitar" uma amizade.**
5. Desfazer Amizade
   Encerrar uma amizade segue o mesmo fluxo de fazer: com o id do usuário, já é possível realizar esse processo.
   Observação: você deve retornar um erro caso o usuário tente desfazer uma amizade com alguém com quem não tem essa amizade registrada no banco!
6. Ver todo o Feed
   O feed é composto por todos os posts dos amigos do usuário. Os posts devem ser retornado em ordem de criação: do mais recente ao mais antigo.

 <br>

## 🎯 Requisitos Mínimos

<br>

**→ Cradastrar;**

**→ Criar Post;**

**→ Buscar um post por id;**

**→ Fazer amizade;**

**→ Desfazer Amizade;**

**→ Ver todo o Feed;**

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

E divirta-se :)

<br>

## 🔃 Rotas:

| Método HTTP | Endpoint                 | Descrição                                  |
| ----------- | ------------------------ | ------------------------------------------ |
| POST        | `/user`                  | Cria/cadastra um novo usuário              |
| GET         | `/post/find/:id`         | Retorna um post por ID                     |
| POST        | `/post`                  | Cria um novo post                          |
| GET         | `/friend/feed/:id`       | Exibe todos os posts dos amigos do usuário |
| POST        | `/friend`                | Cria uma nova amizade                      |
| DELETE      | `/friend/delete`         | Deleta uma amizade                         |
| GET         | `/post/all/:page`        | Exiba posts por nº páginas                 |
| GET         | `/post/all-posts-sorted` | Exibe posts ordenado                       |

<br>

## ✨ O que funciona

- Cadastro de novo usuário
- Criar post
- Buscar um posto por ID
- Fazer amizade
- Desfazer amizade
- Ver todos os posts de amigos
- Ver apenas os post por número de páginas
- Exibe posts ordenado

<br>

## ❌ O que não funciona

- Curtir Post
- Descurtir Post
- Comentar Post

<br>

<h1>
    <br>
    <p style=" font-weight: bold;">👨‍💻 Desenvolvedor(a)</p>
</h1>

<table>

_Caso queira contribuir com o projeto, será totalmente bem-vindx!!!_

_Qualquer dúvida ou sugestão, chama no contatinho!_

  <tr>  
    <td align="center"><a href="https://github.com/elisabetealves"><img style="border-radius: 50%;" src="https://unavatar.now.sh/github/elisabetealves" width="100px;" alt=""/><br /><sub><b>Elisabete Alves</b></sub></a><br /><a href="https://www.linkedin.com/in/elisabete-a-santos/"> <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" /></a> </td>     
  </tr>
  
</table>

<br>

<h2>
  <a href='#top'>🔝 Voltar para o topo.</a>
</h2>

<br>

### Feito com 💕 e muita dedicação

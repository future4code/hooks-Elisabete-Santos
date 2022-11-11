<h1 align="center">
    🍱 Projeto Cookenu<p>
</h1>
<br>

## 🧠 Contexto (Requisitos)

<br>

O Cookenu nada mais é do que uma rede social, na qual os usuários podem dividir informações relevantes sobre comidas e receitas que tenham experimentado.

- 📌 Funcionalidades
- 🎯 Requesitos Mínimos
- 📚 Aprendizado
- 🛠️ Tecnologias Utilizadas
- 📦 Pacotes Utilizados
- ⚙️ Como rodar o projeto localmente
- 🔃 Rotas
- ✨ O que funciona
- 👨‍💻 Desenvolvedor(a)

<br>

## 📌 Funcionalidades

<br>

1. **Cadastro**
   Como o projeto está no início, o usuário só precisa informar: o e-mail, nome a sua senha para realizar o cadastro. A senha tem uma regra: ela deve conter, no mínimo, 6 caracteres.
2. **Login**
   Basta informar o email e a senha corretamente que o usuário poderá se logar na aplicação. Os endpoints de login e cadastro devem retornar **um** **token.**
3. **Informações do próprio perfil**
   A partir do token de autenticação fornecido no login, o usuário deve ser capaz de ver as suas informações não sensíveis salvas no banco (id e email)
4. **Criar receitas**
   O usuário deve poder criar uma receita. A receita deve ter os seguintes atributos: título, descrição/modo de preparo e data de criação
5. **Seguir usuário**
   Um usuário deve poder seguir outros usuários. Para isso, ele deve fornecer o id do usuário que deseja seguir. Atente-se que essa funcionalidade se assemelha ao do instagram: um usuário seguir outro, não significa que "esse outro" está seguindo o primeiro.
6. **Feed**
   Um usuário deve poder visualizar as receitas criadas pelos usuários que ele segue. As receitas devem estar ordenadas pela data de criação.

<br>

## 🎯 Requisitos Mínimos

Todos os endpoints, com exceção do Signup e Login, devem exigir autenticação.

<br>

**→ Signup**

**Método:** POST

**Path:** `/signup`

**Entradas:**

Body

```json
{
  "name": "Alice",
  "email": "alice@lbn.com",
  "password": "123456"
}
```

**Saídas**

Body

```json
{
  "access_token": "token de acesso"
}
```

**Observações**:

- O código deve validar se os três campos estão completos (ou seja se não foram enviados ou se não estão vazios) e retornar um erro caso não estejam válidos
- O código deve gerar o id do usuário

<br>

**→ Login**

**Método:** POST

**Path:** `/login`

**Entradas:**

Body

```json
{
  "email": "alice@lbn.com",
  "password": "123456"
}
```

**Saídas**

Body

```json
{
  "access_token": "token de acesso"
}
```

**Observações**:

- O código deve validar se os dois campos estão completos (ou seja se não foram enviados ou se não estão vazios) e retornar um erro caso não estejam válidos.

<br>

**→ Pegar próprio perfil**

**Método:** GET

**Path:** `/user/profile`

**Entradas:**

Headers

```
Authorization: "token de autenticação"
```

**Saídas**

Body

```Json
{
	"id": "id do usuário",
	"name": "Alice",
	"email": "alice@lbn.com"
}
```

<br>

**→ Pegar perfil de outro usuário**

**Método:** GET

**Path:** `/user/:id`

**Entradas:**

Path Param

```
id: "id do usuário"
```

Headers

```
Authorization: "token de autenticação"
```

**Saídas**

Body

```Json
{
	"id": "id do usuário",
	"name": "Bob",
	"email": "bob@lbn.com"
}
```

<br>

**→ Criar receita**

**Método:** POST

**Path:** `/recipe`

**Entradas:**

Headers

```
Authorization: "token de autenticação"
```

Body

```json
{
  "title": "título da receita",
  "description": "descrição da receita"
}
```

**Observações**:

- No banco de dados, devemos guardar a data de criação da receita, mas o usuário não envia. Devemos assumir que a receita foi criada no momento em que o usuário bate nessa requisição

<br>

**→ Pegar receita**

**Método:** GET

**Path:** `/recipe/:id`

**Entradas:**

Path Param

```
id: "id da receita"
```

Headers

```
Authorization: "token de autenticação"
```

**Saídas**

Body

```json
{
  "id": "id da receita",
  "title": "Ovo Frito",
  "description": "Pega o ovo, põe na frigideira e reza!",
  "cratedAt": "31/12/2020"
}
```

<br>

- **DESAFIOS**

**→ Seguir usuário**

**Método:** POST
**Path:** `/user/follow`

**Entradas:**

Headers

```
Authorization: "token de autenticação"
```

Body

```json
{
  "userToFollowId": "id do usuário que se deseja seguir"
}
```

**Saídas**

Body

```json
{
  "message": "Followed successfully"
}
```

**Observações**:

- Deve-se verificar se o id do usuário é válido (se não está vazio ou se não foi enviado)

<br>

**→ Deixar de seguir usuário**

**Método:** POST

**Path:** `/user/unfollow`

**Entradas:**

Headers

```
Authorization: "token de autenticação"
```

Body

```json
{
  "userToUnfollowId": "id do usuário que se deseja deixar de seguir"
}
```

**Saídas**

Body

```json
{
  "message": "Unfollowed successfully"
}
```

**Observações**:

- Deve-se verificar se o id do usuário é válido (se não está vazio ou se não foi enviado)

<br>

**→ Pegar feed de receitas**
Este endpoint deve trazer todas as receitas criadas por pessoas que a pessoa logada (o id que está no token) segue.

**Método:** GET

**Path:** `/user/feed`

**Entradas:**

Headers

```
Authorization: "token de autenticação"
```

**Saídas**

Body

```json
{
  "recipes": [
    {
      "id": "id da receita",
      "title": "título da receita",
      "description": "descrição da receita",
      "createdAt": "31/12/2020",
      "userId": "id do usuário que criou a receita",
      "userName": "nome do usuário que criou a receita"
    }
  ]
}
```

<br>

**→ Criar mais um tipo de usuário**
Agora, devemos adicionar na aplicação um role para representar o tipo de usuário. Fazemos as alterações necessárias no signup, login e geração do token

<br>

**→ Editar receita**

- Um usuário "normal" deve ser capaz de uma receita própria dele.
- Deve retornar um erro se a receita não for dele

<br>

**→ Deletar receita**

- Um usuário "normal" deve ser capaz de uma receita própria dele.
- Deve retornar um erro se a receita não for dele
- Agora, se o usuário que tentar acessar essa receita for um admin, deve permitir que ele delete qualquer post que ele passar

<br>

**→ Deletar conta**

- Um usuário "admin" deve ser capaz de deletar a conta de qualquer usuário
- Deve retornar um erro se o usuário que acessou essa funcionalidade não for um admin
- Quando for deletar o usuário, devemos deletar todas as relações do MySQL com a qual ele esteja envolvido: receita e usuários que segue

<br>

**→ Esqueci a senhas**

- Crie um endpoint que envie um e-mail e altere a senha do usuário

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
- [nodemailer](https://www.npmjs.com/package/nodemailer)
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

## 🔃 Rotas USER:

| Método HTTP | Endpoint                    | Descrição                     |
| ----------- | --------------------------- | ----------------------------- |
| POST        | `/user/signup`              | Cria/cadastra um usuário      |
| POST        | `/user/login`               | Login do usuário              |
| GET         | `/user/profile`             | Pegar próprio perfil post     |
| GET         | `/user/:id`                 | Pegar perfil de outro usuário |
| POST        | `/user/follow`              | Seguir usuário                |
| POST        | `/user/unfollow`            | Deixar de seguir usuário      |
| GET         | `/user/feed`                | Pegar feed de receitas        |
| DELETE      | `/user/delete/:id`          | Deletar conta/usuário         |
| PUT         | `/user/login/resetPassword` | Redefinir a senha             |

<br>

<br>

## 🔃 Rotas RECIPE:

| Método HTTP | Endpoint             | Descrição       |
| ----------- | -------------------- | --------------- |
| POST        | `/recipe`            | Criar receita   |
| GET         | `/recipe/:id`        | Pegar receita   |
| PUT         | `/recipe/edit`       | Editar receita  |
| DELETE      | `/recipe/delete/:id` | Deletar receita |

<br>

## ✨ O que funciona

- Signup
- Login
- Pegar próprio perfil
- Pegar perfil de outro usuário
- Criar receita
- Pegar receita
- Seguir usuários
- Deixar de seguir usuário
- Pegar feed de receitas
- Editar receita
- Deletar receita
- Deletar conta
- Esqueci a senha

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

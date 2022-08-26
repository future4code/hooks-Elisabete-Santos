<h1 align="center">
    <br>
    <p align="center"> 🚀 Projeto LabeBank<p>
</h1>
<br>

## 🧠 Contexto

O objetivo foi criar uma API REST para autores desconhecidos cadastrarem suas obras.

- 💻 Sobre o projeto
- ✨ Funcionalidades
- 🎯 Requesitos Mínimos
- 📚 Aprendizado
- 🛠️ Tecnologias Utilizadas
- 📦 Pacotes Utilizados
- ⚙️ Como rodar o projeto localmente
- 🔃 Rotas
- 👋 Saudações da Eli!

<br>

## 💻 Sobre o projeto

<br>

<p align="justify">Um dos bancos mais famosos do brasil, o LabeBank, está passando por alguns problemas sérios de performance em suas aplicações. Isso significa que as movimentações financeiras que passam pelos seus sistemas estão muito lerdas: que é muito preocupante já que impede a empresa de ter novos usuários e crescer. Tendo isto em mente, o LabeBank decidiu elaborar um concurso para uma POC de um sistema bancário usando Typescript.

<p align="justify">POC é uma sigla que significa "Proof of Concept" ("Prova de Conceito" em tradução livre). É muito comum fazermos uma POC quando queremos apresentar uma nova tecnologia ou arquitetura para uma empresa, com o objetivo de convencê-la a utilizá-las. Uma POC, normalmente, não é muito complexa, mas deve possuir todas as funcionalidades básicas que permitam concluir se o conceito utilizado é válido para resolver o problema ou não.

<p align="justify">Com isso tudo em mente, você deve implementar uma POC com o objetivo de ganhar esta competição. Descrevemos, abaixo, todas as funcionalidades que a LabeBank precisa e logo depois as etapas de desenvolvimento para os requisitos mínimos deste projeto.

<br>

## ✨ Funcionalidades

- **Criar Conta**
  Um cliente pode criar uma conta no banco se tiver idade igual ou maior do que 18 anos. Ele deve informar: **nome**, **CPF** e **data de nascimento**. As contas devem guardar essas informações e uma propriedade para representar o **saldo** do usuário. Além disso devem ser guardados, também, todos os gastos do usuário num array de **extrato** (possuindo o **valor**, a **data** e uma **descrição**). Lembre-se de que todas as contas, ao serem criadas, começam com o saldo zerado. Não podem existir dois usuários diferentes com o mesmo CPF.
- **Pegar Saldo**
  O usuário deve conseguir verificar o saldo da sua conta, passando o seu nome e o seu CPF.
- **Adicionar saldo**
  O usuário deve conseguir adicionar saldo à sua conta, passando seu nome, o CPF e o valor que desejar.
- **Pagar Conta**
  Esta funcionalidade é muito importante para os clientes. Eles podem pagar uma conta, se quiserem, passando: um valor, uma descrição e uma data de pagamento. Caso ele não informe a date, deve-se considerar que o pagamento é para ser feito no mesmo dia. Além disso, devemos nos atentar: ele não pode agendar um pagamento para um dia que já passou ou tentar pagar uma conta cujo valor seja maior do que o seu saldo.
- **Transferência Interna**
  A transferência entre contas é muito mais interessante ao banco do que aos clientes em si, porque, com esta funcionalidade, ela consegue influenciar seus clientes a convencerem conhecidos a migrarem para o banco. Para realizar esta transferência, o usuário deve informar o seu nome, o seu CPF, o nome do destinatário, o CPF do destinatário e o valor em si. Transferências não podem ser agendadas e devem respeitar o saldo do usuário remetente.

<br>

## 🎯 Requisitos Mínimos

O mínimo do projeto consiste nas funcionalidades de: Criar conta, pegar as contas e adicionar uma validação de idade. Para isto, estamos propondo um conjunto de etapas de desenvolvimento.

1. Crie um **tipo** para representar uma conta para o usuário
2. Crie um array global que armazene usuários na aplicação. Caso queira, pode iniciar este array com valores pré-definidos.
3. Crie mais um **tipo**: para representar as **transações** que serão salvas no extrato
4. Dentro da definição do usuário, crie um array que armazene as transações de um cliente.
5. Crie um endpoint que utilize o método `POST` da entidade `users` que será responsável por cadastrar um usuário em um array de usuários. Neste momento, não se preocupe, com as validações descritas nas funcionalidades.
6. Crie um método `GET` na entidade `users` função que será responsável por pegar todos os usuários existentes no array de usuários.
7. Adicione, uma validação no item 1 (Criar conta): o usuário deve possuir mais do que 18 anos para conseguir se cadastrar. Caso não possua, exiba uma mensagem de erro.

<br>

## 📚 Aprendizado

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

## 📦 Pacotes Utilizados

- [Express](https://expressjs.com/pt-br/)
- [cors](https://www.npmjs.com/package/cors)

<br>

## ⚙️ Como rodar o projeto localmente

Siga os passos e inclua as informações abaixo:

| Passo                   | Comando/informação |
| ----------------------- | ------------------ |
| Faça o fork             | `botão de forkar`  |
| Faça o clone            | `git clone`        |
| Instale as dependências | `npm i`            |

E divirta-se :)

<br>

## 🔃 Rotas:

| Método HTTP | Endpoint      | Descrição                             |
| ----------- | ------------- | ------------------------------------- |
| GET         | `/allUsers`   | Retorna todos os usuários             |
| GET         | `/users/:cpf` | Retorna um usuário específico por CPF |
| POST        | `/users`      | Cria/cadastra um novo usuário         |
| PUT         | `/users`      | Altera informações de um usuário      |

<br>

## 📊 Dados criar um usuário

- id: autogerado e obrigatório
- name: texto e obrigatório
- cpf: texto e obrigatório
- birthDate: texto e obrigatório

<br>

## 📊 Dados criar um alterar uma conta

- name: texto e obrigatório
- cpf: texto e obrigatório
- value: número e obrigatório
- date: texto e obrigatório

<br>

## 👋 Saudações da Eli!

_Caso queira contribuir com meu projeto, será totalmente bem-vindx!!!_
_Qualquer dúvida ou sugestão, chama no contatinho!_

 <img src="https://i.picasion.com/pic91/8dd880c47cfc761e805745c941097adb.gif" alt="Gif Yeah" width="200">

### Vamos nos conectar!

<a href="https://www.linkedin.com/in/elisabete-a-santos/"> <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" /></a>
<a href="https://github.com/elisabetealves"><img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white"/></a>

### Feito com 💜 por Elisabete Alves

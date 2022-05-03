<h1 align="center">
    <br>
    <p align="center" style="font-weight: bold;">🚀 Projeto WhatsLab</p>
</h1>

<br>

<p align="justify"> O projeto hoje está tentando fazer uma utopia (: criar um aplicativo de troca de mensagens para bater de frente com os gigantes que existem atualmente, tais como WhatsApp, Telegram, Messenger e muitos outros. </p>

<br>

<p align="justify">⚠️Um projeto tão grande como este, normalmente, começa com a elaboração de um MVP. MVP significa "Minimum Valiable Product", em tradução livre, "mínimo produto viável". Isto significa que começaremos implementando as features (funcionalidades) que indiquem o objetivo principal do produto do nosso cliente. Desta forma, não há a necessidade de se desenvolver um sistema que envie e receba mensagens de fora - criaremos algo que simplesmente mostra novas mensagens.</p>

<br>

<h1>
    <br>
    <p style="font-weight: bold;">🧠 Contexto</p>
</h1>

O objetivo foi criar um aplicativo para mostar novas mensagens.

- Layout Mobile e Desktop
- Link do projeto do Surge
- Tecnologias Utilizadas
- Requisitos
- O que esta funcionando
- O que não está funcionando
- Saudações da Eli!

<br>

<h1>
    <br>
    <p style="font-weight: bold;">🎨 Layout</p>
</h1>

## Mobile

<p align="center">
     <img src="././imgProjeto/mobile01.png"  width="200px">
     <img src="././imgProjeto/mobile02.png" width="200px">
    
</p>

---

## Web

<p align="center" style="display: flex; align-items: flex-start; justify-content: center;">
     <img src="././imgProjeto/desk01.png" width="400px">
     <img src="././imgProjeto/desk02.png" width="400px">
</p>
<p align="center" style="display: flex; align-items: flex-start; justify-content: center;">
     <img src="././imgProjeto/desk03.png" width="400px">
     <img src="././imgProjeto/desk04.png" width="400px">
</p>
---

<h1>
    <br>
    <p style="font-weight: bold;">🔗 Link do projeto no Surge</p>
</h1>

https://cowardly-wing.surge.sh/

<br>

<h1>
    <br>
    <p style=" font-weight: bold;">🛠️ Tecnologias Utilizadas</p>
</h1>

 <div style="display: inline_block"><br>
 
  <img align="center" alt="React" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg">
  <img align="center" alt="HTML" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg">
  <img align="center" alt="CSS" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg">
  <img align="center" alt="Git" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg">
 
</div>

<br>

<h1>
    <br>
    <p style="font-weight: bold;">⚙️ Requisitos</p>
</h1>

O escopo deste _MVP é:_

1. **Lista de mensagem:**

   - Cada mensagem deve possuir um remetente (ou seja, um usuário que enviou) e o conteúdo em si.
   - No layout, eles devem ficar assim:

     - nome do remetente: conteúdo

2. **Envio de mensagem:**
   - Abaixo da lista citada, deve existir um local onde o usuário escolhe o nome do remetente (input) ; o conteúdo da mensagem (input) e um botão de enviar;
   - No layout, eles devem ficar um ao lado do outro. Sendo o campo do remetente com largura muito menor do que o campo do conteúdo;
   - Ao enviar a mensagem, os campos devem ser resetados para ficar em branco novamente

- 🏅 **Desafios**

      1. Faça com que tanto o botão de enviar, como o botão "enter" envie as mensagens
      2. Implemente a funcionalidade de deletar mensagem. Sempre que o usuário clicar duas vezes em cima de uma mensagem ela deve ser apagada.
          - 💡  Dica
              - Crie um próprio componente para mostrar a mensagem e o botão de deletar

      3. Agora, vamos melhorar o design do nosso projeto. Queremos deixar mais evidente qual usuário está mandando a mensagem. Para isso, pensamos em mudar um pouco a disposição das mensagens. Sempre que o nome do usuário for "eu", a mensagem deve aparecer à direita e sem mostrar o nome dele; se for outro nome, deve aparecer à esquerda, e deve mostrar o nome do remetente. (Obs.: é uma funcionalidade bem parecida com os grupos do Whatsapp). Tentem seguir o layout do exemplo como guia.

  <br>

<h1>
    <br>
    <p style="font-weight: bold;">✔️ O que funciona</p>
</h1>

- Enviar com enter
- Bolhas estilizadas
- Excluir mensagem com botão
- Excluir mensagem com clique duplo
- Bloqueio para envio de mensagem vazia ou anônima
- Feedback de "usuário está digitando"
- Persistência do ultimo nome
- Conversação: bolhas diferentes para quando o usuário for diferente de "Eu"
- Bolha contém o horário de envio da mensagem
- Responsividade

<h1>
    <br>
    <p style="font-weight: bold;">	❌ O que não funciona</p>
</h1>

- Sem bugs conhecidos

<h1>
    <br>
    <p style="font-weight: bold;">👋 Saudações, Eli!</p>
</h1>

_Qualquer dúvida ou sugestão, chama no contatinho!_ [LinkedIn](https://www.linkedin.com/in/elisabete-a-santos/)

 <img  style="border-radius: 10%;" src="https://i.picasion.com/pic91/8dd880c47cfc761e805745c941097adb.gif" alt="Gif Yeah" width="200">

<br>

### Feito com 💕 e muita dedicação

<h1>
    <br>
    <p style="font-weight: bold;s">📝 Licença</p>
</h1>

Este projeto esta sob a licença [MIT](./LICENSE).

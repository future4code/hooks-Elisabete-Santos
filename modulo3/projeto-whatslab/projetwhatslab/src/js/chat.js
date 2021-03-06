
var history = [];

function handleChat(name, message, key) {
  let date = new Date()
  let hour = date.getHours()
  let minute = date.getMinutes()

  history.push({
    nick: name,
    text: message,
    listKey: Number(key),
    time: `${hour}:${minute}`,
  });
}

function deletMessage(clue) {
  let answ = window.confirm("Apagar Mensagem?");
  answ && (document.getElementById(history[clue].listKey).style.display = "none")
}


export { handleChat, deletMessage, history };

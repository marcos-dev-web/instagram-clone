const renderMessages = (user_name) => {

  function renderize(msg) {
    let view = document.querySelector('.messages-send');
    let div = document.createElement("div");
    let p = document.createElement("p");
    p.innerText = msg;
    div.classList.add("msg-send");
    div.classList.add("i");
    div.appendChild(p);

    input.value = "";
    view.appendChild(div);
    let heightScroll = view.scrollHeight;
    view.scroll(0, heightScroll);
  }

  function renderMessage(message) {
    for (let msg of message) {
      renderize(msg)
    }
  }

  if (messages_saved[user_name]) {
    console.log(messages_saved[user_name])
    renderMessage(messages_saved[user_name]);
  }
}

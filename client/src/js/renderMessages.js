const renderMessages = (user_name) => {
  
  function renderMessage(message) {
    let view = document.querySelector('.messages-send');
    let div = document.createElement("div");
    let p = document.createElement("p");
    p.innerText = message;
    div.classList.add("msg-send");
    div.classList.add("i");
    div.appendChild(p);
  
    input.value = "";
    view.appendChild(div);
    let heightScroll = view.scrollHeight;
    view.scroll(0, heightScroll);
  }

  function render(user_name) {
    messages_saved[user_name].forEach((message) => {
      renderMessage(message)
    })
  }
  
  if (messages_saved[user_name] ) {
    render(user_name);
  }
}

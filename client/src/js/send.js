let input = document.querySelector(".msg");

let buttonSend = document.querySelector(".fa-paper-plane");

let view = document.querySelector(".messages-send");

const sendMessages = () => {
  buttonSend.addEventListener("click", () => {
    if (input.value.length >= 1) {
      let div = document.createElement("div");
      let p = document.createElement("p");
      p.innerText = input.value;
      div.classList.add("msg-send");
      div.classList.add("i");
      div.appendChild(p);
  
      save_conversasions();
      
      input.value = "";
      view.appendChild(div);
      let heightScroll = view.scrollHeight;
      view.scroll(0, heightScroll);
    } 
  });
  
  //send message by enter in the keyboard
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && input.value.length >= 1) {
      let div = document.createElement("div");
      let p = document.createElement("p");
      p.innerText = input.value;
      div.classList.add("msg-send");
      div.classList.add("i");
      div.appendChild(p);
  
      save_conversasions();
      
      input.value = "";
      view.appendChild(div);
      let heightScroll = view.scrollHeight;
      view.scroll(0, heightScroll);
    }
  });

}

setInterval(() => {
  if (actualUser) {
    sendMessages();
  }
}, 200)

let input = document.querySelector(".msg");

let buttonSend = document.querySelector(".fa-paper-plane");

let view = document.querySelector(".messages-send");

buttonSend.addEventListener("click", () => {
  let div = document.createElement("div");
  let p = document.createElement("p");
  p.innerText = input.value;
  div.classList.add("msg-send");
  div.classList.add("i");
  div.appendChild(p);

  input.value = "";
  view.appendChild(div);
  let heightScroll = view.scrollHeight;
  view.scroll(0, heightScroll);
});

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && input.value.length >= 1) {
    let div = document.createElement("div");
    let p = document.createElement("p");
    p.innerText = input.value;
    div.classList.add("msg-send");
    div.classList.add("i");
    div.appendChild(p);

    input.value = "";
    view.appendChild(div);
    let heightScroll = view.scrollHeight;
    view.scroll(0, heightScroll);
  }
});

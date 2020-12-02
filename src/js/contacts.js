const menu = document.getElementsByClassName("fa-address-book")[0];

let hide;

menu.addEventListener("click", () => {
  if (typeof hide === "undefined") {
    hide = true ? window.innerWidth > 550 || hide : false;
  }

  const contacts = document.querySelector(".contacts");
  const container_body = document.querySelector(".container-body");
  const messages = document.querySelector(".messages");
  const messages_all = document.querySelector(".all-messages");
  const messages_send = document.querySelector(".messages-send");

  if (hide) {
    contacts.style.display = "none";
    container_body.style.display = "flex";
    container_body.style.position = "relative";
    messages.style.width = "100%";
    messages_all.style.position = "relative";
    messages_send.style.position = "relative";
    hide = false;
  } else {
    contacts.style.display = "flex";
    container_body.style.display = "grid";
    container_body.style.position = "relative";
    messages.style.width = "100%";
    messages_all.style.position = "relative";
    messages_send.style.position = "relative";
    hide = true;
  }
});

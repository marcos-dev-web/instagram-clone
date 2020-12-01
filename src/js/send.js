let input = document.querySelector('.msg');

let view = document.querySelector('.messages-send');

input.addEventListener('keydown', (e) => {
  if (e.key === "Enter" && input.value.length >= 1) {
    let div = document.createElement('div')
    let p = document.createElement('p')
    p.innerText = input.value
    div.classList.add('msg-send')
    div.classList.add('i')
    div.appendChild(p)
    
    view.appendChild(div)
  }
})
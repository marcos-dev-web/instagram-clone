var messages_saved = {};


let elements = {}

const save_conversasions = () => {
  elements = {
    input: document.querySelector('input.msg'),
    name_user: actualUser
  }
  save()
}

function trat(phrase) {
  return phrase.replaceAll(" ", "_")
}

var save = async (name=null,msg=null) => {
  console.log('saving messages')
  let name_user = name ? (name) : trat(elements.name_user);
  let message = msg ? (msg) : elements.input.value;

  if (messages_saved[name_user]) {
    messages_saved[name_user] = [
      ...messages_saved[name_user],
      message
    ]
  } else {
    messages_saved[name_user] = [
      message
    ]
  }

  fetch('http://localhost:3000/save_message', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(messages_saved)
  }).then(() => console.log("saved"))
  .catch((err) => console.error("ERROR FETCH", err))
}




var messages_saved = {};

function trat(phrase) {
  return phrase.replaceAll(" ", "_")
}
const save_conversasions = () => {

  let elements = {
    input: document.querySelector('input.msg'),
    name_user: actualUser
  }  

  function save() {
    let name_user = trat(elements.name_user);
    let message = elements.input.value;
    
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
  }

  save()
}


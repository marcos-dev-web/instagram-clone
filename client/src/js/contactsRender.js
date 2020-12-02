var actualUser = ''

const selectUser = (user) => {
  let userview = document.querySelector('.user')
  let viewmessages = document.querySelector('.messages-send')

  let profile = document.createElement('div')
  profile.classList.add('profile')
  let photo = document.createElement('img')
  photo.classList.add('profile-small')
  photo.src = user.photo_user;
  profile.appendChild(photo)

  let p = document.createElement('p')
  p.innerText = user.name;


  if (user.state) {
    let span_1 = document.createElement('span')
    span_1.classList.add('ball-small')

    let span_2 = document.createElement('span')
    span_2.classList.add('state')
    span_2.innerText = 'Active now';
    
    profile.appendChild(span_1)

    p.innerHTML += "<br/>"
    p.appendChild(span_2)

  }

  userview.innerHTML = ''
  userview.appendChild(profile)
  userview.appendChild(p)
  if (actualUser != user.name) {
    viewmessages.innerHTML = ''
    actualUser = user.name
  }
}



const rederUsers = (users) => {
  const viewContact = document.querySelector('.list');
  users.map(user => {
    let contact = document.createElement('div');
    let user_profile = document.createElement('div');
    let profile = document.createElement('div');
    let img = document.createElement('img');
    let span_1 = document.createElement('span');
    let p = document.createElement('p');
    

    contact.classList.add('contact');
    user_profile.classList.add('user-profile')
    profile.classList.add('profile')
    img.classList.add('photo');

    img.src = user.photo_user;

    profile.appendChild(img)
  
    p.innerText = user.name
    if (user.state === true) {
      let state = document.createElement('span');
      state.innerText = 'Active now'
      state.classList.add('state')

      span_1.classList.add('ball-big')
      profile.appendChild(span_1)
      p.innerHTML += '<br/>'
      p.appendChild(state)
    }

    user_profile.appendChild(profile)
    user_profile.appendChild(p)
    contact.appendChild(user_profile)

    viewContact.appendChild(contact)
    contact.addEventListener('click', (e) => {
      e.preventDefault();
      if (!actualUser) {
        actualUser = user.name
      }
      console.log(user.name)
      selectUser(user)
    })
  })
}

fetch("http://localhost:3010/users", {
  method: "POST",
  cache: "no-cache",
  credentials: "same-origin",
})
  .then((res) => res.json())
  .then((res) => {
    rederUsers(res)
  })
  .catch((err) => {
    console.error('catch FETCH', err);
  });

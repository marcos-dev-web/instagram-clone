fetch('http://localhost:3000/messagesGet', {
	method: 'POST',
	header: 'application/json'
}).then((res) => {
	return res.json()
}).then((res) => {
	messages_saved = res; //variable global
}).catch((err) => {
	console.error(err)
})


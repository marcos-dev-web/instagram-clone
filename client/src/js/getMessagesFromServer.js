fetch('http://localhost:3000/messagesGet', {
	method: 'POST',
	header: 'application/json'
}).then((res) => {
	return res.json()
}).then((res) => {
	if (res.messages[0]) {
		let response = res.messages
		for (let value of response) {
			let array = JSON.parse(value.messages)
			for (let name in array) {
				if (messages_saved[name]) {
					console.log('saved already exist')
			    messages_saved[name] = [
			      ...messages_saved[name],
			      array[name]
			    ]
			  } else {
			  	console.log('saved not exist')
			  	messages_saved[name] = [
						array[name]
					]
				}
			}
		}
	}
}).catch((err) => {
	console.error(err)
})


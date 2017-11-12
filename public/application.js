const socket = io()
const chatInput = document.querySelector(".chat-form input[type=text]")

chatInput.addEventListener('keypress', e => {
	if(e.keyCode !== 13) { return }

	const text = e.target.value.trim()
	e.preventDefault()

	if(text.length === 0) { return }

	socket.emit('chat:add', {
		message: text
	})

	e.target.value = ''
})

const chatList = document.querySelector('.chat-list ul')

socket.on('chat:added', data => {
	const messageElement = document.createElement('li')
	messageElement.innerText = data.message
	chatList.appendChild(messageElement)
	chatList.scrollTop = chatList.scrollHeight
})

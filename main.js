const express = require('express')
const app = express()
const http = require('http').createServer(app)
const io = require('socket.io')(http)

app.use(express.static('../portpolio'))
app.get('/', (req, res) => {
	res.sendFile(__dirname + '/index.html')
})

let people_lists = []
io.on('connection', socket => {
	let my_name

	socket.on('join', name => {
		my_name = name
		people_lists.push(name)
		io.emit('join', my_name, people_lists)
	})
	socket.on('chat messages', msg => {
		io.emit('chat messages', msg)
	})
	socket.on('disconnect', () => {
		people_lists.splice(people_lists.indexOf(my_name),1)
		io.emit('leave', my_name)
		console.log('disconnect')
	})

})

http.listen(3000, () => {
	console.log('Connected 80 port')
})


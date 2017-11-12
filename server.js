const http = require('http'),
    express = require('express'),
    socketIo = require('socket.io')

const router = require('./routes/router.js')
const app = express()
const port = process.env.PORT || 3000

app.set('view engine', 'pug');
app.set('views', __dirname + '/views');

const server = new http.Server(app)
const io = socketIo(server)

io.on('connection', socket => {
    console.log('Client is connected');
})

app.use(express.static('./public'))
app.use(router)

server.listen(port, () => {
    console.log(`Listening on port ${ port }`);
})
const http = require('http'),
    express = require('express')

const app = express()
const server = new http.Server(app)
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.send('hi')
})


server.listen(port, () => {
    console.log(`Listening on port ${port}`);
})
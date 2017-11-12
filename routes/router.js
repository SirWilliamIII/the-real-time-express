const express = require('express'),
    router = express.Router()

router.get('/', (req, res) => {
    res.send('Hi, my name is')
})

router.get('/home', (req, res) => {
    res.render('index', { title: 'The Real Time Express' })
})


module.exports = router
const express = require('express')
const ejs = require('ejs')
const app = express()

app.use(express.static(__dirname + '/public'))
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/contact', (req, res) => {
    res.render('contact.ejs')
})

app.get('/description', (req, res) => {
    res.render('description.ejs')
})

app.listen(8888)
console.log('Server listening on port 8888')
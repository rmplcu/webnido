const express = require('express')
const ejs = require('ejs')
const path = require('path')
const favicon = require('serve-favicon')

const app = express()

app.use(express.static(__dirname + '/public'))
app.use('/build/', express.static(path.join(__dirname, 'node_modules/three/build')));
app.use('/jsm/', express.static(path.join(__dirname, 'node_modules/three/examples/jsm')));
app.use(favicon(__dirname + '/public/img/favicon.ico'))

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/contact', (req, res) => {
    res.render('contact.ejs')
})

app.get('/3dview', (req, res) => {
    res.render('3d.ejs')
})

app.get('/description', (req, res) => {
    res.render('description.ejs')
})

app.listen()
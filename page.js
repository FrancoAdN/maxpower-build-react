const express = require('express')
const path = require('path')
const PORT = 3010

const app = express()

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
})
app.get('/productos-electricos', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
})
app.get('/productos-electronicos', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
})
app.get('/productos-industriales', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
})

app.get('/*', (req, res) => {
    res.redirect('/')
});

app.listen(PORT, () => console.log('Server running. Port: ' + PORT));
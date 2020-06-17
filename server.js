const express = require('express')
const PORT = 4000

const app = express()

app.use(express.static(path.join(__dirname, 'build')));


app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => console.log('Server running. Port: ' + PORT));
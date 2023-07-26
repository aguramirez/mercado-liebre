const path = require('path')
const express = require('express');
const app = express();

app.use(express.static('public'));

// app.listen(3030, () => console.log('Servidor abierto'));

const port = process.env.PORT || 3030;
app.listen(port, () => console.log(`Servidor corriendo en el puerto ${port}`));

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/index.html"))
});

app.get('/register', (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/register.html"))
});

app.get('/login', (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/login.html"))
});
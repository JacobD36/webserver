const express = require('express');
const app = express();
const hbs = require('hbs');
require('dotenv').config();

const port = process.env.PORT;

// Handlerbars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

// Servir contenido estático
app.use(express.static('public'));

// Con el servidor estático, esta ruta queda sin efecto
app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Jaime',
        titulo: 'Curso de Node'
    });
});

app.get('/generic', (req, res) => {
    res.render('generic', {
        nombre: 'Jaime',
        titulo: 'Curso de Node'
    });
});

app.get('/elements', (req, res) => {
    res.render('elements', {
        nombre: 'Jaime',
        titulo: 'Curso de Node'
    });
});

app.get('*', (req, res) => {
    res.sendFile('public/404.html', { root: __dirname });
});
  
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})